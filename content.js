/**
 * WEDDING WEBSITE CONTENT
 * ========================
 * Edit this file to update all website content.
 * Supports three languages: "it" (Italian), "en" (English), "he" (Hebrew/RTL).
 * Do NOT touch index.html, style.css, or app.js for content changes.
 *
 * Structure: every translatable string lives inside a lang: { it, en, he } object.
 * Non-translatable values (URLs, dates, image paths) live at the top level.
 */

const CONTENT = {

  /* ── Site settings ──────────────────────────────────────── */
  defaultLang: "it",          // "it" | "en" | "he"
  availableLangs: ["it", "en", "he"],

  /* ── Couple ─────────────────────────────────────────────── */
  couple: {
    name1:     "Tsina",
    name2:     "Simone",
    ampersand: "&",
    tagline: {
      it: "Due cuori, una storia",
      en: "Two hearts, one story",
      he: "שני לבבות, סיפור אחד",
    },
  },

  /* ── Wedding dates ──────────────────────────────────────── */
  date: {
    // Countdown targets the ceremony on the 17th
    iso:         "2026-10-17T17:00:00",
    display: {
      it: "16 – 18 Ottobre 2026",
      en: "October 16 – 18, 2026",
      he: "16 – 18 באוקטובר 2026",
    },
    dayRange: {
      it: "Venerdì – Domenica",
      en: "Friday – Sunday",
      he: "שישי – ראשון",
    },
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    backgroundImage: "images/hero.jpg",
    overlayOpacity:  0.45,
    venueLabel: {
      it: "Castello di Rosciano · Umbria, Italia",
      en: "Castello di Rosciano · Umbria, Italy",
      he: "קסטלו די רוסקיאנו · אומבריה, איטליה",
    },
  },

  /* ── Nav labels ─────────────────────────────────────────── */
  nav: {
    story:      { it: "Storia",     en: "Story",     he: "הסיפור שלנו" },
    details:    { it: "Dettagli",   en: "Details",   he: "פרטים" },
    schedule:   { it: "Programma",  en: "Schedule",  he: "לוח זמנים" },
    venue:      { it: "Location",   en: "Venue",     he: "מקום האירוע" },
    explore:    { it: "Dintorni",   en: "Explore",   he: "לגלות" },
    travel:     { it: "Arrivo",     en: "Travel",    he: "הגעה" },
    faq:        { it: "FAQ",        en: "FAQ",       he: "שאלות נפוצות" },
    gifts:      { it: "Regali",     en: "Gifts",     he: "מתנות" },
    gallery:    { it: "Galleria",   en: "Gallery",   he: "גלריה" },
    rsvp:       { it: "RSVP",       en: "RSVP",      he: "אישור הגעה" },
  },

  /* ── Our Story ──────────────────────────────────────────── */
  story: {
    sectionTitle: { it: "La Nostra Storia", en: "Our Story", he: "הסיפור שלנו" },
    milestones: [
      {
        year:  "2019",
        title: { it: "Il primo incontro",  en: "The first meeting",  he: "הפגישה הראשונה" },
        text: {
          it: "Ci siamo conosciuti una sera d'estate durante una cena tra amici. Una risata condivisa, uno sguardo, e il mondo ha cambiato colore.",
          en: "We met on a summer evening at a dinner with friends. A shared laugh, a glance, and the world changed colour.",
          he: "נפגשנו בערב קיץ בארוחת ערב עם חברים. צחוק משותף, מבט אחד, והעולם שינה את צבעו.",
        },
        image: "images/story1.jpg",
      },
      {
        year:  "2023",
        title: { it: "La proposta",  en: "The proposal",  he: "ההצעה" },
        text: {
          it: "Tra le colline dell'Umbria, al tramonto, Simone ha tirato fuori l'anello. Tsina ha detto sì prima ancora che finisse la domanda.",
          en: "Amid the Umbrian hills at sunset, Simone brought out the ring. Tsina said yes before he even finished the question.",
          he: "בין גבעות אומבריה, בשקיעה, סימונה הוציא את הטבעת. צינה אמרה כן לפני שהוא סיים אפילו לשאול.",
        },
        image: "images/story2.jpg",
      },
      {
        year:  "2026",
        title: { it: "Il grande giorno",  en: "The big day",  he: "היום הגדול" },
        text: {
          it: "Finalmente pronti a iniziare questa nuova avventura insieme, circondati dalle persone che amiamo.",
          en: "Finally ready to begin this new adventure together, surrounded by the people we love.",
          he: "סוף סוף מוכנים להתחיל את ההרפתקה החדשה הזו יחד, מוקפים באנשים שאנו אוהבים.",
        },
        image: "images/story3.jpg",
      },
    ],
  },

  /* ── Event Details (3-day overview) ────────────────────── */
  details: {
    sectionTitle: { it: "Il Weekend", en: "The Weekend", he: "סוף השבוע" },
    cards: [
      {
        icon:  "🏰",
        title: { it: "Venerdì 16 – Arrivo",     en: "Friday 16 – Arrival",      he: "שישי 16 – הגעה" },
        lines: {
          it: ["Check-in dalle ore 14:00", "Castello di Rosciano", "Pizza party ore 19:00"],
          en: ["Check-in from 2:00 PM",    "Castello di Rosciano", "Pizza party at 7:00 PM"],
          he: ["צ'ק-אין מ-14:00",          "קסטלו די רוסקיאנו",   "מסיבת פיצה ב-19:00"],
        },
      },
      {
        icon:  "💍",
        title: { it: "Sabato 17 – Cerimonia & Festa", en: "Saturday 17 – Ceremony & Party", he: "שבת 17 – טקס וחגיגה" },
        lines: {
          it: ["Cerimonia ore 17:00", "Ricevimento & cena", "Festa fino a tarda notte"],
          en: ["Ceremony at 5:00 PM",  "Reception & dinner", "Party until late"],
          he: ["טקס ב-17:00",         "קבלת פנים וארוחת ערב", "מסיבה עד שעות הלילה"],
        },
      },
      {
        icon:  "🌅",
        title: { it: "Domenica 18 – Arrivederci", en: "Sunday 18 – Farewell", he: "ראשון 18 – פרידה" },
        lines: {
          it: ["Colazione insieme", "Check-out entro le 11:00", "Arrivederci e grazie!"],
          en: ["Breakfast together",  "Check-out by 11:00 AM",  "Goodbye and thank you!"],
          he: ["ארוחת בוקר משותפת",  "צ'ק-אאוט עד 11:00",     "להתראות ותודה!"],
        },
      },
    ],
  },

  /* ── Schedule (Saturday programme) ─────────────────────── */
  schedule: {
    sectionTitle: { it: "Il Programma di Sabato", en: "Saturday Programme", he: "תוכנית השבת" },
    items: [
      {
        time:  "16:30",
        label: { it: "Accoglienza degli ospiti",  en: "Guest welcome",         he: "קבלת אורחים" },
        note:  { it: "Giardini del castello",     en: "Castle gardens",        he: "גני הטירה" },
      },
      {
        time:  "17:00",
        label: { it: "Cerimonia",                 en: "Ceremony",              he: "טקס" },
        note:  { it: "",                          en: "",                      he: "" },
      },
      {
        time:  "18:00",
        label: { it: "Vin d'honneur & aperitivo", en: "Drinks & aperitivo",    he: "שתייה ואפריטיבו" },
        note:  { it: "Terrazza panoramica",       en: "Panoramic terrace",     he: "מרפסת פנורמית" },
      },
      {
        time:  "20:00",
        label: { it: "Cena",                      en: "Dinner",                he: "ארוחת ערב" },
        note:  { it: "Menù toscano-umbro",        en: "Tuscan-Umbrian menu",   he: "תפריט טוסקני-אומברי" },
      },
      {
        time:  "21:30",
        label: { it: "Taglio della torta",        en: "Cake cutting",          he: "חיתוך העוגה" },
        note:  { it: "",                          en: "",                      he: "" },
      },
      {
        time:  "22:00",
        label: { it: "Festa & balli",             en: "Party & dancing",       he: "מסיבה וריקודים" },
        note:  { it: "DJ set",                    en: "DJ set",                he: "DJ סט" },
      },
    ],
  },

  /* ── Venue ──────────────────────────────────────────────── */
  venue: {
    sectionTitle: { it: "La Location",   en: "The Venue",     he: "מקום האירוע" },
    name:         "Castello di Rosciano",
    website:      "https://www.castellodirosciano.com/en/",
    description: {
      it: "Immerso nei boschi di lecci tra Assisi e Perugia, il Castello di Rosciano è una dimora medievale del XII secolo con vista mozzafiato sull'intera Valle Umbra. Gli ospiti soggiornano direttamente nel castello, rendendo il weekend un'esperienza indimenticabile.",
      en: "Nestled among holm-oak forests between Assisi and Perugia, Castello di Rosciano is a 12th-century medieval manor with breathtaking views over the entire Umbrian Valley. Guests stay directly in the castle, making the whole weekend an unforgettable experience.",
      he: "מוקף ביערות אלון בין אסיסי לפרוג'ה, קסטלו די רוסקיאנו הוא אחוזה מימי הביניים מהמאה ה-12 עם נוף עוצר נשימה על עמק אומבריה. האורחים שוהים ישירות בטירה, מה שהופך את סוף השבוע לחוויה בלתי נשכחת.",
    },
    address:       "Castello di Rosciano, Torgiano (PG), Umbria, Italy",
    mapsEmbedUrl:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11519.7!2d12.4598!3d43.0158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132eed8000000001%3A0x1!2sCastello+di+Rosciano!5e0!3m2!1sit!2sit!4v1700000000000",
    directionsUrl: "https://maps.google.com/?q=Castello+di+Rosciano+Torgiano+Perugia",
    directionsLabel: { it: "Indicazioni stradali", en: "Get directions", he: "הוראות הגעה" },
    websiteLabel:    { it: "Sito del castello",    en: "Castle website", he: "אתר הטירה" },
  },

  /* ── Explore / Attractions ──────────────────────────────── */
  explore: {
    sectionTitle: {
      it: "Cosa Visitare nei Dintorni",
      en: "Explore the Area",
      he: "לגלות את האזור",
    },
    intro: {
      it: "Il castello si trova nel cuore dell'Umbria, a pochi minuti da alcune delle città più belle d'Italia. Approfittate del weekend per esplorare!",
      en: "The castle sits in the heart of Umbria, minutes from some of Italy's most beautiful cities. Make the most of the weekend and explore!",
      he: "הטירה ממוקמת בלב אומבריה, דקות ספורות מכמה מהערים היפות ביותר באיטליה. נצלו את סוף השבוע וצאו לגלות!",
    },
    transportNote: {
      it: "Consigliamo di noleggiare un'auto: i luoghi sono collegati da strade panoramiche e non sempre raggiungibili comodamente con i mezzi. Noleggi disponibili all'aeroporto di Perugia e nelle principali città.",
      en: "We recommend renting a car — the sites are connected by scenic roads and not always easily reachable by public transport. Rentals available at Perugia Airport and in major cities.",
      he: "אנו ממליצים לשכור רכב — האתרים מחוברים בכבישים ציוריים ולא תמיד נגישים בנוחות בתחבורה ציבורית. השכרות זמינות בנמל התעופה של פרוג'ה ובערים הגדולות.",
    },
    carRentalLabel: {
      it: "Noleggia un'auto",
      en: "Rent a car",
      he: "שכור רכב",
    },
    carRentalUrl: "https://www.autoeurope.com/car-rental-perugia-airport/",
    places: [
      {
        name:  "Assisi",
        emoji: "⛪",
        drive: { it: "20 min",   en: "20 min",   he: "20 דק'" },
        desc: {
          it: "La città di San Francesco, con la sua Basilica patrimonio UNESCO e i vicoli medievali.",
          en: "The city of St. Francis, with its UNESCO Basilica and charming medieval lanes.",
          he: "עיר סנט פרנסיס, עם הבזיליקה שלה הרשומה ב-UNESCO והסמטאות המימי-ביניימיות.",
        },
      },
      {
        name:  "Perugia",
        emoji: "🏛️",
        drive: { it: "15 min",   en: "15 min",   he: "15 דק'" },
        desc: {
          it: "Capoluogo dell'Umbria, famosa per il cioccolato Perugina, l'Università e il centro storico sul colle.",
          en: "Umbria's capital, famous for Perugina chocolate, its hilltop historic centre, and vibrant university life.",
          he: "בירת אומבריה, מפורסמת בשוקולד פרוג'ינה, מרכזה ההיסטורי על הגבעה וחיי האוניברסיטה.",
        },
      },
      {
        name:  "Spello",
        emoji: "🌸",
        drive: { it: "25 min",   en: "25 min",   he: "25 דק'" },
        desc: {
          it: "Borgo medievale famoso per i vicoli fioriti e le terrazze di gerani. Un gioiello nascosto dell'Umbria.",
          en: "A medieval village famous for its flower-lined alleys and geranium terraces. A hidden gem of Umbria.",
          he: "כפר מימי ביניים מפורסם בסמטאות המרוצפות פרחים ומרפסות הגרניום. אבן חן נסתרת של אומבריה.",
        },
      },
      {
        name:  "Spoleto",
        emoji: "🎭",
        drive: { it: "40 min",   en: "40 min",   he: "40 דק'" },
        desc: {
          it: "Città d'arte e musica, sede del celebre Festival dei Due Mondi. Ponte delle Torri e Rocca Albornoziana.",
          en: "A city of art and music, home to the famous Festival of Two Worlds, the Ponte delle Torri bridge and the Rocca fortress.",
          he: "עיר של אמנות ומוזיקה, ביתו של פסטיבל שני העולמות המפורסם, גשר פונטה דלה טורי והמצודה.",
        },
      },
      {
        name:  "Todi",
        emoji: "🍷",
        drive: { it: "45 min",   en: "45 min",   he: "45 דק'" },
        desc: {
          it: "Considerata tra i borghi medievali più belli d'Italia, con piazze rinascimentali e vino Sagrantino.",
          en: "Considered one of Italy's most beautiful medieval villages, with Renaissance piazzas and Sagrantino wine.",
          he: "נחשבת לאחד הכפרים המימי-ביניימיים היפים ביותר באיטליה, עם פיאצות רנסנס ויין סגרנטינו.",
        },
      },
      {
        name:  "Orvieto",
        emoji: "🗿",
        drive: { it: "55 min",   en: "55 min",   he: "55 דק'" },
        desc: {
          it: "Arroccata su una rupe di tufo, con il suo Duomo gotico tra i più belli del mondo e il Pozzo di San Patrizio.",
          en: "Perched on a tufa cliff, with one of the world's most beautiful Gothic cathedrals and the famous St Patrick's Well.",
          he: "ניצבת על צוק טוף, עם קתדרלה גותית מהיפות בעולם ובאר סנט פטריק המפורסמת.",
        },
      },
    ],
  },

  /* ── Travel / How to get there ──────────────────────────── */
  travel: {
    sectionTitle: { it: "Come Arrivare",   en: "Getting There",    he: "איך להגיע" },
    intro: {
      it: "Il Castello di Rosciano si trova a Torgiano (PG), nel cuore dell'Umbria. Di seguito le opzioni di viaggio dai principali aeroporti.",
      en: "Castello di Rosciano is located in Torgiano (PG), in the heart of Umbria. Below are travel options from the main nearby airports.",
      he: "קסטלו די רוסקיאנו ממוקם בטורג'יאנו (PG), בלב אומבריה. להלן אפשרויות הנסיעה מנמלי התעופה הסמוכים.",
    },
    rentalTip: {
      it: "💡 Consiglio: noleggiare un'auto è l'opzione più comoda. I noleggi si trovano in tutti gli aeroporti elencati.",
      en: "💡 Tip: renting a car is the most convenient option. Rentals are available at all airports listed below.",
      he: "💡 טיפ: השכרת רכב היא האפשרות הנוחה ביותר. ניתן לשכור רכב בכל נמלי התעופה המפורטים.",
    },
    airports: [
      {
        code: "PEG",
        name: { it: "Perugia – San Francesco d'Assisi", en: "Perugia – San Francesco d'Assisi", he: "פרוג'ה – סן פרנצ'סקו ד'אסיסי" },
        distance: "14 km",
        drive:    { it: "~17 min in auto",    en: "~17 min by car",     he: "~17 דק' ברכב" },
        options: [
          {
            mode:  "🚗",
            label: { it: "Auto a noleggio",  en: "Rental car",         he: "השכרת רכב" },
            desc:  { it: "Noleggi disponibili all'aeroporto (SIXT, Europcar, ecc.).", en: "Rentals available at the airport (SIXT, Europcar, etc.).", he: "השכרות זמינות בנמל התעופה (SIXT, Europcar וכד')." },
          },
          {
            mode:  "🚕",
            label: { it: "Taxi",             en: "Taxi",               he: "מונית" },
            desc:  { it: "~17 minuti, circa €25–35.", en: "~17 minutes, approx. €25–35.", he: "~17 דקות, בערך €25–35." },
          },
        ],
      },
      {
        code: "FCO",
        name: { it: "Roma Fiumicino (Leonardo da Vinci)", en: "Rome Fiumicino (Leonardo da Vinci)", he: "רומא פיומיצ'ינו (לאונרדו דה וינצ'י)" },
        distance: "202 km",
        drive:    { it: "~2 ore in auto",     en: "~2 hours by car",    he: "~2 שעות ברכב" },
        options: [
          {
            mode:  "🚗",
            label: { it: "Auto a noleggio",   en: "Rental car",         he: "השכרת רכב" },
            desc:  { it: "Ampia scelta in aeroporto. Autostrada A1 fino a Orte, poi SS3bis/E45 verso Perugia.", en: "Wide choice at the airport. Take A1 to Orte, then SS3bis/E45 toward Perugia.", he: "מבחר רחב בנמל התעופה. קח A1 לאורטה, ואז SS3bis/E45 לכיוון פרוג'ה." },
          },
          {
            mode:  "🚆",
            label: { it: "Treno + taxi",      en: "Train + taxi",       he: "רכבת + מונית" },
            desc:  { it: "Treno FL1 da FCO → Roma Termini, poi Frecciarossa/Intercity verso Assisi o Perugia (~2h), poi taxi ~20 min.", en: "FL1 train FCO → Roma Termini, then fast train to Assisi or Perugia (~2h), then taxi ~20 min.", he: "רכבת FL1 FCO → רומא טרמיני, ואז רכבת מהירה לאסיסי או פרוג'ה (~2 שעות), ואז מונית ~20 דק'." },
          },
        ],
      },
      {
        code: "CIA",
        name: { it: "Roma Ciampino (G. B. Pastine)", en: "Rome Ciampino (G. B. Pastine)", he: "רומא צ'אמפינו (ג'י.בי. פסטינה)" },
        distance: "195 km",
        drive:    { it: "~2 ore in auto",     en: "~2 hours by car",    he: "~2 שעות ברכב" },
        options: [
          {
            mode:  "🚗",
            label: { it: "Auto a noleggio",   en: "Rental car",         he: "השכרת רכב" },
            desc:  { it: "Noleggi disponibili. GRA → A1 direzione Firenze, uscita Orte, poi E45 verso Perugia.", en: "Rentals available. GRA → A1 north to Orte exit, then E45 toward Perugia.", he: "השכרות זמינות. GRA → A1 צפונה לצומת אורטה, ואז E45 לכיוון פרוג'ה." },
          },
          {
            mode:  "🚌",
            label: { it: "Bus + treno",       en: "Bus + train",        he: "אוטובוס + רכבת" },
            desc:  { it: "Shuttle Terravision fino a Roma Termini, poi treno per Assisi/Perugia.", en: "Terravision shuttle to Roma Termini, then train to Assisi/Perugia.", he: "שאטל Terravision לרומא טרמיני, ואז רכבת לאסיסי/פרוג'ה." },
          },
        ],
      },
      {
        code: "FLR",
        name: { it: "Firenze Peretola (A. Vespucci)", en: "Florence Peretola (A. Vespucci)", he: "פירנצה פרטולה (א. וספוצ'י)" },
        distance: "175 km",
        drive:    { it: "~1h 50 min in auto", en: "~1h 50 min by car",  he: "~1 שעה 50 דק' ברכב" },
        options: [
          {
            mode:  "🚗",
            label: { it: "Auto a noleggio",   en: "Rental car",         he: "השכרת רכב" },
            desc:  { it: "Noleggi in aeroporto. A1 direzione Roma, uscita Valdichiana, poi raccordo verso Perugia.", en: "Rentals at the airport. A1 south, Valdichiana exit, then the Perugia link road.", he: "השכרות בנמל התעופה. A1 דרומה, צומת ולדיכיאנה, ואז כביש הקישור לפרוג'ה." },
          },
          {
            mode:  "🚆",
            label: { it: "Treno + taxi",      en: "Train + taxi",       he: "רכבת + מונית" },
            desc:  { it: "Treno Firenze SMN → Terontola-Cortona → Assisi (cambio). Poi taxi ~20 min.", en: "Train Florence SMN → Terontola-Cortona → Assisi (change). Then taxi ~20 min.", he: "רכבת פירנצה SMN → טרונטולה-קורטונה → אסיסי (החלפה). ואז מונית ~20 דק'." },
          },
        ],
      },
      {
        code: "AOI",
        name: { it: "Ancona Falconara (R. Sanzio)", en: "Ancona Falconara (R. Sanzio)", he: "אנקונה פלקונרה (ר. סנציו)" },
        distance: "118 km",
        drive:    { it: "~1h 30 min in auto", en: "~1h 30 min by car",  he: "~1 שעה 30 דק' ברכב" },
        options: [
          {
            mode:  "🚗",
            label: { it: "Auto a noleggio",   en: "Rental car",         he: "השכרת רכב" },
            desc:  { it: "Noleggi disponibili. SS76 verso Foligno, poi SS75 verso Perugia/Torgiano.", en: "Rentals available. SS76 toward Foligno, then SS75 toward Perugia/Torgiano.", he: "השכרות זמינות. SS76 לכיוון פוליניו, ואז SS75 לכיוון פרוג'ה/טורג'יאנו." },
          },
          {
            mode:  "🚆",
            label: { it: "Treno + taxi",      en: "Train + taxi",       he: "רכבת + מונית" },
            desc:  { it: "Treno Ancona → Foligno → Assisi. Poi taxi ~20 min fino al castello.", en: "Train Ancona → Foligno → Assisi. Then taxi ~20 min to the castle.", he: "רכבת אנקונה → פוליניו → אסיסי. ואז מונית ~20 דק' לטירה." },
          },
        ],
      },
    ],
  },

  /* ── FAQ ────────────────────────────────────────────────── */
  faq: {
    sectionTitle: { it: "Domande Frequenti", en: "FAQ", he: "שאלות נפוצות" },
    items: [
      {
        q: { it: "C'è un dress code?",                                 en: "Is there a dress code?",                           he: "האם יש קוד לבוש?" },
        a: { it: "Sì: abbigliamento elegante. Abiti lunghi per le signore, abito scuro per gli uomini. Evitate il bianco, grazie!", en: "Yes: smart elegant. Long dresses for ladies, dark suit for gentlemen. Please avoid white!", he: "כן: אלגנטי. שמלות ארוכות לגברות, חליפה כהה לגברים. אנא הימנעו מלבן!" },
      },
      {
        q: { it: "Posso portare i bambini?",                           en: "Can I bring children?",                            he: "האם אפשר להביא ילדים?" },
        a: { it: "Il ricevimento è pensato per adulti. Contattaci se hai necessità particolari.",                              en: "The reception is designed for adults. Please contact us if you have specific needs.", he: "קבלת הפנים מיועדת למבוגרים. אנא צרו איתנו קשר אם יש לכם צרכים מיוחדים." },
      },
      {
        q: { it: "Ci sono opzioni per intolleranze alimentari?",       en: "Are there options for dietary requirements?",      he: "האם יש אפשרויות לדרישות תזונתיות?" },
        a: { it: "Assolutamente sì. Indicalo nel modulo RSVP.",        en: "Absolutely. Please note it in the RSVP form.",     he: "בהחלט. אנא ציינו זאת בטופס האישור." },
      },
      {
        q: { it: "Devo prenotare il soggiorno al castello?",           en: "Do I need to book my stay at the castle?",         he: "האם עלי להזמין שהייה בטירה?" },
        a: { it: "Sì, i posti sono limitati. Contattateci per i dettagli sulla prenotazione degli alloggi nel castello.",      en: "Yes, places are limited. Contact us for details on booking accommodation within the castle.", he: "כן, המקומות מוגבלים. צרו איתנו קשר לפרטים על הזמנת לינה בטירה." },
      },
      {
        q: { it: "Posso usare l'hashtag sui social?",                  en: "Can I share on social media?",                     he: "האם אפשר לשתף ברשתות חברתיות?" },
        a: { it: "Certo! Usa l'hashtag #TsinaSimone2026. Durante la cerimonia vi chiediamo però di tenere i telefoni in tasca.", en: "Of course! Use #TsinaSimone2026. We do ask that phones stay in pockets during the ceremony.", he: "כמובן! השתמשו ב-#TsinaSimone2026. אנא השאירו טלפונים בכיס במהלך הטקס." },
      },
      {
        q: { it: "Entro quando devo confermare?",                      en: "What is the RSVP deadline?",                       he: "מה המועד האחרון לאישור הגעה?" },
        a: { it: "Entro il 15 luglio 2026.",                           en: "By 15 July 2026.",                                 he: "עד 15 ביולי 2026." },
      },
    ],
  },

  /* ── Gifts ──────────────────────────────────────────────── */
  gifts: {
    sectionTitle: { it: "Lista Nozze", en: "Gift List", he: "רשימת מתנות" },
    intro: {
      it: "La vostra presenza è il regalo più bello. Se desiderate farci un dono, abbiamo pensato a un contributo per il nostro viaggio di nozze.",
      en: "Your presence is the greatest gift. If you'd like to give something, we'd love a contribution toward our honeymoon.",
      he: "נוכחותכם היא המתנה הגדולה ביותר. אם תרצו לתת מתנה, נשמח לתרומה לירח הדבש שלנו.",
    },
    options: [
      {
        icon:  "✈️",
        title: { it: "Viaggio di nozze",     en: "Honeymoon fund",      he: "קרן ירח דבש" },
        text:  { it: "Contribuisci al nostro sogno.", en: "Contribute to our dream trip.", he: "תרמו לחלום שלנו." },
        url:   "https://www.zankyou.it/",
        label: { it: "Contribuisci", en: "Contribute", he: "תרמו" },
      },
      {
        icon:  "🏦",
        title: { it: "Bonifico bancario", en: "Bank transfer", he: "העברה בנקאית" },
        text:  {
          it: "IBAN: IT60 X054 2811 1010 0000 0123 456\nIntestato a: Tsina & Simone",
          en: "IBAN: IT60 X054 2811 1010 0000 0123 456\nPayable to: Tsina & Simone",
          he: "IBAN: IT60 X054 2811 1010 0000 0123 456\nלפקודת: Tsina & Simone",
        },
        url:   "",
        label: { it: "", en: "", he: "" },
      },
    ],
  },

  /* ── Gallery ────────────────────────────────────────────── */
  gallery: {
    sectionTitle: { it: "Galleria", en: "Gallery", he: "גלריה" },
    images: [
      { src: "images/gallery1.jpg", alt: { it: "Tsina e Simone al mare",     en: "Tsina and Simone at the sea",   he: "צינה וסימונה בים" } },
      { src: "images/gallery2.jpg", alt: { it: "Vacanza in montagna",        en: "Mountain holiday",              he: "חופשה בהרים" } },
      { src: "images/gallery3.jpg", alt: { it: "La proposta",                en: "The proposal",                  he: "ההצעה" } },
      { src: "images/gallery4.jpg", alt: { it: "Passeggiata in Umbria",      en: "Walk in Umbria",                he: "טיול באומבריה" } },
      { src: "images/gallery5.jpg", alt: { it: "Cena romantica",             en: "Romantic dinner",               he: "ארוחת ערב רומנטית" } },
      { src: "images/gallery6.jpg", alt: { it: "Tramonto umbro",             en: "Umbrian sunset",                he: "שקיעה אומברית" } },
      { src: "images/gallery7.jpg", alt: { it: "Sorrisi",                    en: "Smiles",                        he: "חיוכים" } },
      { src: "images/gallery8.jpg", alt: { it: "Amore",                      en: "Love",                          he: "אהבה" } },
    ],
  },

  /* ── RSVP ───────────────────────────────────────────────── */
  rsvp: {
    sectionTitle: { it: "Conferma la Presenza", en: "RSVP", he: "אישור הגעה" },
    intro: {
      it: "Non vediamo l'ora di festeggiare con voi! Compila il modulo entro il 15 luglio 2026.",
      en: "We can't wait to celebrate with you! Please fill in the form by 15 July 2026.",
      he: "אנחנו ממש מצפים לחגוג איתכם! אנא מלאו את הטופס עד 15 ביולי 2026.",
    },
    // One embedded Google Form URL per language
    formUrls: {
      it: "https://docs.google.com/forms/d/e/1FAIpQLSex0KxUku9pK0YkRa4GreUJYKVaNkFW2YdHJTgwuDaMg7JSig/viewform?embedded=true",
      en: "https://docs.google.com/forms/d/e/1FAIpQLSevYwqZf0lpY1N738RC7SCz0so0PM6TODYFOqqrkEG8L-rRCg/viewform?embedded=true",
      he: "https://docs.google.com/forms/d/e/1FAIpQLSf0wY1TVORw2L5pRjIc80NcqV6AL9PmMRJZ4DyagqM9l-l2hA/viewform?embedded=true",
    },
    // Height in px — adjust if the form content grows
    formHeight: 1288,
    loadingLabel: { it: "Caricamento…", en: "Loading…", he: "טוען…" },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    text: {
      it: "Con amore, Tsina & Simone · 17 Ottobre 2026",
      en: "With love, Tsina & Simone · 17 October 2026",
      he: "באהבה, צינה וסימונה · 17 באוקטובר 2026",
    },
  },

};
