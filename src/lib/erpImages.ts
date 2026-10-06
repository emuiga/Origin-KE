import fs from "fs";
import path from "path";

// Returns the image path only if the file has been added to public/, so pages can
// name an illustration before it is uploaded without showing a broken image.
export function existingImage(image?: string) {
  if (!image) return undefined;
  return fs.existsSync(path.join(process.cwd(), "public", image)) ? image : undefined;
}
