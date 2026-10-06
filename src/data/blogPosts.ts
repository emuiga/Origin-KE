export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface LocalBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  // ISO date
  date: string;
  // Card image, from public/
  image: string;
  // Search phrases the post is written to answer
  keywords?: string[];
  content: BlogBlock[];
}

// Turns plain text into blocks: "## " starts a heading, "- " a list item, "> " a quote,
// and a blank line separates paragraphs. Links are written [text](/path) and rendered by the page.
export function md(text: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  for (const chunk of text.trim().split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.length === 0) continue;
    if (lines.every((line) => line.startsWith("- "))) {
      blocks.push({ type: "ul", items: lines.map((line) => line.slice(2)) });
    } else if (lines[0].startsWith("## ")) {
      blocks.push({ type: "h2", text: lines[0].slice(3) });
    } else if (lines[0].startsWith("> ")) {
      blocks.push({ type: "quote", text: lines.join(" ").slice(2) });
    } else {
      blocks.push({ type: "p", text: lines.join(" ") });
    }
  }
  return blocks;
}

// Posts kept in the codebase. Posts published in Contentful are listed alongside these.
export const localBlogPosts: LocalBlogPost[] = [
  {
    slug: "your-business-does-not-need-an-app",
    title: "Your Business Does Not Need an App. It Needs a System.",
    excerpt:
      "Most requests we get start with \"we need an app\". Most of the time the real problem is somewhere else, and an app alone will not fix it.",
    author: "Origin",
    date: "2026-06-30",
    image: "/app.webp",
    keywords: ["mobile app development Kenya", "business systems", "do I need an app for my business"],
    content: [
      { type: "p", text: "Most conversations we have with a new client start the same way. \"We need an app.\"" },
      { type: "p", text: "Sometimes that is true. More often, when we ask what the app should do, the answer describes something else entirely: orders that get lost between the shop and the store, a manager who cannot tell what was sold yesterday, customers who pay by M-Pesa and then have to send a screenshot to prove it." },
      { type: "p", text: "Those are not app problems. They are system problems." },
      { type: "h2", text: "The difference" },
      { type: "p", text: "An app is something people open. A system is how work moves through your business: who records what, where it goes next, and who can see it." },
      { type: "p", text: "You can have a beautiful app sitting on top of a broken system. The customer places an order on their phone, and behind the scenes somebody still copies it into a notebook. The app did not remove the work. It added a step." },
      { type: "h2", text: "Your customers already have an app" },
      { type: "p", text: "It is called WhatsApp. They also have M-Pesa, and they are very good at both." },
      { type: "p", text: "Asking someone to download something new, create an account and remember a password is a real cost to them. Phone storage is limited. Data bundles are not free. If what you are offering is not clearly better than sending a message and paying a till number, they will not switch, and they will be right." },
      { type: "p", text: "So before building anything for customers, we ask what can be fixed on your side, where nobody has to download a thing." },
      { type: "h2", text: "What to fix first" },
      { type: "ul", items: [
        "One place where every sale, payment and stock movement is recorded, once.",
        "Payments that are matched to the customer automatically, so nobody is forwarding screenshots.",
        "Reports the owner can open on any day without asking someone to prepare them.",
        "Clear roles, so each person sees and does what their job requires.",
      ] },
      { type: "p", text: "Get these right and the business runs better on the first day, even though your customers notice nothing new except that things are faster and mistakes are fewer." },
      { type: "h2", text: "When an app is the right answer" },
      { type: "p", text: "There are good reasons to build one. Your staff work in the field and need to capture information where there is no desk. Your customers come back often enough that a home-screen icon saves them time. You need the camera, the location or offline use." },
      { type: "p", text: "In each case the app is the front door to a system that already works. That is the order that lasts: the system first, then the door." },
      ...md(`
## A quick way to tell which problem you have

Before you brief anyone, spend a day watching how work actually moves through your business. Then answer these honestly.

- When a customer orders, how many people have to touch that order before it is fulfilled?
- How many times is the same information written down?
- If the person who "knows how things work" were away for two weeks, what would stop?
- How long does it take you to find out what was sold yesterday?
- When a customer pays by M-Pesa, how does that payment reach your records?

If most of your answers describe copying, chasing and waiting, the problem is inside the business and an app for customers will not touch it. That is the point where [a system built around how you work](/erp) pays for itself.

If your answers are tidy and the difficulty really is that customers cannot reach you easily, then an app or a better website may be exactly right. We wrote about weighing that kind of decision in [Custom Software or Off-the-Shelf?](/blog/custom-software-or-off-the-shelf)

## What this looks like in practice

We saw this play out with [a board game shop in Nakuru](/blog/how-we-digitised-a-board-game-shop-in-nakuru). The owner asked for a website. What the shop needed first was to know its own stock. Once that was in place, the customer-facing part was simple to add, and it has stayed accurate ever since because it draws on records the shop already trusts.
`),
      { type: "quote", text: "If the work behind the screen is still done by hand, the screen is decoration." },
      { type: "p", text: "The next time someone says \"we need an app\", try asking a different question: what is the work we wish we did not have to do twice? Start there." },
    ],
  },
  {
    slug: "the-spreadsheet-that-runs-your-company",
    title: "The Spreadsheet That Runs Your Company",
    excerpt:
      "Every growing business has one: a spreadsheet only one person understands. Here is how to tell when it has stopped helping and started holding you back.",
    author: "Origin",
    date: "2026-05-07",
    image: "/data.webp",
    keywords: ["moving from Excel to a system", "business management software Kenya", "ERP for small business"],
    content: [
      { type: "p", text: "Every growing business has one. It lives on somebody's laptop. It has seventeen tabs, a few cells highlighted in yellow that nobody dares touch, and a name like \"FINAL stock v3 (use this one)\"." },
      { type: "p", text: "It runs the company. And only one person really understands it." },
      { type: "p", text: "We have nothing against spreadsheets. They are the best tool there is for working something out quickly. A business that starts on a spreadsheet is being sensible. The trouble starts when the business outgrows it and nobody notices." },
      { type: "h2", text: "Five signs you have outgrown it" },
      { type: "ul", items: [
        "The file is emailed around, and people argue about which copy is the latest.",
        "The same figure is typed in more than once: into the receipt book, then the sheet, then the accountant's sheet.",
        "When the person who built it is on leave, certain questions simply wait for them.",
        "You find out about a stock-out or an unpaid invoice from a customer, not from your records.",
        "Month end takes days, most of it spent checking one list against another.",
      ] },
      { type: "p", text: "One of these is an annoyance. Three of them together are costing you money, even if it does not appear on any report. In fact it does not appear precisely because the reports are the problem." },
      { type: "h2", text: "What a system does differently" },
      { type: "p", text: "A spreadsheet stores what someone remembered to type. A system records things as they happen." },
      { type: "p", text: "When a sale is made, stock goes down. When an M-Pesa payment arrives, it lands on the right customer's account. When a delivery comes in, what you owe the supplier goes up. Nobody copies anything, so there is nothing to forget and nothing to reconcile later." },
      { type: "p", text: "It also remembers who did what. That is not about mistrust. It is what lets you hand work to more people as you grow, without the owner checking every entry." },
      { type: "h2", text: "You do not have to change everything at once" },
      { type: "p", text: "The fear we hear most is that moving to a system means stopping the business for a month. It should not." },
      { type: "p", text: "Start with the part that hurts most. For a shop that is usually stock and sales. For a school it is fees. For a landlord it is rent collection. Move that one thing, bring the existing records across, let the team get comfortable, then take the next."} ,
      { type: "p", text: "A good system should also be shaped around how you already work. If your business has to bend to fit the software, you have swapped one problem for another." },
      ...md(`
## What it costs to stay

It is easy to see the cost of a new system, because someone sends you a quote. The cost of staying on the spreadsheet never arrives as an invoice, so it is easy to ignore.

- Hours. Count the time your team spends each week entering the same figures twice and checking one list against another.
- Mistakes. A wrong formula or a row sorted out of place can go unnoticed for months.
- Slow decisions. If it takes days to learn how last month went, you are always steering by old information.
- Risk. A single file on a single laptop is one spilled cup of tea away from being gone.
- Dependence. When only one person understands the sheet, the business cannot grow past what that person can handle.

There is a newer cost as well. Businesses in Kenya are now expected to issue electronic tax invoices, which is hard to do from a spreadsheet and easy from a system that records each sale as it happens. We covered that in [eTIMS Is Here for Every Business](/blog/etims-is-here-for-every-business).

## Where to go from here

If you are not sure what would replace your spreadsheet, start with our plain guide, [What Is an ERP System?](/blog/what-is-an-erp-system) It explains the idea without the jargon. And if you would like to see what a system looks like for your kind of business, have a look at [the ones we build](/erp).
`),
      { type: "quote", text: "The goal is not to get rid of the spreadsheet. It is to stop the business depending on one." },
      { type: "p", text: "Keep the spreadsheet for what it is good at: thinking, planning, trying out ideas. Let the daily running of the company live somewhere it cannot be accidentally sorted by the wrong column." },
    ],
  },
  {
    slug: "ai-you-can-trust-shows-its-work",
    title: "AI You Can Trust Shows Its Work",
    excerpt:
      "An AI answer that sounds confident is not the same as one that is right. What we have learned building AI tools for work where mistakes are expensive.",
    author: "Origin",
    date: "2026-08-20",
    image: "/AI.webp",
    keywords: ["trustworthy AI", "AI for business Kenya", "human in the loop AI", "AI with citations"],
    content: [
      { type: "p", text: "Ask an AI model a question and it will give you an answer. It will be well written. It will sound certain. And you will have no idea whether it is true." },
      { type: "p", text: "For a birthday message, that hardly matters. For a policy brief, a patient record or a decision about a pipeline, it matters a great deal." },
      { type: "p", text: "We have built AI tools for exactly that kind of work. E4CInsights turns years of sustainable development research into policy briefs. PipelineGPT lets engineers put questions to their own inspection and incident records. The same lesson came out of both: in serious work, an answer is only as good as your ability to check it." },
      { type: "h2", text: "Fluent is not the same as correct" },
      { type: "p", text: "These models are trained to produce language that reads well. That is a different skill from being right, and from the outside the two look the same." },
      { type: "p", text: "The danger is not that the model is often wrong. It is that when it is wrong, it is wrong in the same calm, confident voice it uses when it is right." },
      { type: "h2", text: "Three rules we build by" },
      { type: "ul", items: [
        "Every claim points to its source. An answer comes with the document, section and page it was drawn from, so the reader can check it in a minute.",
        "The AI answers from your documents, not from memory. If the material does not contain the answer, the right response is to say so.",
        "A person signs off where it counts. Anything that could lead to an operational decision is held for a qualified reviewer before anyone acts on it.",
      ] },
      { type: "p", text: "None of this is exotic. It is how any careful organisation already treats a junior analyst's work: show your sources, stick to the evidence, and have someone senior review it before it goes out." },
      { type: "h2", text: "Why the human stays" },
      { type: "p", text: "Human review is sometimes described as a temporary measure, something to remove once the models improve. We see it the other way round. It is what makes the tool usable in the first place." },
      { type: "p", text: "An engineer will not act on a recommendation they cannot trace. A regulator will not accept \"the system said so\". Keeping a person in the loop, and keeping a record of what they decided, is what allows an organisation to adopt AI without lowering its standards." },
      ...md(`
## What this looks like in a real product

Principles are easy to state, so here is how they show up in something we built.

In PipelineGPT, an engineer types a question in ordinary language. The system searches the operator's own inspection reports and incident records, and the answer comes back with a reference for each claim: which document, which section and, for a PDF, which page.

If the answer contains something that could lead to action in the field, such as a repair or a pressure reduction, it is not shown to the operator straight away. It goes to a qualified engineer, who can approve it, correct it or reject it. Every one of those decisions is logged.

The documents themselves stay on the operator's own servers. You can read more in [the PipelineGPT case study](/case-studies/pipelinegpt), and about the same approach applied to policy research in [the E4C case study](/case-studies/e4c).

## Where AI helps most

None of this is an argument against AI. It is very good at certain things, and the caution above is what lets you use it for them.

- Finding the relevant passage in thousands of pages in seconds.
- Summarising long documents, as long as the summary links back to the source.
- Drafting, where a person will read and edit the result anyway.
- Answering routine questions from an agreed set of material.

It is weakest where there is no source to check against and nobody reviewing the output. Unfortunately, that is where it is often used first.
`),
      { type: "quote", text: "The useful question is not how clever the AI is. It is how quickly a person can tell when it is wrong." },
      { type: "h2", text: "If you are considering AI for your organisation" },
      { type: "p", text: "Ask whoever is selling it three things. Where does each answer come from? What happens when it does not know? Who checks the output before it is used?" },
      { type: "p", text: "If the answers are clear, you are looking at a tool. If they are vague, you are looking at a demo." },
    ],
  },
  {
    slug: "built-for-a-bad-connection",
    title: "Built for a Bad Connection",
    excerpt:
      "Software is usually tested on fast office Wi-Fi and used somewhere very different. Why we design for the weakest signal first.",
    author: "Origin",
    date: "2026-09-24",
    image: "/web1.jpg",
    keywords: ["offline-first apps", "progressive web app Kenya", "software for low connectivity"],
    content: [
      { type: "p", text: "Most software is built in an office with fast Wi-Fi, on a new laptop, by someone with a full battery." },
      { type: "p", text: "Then it is used on a three-year-old phone, in a matatu, on a data bundle that is about to run out. The button spins. The form submits and nothing happens. The person tries twice, gives up and goes back to doing it by hand." },
      { type: "p", text: "The software was not broken. It was built for a place its users do not live in." },
      { type: "h2", text: "Offline is normal" },
      { type: "p", text: "It is tempting to treat a lost connection as an error, something to apologise for with a sad-face screen. For a great many people it is simply part of the day: a building with thick walls, a stretch of road between towns, a storeroom at the back of the shop." },
      { type: "p", text: "When we built Matata, a tool for reporting damage after floods, earthquakes and other crises, this stopped being a matter of convenience. The moment someone most needs to send a report is often the moment the network is at its worst. So a report is saved on the phone first and sent when the signal returns, without the person having to think about it." },
      { type: "p", text: "That one decision shaped everything else about the design." },
      { type: "h2", text: "What designing for a weak signal looks like" },
      { type: "ul", items: [
        "Save first, send later. Nothing a person types should be lost because the network dropped.",
        "Keep pages light. Every extra megabyte is paid for by the user, in money and in waiting.",
        "Ask for less. A form with five fields gets completed. A form with twenty gets abandoned.",
        "Say what is happening. \"Saved, will send when you are back online\" is reassuring. A spinner is not.",
        "Work in the browser where you can, so nobody has to find storage space for another download.",
      ] },
      { type: "h2", text: "Everybody benefits" },
      { type: "p", text: "Something built to work on a weak signal is fast on a strong one. Something that asks only for what it needs is easier for everyone to use. Designing for the hardest conditions does not hold a product back. It is what makes it feel good everywhere else." },
      ...md(`
## It is about cost as much as signal

Even where the network is good, data is not free. Many people buy it in small bundles and keep track of what each app uses.

A page that loads several megabytes of pictures and animation is spending the visitor's money before it has told them anything. They notice. So do search engines: slow pages tend to rank lower, which means fewer people find you in the first place.

This is one reason we are careful about what goes into [a business website](/blog/what-goes-into-the-cost-of-a-website-in-kenya). A page that loads quickly and says what it needs to is worth more than an impressive one that half its visitors give up on.

## Payments are part of this too

The same thinking applies to how people pay. A customer on a weak connection should not have to load a heavy checkout page and type in card details.

A payment prompt sent straight to their phone, where they only enter their M-Pesa PIN, works on almost any signal. We explained how that works in [our guide to M-Pesa integration](/blog/mpesa-integration-for-your-business).

You can read more about how Matata handles poor connectivity in [the Matata case study](/case-studies/matata).
`),
      { type: "quote", text: "Test it where it will be used, not where it was built." },
      { type: "p", text: "Before you approve the next piece of software for your business, try it the way your customers or staff will. Switch to mobile data. Walk to the back of the building. Use the oldest phone in the office." },
      { type: "p", text: "If it still works, it is ready." },
    ],
  },
  {
    slug: "how-we-digitised-a-board-game-shop-in-nakuru",
    title: "How We Digitised a Board Game Shop in Nakuru",
    excerpt:
      "A small shop selling board games in Nakuru was running on a notebook, a phone and the owner's memory. Here is what changed when we moved it onto a proper system, and what any small business can take from it.",
    author: "Origin",
    date: "2026-10-06",
    image: "/hero-guy.jpg",
    keywords: ["digitising a small business in Kenya", "POS and inventory system Nakuru", "small business software Kenya", "digital transformation for SMEs"],
    content: md(`
When people hear "digital transformation" they picture a bank or a telco. We think of a shop in Nakuru that sells board games.

It is a small business with loyal customers, the kind of place where the owner knows which family comes in for which game. When we first walked in, everything about it ran on three things: a notebook, a phone and the owner's memory.

This is the story of what we changed, in the order we changed it. If you run a small business anywhere in Kenya, most of it will sound familiar.

## What we found

Nothing was broken, exactly. The shop was selling. But the same problems came up every week.

- Stock lived in the owner's head. Whether a game was available meant walking to the shelf to look.
- Sales went into a notebook, and the notebook was added up at the end of the day, when there was time.
- Customers paid by M-Pesa and then showed their phone, and matching those messages to sales at night was a job of its own.
- Orders came in through WhatsApp, Instagram and phone calls, and now and then one was missed.
- Nobody could say with confidence which games made money and which only took up space.

None of this is unusual. It is how most small shops in the country run. The cost is hidden, because you cannot see a sale you lost when a customer was told "let me check and call you back" and went elsewhere.

## We started with stock, not a website

The owner's first request was a website. It was a reasonable thing to ask for, and we said not yet.

A website that shows games you do not have, or hides games you do, makes things worse. So the first job was the least glamorous one: getting every item in the shop into a system, with a name, a price, a cost and a count.

It took time, and it was worth it. For the first time there was one place that could answer the question "do we have it?" without anyone leaving the counter.

## Then the till

Next we replaced the notebook. Each sale is now recorded as it happens, on a simple point of sale screen, and the stock count goes down by itself.

M-Pesa payments arrive in the same system and are matched to the sale. The evening routine of scrolling through messages with a pen in hand simply stopped.

This is the step where the team felt the difference. It is the same idea behind our [retail and wholesale system](/erp/retail-wholesale): capture a sale once and let everything else follow from it.

## Then the customers

Only when stock and sales were dependable did we turn to the front of the business.

Now a customer can see what is actually available before they ask. Orders from WhatsApp and social media go into one list, so nothing depends on someone remembering a message they read while serving another person.

Because the catalogue comes from the same stock records the shop uses, it is never out of date. That is the reason we did things in this order.

## What changed for the owner

The biggest change was not speed. It was knowing.

The owner can now open a report on any day and see what sold, what is running low and which games have been sitting on the shelf for months. Buying decisions that used to be a feeling are now based on what the shop has actually sold.

The shop can also be left in someone else's hands for a day, because the business no longer lives in one person's head.

> The technology was the easy part. The real work was getting the business out of the notebook.

## What any small business can take from this

You do not need to sell board games for this to apply.

- Start with your records, not your marketing. Fix what you know about your own stock and sales first.
- Capture each thing once. If a sale is written down twice, one of the copies will be wrong.
- Let payments match themselves. Time spent reconciling M-Pesa by hand is time taken from customers.
- Add the customer-facing part last, and build it on top of the records you already trust.
- Go in steps. Nobody closed the shop for a month. Each change was small enough to absorb.

If your business still runs on a notebook and a good memory, that is not a failing. It got you this far. But there comes a point where it is the thing holding you back, and getting past it is less painful than most owners expect.

If you would like to talk through what that could look like for your business, [get in touch](/contact). We are happy to start with a conversation.
`),
  },
  {
    slug: "etims-is-here-for-every-business",
    title: "eTIMS Is Here for Every Business. Is Your System Ready?",
    excerpt:
      "Electronic tax invoicing through KRA's eTIMS now applies to businesses of every size in Kenya. Here is what it means in practice and how to make it part of how you already sell.",
    author: "Origin",
    date: "2026-09-08",
    image: "/market.webp",
    keywords: ["eTIMS Kenya", "eTIMS compliance for small business", "KRA electronic tax invoice", "eTIMS integration with POS"],
    content: md(`
For years, electronic tax invoicing in Kenya felt like something for large companies. The ones with a finance department and a fiscal device at every till.

That has changed. KRA's electronic Tax Invoice Management System, known as eTIMS, now applies to anyone carrying on a business, whether or not they are registered for VAT. A consultant, a hardware shop, a landlord and a school supplier are all in scope.

This is not tax advice, and your accountant should have the final word on your situation. What we can speak to is the practical side: what this asks of your business day to day, and how to stop it becoming one more thing to do by hand.

## What eTIMS actually is

At its simplest, eTIMS is a way of issuing invoices that are sent to KRA at the moment you make them.

When you sell something, the invoice is created electronically, transmitted to KRA and given a verification code. Your customer receives an invoice that KRA already knows about.

There are several ways to do it. KRA provides its own free tools for businesses with few transactions, and there are options for connecting your existing sales system directly.

## Why it matters even if you are small

Two things have made eTIMS hard to ignore.

The first is your own customers. A business can generally only claim an expense for tax purposes if it is backed by a valid electronic tax invoice. If you cannot issue one, a company that buys from you has a reason to buy from someone who can.

The second is your own expenses. The same rule applies to what you buy. Costs that are not supported by an electronic tax invoice may not be allowed when your profit is worked out, which means paying tax on money you did not really make.

In other words, this now touches both sides of your books.

## The hard way and the easy way

There is a hard way to comply, and many businesses are doing it.

They make the sale as they always have, in a receipt book or their usual system. Then, later, someone sits down and types each sale again into a separate eTIMS tool. Two records of the same transaction, entered by hand, at the end of a long day.

It works until it does not. A busy week goes by, the backlog builds and the invoices that reach KRA no longer match what was sold.

The easy way is for the invoice to be the sale. Your point of sale or invoicing system creates the electronic tax invoice as part of completing the transaction. The cashier does nothing extra. The customer leaves with a compliant receipt. Your records and KRA's agree, because they are the same record.

## What to ask about your current system

If you already use software to sell or invoice, these are the questions worth putting to whoever supplies it.

- Can it issue eTIMS invoices directly, or do we have to re-enter sales somewhere else?
- What happens when the internet is down? Are invoices queued and sent later?
- Does it capture the buyer's KRA PIN when they need it?
- How are credit notes and returns handled?
- Can I see which invoices were transmitted and which failed?

If the answer to the first question is "re-enter them", it is worth knowing what a proper connection would take.

## If you are still on paper

Then this is a good moment to move, because you now need an electronic record of each sale either way.

Doing it properly gives you more than compliance. The same system that issues the tax invoice can track your stock, match your M-Pesa payments and show you what you sold this month. We wrote about that shift in [The Spreadsheet That Runs Your Company](/blog/the-spreadsheet-that-runs-your-company).

Our [business systems](/erp) are built so that tax invoicing is one step in a sale and not a separate job, whether you run a shop, a restaurant, a school or a petrol station.

> Compliance is easiest when nobody has to remember to do it.

## The short version

eTIMS is not going away, and it is no longer only for big companies. The businesses that find it painless are the ones where the tax invoice is produced by the same action that records the sale.

If yours is not there yet, start by asking how many times each sale is typed in today. If the answer is more than once, that is the thing to fix. [Talk to us](/contact) if you would like help working out how.
`),
  },
  {
    slug: "restaurant-pos-system-kenya-what-to-look-for",
    title: "Choosing a Restaurant POS System in Kenya: What to Look For",
    excerpt:
      "A point of sale system should do far more than print receipts. A practical guide for restaurant, cafe and bar owners on what matters, what does not and what to ask before you buy.",
    author: "Origin",
    date: "2026-08-04",
    image: "/food.webp",
    keywords: ["restaurant POS system Kenya", "restaurant management system", "bar and restaurant software Kenya", "POS with M-Pesa integration"],
    content: md(`
Ask ten restaurant owners what their point of sale system does and most will say the same thing: it prints the bill.

That is a little like saying a kitchen is where the cooker is. A good restaurant POS is the centre of the whole operation. It is where an order begins, and everything else, from the kitchen ticket to the stock count to the day's profit, should follow from it.

If you are choosing one for the first time, or wondering whether the one you have is good enough, here is what we would look at.

## Start with how orders move

Before any feature list, watch a single order travel through your restaurant.

A waiter takes it. How does the kitchen find out? If the answer involves walking, shouting or a handwritten docket, that is where plates get delayed and items get forgotten.

A proper system sends each item to the place it is prepared. Food goes to the kitchen, drinks go to the bar, and the notes go with them: no onions, extra spicy, table by the window. The waiter stays on the floor with the guests.

This single change does more for service than almost anything else.

## Payments your guests actually use

In Kenya that means M-Pesa first, then cash and card.

Look closely at how M-Pesa is handled. In many restaurants the guest pays, shows their phone, and the cashier types in a code or simply takes their word for it. At the end of the night someone compares the M-Pesa statement with the sales, line by line.

A system with real M-Pesa integration confirms the payment itself and attaches it to the bill. It should also handle the situations that happen every evening:

- A table that wants to split the bill four ways
- One guest paying part in cash and part by M-Pesa
- A discount or complimentary item that needs a manager's approval
- A bill that has to be reopened because someone ordered one more drink

## Stock that follows the menu

This is where most basic systems stop and good ones begin.

Every dish on your menu is made of ingredients. When the system knows the recipe, selling a plate of chicken and chips takes the chicken, the potatoes and the oil off your stock without anyone touching a spreadsheet.

That gives you three things you cannot get any other way.

- You know what to reorder before you run out in the middle of service.
- You can see what each dish really costs to make, and therefore what it earns you.
- When stock goes missing, you can see it, because the count no longer matches what was sold.

A restaurant can be full every night and still lose money on its most popular dish. You only find that out when sales and stock live in the same place.

## Reports you will actually open

Be wary of a system that boasts about having a hundred reports. You need a handful, and you need them to be clear.

- What did we sell today, and how was it paid for?
- Which dishes sell best, and which should come off the menu?
- How does this week compare with last week?
- What did each waiter and cashier handle?
- Does the cash in the drawer match what the system expects?

You should be able to check these from your phone, wherever you are. The point of a system is that you no longer have to be in the building to know how the business is doing.

## Questions to ask before you buy

- What happens when the internet goes down? Can we keep taking orders?
- Does it issue electronic tax invoices, or is that a separate step? We covered why that matters in [our guide to eTIMS](/blog/etims-is-here-for-every-business).
- Can it handle more than one outlet, and can I compare them?
- Who trains my staff, and who do I call on a Saturday night when something goes wrong?
- Can it be adjusted to how my kitchen works, or do I have to change to suit it?
- What will it cost me in a year, including support, not only on day one?

That last pair matters more than any feature. Software that forces your team to work around it will be quietly abandoned within months.

> The best system is the one your waiters still use on your busiest night.

## What we build

Our [restaurant management system](/erp/restaurant) covers orders, kitchen and bar tickets, billing, recipes and stock, and accounts, and we set it up around the way your restaurant already runs.

But whichever system you choose, judge it the same way: follow one order from the table to the bank and count how many times a person has to write something down. The right answer is once.

If you would like to see how that looks in practice, [get in touch](/contact).
`),
  },
  {
    slug: "data-protection-act-and-your-customer-list",
    title: "The Data Protection Act and Your Customer List",
    excerpt:
      "If your business keeps names, phone numbers or M-Pesa records, Kenya's Data Protection Act applies to you. A plain-language guide to what it expects and how good software makes it easier.",
    author: "Origin",
    date: "2026-07-16",
    image: "/web2.jpg",
    keywords: ["Data Protection Act Kenya", "ODPC registration", "data protection for small business Kenya", "customer data privacy Kenya"],
    content: md(`
Somewhere in your business there is a list of people.

It might be a customer database. It might be a spreadsheet of parents and their phone numbers, a book of tenants, patient files, or just the contacts in the shop's WhatsApp. Whatever form it takes, that list is personal data, and since 2019 Kenya has had a law about how it must be treated.

Many business owners assume the Data Protection Act is aimed at banks and telcos. It is not. It applies to almost anyone who collects information about people in the course of business.

We are software people, not lawyers, and for anything specific you should speak to one. But we build systems that hold this kind of information every day, so here is the practical view.

## What the law is trying to do

The idea behind the Act is simple: information about a person belongs to that person. A business that holds it is looking after it on their behalf.

From that come a few plain expectations.

- Collect only what you need, and be clear about why you need it.
- Use it for the purpose you gave and not for something else.
- Keep it accurate, and do not hold on to it longer than necessary.
- Keep it safe from loss and from people who should not see it.
- Let people see what you hold about them, correct it and, in many cases, ask you to delete it.

None of that is unreasonable. It is roughly how you would want a business to treat your own details.

## Do you need to register?

The law is overseen by the Office of the Data Protection Commissioner, the ODPC. Businesses that handle personal data are expected to register with it as data controllers or data processors.

There is an exemption for very small businesses, based on annual turnover and number of employees. It does not apply across the board, though. Certain sectors, including health and education, are expected to register whatever their size.

The thresholds and the list of sectors are published by the ODPC and can change, so check the current position on their website or with an advisor. Do not assume you are too small to be covered.

## Where businesses usually go wrong

In our experience it is rarely deliberate. It is habit.

- A customer list is shared in a staff WhatsApp group, where it stays long after people have left the company.
- Everyone logs in with the same password, so there is no way of telling who looked at what.
- Phone numbers collected for deliveries are later used for marketing messages nobody agreed to receive.
- Old records are never removed, because nobody is sure whether they are still needed.
- A laptop holding the only copy of everything is carried home every evening.

Each of these is a risk to the people on the list, and so a risk to you. Complaints to the ODPC can lead to penalties, and losing customers' trust costs more than any fine.

## How a proper system helps

Good software will not make you compliant by itself. It does make the right behaviour the easy one.

- Individual logins. Each person has their own account, so access is personal and can be removed the day someone leaves.
- Roles and permissions. A cashier does not need to see every customer's history. A teacher does not need fee records. People see what their job requires.
- A record of activity. The system keeps track of who viewed or changed what. If something goes wrong, you can find out what happened.
- Backups. Your data is copied automatically, so a stolen laptop is an inconvenience and not a disaster.
- Clean deletion. When someone asks to be removed, or a record is no longer needed, it can be found and dealt with properly.

These are standard in the [business systems we build](/erp). A school, a clinic or a property agent should not have to think about them as extras.

## Five things you can do this week

You do not need a project to make a start.

- Write down what personal information you collect and where it is kept. Most businesses have never listed it.
- Stop sharing customer lists in chat groups and by email.
- Give every member of staff their own login, and remove the ones that belong to people who have left.
- Check that you are backing up, and that you could actually restore from that backup.
- Find out from the ODPC whether you are required to register.

> Treat customer data the way you would want yours treated. Most of the law follows from that.

## The bigger picture

Customers are paying more attention to this than they used to. A business that can say, plainly, "here is what we hold, here is why and here is how we keep it safe" has an advantage over one that cannot.

Seen that way, data protection is not only a rule to satisfy. It is part of being a business people are comfortable dealing with.

If you are unsure how well your current setup protects the information you hold, [talk to us](/contact). It is usually a short conversation, and a useful one.
`),
  },
  {
    slug: "mpesa-integration-for-your-business",
    title: "M-Pesa Integration for Your Business: How It Works and Why It Matters",
    excerpt:
      "Your customers already pay by M-Pesa. The question is whether those payments reach your records by themselves or by someone reading out a code. A guide to what integration means and what it changes.",
    author: "Origin",
    date: "2026-06-11",
    image: "/sys.webp",
    keywords: ["M-Pesa integration", "Daraja API", "STK push", "M-Pesa payments for business Kenya", "Lipa Na M-Pesa website integration"],
    content: md(`
"Tuma screenshot."

If your business accepts M-Pesa, somebody on your team says a version of that many times a day. The customer pays. The customer proves they paid. Someone checks the phone, finds the message and writes the code down next to the sale.

It works. It is also slow, easy to get wrong and, now and then, easy to cheat.

M-Pesa integration is what takes that step away. Here is what it means, in plain terms.

## Accepting M-Pesa is not the same as integrating it

Almost every business in Kenya accepts M-Pesa. A till number or paybill on the wall is enough for that.

Integration is different. It means your sales system and M-Pesa talk to each other directly. When a payment arrives, your system knows about it within seconds: who paid, how much and what it was for. Nobody reads anything out or types anything in.

Safaricom makes this possible through a platform called Daraja, which lets approved business systems connect to M-Pesa securely.

## The two ways customers pay

Most integrations use one or both of these.

The first is the payment prompt, often called STK push. The customer gives their phone number, and a request appears on their phone asking for their M-Pesa PIN. They do not need to remember your till number or type the amount. They enter the PIN, and your system is told immediately that the payment went through.

This is ideal at a checkout, online or at a counter, because the amount is always right and the payment is tied to that exact sale.

The second is a notification for payments made to your paybill or till in the usual way. The customer pays from their M-Pesa menu as they always have, and Safaricom tells your system the moment the money lands. With a paybill, the account number they enter identifies what the payment is for, such as a student's admission number or a tenant's house number.

This suits bills that people pay in their own time: school fees, rent, invoices and subscriptions.

## What changes when it is connected

- No more screenshots. The system confirms the payment itself, so staff do not have to judge whether a message is real.
- No more end-of-day matching. Each payment is already attached to its sale, student, tenant or invoice.
- Fewer errors. Nobody can mistype a transaction code or credit the wrong customer.
- Less room for fraud. An edited message or a reversed payment does not get past a system that checks with Safaricom.
- Instant receipts. The customer gets confirmation from you as well as from M-Pesa.
- Real-time balances. You can see who has paid and who has not at any moment.

For a school, that means the bursar's office stops being a queue of parents holding bank slips. For a landlord, rent is recorded against the right unit as it arrives. For a shop, the cashier moves on to the next customer.

## It can pay out as well

Integration is not only for collecting money. A business can also send payments from its system: refunds, supplier payments, salaries for casual workers or commissions for agents.

Sent in bulk from a system, with a record of each one, these replace an afternoon of sending money from a phone and ticking names off a list.

## What you need to get started

- A paybill or till number registered to your business.
- Approval from Safaricom to use their business APIs, which involves some paperwork and testing.
- A system for the payments to arrive in: a point of sale, a school or property system, an online shop or your own custom software.
- Somebody technical to connect the two and to test it properly before real money flows through it.

The last point is worth stressing. Payments are the one part of a system where "mostly works" is not good enough. What happens if the customer's phone is off? If they enter the wrong PIN? If the confirmation arrives late? A careful integration has an answer for each.

## Where it fits in the bigger picture

M-Pesa integration gives the most value when it is part of a system that already knows who your customers are and what they owe.

That is why it is built into the systems we make, from [schools](/erp/school) and [property](/erp/property) to [retail](/erp/retail-wholesale) and [restaurants](/erp/restaurant). A payment is not just received. It is recorded against the right account, a receipt goes out and the balance updates, all without anyone lifting a finger.

> If a person has to confirm a payment by looking at a phone, the system is not finished.

Your customers have already chosen how they want to pay you. The only question is how much work it creates on your side when they do. If the answer today is "more than it should", [let us show you](/contact) what a connected setup looks like.
`),
  },
  {
    slug: "how-to-choose-a-school-management-system-in-kenya",
    title: "How to Choose a School Management System in Kenya",
    excerpt:
      "From fee collection to report cards, the right system can give a school its time back. A guide for heads, directors and bursars on what to look for and the mistakes to avoid.",
    author: "Origin",
    date: "2026-05-26",
    image: "/lead.webp",
    keywords: ["school management system Kenya", "school fees management software", "best school management software Kenya", "school ERP"],
    content: md(`
Every school runs on information: who is enrolled, who has paid, who teaches what and how each learner is doing.

For a long time that information has lived in files, in registers and in the heads of a few experienced members of staff. It works until the school grows, or until one of those people is away during the first week of term.

A school management system is meant to solve this. But there are many on the market, and they are not equal. If you are choosing one, here is how we would go about it.

## Start with the problem, not the product

Before looking at any software, ask your own team where the time goes.

In most schools the answers are the same.

- Fees. Receiving payments, working out balances and following up arrears.
- Exams. Collecting marks from every teacher and turning them into report cards.
- Communication. Getting accurate information to hundreds of parents.
- Records. Finding a student's details quickly when someone needs them.

Whichever of these hurts most is where a system must be strongest. A product that does forty things but is weak on fees will not help a school whose bursar is overwhelmed.

## Fee management is where systems prove themselves

Fees are the part of the system the school's survival depends on, so look at this first and look closely.

A good system should let you set up fee structures by class and by term, including the extras such as transport, lunch and activities. It should produce an invoice for every student without anyone typing them one by one.

Then comes the important part: receiving the money. Most parents pay by M-Pesa or through a bank. Ask how those payments get into the system. If the answer is that the bursar enters them from statements, the system is only doing half its job.

With proper integration, a parent pays using the student's admission number and the payment is recorded against that student within seconds. The balance updates and a receipt goes out. We explained how this works in [our guide to M-Pesa integration](/blog/mpesa-integration-for-your-business).

You should also be able to see, at any moment, exactly who owes what, and send reminders without drafting each one.

## Exams and report cards

Ask a teacher what they would most like to stop doing, and compiling marks is usually near the top.

A system worth having lets each teacher enter marks for their own subject once. Totals, averages, grades and positions are worked out automatically, and report cards for a whole class are produced together.

Check that it can follow the grading approach your school actually uses, and that it can be adjusted when the curriculum or your own policy changes. Education in Kenya has seen significant change in recent years, and a rigid system ages quickly.

## Talking to parents

Parents want to know two things: how their child is doing and what they owe. A system that can send both by SMS saves the office an enormous amount of printing and phone calls.

Look for the ability to send fee balances and reminders, exam results, and notices about opening dates and events, either to everyone or to a particular class.

## Questions to put to any supplier

- Can you show me the system working, with realistic data, and not only slides?
- How do M-Pesa and bank payments reach a student's account?
- Can it handle our fee structure, including the unusual cases?
- Who moves our existing records in, and what will that cost?
- Will you train our staff in person, and what support do we get after that?
- What happens to our data if we stop using you? Can we take it with us?
- How is student and parent information kept safe? Schools hold sensitive personal data, and the law takes that seriously, as we covered in [our piece on the Data Protection Act](/blog/data-protection-act-and-your-customer-list).
- What is the full yearly cost, including SMS, support and extra users?

## Mistakes we see schools make

- Buying on price alone. The cheapest system is expensive if staff give up on it after a term.
- Buying for features nobody will use, while the daily jobs remain awkward.
- Skipping training. A system only the IT teacher understands is not a school system.
- Changing everything at once. Start with fees, let people get comfortable, then add exams and the rest.
- Forgetting the internet. Ask what still works when the connection drops.

> A school system has succeeded when the office is quiet on fee day.

## A system shaped around your school

No two schools are organised in quite the same way. Streams, boarding arrangements, fee policies and grading all differ. Software that expects every school to work identically will always fit badly.

Our [school management system](/erp/school) covers admissions, fees, classes, timetables, exams, parent communication and the school store, and we set it up around how your school already runs.

Whatever you choose, the test is simple. A term after it goes in, are your bursar, your teachers and your parents spending less time on paperwork? If they are, it was the right choice.

If you would like to see what that could look like for your school, [we would be glad to talk](/contact).
`),
  },
  {
    slug: "what-goes-into-the-cost-of-a-website-in-kenya",
    title: "What Really Goes Into the Cost of a Website in Kenya",
    excerpt:
      "Quotes for a business website can differ wildly, and the cheapest is rarely the cheapest in the end. Here is what you are actually paying for and how to compare offers fairly.",
    author: "Origin",
    date: "2026-04-21",
    image: "/uiux.webp",
    keywords: ["website cost in Kenya", "website design Kenya", "web development company Nairobi", "how much does a website cost"],
    content: md(`
Ask three people in Kenya to quote for a website and you may get three figures with nothing in common. One is the price of a good lunch. One is the price of a second-hand car.

Both of them said "a website".

No wonder business owners find this confusing. The word covers everything from a single page with your phone number to an online shop that runs your whole sales operation. The price differs because the work differs.

We are not going to give you a number here, because any honest number depends on what you need. What we can do is show you what you are paying for, so you can tell a fair quote from a poor one.

## First, what is the website for?

This is the question that decides most of the cost, and it is often skipped.

- To show you exist. A few pages saying who you are, what you do and how to reach you.
- To bring in enquiries. Pages written and designed to persuade a visitor to call, message or fill in a form.
- To sell. A catalogue, a basket, payments and delivery.
- To let customers do something. Book an appointment, check a balance, track an order, apply for a place.

Each step up involves more thinking, more building and more testing. A quote that does not ask which of these you want is a guess.

## What you are paying for

Design. Someone has to decide how the site looks and, more importantly, how a visitor finds what they came for. A site built from a ready-made template costs less than one designed around your business. Templates are fine for many purposes, but they look like what they are.

Content. Words and pictures. This is the part most often forgotten and most often late. Who is writing the text? Who is supplying the photographs? If the answer is "you will send them", plan for that to take longer than you expect.

Building. Turning the design into something that works on every phone, loads quickly and does not break. Speed matters more here than in many places, because a large share of your visitors will be on mobile data. We wrote about that in [Built for a Bad Connection](/blog/built-for-a-bad-connection).

Features. Anything beyond showing information: contact forms, bookings, payments, customer accounts, a way to update the site yourself. M-Pesa payments in particular take careful work to do properly.

Being found. A website nobody can find is a brochure in a drawer. The basics of search visibility, such as sensible page titles, fast loading and clear structure, should be part of the build and not an extra.

## The costs that come afterwards

This is where the cheap quote and the fair quote tend to part ways.

- Domain name. Your address on the internet, renewed every year.
- Hosting. Where the site lives. Cheap hosting is often slow and sometimes unreliable.
- Security and updates. Software needs maintaining. Sites that are left alone get broken into.
- Changes. New prices, new staff, new services. Who makes them, and what does each change cost?
- Support. When the site is down on a Monday morning, who answers?

Ask for these in writing. A low price for the build followed by a charge for every small change is a common arrangement, and not a pleasant one to discover later.

## How to compare two quotes

Put them side by side and check that they describe the same thing.

- How many pages, and who writes them?
- Is the design made for us or adapted from a template?
- Will I be able to update it myself?
- Is it built to work well on phones first?
- What is included for the first year, and what will the second year cost?
- Who owns the website, the domain and the content when it is finished?

That last question matters a great deal. We have met businesses that could not move their own website because the domain was registered in a developer's name. Make sure everything is yours.

## When cheap is expensive

A site that takes ten seconds to load on a phone loses most of its visitors before they see anything. A site that cannot be updated goes out of date within months. A site that goes down and cannot be fixed, because the person who built it has moved on, has to be paid for twice.

None of this means you must buy the most expensive option. It means the right question is not "what does it cost?" but "what will it do for the business, and for how long?"

> A website is not a cost to get as low as possible. It is a member of staff who works every hour of the day.

## Our view

Start with what you need the site to achieve, and spend in proportion to that. A new business may be well served by something small, clear and fast. A business that takes orders online should treat its website as seriously as its premises.

If you would like an honest conversation about what your business needs, and what it does not, [get in touch](/contact). You can also see [how we work](/process) and some of [what we have built](/portfolio).
`),
  },
  {
    slug: "custom-software-or-off-the-shelf",
    title: "Custom Software or Off-the-Shelf? How to Decide",
    excerpt:
      "Buy something ready-made, or have it built for you? Neither is always right. A straightforward way to work out which suits your business, and when a mix of both is the best answer.",
    author: "Origin",
    date: "2026-04-02",
    image: "/webdev.webp",
    keywords: ["custom software development Kenya", "custom vs off-the-shelf software", "software company Nairobi", "bespoke business software"],
    content: md(`
Sooner or later, every growing business reaches the same fork in the road. The way things are done is no longer working, some kind of software is needed, and there are two ways to get it.

You can buy something that already exists. Or you can have something built for you.

We build custom software, so you might expect us to say "build" every time. We do not. For many businesses, ready-made software is the right answer, and saying otherwise would cost you money. Here is how we think about the choice.

## What each one really is

Off-the-shelf software is made for many businesses at once. You pay a subscription or a licence, switch it on and use it more or less as it comes. Accounting packages and email are the obvious examples.

Custom software is made for one business. Someone studies how you work and builds a system that fits it. You are not sharing it with anyone, and it does what you asked for.

Between the two there is a middle path, which we will come to, because it is often the best one.

## When off-the-shelf is the right choice

- What you need is something every business needs. Bookkeeping, payroll calculations, email, video calls. There is little reason to build these from nothing.
- You are just starting out. Your way of working has not settled yet, and you should not fix it in software too early.
- You need it this week. Ready-made software can be running in a day.
- The budget is small. A monthly fee is easier to bear than a project.

If a product does most of what you need, and the rest is a matter of adjusting a habit or two, take it. That is good judgment, not settling.

## When it starts to pinch

The trouble with software made for everyone is that it is made for no one in particular.

- You bend to fit it. Your team changes how they work because the software cannot do it your way.
- You pay for what you do not use. Dozens of features sit untouched while the one you need is missing.
- The price grows as you do. Per-user and per-branch fees are small at first and large later.
- It does not talk to your other tools. So staff copy figures from one system into another by hand.
- It does not know Kenya. M-Pesa, local tax invoicing, statutory deductions and the way business is actually done here are an afterthought in many foreign products.
- Your data lives with someone else. Getting it out, in a useful form, can be harder than you would think.

One of these is tolerable. Several together mean the software has started costing you more than its subscription.

## When custom is worth it

- Your way of working is your advantage. If you do something differently from your competitors, and that is why customers choose you, generic software will flatten it.
- Nothing on the market fits. Some businesses are unusual, and that is fine.
- You are stitching several tools together. If your staff work across four systems and a spreadsheet, one built system can replace the lot.
- The volume is high. When a task is done hundreds of times a day, saving a minute on each is worth a great deal.
- You want to own it. No per-user fees, no sudden price rise, no dependence on a supplier's plans.

Custom software costs more at the start and takes longer. Over several years it can cost less, because you are not renting it for ever. But only if it is built well, and only if you really need it.

## The middle path

In practice, the best answer is often neither extreme.

Start from a proven foundation that already handles the common things, such as sales, stock, accounts and users, and tailor it to the way your business runs. You get most of the fit of custom software without paying to reinvent what every business needs.

That is how we approach our [business systems](/erp). The core for a school, a restaurant or a property company already exists and has been tested. What we change is everything that makes your school, restaurant or company different from the next one.

## Five questions to help you decide

- Does an existing product do at least most of what we need?
- Are we changing how we work to suit our software?
- How many times is the same information typed into different places?
- What will our current tools cost us in three years, at the size we expect to be?
- Is the way we work something worth protecting?

If the first answer is yes and the rest are comfortable, buy. If you find yourself wincing at the others, it is time to talk about building.

> Buy what makes you the same as everyone else. Build what makes you different.

## Whatever you choose

Do not start with the software. Start with a clear picture of how work moves through your business today and where it gets stuck. With that in hand, the right choice is usually obvious.

If you would like help drawing that picture, [that is a conversation we enjoy](/contact). And if the honest answer is that a ready-made product will serve you well, we will tell you so.
`),
  },
  {
    slug: "what-is-an-erp-system",
    title: "What Is an ERP System? A Plain Guide for Kenyan Business Owners",
    excerpt:
      "ERP is one of those terms everyone uses and few explain. Here is what it means, what it does for a business and how to tell whether yours is ready for one.",
    author: "Origin",
    date: "2026-03-17",
    image: "/ent.webp",
    keywords: ["what is an ERP system", "ERP system Kenya", "ERP software for small business", "enterprise resource planning explained"],
    content: md(`
If you have looked into software for your business, you have met the letters ERP. They appear on websites, in sales pitches and in conversations with your accountant, usually without explanation.

It stands for Enterprise Resource Planning, which does not help much. So let us put it plainly.

An ERP system is one piece of software that runs the main parts of your business together, using one shared set of records.

That is all. The rest of this guide explains why that simple idea makes such a difference.

## The problem it solves

Picture a typical growing business.

Sales are recorded at the till. Stock is tracked in a spreadsheet. The accountant has their own software. Staff details are in a file. Customer balances are in a book, or in someone's memory.

Each of these works well enough alone. The trouble is that they do not know about each other.

So when a sale is made, someone has to update the stock sheet. Then someone has to tell the accountant. If a customer bought on credit, someone has to write that down as well. The same event is recorded three or four times, by different people, at different moments.

Every one of those copies is a chance for a mistake. And when the figures disagree, which they will, nobody can say which one is right.

## One record, used by everyone

An ERP removes the copying.

When a sale is made, it is recorded once. From that single entry, the stock count goes down, the income appears in the accounts, the customer's balance updates and the day's report changes. Nobody passes anything along.

Everyone in the business is looking at the same information, each from their own angle. The storekeeper sees stock. The accountant sees money. The owner sees all of it.

## What an ERP usually covers

The parts are often called modules, and a business uses the ones it needs.

- Sales and point of sale. Recording what is sold and how it was paid for.
- Stock and inventory. What you have, where it is and when to reorder.
- Purchasing. Orders to suppliers and what you owe them.
- Accounts. Income, expenses, and profit and loss.
- Customers. Who they are, what they have bought and what they owe.
- Staff and payroll. Records, pay, deductions and leave.
- Reports. A view across all of the above.

Then there are parts that belong to particular kinds of business. A school needs admissions, fees and exams. A hospital needs patient records and a pharmacy. A landlord needs tenants and rent. A petrol station needs pump readings and tank stock.

This is why ERP systems are often built for a specific industry. You can see how different they look across the [systems we build](/erp), from [schools](/erp/school) and [hospitals](/erp/hospital) to [retail](/erp/retail-wholesale) and [payroll](/erp/payroll).

## Is this not only for big companies?

It used to be. ERP systems were once enormous, expensive and installed by teams of consultants over many months.

That is no longer the case. A system today can be sized for a single shop or a small school, run from a laptop and a phone, and be extended as the business grows.

Small businesses arguably gain the most. A large company can employ people to reconcile its records. A small one cannot, so the owner does it at night.

## Signs your business is ready

- The same information is entered in more than one place.
- You cannot say what you made last month without several days of work.
- You find out you have run out of something when a customer asks for it.
- Stock or money goes missing and you cannot tell where.
- Certain things only work when one particular person is in.
- You are opening a second branch and wondering how you will keep track of both.

If three or more of these sound like your week, you have outgrown separate tools. We described what that feels like in [The Spreadsheet That Runs Your Company](/blog/the-spreadsheet-that-runs-your-company).

## What to expect when you get one

It is fair to be told the truth about this.

There is work at the start. Your existing records have to be moved in, and they will need tidying. Your staff have to learn a new way of doing familiar things, and some will resist it for the first few weeks.

Then it settles. The daily tasks get faster. The end of the month stops being a scramble. And you begin to see things about your own business that were always there but never visible.

A few things make it go well.

- Begin with the area that hurts most, and add the rest in stages.
- Choose a system that fits how you work. Whether to buy or build is a question we looked at in [Custom Software or Off-the-Shelf?](/blog/custom-software-or-off-the-shelf)
- Insist on proper training, for everyone who will use it.
- Make sure it handles local needs such as M-Pesa and electronic tax invoicing from the first day.

> An ERP does not change what your business does. It lets you see it clearly, all at once.

## In short

ERP is a grand name for a sensible idea: record each thing once, in one place, and let every part of the business work from it.

If you are curious whether your business would benefit, [talk to us](/contact). We will ask how things run today and give you a straight answer, even if that answer is "not yet".
`),
  },
];

export function getLocalBlogPost(slug: string) {
  return localBlogPosts.find((p) => p.slug === slug);
}
