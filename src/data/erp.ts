import {
  UtensilsCrossed,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Building2,
  Banknote,
  ShieldCheck,
  Fuel,
  Smartphone,
  Boxes,
  CloudUpload,
  UserCog,
  ChartNoAxesCombined,
  Headset,
  type LucideIcon,
} from "lucide-react";

export interface ErpSection {
  title: string;
  blurb: string;
  // Optional lead-in shown above the bullets, e.g. "From the fees desk you can:"
  bulletsLead?: string;
  bullets: string[];
  // Illustration in public/erp/. Until that file exists the module icon is shown instead,
  // so a path here also names the slot to fill (see scripts/erp-images.py).
  image?: string;
}

export interface ErpModule {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  // Card copy on /erp
  summary: string;
  // Detail page hero
  headline: string;
  subtitle: string;
  intro: string[];
  // Overview illustration in public/erp/, used beside the intro and on the /erp card. Same fallback as sections.
  image?: string;
  capabilities: string[];
  sections: ErpSection[];
  // Optional: who uses the system and what each gets from it
  roles?: { title: string; body: string }[];
  // Optional: what can be configured to fit the organisation
  customisation?: { blurb: string; items: string[] };
  reports: string[];
  // Slugs of blog posts to suggest at the bottom of the page
  relatedPosts?: string[];
}

export const erpModules: ErpModule[] = [
  {
    slug: "restaurant",
    name: "Restaurant Management System",
    shortName: "Restaurant",
    icon: UtensilsCrossed,
    summary:
      "Orders, kitchen, stock and cash in one system, from the first table of the day to the closing report.",
    headline: "Run the floor, the kitchen and the back office from one system",
    subtitle:
      "A point of sale and management system for restaurants, cafes and bars that follows every order from the table to the kitchen to the till, and shows what it cost you to serve it.",
    image: "/erp/restaurant-counter.webp",
    intro: [
      "If you run a restaurant or a bar, you know how a day goes. You are managing staff, checking what has run out, calling suppliers, haggling over prices and still trying to greet your guests. It is easy to get so buried in the daily tasks that you lose sight of why you opened in the first place: to build a name people come back to, and to make money doing it.",
      "A good system takes that weight off you. We connect your floor, kitchen, bar and accounts so an order is captured once and everything else follows: the kitchen ticket, the bill, the stock used and the day's takings. You get your attention back for the food, the guests and the growth.",
      "It suits restaurants, cafes, bars, fast food outlets and hotels with a kitchen, whether you run one counter or several branches.",
    ],
    capabilities: [
      "Touchscreen point of sale",
      "Table, takeaway and delivery orders",
      "Kitchen and bar order tickets",
      "Split bills and mixed payments",
      "M-Pesa, card and cash at the till",
      "Menus, prices and offers in one place",
      "Recipes and ingredient-level stock",
      "Automatic stock deduction on every sale",
      "Supplier orders and deliveries",
      "Waiter and cashier accounts",
      "Shift opening and closing",
      "Sales, expenses and accounts",
      "Multiple outlets on one system",
      "Real-time reports",
    ],
    sections: [
      {
        title: "Take orders quickly and get them right",
        blurb:
          "A simple touchscreen makes placing an order fast, even for new staff on a busy night. Each item goes straight to where it is prepared, so nobody has to walk a docket to the kitchen.",
        bulletsLead: "On the floor your team can:",
        bullets: [
          "See which tables are open, occupied or waiting for the bill",
          "Take dine-in, takeaway, pickup and delivery orders on one screen",
          "Add notes for allergies, special requests and complimentary items",
          "Move, merge and split tables in the middle of service",
          "Find frequently sold items in a tap",
        ],
        image: "/erp/restaurant-order.webp",
      },
      {
        title: "Run a calmer, faster kitchen",
        blurb:
          "The kitchen and the floor work from the same order, so there is less shouting across the pass and fewer plates sent back.",
        bulletsLead: "In the kitchen and bar you get:",
        bullets: [
          "Orders sent to the right station: kitchen, grill or bar",
          "Special requests and comments shown clearly on each ticket",
          "A warning when an order has been waiting too long",
          "Recipes kept in one place, so every plate is made the same way",
          "Less waste, because portions follow the recipe",
        ],
        image: "/erp/restaurant-kitchen.webp",
      },
      {
        title: "Bill in seconds and take any payment",
        blurb:
          "The bill is built from the order, so nothing is forgotten and nothing is keyed in twice. Guests pay the way they prefer and leave happy.",
        bulletsLead: "At the till you can:",
        bullets: [
          "Print or send a bill in one tap",
          "Split a bill by guest or by item",
          "Accept M-Pesa, card, cash or a mix of them",
          "Apply offers and discounts, with a supervisor's approval where needed",
          "Close each cashier's shift with a clear cash-up",
        ],
        image: "/erp/restaurant-counter.webp",
      },
      {
        title: "Let the stock count itself",
        blurb:
          "Forget the stock spreadsheet. Every menu item is linked to its ingredients, so selling an omelette takes three eggs off the shelf without anyone writing it down.",
        bulletsLead: "From the store you can:",
        bullets: [
          "Track ingredients in real time as dishes are sold",
          "Get an alert before an ingredient runs out",
          "Raise supplier orders and receive deliveries against them",
          "Check goods in and out, so stock is safe from the door to the shelf",
          "Record wastage and spoilage",
          "See how many portions of each recipe were made",
        ],
        image: "/erp/restaurant-inventory.webp",
      },
      {
        title: "Control the whole business from one place",
        blurb:
          "Prices, menus and offers are managed centrally, so a change made in the office shows on every till at once.",
        bulletsLead: "From the back office you can:",
        bullets: [
          "Update menus, prices and recipes for one outlet or all of them",
          "Run offers and promotions for a set period",
          "Manage waiter, cashier and manager accounts and what each can do",
          "Follow online orders, pickups and deliveries alongside dine-in",
          "Compare outlets side by side",
        ],
        image: "/erp/restaurant-control.webp",
      },
      {
        title: "Keep a close eye on the numbers that matter",
        blurb:
          "A full restaurant is not always a profitable one. See what each dish really earns you once ingredients are counted.",
        bulletsLead: "You will always know:",
        bullets: [
          "Profit per dish, based on what goes into it",
          "Your best sellers, so their ingredients never run short",
          "Sales by waiter, outlet, day and hour",
          "How each department is doing: kitchen, bar and counter",
          "Revenue against costs as the day unfolds",
        ],
        image: "/erp/restaurant-money.webp",
      },
      {
        title: "Accounts that keep up with service",
        blurb:
          "Sales, purchases and expenses flow into the accounts as they happen, so the books are not a month behind the business.",
        bulletsLead: "On the accounts side you can:",
        bullets: [
          "Record daily expenses and petty cash",
          "Track what you owe each supplier",
          "Reconcile cash, M-Pesa and card takings",
          "See profit and loss for any period",
        ],
        image: "/erp/restaurant-account.webp",
      },
    ],
    roles: [
      {
        title: "Owners and managers",
        body: "Live sales, costs and margins for every outlet, on any device, without waiting for the end of the month.",
      },
      {
        title: "Waiters and cashiers",
        body: "A fast, simple screen for orders and bills, and a shift that closes cleanly.",
      },
      {
        title: "Chefs and bar staff",
        body: "Clear tickets in the order they came in, with every request attached and recipes to hand.",
      },
      {
        title: "Storekeepers and accounts",
        body: "Stock that updates itself, supplier balances that are current and far less counting.",
      },
    ],
    customisation: {
      blurb:
        "No two kitchens run the same way. These are set up to match yours, and can change as your menu and team do.",
      items: [
        "Menu categories and items",
        "Recipes and portion sizes",
        "Preparation stations",
        "Floor plan and tables",
        "Prices, offers and happy hours",
        "Payment methods",
        "Staff roles and permissions",
        "Outlets and stores",
      ],
    },
    reports: [
      "Daily and shift sales",
      "Best and worst selling items",
      "Profit and food cost per dish",
      "Stock movement and wastage",
      "Sales by waiter and outlet",
      "Payments by method",
      "Supplier purchases and balances",
      "Profit and loss",
    ],
    relatedPosts: [
      "restaurant-pos-system-kenya-what-to-look-for",
      "etims-is-here-for-every-business",
      "mpesa-integration-for-your-business",
    ],
  },
  {
    slug: "retail-wholesale",
    name: "Retail & Wholesale Management System",
    shortName: "Retail / Wholesale",
    icon: ShoppingCart,
    summary:
      "Point of sale, stock, suppliers and customer accounts for shops, supermarkets and distributors.",
    headline:
      "Sell faster at the counter and always know what is on the shelf",
    subtitle:
      "A point of sale and inventory system for shops, supermarkets and distributors, with retail and wholesale pricing side by side.",
    image: "/erp/retail-overview.webp",
    intro: [
      "If you own a shop, you know the feeling. The day was busy, the till looks full, and yet at the end of the month the profit is not where you expected. Somewhere between stock that was never counted, credit that was never followed up and prices that differ from branch to branch, the money slipped away.",
      "You should not have to be at every counter to know what is going on. We build retail and wholesale systems that record every sale and every stock movement as it happens, so what you see on the screen is what is on the shelf and in the till, and you can get back to growing the business.",
      "It suits shops, supermarkets, hardware stores, pharmacies, agrovets and distributors, from a single counter to a chain of branches.",
    ],
    capabilities: [
      "Fast barcode point of sale",
      "Retail, wholesale and customer-specific prices",
      "M-Pesa, card and cash payments",
      "Receipts, invoices and delivery notes",
      "Stock across branches and stores",
      "Reorder levels and low-stock alerts",
      "Purchase orders and supplier accounts",
      "Customer credit and statements",
      "Batch and expiry tracking",
      "Stock takes and adjustments",
      "Cashier shifts and cash-up",
      "User roles and approval limits",
      "Expenses and accounts",
      "Sales and profit reports",
    ],
    sections: [
      {
        title: "A till that keeps the queue moving",
        blurb:
          "Scan, take payment and hand over a receipt in a few seconds. The same screen serves a walk-in shopper and a wholesale customer buying by the carton.",
        bulletsLead: "At the counter your cashiers can:",
        bullets: [
          "Scan barcodes or search for an item by name",
          "Sell by piece, pack or carton at the right price for each",
          "Accept M-Pesa, card, cash or a mix of them",
          "Hold a sale and come back to it",
          "Process returns and exchanges with a clear record",
          "Close their shift with a cash-up",
        ],
        image: "/erp/retail-pos.webp",
      },
      {
        title: "Stock you can trust",
        blurb:
          "Every sale, delivery and transfer updates stock straight away, in every branch. You stop guessing what is in the back room.",
        bulletsLead: "From the store you can:",
        bullets: [
          "See stock levels for every item and branch",
          "Get an alert when an item reaches its reorder level",
          "Transfer stock between branches and stores",
          "Track batches and expiry dates",
          "Run stock takes and see the variance",
          "Record damaged and written-off goods",
        ],
        image: "/erp/restaurant-inventory.webp",
      },
      {
        title: "Suppliers and purchasing in order",
        blurb:
          "Raise an order, receive goods against it and know exactly what you owe. No more comparing delivery notes with invoices by hand.",
        bulletsLead: "With purchasing you can:",
        bullets: [
          "Create purchase orders and send them to suppliers",
          "Receive deliveries against the order",
          "Keep a cost price history for every item",
          "See supplier balances and payment history",
          "Get suggested orders based on what is selling",
        ],
        image: "/erp/retail-suppliers.webp",
      },
      {
        title: "Credit customers under control",
        blurb:
          "Wholesale often means selling on account. The system keeps the ledger, so you always know who owes what and for how long.",
        bulletsLead: "For each customer you can:",
        bullets: [
          "Set a credit limit and payment terms",
          "Issue invoices, receipts and statements",
          "See outstanding balances by age",
          "Send payment reminders by SMS",
          "Offer customer-specific prices and discounts",
        ],
        image: "/erp/retail-customers.webp",
      },
      {
        title: "One view across every branch",
        blurb:
          "Prices and products are managed centrally, so a change made at head office reaches every till. Each manager sees their branch; you see them all.",
        bulletsLead: "From head office you can:",
        bullets: [
          "Update prices and products for one branch or all of them",
          "Run promotions for a set period",
          "Control what each cashier, supervisor and manager can do",
          "Require approval for discounts, voids and refunds",
          "Compare branches side by side",
        ],
        image: "/erp/restaurant-control.webp",
      },
      {
        title: "Know where the profit comes from",
        blurb:
          "Busy does not always mean profitable. See what each item, category and branch really earns.",
        bulletsLead: "You will always know:",
        bullets: [
          "Gross profit and margin per item",
          "Your fast and slow moving products",
          "Sales by cashier, branch, day and hour",
          "The value of the stock you are holding",
          "Expenses against income for any period",
        ],
        image: "/erp/restaurant-money.webp",
      },
    ],
    roles: [
      {
        title: "Owners and directors",
        body: "Live sales, margins and stock value for every branch, without waiting for a report to be prepared.",
      },
      {
        title: "Cashiers",
        body: "A fast, simple till that handles any payment and a shift that balances.",
      },
      {
        title: "Storekeepers and buyers",
        body: "Accurate stock, reorder alerts and supplier orders in one place.",
      },
      {
        title: "Accounts",
        body: "Customer and supplier ledgers that are always current, and far less reconciliation.",
      },
    ],
    customisation: {
      blurb:
        "Every shop prices, stocks and sells in its own way. These are set up to match yours.",
      items: [
        "Product categories and units",
        "Price lists and discounts",
        "Branches and stores",
        "Payment methods",
        "Receipt and invoice layouts",
        "Reorder levels",
        "Staff roles and approval limits",
        "Tax settings",
      ],
    },
    reports: [
      "Sales by item, category and branch",
      "Gross profit and margin",
      "Stock valuation",
      "Slow and fast moving items",
      "Debtors and creditors by age",
      "Cashier and shift summaries",
      "Purchases by supplier",
      "Profit and loss",
    ],
    relatedPosts: [
      "how-we-digitised-a-board-game-shop-in-nakuru",
      "the-spreadsheet-that-runs-your-company",
      "etims-is-here-for-every-business",
    ],
  },
  {
    slug: "hospital",
    name: "Hospital Management System",
    shortName: "Hospital",
    icon: Stethoscope,
    summary:
      "Patient records, consultations, lab, pharmacy and billing connected from reception to discharge.",
    headline:
      "One patient record, from reception to discharge",
    subtitle:
      "A hospital and clinic system that connects registration, consultation, laboratory, pharmacy, wards and billing around a single patient file.",
    image: "/erp/hospital-overview.webp",
    intro: [
      "If you run a clinic or a hospital, you have seen it: a patient gives the same details at three different desks, a lab result goes missing between rooms, and the cashier builds the bill from memory while the queue grows. Your staff are skilled people, and too much of their day goes to paper.",
      "Patients come to you for care, and your team wants to give it. We build hospital systems where every department works on the same patient visit, so care moves forward without a file being carried down the corridor, and every service given is captured on the bill.",
      "It suits clinics, medical centres, nursing homes, specialist practices and hospitals with outpatient and inpatient services.",
    ],
    capabilities: [
      "Patient registration and records",
      "Appointments and visit queues",
      "Triage and vital signs",
      "Consultation notes and diagnoses",
      "Laboratory and imaging requests",
      "Prescriptions and pharmacy dispensing",
      "Ward, bed and admission management",
      "Cash, M-Pesa and card billing",
      "Insurance and corporate accounts",
      "Pharmacy and store inventory",
      "SMS appointment reminders",
      "Role-based access to records",
      "Staff and duty records",
      "Clinical and financial reports",
    ],
    sections: [
      {
        title: "Register once, serve everywhere",
        blurb:
          "A patient is registered once, and the visit follows them from desk to desk. Returning patients are found in seconds, with their history attached.",
        bulletsLead: "At reception you can:",
        bullets: [
          "Register new patients and find returning ones",
          "Book appointments and follow-up visits",
          "Send patients to the right department queue",
          "Record next of kin and insurance details",
          "Send appointment reminders by SMS",
        ],
        image: "/erp/hospital-reception.webp",
      },
      {
        title: "Clinical notes that stay with the patient",
        blurb:
          "Clinicians see the full history, record the visit and send requests without leaving the consultation screen.",
        bulletsLead: "In the consultation room clinicians can:",
        bullets: [
          "Review past visits, results and prescriptions",
          "Record triage, complaints, diagnosis and treatment plan",
          "Request lab tests and imaging",
          "Prescribe directly to the pharmacy",
          "Refer, admit or book a follow-up",
        ],
        image: "/erp/hospital-consultation.webp",
      },
      {
        title: "Lab and imaging results back where they belong",
        blurb:
          "Requests reach the lab the moment they are made, and results return to the patient's file for the clinician to see.",
        bulletsLead: "In the laboratory your team can:",
        bullets: [
          "See pending requests in order",
          "Enter results against the request",
          "Flag abnormal values",
          "Attach reports and images",
          "Track turnaround time",
        ],
        image: "/erp/hospital-lab.webp",
      },
      {
        title: "A pharmacy that never loses track",
        blurb:
          "Dispensing reduces stock, and every item given to a patient lands on their bill.",
        bulletsLead: "In the pharmacy you can:",
        bullets: [
          "Dispense against a prescription",
          "Track batches and expiry dates",
          "Get an alert when stock runs low",
          "Raise supplier orders and receive deliveries",
          "Keep the main store and dispensing points separate",
        ],
        image: "/erp/hospital-pharmacy.webp",
      },
      {
        title: "Wards and admissions in view",
        blurb:
          "See every bed, who is in it and what care they are receiving, from admission to discharge.",
        bulletsLead: "On the wards your team can:",
        bullets: [
          "Admit patients and assign beds",
          "Record ward rounds, nursing notes and medication given",
          "Charge bed days and procedures as they happen",
          "Transfer patients between wards",
          "Prepare a discharge summary",
        ],
        image: "/erp/hospital-ward.webp",
      },
      {
        title: "Billing that captures every charge",
        blurb:
          "Charges are added where the service is given, so the bill is complete by the time the patient reaches the cashier.",
        bulletsLead: "At the billing desk you can:",
        bullets: [
          "Take cash, M-Pesa and card payments",
          "Bill insurers and corporate accounts",
          "Accept deposits and part payments",
          "Approve waivers and discounts",
          "Issue invoices, receipts and claim summaries",
        ],
        image: "/erp/restaurant-money.webp",
      },
    ],
    roles: [
      {
        title: "Administrators",
        body: "Attendance, revenue and bed occupancy at a glance, with the reports regulators and boards ask for.",
      },
      {
        title: "Doctors and clinical officers",
        body: "The full patient history on one screen, and requests that reach the lab and pharmacy at once.",
      },
      {
        title: "Nurses, lab and pharmacy",
        body: "Clear queues, less paperwork and stock that updates itself.",
      },
      {
        title: "Accounts and patients",
        body: "Complete, accurate bills and shorter waits at every desk.",
      },
    ],
    customisation: {
      blurb:
        "Every facility is organised differently. These are set up to match yours.",
      items: [
        "Departments and clinics",
        "Services and price lists",
        "Lab tests and reference ranges",
        "Drug list and formulary",
        "Wards and beds",
        "Insurance schemes and rates",
        "Staff roles and permissions",
        "Forms and document templates",
      ],
    },
    reports: [
      "Patient visits and attendance",
      "Diagnosis and morbidity summaries",
      "Revenue by department",
      "Insurance and corporate balances",
      "Pharmacy stock and expiries",
      "Bed occupancy",
      "Lab workload and turnaround",
      "Daily cash collection",
    ],
    relatedPosts: [
      "data-protection-act-and-your-customer-list",
      "what-is-an-erp-system",
      "custom-software-or-off-the-shelf",
    ],
  },
  {
    slug: "school",
    name: "School Management System",
    shortName: "School",
    icon: GraduationCap,
    summary:
      "Admissions, fees, timetables, exams and parent communication in one place for the whole school.",
    headline: "Run your whole school from one system",
    subtitle:
      "Admissions, fees, classes, timetables, exams and parent communication, connected so the office, the staffroom and the home all see the same thing.",
    image: "/erp/school-easy.webp",
    intro: [
      "If you run a school, you know what opening week looks like. Hundreds of students arrive at once, parents queue at the bursar's window with bank slips, teachers ask for class lists and somebody is still looking for last year's files. Then come the exams, the report cards and the fee reminders, term after term.",
      "Your school exists to teach, and the office work should not get in the way. We build school systems that keep every student's record in one secure place from admission to graduation. Information is entered once, and everyone who needs it sees it: the bursar, the class teacher, the head and the parent.",
      "It works for primary and secondary schools, academies, colleges and training institutions, and we set it up around the way your school already runs.",
    ],
    capabilities: [
      "Student admissions and lifelong records",
      "Guardian and medical details",
      "Fee structures, invoices and receipts",
      "M-Pesa and bank fee payments",
      "Fee balances and arrears follow-up",
      "Class, stream and subject registration",
      "Class and teacher timetables",
      "Exams, CATs and continuous assessment",
      "Automatic grading and report cards",
      "SMS alerts to parents",
      "Attendance tracking",
      "School store and inventory",
      "Staff records",
      "Reports, graphs and charts",
    ],
    sections: [
      {
        title: "Admit new students in a few clicks",
        blurb:
          "The first week of term brings hundreds of new and returning students through the office. Capture each one once, and their record is ready for fees, classes and exams straight away.",
        bulletsLead: "At the admissions desk you can record:",
        bullets: [
          "The student's personal details and photo",
          "Parent or guardian contacts",
          "Medical information and allergies",
          "Previous school and entry results",
          "Class, stream and boarding or day status",
          "Records that stay on file after a student leaves or graduates",
        ],
        image: "/erp/school-admit.webp",
      },
      {
        title: "Keep track of every fee payment",
        blurb:
          "Fees are the school's lifeline, and every shilling has to be accounted for. The system does the arithmetic and keeps the trail, so the bursar is not chasing bank slips at the end of term.",
        bulletsLead: "From the fees desk you can:",
        bullets: [
          "Set fee structures for new and continuing students, per class and per term",
          "Receive payments from M-Pesa and banks, matched to the right student",
          "See each student's balance, whether in credit or in arrears",
          "Send invoices and statements to parents",
          "Print or send a receipt for every payment",
          "Remind parents of overdue fees by SMS",
        ],
        image: "/erp/school-payment.webp",
      },
      {
        title: "Register classes and subjects without the paperwork",
        blurb:
          "Placing students into classes and subjects by hand is slow, and mistakes follow them all term. Do it on screen and the lists are right from the first day.",
        bulletsLead: "From the dashboard you can:",
        bullets: [
          "Register a whole class or stream for its subjects in one step",
          "Register individual students for optional subjects",
          "Publish and update subject and course schedules",
          "Assign teachers, rooms and resources to each subject",
          "Share up-to-date class lists with teachers, parents and students",
          "Avoid the errors that come with copying lists by hand",
        ],
        image: "/erp/school-classes.webp",
      },
      {
        title: "Give teachers and staff one shared timetable",
        blurb:
          "A good timetable has to balance classes, teachers and rooms. Build it once in a shared place and clashes are caught before the term begins.",
        bulletsLead: "With the timetable you can:",
        bullets: [
          "Create class and teacher timetables",
          "Schedule school activities, events and the term calendar",
          "See each teacher's lessons and workload",
          "Look up staff details when you need them",
          "Let every member of staff see their own schedule",
        ],
        image: "/erp/school-staff.webp",
      },
      {
        title: "Run exams and release results without the late nights",
        blurb:
          "Compiling marks by hand takes teachers away from teaching. Here they enter marks once, and grades, positions and report cards are prepared for them.",
        bulletsLead: "Teachers and the exams office can:",
        bullets: [
          "Schedule examinations and CATs",
          "Track attendance in each class leading up to exams",
          "Enter marks per subject",
          "Have grades, totals and class positions worked out automatically",
          "Produce report cards for a whole class at once",
          "Analyse performance by student, subject and class",
        ],
        image: "/erp/school-exam.webp",
      },
      {
        title: "Keep parents informed",
        blurb:
          "Parents want to know how their child is doing and what they owe. Tell them directly, without printing a letter for every bag.",
        bulletsLead: "Parents can receive by SMS:",
        bullets: [
          "Exam results and performance summaries",
          "Fee balances and due dates",
          "Confirmation when a payment is received",
          "Opening, closing and event dates",
          "Notices from the school office",
        ],
        image: "/erp/school-parents.webp",
      },
      {
        title: "Manage the school store",
        blurb:
          "If your school sells uniforms, books or stationery, or issues equipment, that is stock like any other. Know what you have and when to reorder.",
        bulletsLead: "From the store you can:",
        bullets: [
          "Track stock levels with current prices",
          "Get an alert when an item runs low",
          "Keep supplier details and prepare quotations",
          "Sell to students and accept M-Pesa",
          "Record books and equipment issued to students",
        ],
        image: "/erp/school-uniform.webp",
      },
    ],
    roles: [
      {
        title: "Head and administrators",
        body: "A live view of enrolment, fee collection and performance, with the reports the board asks for.",
      },
      {
        title: "Bursar and accounts",
        body: "Payments that post themselves, balances that are always current and far less reconciliation.",
      },
      {
        title: "Teachers",
        body: "Class lists, timetables and mark entry in one place, with report cards prepared for them.",
      },
      {
        title: "Parents and students",
        body: "Timely SMS updates on results, fees and school dates, and clear statements when they ask.",
      },
    ],
    customisation: {
      blurb:
        "Every school is organised differently. These are set up to match yours, and your administrator can change them as the school grows.",
      items: [
        "School profile and preferences",
        "Classes and streams",
        "Subjects and lessons",
        "Terms or semesters",
        "Fee structures",
        "Exams and grading scales",
        "Departments",
        "Teachers, staff roles and permissions",
      ],
    },
    reports: [
      "Fee collection and outstanding balances",
      "Exam results by class and subject",
      "Student performance over time",
      "Enrolment by class and stream",
      "Attendance",
      "Subject and course registration",
      "Store sales and stock",
      "Term and annual summaries",
    ],
    relatedPosts: [
      "how-to-choose-a-school-management-system-in-kenya",
      "mpesa-integration-for-your-business",
      "data-protection-act-and-your-customer-list",
    ],
  },
  {
    slug: "property",
    name: "Property Management System",
    shortName: "Property",
    icon: Building2,
    summary:
      "Tenants, leases, rent collection and maintenance for residential and commercial property.",
    headline:
      "Collect rent on time and know the state of every unit",
    subtitle:
      "A property system for landlords and agents managing residential or commercial units, from one building to a full portfolio.",
    image: "/erp/property-overview.webp",
    intro: [
      "If you manage property, your phone never stops. One tenant says they paid last week, another has a leaking tap, the landlord wants to know why the money is short, and you are scrolling through M-Pesa messages trying to work out who has paid. With a notebook or a spreadsheet, arrears build up before you notice.",
      "It does not have to feel like chasing. We build property systems that invoice tenants automatically, match each payment to the right unit as it arrives and give every owner a clear statement at the end of the month, so you can manage more units with less running around.",
      "It suits landlords, property agents, estate managers and housing developers, with residential, commercial or mixed property.",
    ],
    capabilities: [
      "Properties, blocks and units",
      "Tenant and lease records",
      "Automatic monthly rent invoices",
      "M-Pesa and bank rent payments",
      "Receipts and reminders by SMS",
      "Water and utility billing",
      "Deposits and refunds",
      "Late payment penalties",
      "Maintenance requests and costs",
      "Landlord statements and remittances",
      "Agent commission",
      "Vacancy tracking",
      "Expenses per property",
      "Occupancy and arrears reports",
    ],
    sections: [
      {
        title: "Every unit and tenant on record",
        blurb:
          "See at a glance which units are occupied, which are vacant and when each lease ends.",
        bulletsLead: "For each property you can:",
        bullets: [
          "Group units by owner, block and location",
          "Record lease terms, rent and deposit for each tenant",
          "Keep tenant contacts and documents on file",
          "Follow a checklist when a tenant moves in or out",
          "See vacancies and leases about to expire",
        ],
        image: "/erp/property-tenants.webp",
      },
      {
        title: "Rent collection that runs itself",
        blurb:
          "Invoices go out on schedule, and payments are matched to the right tenant without anyone posting them by hand.",
        bulletsLead: "With rent collection you can:",
        bullets: [
          "Send rent and service charge invoices automatically each month",
          "Receive M-Pesa and bank payments matched to the unit",
          "Send receipts and reminders by SMS",
          "Apply penalties for late payment where your lease allows",
          "See who has paid and who has not, at any moment",
        ],
        image: "/erp/restaurant-money.webp",
      },
      {
        title: "Utilities billed fairly",
        blurb:
          "Record meter readings and bill each tenant for what they actually used.",
        bulletsLead: "With utility billing you can:",
        bullets: [
          "Capture water and electricity meter readings",
          "Bill per unit or share a common charge",
          "Put utilities on the same invoice as rent",
          "Keep a reading history for every unit",
        ],
        image: "/erp/property-utilities.webp",
      },
      {
        title: "Maintenance that gets closed out",
        blurb:
          "A request is logged, assigned and followed until the work is done and its cost is recorded.",
        bulletsLead: "For repairs and maintenance you can:",
        bullets: [
          "Log requests against a unit",
          "Assign work to staff or contractors",
          "Record the cost against the property",
          "Keep the tenant updated on progress",
          "See repair history for every unit",
        ],
        image: "/erp/property-maintenance.webp",
      },
      {
        title: "Clear statements for every owner",
        blurb:
          "Owners want to know what came in, what went out and what they are being paid. Give them that without building it by hand.",
        bulletsLead: "For each landlord you can:",
        bullets: [
          "Produce a monthly statement of rent, expenses and commission",
          "Record remittances paid to the owner",
          "Track deposits held on their behalf",
          "Report on arrears and vacancies in their property",
        ],
        image: "/erp/restaurant-account.webp",
      },
      {
        title: "Your whole portfolio under control",
        blurb:
          "Whether you manage ten units or a thousand, you see them in one place and decide who on your team can do what.",
        bulletsLead: "From the office you can:",
        bullets: [
          "See all properties on one dashboard",
          "Give caretakers, agents and accountants their own access",
          "Record expenses per property",
          "Compare performance across buildings",
        ],
        image: "/erp/restaurant-control.webp",
      },
    ],
    roles: [
      {
        title: "Landlords and owners",
        body: "Rent that arrives on time and a clear monthly statement for every property.",
      },
      {
        title: "Property agents",
        body: "One system for every client's portfolio, with commission worked out for you.",
      },
      {
        title: "Caretakers and maintenance",
        body: "A simple list of what needs fixing and where.",
      },
      {
        title: "Tenants",
        body: "Timely invoices, instant receipts and repairs that are followed up.",
      },
    ],
    customisation: {
      blurb:
        "Leases and charges differ from one property to the next. These are set up to match yours.",
      items: [
        "Property and unit types",
        "Rent and service charges",
        "Utility rates",
        "Penalty rules",
        "Invoice dates and reminders",
        "Commission rates",
        "Staff roles and permissions",
        "Statement layouts",
      ],
    },
    reports: [
      "Rent roll and collections",
      "Arrears by age",
      "Occupancy and vacancy",
      "Landlord statements",
      "Maintenance costs by property",
      "Deposits held",
      "Utility consumption",
      "Income and expenses per property",
    ],
    relatedPosts: [
      "mpesa-integration-for-your-business",
      "the-spreadsheet-that-runs-your-company",
      "data-protection-act-and-your-customer-list",
    ],
  },
  {
    slug: "payroll",
    name: "Payroll Management System",
    shortName: "Payroll",
    icon: Banknote,
    summary:
      "Accurate salaries, statutory deductions and payslips every month, without the spreadsheet scramble.",
    headline:
      "Run payroll in minutes and get the deductions right",
    subtitle:
      "A payroll system that calculates pay, applies statutory deductions and produces the payslips, payment files and returns your team needs.",
    image: "/erp/payroll-overview.webp",
    intro: [
      "If you prepare payroll, you know the last week of the month. You are checking attendance, updating a spreadsheet that only you understand, working out deductions and hoping no rate changed since the last run. One broken formula affects every employee at once, and a wrong return brings a penalty.",
      "Your people should be paid correctly and on time without it costing you a week of worry. We build payroll systems that hold your staff records, apply the current deductions and produce the payslips, payment files and returns you need, so pay day becomes routine.",
      "It suits businesses, schools, hospitals, NGOs, SACCOs and any organisation with permanent, contract or casual staff.",
    ],
    capabilities: [
      "Employee records and contracts",
      "Basic pay, allowances and benefits",
      "PAYE, NSSF, SHIF and Housing Levy",
      "Loans, advances and other deductions",
      "Overtime and casual workers",
      "Leave and attendance",
      "Payroll approval before closing",
      "Payslips by email, SMS or print",
      "Bank and M-Pesa payment schedules",
      "Statutory return files",
      "Departments and cost centres",
      "P9 and year-end summaries",
      "Payroll history and audit trail",
      "Payroll cost reports",
    ],
    sections: [
      {
        title: "Staff records in one place",
        blurb:
          "Everything payroll depends on is kept with the employee, so each run starts from accurate details.",
        bulletsLead: "For each employee you can keep:",
        bullets: [
          "Personal, tax and bank or M-Pesa details",
          "Job title, department and pay grade",
          "Contract type: permanent, contract or casual",
          "Allowances and benefits",
          "Documents such as contracts and certificates",
          "Start and end dates, so joiners and leavers are paid correctly",
        ],
        image: "/erp/restaurant-account.webp",
      },
      {
        title: "Pay worked out for you",
        blurb:
          "Set up how each person is paid once. Every month the system does the arithmetic the same way, without a formula to break.",
        bulletsLead: "In each pay run you can:",
        bullets: [
          "Calculate basic pay, allowances and overtime",
          "Pay casual and hourly workers for the time they worked",
          "Add bonuses, commissions and arrears",
          "Handle part-month pay for joiners and leavers",
          "Review everything before it is final",
        ],
        image: "/erp/payroll-calculations.webp",
      },
      {
        title: "Deductions you do not have to worry about",
        blurb:
          "Statutory and internal deductions are applied by rule. When a rate changes, it is updated in one place.",
        bulletsLead: "The system applies:",
        bullets: [
          "PAYE, with reliefs",
          "NSSF, SHIF and Affordable Housing Levy",
          "Loans and salary advances, with running balances",
          "SACCO, union, pension and insurance contributions",
          "Any other deduction you define",
        ],
        image: "/erp/payroll-deductions.webp",
      },
      {
        title: "Pay everyone without retyping",
        blurb:
          "Once a payroll is approved, the payment files and payslips are ready to go.",
        bulletsLead: "On pay day you can:",
        bullets: [
          "Export bank transfer and M-Pesa payment schedules",
          "Send each employee their payslip",
          "Require approval before a payroll is closed",
          "Correct a mistake with a clear record of what changed",
        ],
        image: "/erp/restaurant-money.webp",
      },
      {
        title: "Leave and attendance that feed payroll",
        blurb:
          "Days worked and days off flow into the pay run, so adjustments are not left to memory.",
        bulletsLead: "With leave and attendance you can:",
        bullets: [
          "Track leave balances and approve requests",
          "Record absences and overtime",
          "Apply public holiday rules",
          "Carry leave forward or pay it out",
        ],
        image: "/erp/payroll-leave.webp",
      },
      {
        title: "Returns ready when they are due",
        blurb:
          "The schedules you file every month come straight from the payroll you just ran.",
        bulletsLead: "From each payroll you get:",
        bullets: [
          "Statutory deduction schedules ready to file",
          "Year-end tax summaries for every employee",
          "Payroll cost by department",
          "A full history of every past payroll",
        ],
        image: "/erp/payroll-returns.webp",
      },
    ],
    roles: [
      {
        title: "Business owners",
        body: "Confidence that staff are paid correctly and returns are filed on time, and a clear view of what payroll costs.",
      },
      {
        title: "HR and payroll officers",
        body: "A pay run that takes minutes, with far fewer queries to answer.",
      },
      {
        title: "Accountants",
        body: "Schedules, payment files and summaries that match, month after month.",
      },
      {
        title: "Employees",
        body: "A clear payslip every month and a record of their leave and loans.",
      },
    ],
    customisation: {
      blurb:
        "Pay structures differ from one employer to the next. These are set up to match yours.",
      items: [
        "Pay grades and scales",
        "Allowances and benefits",
        "Deduction types",
        "Departments and cost centres",
        "Pay periods",
        "Leave types and entitlements",
        "Approval steps",
        "Payslip layout",
      ],
    },
    reports: [
      "Payroll summary per period",
      "Statutory deduction schedules",
      "Cost by department",
      "Loan and advance balances",
      "Leave balances",
      "Overtime and casual pay",
      "Bank and M-Pesa payment lists",
      "Year-end employee tax summaries",
    ],
    relatedPosts: [
      "the-spreadsheet-that-runs-your-company",
      "what-is-an-erp-system",
      "custom-software-or-off-the-shelf",
    ],
  },
  {
    slug: "security-firm",
    name: "Security Firm Management System",
    shortName: "Security Firm",
    icon: ShieldCheck,
    summary:
      "Guard deployment, attendance, client billing and payroll for private security companies.",
    headline:
      "Know which guard is at which site, every shift",
    subtitle:
      "A system for security companies that links guard deployment and attendance to client invoices and guard pay.",
    image: "/erp/security-overview.webp",
    intro: [
      "If you run a security company, you know the call you dread: a client saying nobody was at the gate last night. With hundreds of guards across dozens of sites, you are relying on paper registers and phone calls to know who reported where, and at the end of the month you are paying for shifts nobody can confirm.",
      "Your business is built on being present and being trusted. We build systems that plan deployments, record attendance at each site and use that same record to bill your clients and pay your guards, so you can prove the service you delivered and stop losing money on the gaps.",
      "It suits guarding companies of any size, including those offering alarm response, cash-in-transit escort and event security.",
    ],
    capabilities: [
      "Guard records and documents",
      "Client and site register",
      "Shift and deployment planning",
      "Attendance per site and shift",
      "Relief and replacement cover",
      "Supervisor visits and site checks",
      "Incident reports",
      "Uniform and equipment issue",
      "Client contracts and invoicing",
      "M-Pesa and bank payments",
      "Guard payroll from attendance",
      "Statutory deductions and payslips",
      "Leave and disciplinary records",
      "Deployment and revenue reports",
    ],
    sections: [
      {
        title: "Every guard on file",
        blurb:
          "Vetting and paperwork matter in this business. Keep each guard's details and documents where you can find them.",
        bulletsLead: "For each guard you can keep:",
        bullets: [
          "Personal details, photo and next of kin",
          "ID, certificates and clearance documents, with expiry dates",
          "Training and qualifications",
          "Deployment history",
          "Leave, warnings and commendations",
        ],
        image: "/erp/security-guards.webp",
      },
      {
        title: "Plan deployments clearly",
        blurb:
          "Assign guards to sites and shifts, and see a gap before it becomes an uncovered post.",
        bulletsLead: "With deployment planning you can:",
        bullets: [
          "Build day and night rosters for each site",
          "Compare guards required with guards assigned",
          "Assign relief guards to cover leave and absence",
          "Move guards between sites and keep the history",
          "See where every guard is posted today",
        ],
        image: "/erp/restaurant-control.webp",
      },
      {
        title: "Attendance you can stand behind",
        blurb:
          "Supervisors record who reported at each site. That gives operations, billing and payroll one record to work from.",
        bulletsLead: "In the field your supervisors can:",
        bullets: [
          "Check guards in for each site and shift",
          "Flag absences and late arrivals",
          "Log site visits and inspections",
          "Report incidents against the site where they happened",
          "Arrange a replacement on the spot",
        ],
        image: "/erp/school-uniform.webp",
      },
      {
        title: "Uniform and equipment accounted for",
        blurb:
          "Uniforms, radios and torches cost money and tend to go missing. Know who has what.",
        bulletsLead: "From the store you can:",
        bullets: [
          "Issue uniform and equipment to each guard",
          "Record returns when a guard leaves",
          "Recover the cost of lost items through payroll",
          "Track stock and reorder in good time",
        ],
        image: "/erp/restaurant-inventory.webp",
      },
      {
        title: "Bill clients for exactly what was delivered",
        blurb:
          "Invoices follow the contract and the attendance record, so a query from a client is easy to answer.",
        bulletsLead: "For each client you can:",
        bullets: [
          "Set contract rates per site and guard type",
          "Send recurring monthly invoices",
          "Adjust an invoice for extra or missed shifts",
          "Receive payments by M-Pesa and bank",
          "See statements and outstanding balances",
        ],
        image: "/erp/restaurant-money.webp",
      },
      {
        title: "Pay guards accurately and on time",
        blurb:
          "Days worked flow into payroll, along with deductions for uniform, advances and statutory amounts.",
        bulletsLead: "In each pay run the system will:",
        bullets: [
          "Calculate pay from shifts actually worked",
          "Add overtime and public holiday pay",
          "Deduct uniform, advances and loans",
          "Apply statutory deductions",
          "Produce payslips and payment schedules",
        ],
        image: "/erp/payroll-calculations.webp",
      },
    ],
    roles: [
      {
        title: "Directors",
        body: "Coverage, revenue and costs for every contract, and proof of service when a client asks.",
      },
      {
        title: "Operations managers and supervisors",
        body: "Rosters, attendance and incidents in one place, with gaps visible early.",
      },
      {
        title: "Accounts and payroll",
        body: "Invoices and pay that come straight from attendance, without rebuilding registers.",
      },
      {
        title: "Guards and clients",
        body: "Guards are paid correctly for every shift; clients get accurate invoices and reliable cover.",
      },
    ],
    customisation: {
      blurb:
        "Contracts, shifts and pay rules differ from firm to firm. These are set up to match yours.",
      items: [
        "Sites and posts",
        "Shift patterns",
        "Guard grades and pay rates",
        "Contract rates",
        "Uniform and equipment lists",
        "Deduction rules",
        "Staff roles and permissions",
        "Invoice layout",
      ],
    },
    reports: [
      "Deployment by site and shift",
      "Attendance and absenteeism",
      "Incidents by site",
      "Revenue by client",
      "Outstanding client balances",
      "Guard payroll summary",
      "Uniform and equipment issued",
      "Profit per contract",
    ],
    relatedPosts: [
      "what-is-an-erp-system",
      "custom-software-or-off-the-shelf",
      "the-spreadsheet-that-runs-your-company",
    ],
  },
  {
    slug: "petrol-station",
    name: "Petrol Station Management System",
    shortName: "Petrol Station",
    icon: Fuel,
    summary:
      "Pump readings, shift reconciliation, tank stock and credit customers for fuel stations.",
    headline:
      "Reconcile every litre and every shilling, every shift",
    subtitle:
      "A fuel station system that compares pump readings with money collected and fuel in the tank, so losses are found on the day they happen.",
    image: "/erp/petrol-overview.webp",
    intro: [
      "If you run a fuel station, you know the margins are thin and the cash is heavy. A shift closes a few litres short, the attendant has an explanation, and by the time you sit down with the dip readings and the banking slips it is three shifts later. Small shortages, left alone, become a large loss by the end of the month.",
      "You should know where every litre went on the day it was sold. We build station systems that record the meter readings for each pump and attendant, reconcile them against the money collected and track fuel from the delivery truck to the nozzle.",
      "It suits single stations and dealer networks, including those with a shop, lubricant bay, gas sales or car wash on site.",
    ],
    capabilities: [
      "Pump and nozzle meter readings",
      "Shifts per attendant",
      "Cash, M-Pesa and card reconciliation",
      "Shortage and excess tracking",
      "Tank dips and fuel stock",
      "Fuel deliveries and suppliers",
      "Price changes with history",
      "Credit customers and fleet accounts",
      "Invoices and statements",
      "Lubricant, gas and shop sales",
      "Expenses per shift",
      "Multiple stations on one system",
      "Banking and cash drops",
      "Daily and monthly reports",
    ],
    sections: [
      {
        title: "Shift reconciliation done properly",
        blurb:
          "Opening and closing readings give the litres sold. The system works out what each attendant should hand in.",
        bulletsLead: "At the end of each shift you can:",
        bullets: [
          "Enter opening and closing meters for each nozzle",
          "See the expected sales for each attendant",
          "Record what was collected in cash, M-Pesa, card and on credit",
          "See any shortage or excess straight away",
          "Record cash drops and banking",
        ],
        image: "/erp/payroll-deductions.webp",
      },
      {
        title: "Fuel stock from delivery to nozzle",
        blurb:
          "Track what was delivered, what was sold and what the tank dip says is left.",
        bulletsLead: "For each tank you can:",
        bullets: [
          "Record deliveries by product and supplier",
          "Enter daily dip readings",
          "Compare book stock with physical stock",
          "Track variance and losses over time",
          "Know when to order the next delivery",
        ],
        image: "/erp/school-uniform.webp",
      },
      {
        title: "Credit and fleet customers",
        blurb:
          "Fuel sold on account is recorded per vehicle and invoiced without rebuilding it from a pile of dockets.",
        bulletsLead: "For each account customer you can:",
        bullets: [
          "Set a credit limit",
          "Record every fill by vehicle and driver",
          "Send invoices and statements",
          "Receive payments and see what is outstanding",
          "Send reminders when an account is overdue",
        ],
        image: "/erp/petrol-fleet.webp",
      },
      {
        title: "More than fuel",
        blurb:
          "Lubricants, gas cylinders and shop items go through the same system and are counted in the same day-end.",
        bulletsLead: "From the shop and bay you can:",
        bullets: [
          "Sell lubricants, gas and shop items",
          "Track their stock and reorder levels",
          "Include these sales in the shift reconciliation",
          "Record services such as car wash and tyre repair",
        ],
        image: "/erp/restaurant-inventory.webp",
      },
      {
        title: "Every shilling accounted for",
        blurb:
          "Know what the station made today, after fuel cost and expenses, without waiting for the accountant.",
        bulletsLead: "You will always know:",
        bullets: [
          "Sales and margin for each product",
          "Cash, M-Pesa and card totals for each shift",
          "Expenses paid out of the till",
          "What is owed by credit customers and to suppliers",
          "Profit for the day, the week and the month",
        ],
        image: "/erp/restaurant-money.webp",
      },
      {
        title: "All your stations on one screen",
        blurb:
          "If you run more than one station, see them side by side and control prices and users from one place.",
        bulletsLead: "From head office you can:",
        bullets: [
          "Change pump prices and keep a history of every change",
          "Compare stations by volume, margin and losses",
          "Give managers, supervisors and attendants their own access",
          "Spot a station or shift with unusual shortages",
        ],
        image: "/erp/restaurant-control.webp",
      },
    ],
    roles: [
      {
        title: "Dealers and owners",
        body: "Daily certainty about litres, cash and profit at every station.",
      },
      {
        title: "Station managers",
        body: "A shift close that takes minutes and shows any problem while the attendant is still there.",
      },
      {
        title: "Attendants",
        body: "A fair, clear record of what they sold and handed in.",
      },
      {
        title: "Accounts",
        body: "Credit customers, suppliers and banking reconciled without a stack of paper.",
      },
    ],
    customisation: {
      blurb:
        "Stations differ in pumps, products and how shifts are run. These are set up to match yours.",
      items: [
        "Tanks, pumps and nozzles",
        "Products and prices",
        "Shift patterns",
        "Payment methods",
        "Credit customers and limits",
        "Expense categories",
        "Staff roles and permissions",
        "Stations and shops",
      ],
    },
    reports: [
      "Daily sales by product and pump",
      "Attendant shortages and excesses",
      "Tank stock and variance",
      "Credit customer balances",
      "Margin by product",
      "Deliveries and supplier balances",
      "Expenses by category",
      "Station profit and loss",
    ],
    relatedPosts: [
      "etims-is-here-for-every-business",
      "what-is-an-erp-system",
      "mpesa-integration-for-your-business",
    ],
  },
];

export function getErpModule(slug: string) {
  return erpModules.find((m) => m.slug === slug);
}

export const erpCommonFeatures: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Smartphone,
    title: "Payments your customers already use",
    body: "Cash, M-Pesa, card and bank payments recorded against the right account.",
  },
  {
    icon: Boxes,
    title: "Stock and inventory control",
    body: "Know what you have, what is running low and what it cost you.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Financial reports",
    body: "Sales, expenses and profit for a day, a month or a year, ready when you need them.",
  },
  {
    icon: UserCog,
    title: "Roles and permissions",
    body: "Each person sees and does what their job requires, with a record of who did what.",
  },
  {
    icon: CloudUpload,
    title: "Backed-up data",
    body: "Your records are backed up automatically, so a lost laptop is not a lost business.",
  },
  {
    icon: Headset,
    title: "Training and support",
    body: "We set the system up with your team, train them on it and stay available afterwards.",
  },
];
