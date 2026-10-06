#!/usr/bin/env python3
"""Prepare ERP page illustrations.

Takes the PNG illustrations from a source folder, recolours their accent colour
(blue, purple, green or red, detected per file) to the site's teal, resizes them to 1200px and writes them to public/erp/ as .webp.

    python3 scripts/erp-images.py                 # every *.png in ../images not yet converted
    python3 scripts/erp-images.py hospital-*.png  # specific files (re-converts them)

Requires Pillow (pip install pillow).
"""
import glob
import os
import sys

from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE = os.path.join(ROOT, "..", "images")
OUT = os.path.join(ROOT, "public", "erp")

# Hues are on Pillow's 0-255 scale. The site teal sits at about 124.
TEAL = 124
# Dark navy outlines and blue fills (about 141 and 157): always shifted towards teal
BLUE_MIN, BLUE_MAX, BLUE_SHIFT = 135, 185, -33
# Other accent colours an illustration may use instead of blue: (min hue, max hue, centre)
ACCENTS = {"purple": (190, 220, 206), "green": (85, 115, 97), "red": (0, 9, 5)}


def detect_accent(im, alpha):
    """Returns the name of the dominant non-blue accent, or None if the illustration is blue."""
    small = im.copy()
    small.thumbnail((300, 300))
    h, s, _ = small.convert("RGB").convert("HSV").split()
    a = small.split()[3]
    counts = {name: 0 for name in ACCENTS}
    blue = 0
    for hue, sat, al in zip(h.getdata(), s.getdata(), a.getdata()):
        if sat <= 60 or al <= 128:
            continue
        if 150 <= hue <= BLUE_MAX:
            blue += 1
        for name, (lo, hi, _) in ACCENTS.items():
            if lo <= hue <= hi:
                counts[name] += 1
    name = max(counts, key=counts.get)
    return name if counts[name] > blue else None


def recolour(src, dst):
    im = Image.open(src).convert("RGBA")
    im.thumbnail((1200, 1200), Image.LANCZOS)
    alpha = im.split()[3]
    accent = detect_accent(im, alpha)
    lo, hi, centre = ACCENTS[accent] if accent else (BLUE_MIN, BLUE_MAX, 0)

    def is_accent(x):
        return BLUE_MIN <= x <= BLUE_MAX or lo <= x <= hi

    def shift(x):
        if BLUE_MIN <= x <= BLUE_MAX:
            return x + BLUE_SHIFT
        if accent and lo <= x <= hi:
            return x - centre + TEAL
        return x

    h, s, v = im.convert("RGB").convert("HSV").split()
    mask = h.point(lambda x: 255 if is_accent(x) else 0)
    h = h.point(shift)
    s = Image.composite(s.point(lambda x: min(255, int(x * 1.15))), s, mask)
    # Darken saturated areas so they land near teal-500/600 rather than a bright aqua
    darken = ImageChops.multiply(ImageChops.multiply(v, s).point(lambda x: int(x * 0.42)), mask)
    out = Image.merge("HSV", (h, s, ImageChops.subtract(v, darken))).convert("RGB")
    out.putalpha(alpha)
    out.save(dst, quality=88, method=4)
    return accent or "blue"


def main():
    os.makedirs(OUT, exist_ok=True)
    explicit = sys.argv[1:]
    if explicit:
        sources = [p if os.path.exists(p) else os.path.join(SOURCE, p) for p in explicit]
    else:
        sources = sorted(glob.glob(os.path.join(SOURCE, "*.png")))
    for src in sources:
        name = os.path.splitext(os.path.basename(src))[0]
        dst = os.path.join(OUT, name + ".webp")
        if not explicit and os.path.exists(dst):
            continue
        accent = recolour(src, dst)
        print("wrote", os.path.relpath(dst, ROOT), f"(from {accent})")


if __name__ == "__main__":
    main()
