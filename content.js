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
  defaultLang: "en",          // "it" | "en" | "he"
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
    subtitle: {
      it: "si sposano",
      en: "are getting married",
      he: "מתחתנים",
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
    backgroundImage: "images/background.jpeg",
    backgroundImageMobile: "images/background-mobile.jpeg",
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
    gifts:      { it: "Regalo",     en: "A Little Gift",     he: "מתנה" },
    gallery:    { it: "Galleria",   en: "Gallery",   he: "גלריה" },
    rsvp:       { it: "RSVP",       en: "RSVP",      he: "אישור הגעה" },
  },

  /* ── Our Story ──────────────────────────────────────────── */
  story: {
    sectionTitle: { it: "La Nostra Storia", en: "Our Story", he: "הסיפור שלנו" },
    intro: {
      en: "Tsina's dream was to become a doctor. In her imagination, the world was like a small globe she could spin between her hands: she let it turn and placed her finger on Perugia, Italy. She did not know that in a quiet street in the heart of the city, she would find a red-haired engineer, ready to quietly change the course of her story forever.\n\nAnd so, almost by chance and almost by fate, their paths crossed. A meeting became a conversation, a conversation became love, and love grew through countless small goodbyes and endless moves between homes. Until they understood that home was not a place, but something they were to each other.\n\nAt the beginning of their relationship, Tsina asked Simone: \"If I moved to Israel, would you come with me?\" And Simone, with the certainty of someone who does not yet know what the future holds, replied: \"Of course.\"\n\nYears passed, and what once seemed impossible became real: Tsina was accepted into her studies in Israel. Simone chose to follow her without hesitation. But the world paused for a moment, and the events of October 7th, 2023 delayed his arrival in the Holy Land by almost a year.\n\nAnd so, after the whole journey, they found each other again and built their life together in Ramat Gan — two hearts that traveled far only to discover they had always belonged in the same place. Now they stand at the beginning of their greatest adventure: a family.",
      it: "Il sogno di Tsina era diventare medico. Nella sua immaginazione, il mondo era come un piccolo globo che poteva far girare tra le mani: lo lasciò girare e posò il dito su Perugia, Italia. Non sapeva che in una strada silenziosa nel cuore della città avrebbe trovato un ingegnere dai capelli rossi, pronto a cambiare silenziosamente il corso della sua storia per sempre.\n\nE così, quasi per caso e quasi per destino, i loro cammini si incrociarono. Un incontro divenne una conversazione, una conversazione divenne amore, e l'amore crebbe attraverso innumerevoli piccoli addii e infiniti traslochi tra case. Finché non capirono che casa non era un luogo, ma qualcosa che erano l'uno per l'altra.\n\nAll'inizio della loro relazione, Tsina chiese a Simone: \"Se mi trasferissi in Israele, verresti con me?\" E Simone, con la certezza di chi non sa ancora cosa riserva il futuro, rispose: \"Certo.\"\n\nPassarono gli anni, e ciò che sembrava impossibile divenne reale: Tsina fu ammessa ai suoi studi in Israele. Simone scelse di seguirla senza esitazione. Ma il mondo si fermò un momento, e gli eventi del 7 ottobre 2023 ritardarono il suo arrivo in Terra Santa di quasi un anno.\n\nE così, dopo tutto il viaggio, si ritrovarono e costruirono la loro vita insieme a Ramat Gan — due cuori che viaggiarono lontano solo per scoprire di essere sempre appartenuti allo stesso posto. Ora si trovano all'inizio della loro più grande avventura: una famiglia.",
      he: "חלומה של צינה היה להיות רופאה. בדמיונה, העולם היה כגלובוס קטן שיכלה לסובב בין ידיה: היא הניחה לו להסתובב ושמה את אצבעה על פרוג'ה, איטליה. היא לא ידעה שברחוב שקט בלב העיר תמצא מהנדס בעל שיער אדום, מוכן לשנות בשקט את מהלך סיפורה לנצח.\n\nוכך, כמעט במקרה וכמעט בגורל, דרכיהם נפגשו. פגישה הפכה לשיחה, שיחה הפכה לאהבה, ואהבה צמחה דרך פרידות קטנות אינספור ומעברים אינסופיים בין בתים. עד שהבינו שבית אינו מקום, אלא משהו שהיו אחד לשני.\n\nבתחילת מערכת היחסים שלהם, שאלה צינה את סימונה: \"אם אעבור לישראל, האם תבוא איתי?\" וסימונה, עם הביטחון של מי שעדיין אינו יודע מה צופן העתיד, ענה: \"כמובן.\"\n\nשנים עברו, ומה שפעם נראה בלתי אפשרי הפך למציאות: צינה התקבלה ללימודיה בישראל. סימונה בחר ללכת אחריה ללא היסוס. אך העולם עצר לרגע, ואירועי ה-7 באוקטובר 2023 עיכבו את הגעתו לארץ הקודש בכמעט שנה.\n\nוכך, לאחר כל המסע, מצאו זה את זה שוב ובנו את חייהם המשותפים ברמת גן — שני לבבות שנסעו רחוק רק כדי לגלות שתמיד שייכו לאותו מקום. כעת הם עומדים בתחילת ההרפתקה הגדולה ביותר שלהם: משפחה.",
    },
    images: [
      { src: "images/story/story1.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story2.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story3.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story4.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story5.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story6.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story7.jpg", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
      { src: "images/story/story8.png", alt: { it: "Tsina e Simone", en: "Tsina and Simone", he: "צינה וסימונה" } },
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
        title: { it: "Sabato 17 – Cerimonia, Cena & Festa", en: "Saturday 17 – Ceremony, Dinner & Party", he: "שבת 17 – טקס, ארוחת ערב ומסיבה" },
        lines: {
          it: ["TBD – Gli eventi inizieranno approssimativamente dalle 16:00"],
          en: ["TBD – Events will start approximately from around 4:00 PM"],
          he: ["TBD – האירועים יתחילו בערך מ-16:00"],
        },
      },
      {
        icon:  "🌅",
        title: { it: "Domenica 18 – Arrivederci", en: "Sunday 18 – Farewell", he: "ראשון 18 – פרידה" },
        lines: {
          it: ["Colazione insieme", "Arrivederci e grazie!"],
          en: ["Breakfast together", "Goodbye and thank you!"],
          he: ["ארוחת בוקר משותפת", "להתראות ותודה!"],
        },
      },
    ],
  },

  /* ── Schedule (Saturday programme) ─────────────────────── */
  schedule: {
    sectionTitle: { it: "Il Programma di Sabato", en: "Saturday Programme", he: "תוכנית השבת" },
    items: [
      {
        time:  "",
        label: { it: "TBD – Il programma dettagliato sarà comunicato prossimamente", en: "TBD – The detailed programme will be shared soon", he: "TBD – התוכנית המפורטת תשותף בקרוב" },
        note:  { it: "", en: "", he: "" },
      },
    ],
    /* itemsDetailed: [
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
    ], */
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
    mapsEmbedUrl:  "https://maps.google.com/maps?q=Castello+di+Rosciano,+Torgiano,+PG,+Italy&output=embed&z=15",
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
        drive: { it: "20 min", en: "20 min", he: "20 דק'" },
        image: "images/explore/assisi.jpg",
        desc: {
          it: "La città di San Francesco, con la sua Basilica patrimonio UNESCO e i vicoli medievali.",
          en: "The city of St. Francis, with its UNESCO Basilica and charming medieval lanes.",
          he: "עיר סנט פרנסיס, עם הבזיליקה שלה הרשומה ב-UNESCO והסמטאות המימי-ביניימיות.",
        },
        mustSee: [
          { it: "Basilica di San Francesco (UNESCO)", en: "Basilica of St. Francis (UNESCO)", he: "בזיליקת סנט פרנסיס (UNESCO)" },
          { it: "Rocca Maggiore & panorama sulla valle", en: "Rocca Maggiore fortress & valley panorama", he: "מבצר רוקה מג'ורה ונוף לעמק" },
        ],
      },
      {
        name:  "Perugia",
        emoji: "🏛️",
        drive: { it: "15 min", en: "15 min", he: "15 דק'" },
        image: "images/explore/perugia.jpg",
        desc: {
          it: "Capoluogo dell'Umbria, famosa per il cioccolato Perugina, l'Università e il centro storico sul colle.",
          en: "Umbria's capital, famous for Perugina chocolate, its hilltop historic centre, and vibrant university life.",
          he: "בירת אומבריה, מפורסמת בשוקולד פרוג'ינה, מרכזה ההיסטורי על הגבעה וחיי האוניברסיטה.",
        },
        mustSee: [
          { it: "Corso Vannucci & Fontana Maggiore", en: "Corso Vannucci & Fontana Maggiore", he: "קורסו ואנוצ'י ופונטנה מג'ורה" },
          { it: "Museo del Cioccolato Perugina", en: "Perugina Chocolate Museum", he: "מוזיאון השוקולד פרוג'ינה" },
        ],
      },
      {
        name:  "Spello",
        emoji: "🌸",
        drive: { it: "25 min", en: "25 min", he: "25 דק'" },
        image: "images/explore/spello.jpg",
        desc: {
          it: "Borgo medievale famoso per i vicoli fioriti e le terrazze di gerani. Un gioiello nascosto dell'Umbria.",
          en: "A medieval village famous for its flower-lined alleys and geranium terraces. A hidden gem of Umbria.",
          he: "כפר מימי ביניים מפורסם בסמטאות המרוצפות פרחים ומרפסות הגרניום. אבן חן נסתרת של אומבריה.",
        },
        mustSee: [
          { it: "Vicolo dei Baglioni – il vicolo più fiorito", en: "Vicolo dei Baglioni – the most flower-covered alley", he: "ויקולו דיי באליוני – הסמטה הפורחת ביותר" },
          { it: "Cappella Baglioni con affreschi del Pinturicchio", en: "Baglioni Chapel with Pinturicchio frescoes", he: "קפלת באליוני עם פרסקאות פינטוריקיו" },
        ],
      },
      {
        name:  "Foligno",
        emoji: "🏰",
        drive: { it: "25 min", en: "25 min", he: "25 דק'" },
        image: "images/explore/foligno.jpg",
        desc: {
          it: "La città natale di Simone! Vivace città umbra nel cuore della Valle Umbra, nota per la Giostra della Quintana e il suo elegante centro storico.",
          en: "Simone's hometown! A lively Umbrian city in the heart of the Umbrian Valley, known for the Giostra della Quintana tournament and its elegant historic centre.",
          he: "עיר הולדתו של סימונה! עיר אומברית חיה בלב עמק אומבריה, ידועה בתחרות ג'יוסטרה דלה קווינטנה ומרכזה ההיסטורי האלגנטי.",
        },
        mustSee: [
          { it: "Palazzo Trinci e la sua pinacoteca medievale", en: "Palazzo Trinci and its medieval art gallery", he: "פלאצו טרינצ'י וגלריית האמנות המימי-ביניימית שלו" },
          { it: "Duomo di San Feliciano", en: "Cathedral of San Feliciano", he: "קתדרלת סן פליציאנו" },
        ],
      },
      {
        name:  "Bevagna",
        emoji: "🌿",
        drive: { it: "20 min", en: "20 min", he: "20 דק'" },
        image: "images/explore/bevagna.jpg",
        desc: {
          it: "Uno dei borghi medievali meglio conservati d'Umbria, con una piazza romanica perfettamente intatta e un'atmosfera fuori dal tempo.",
          en: "One of Umbria's best-preserved medieval villages, with a perfectly intact Romanesque piazza and a timeless atmosphere.",
          he: "אחד הכפרים המימי-ביניימיים השמורים ביותר באומבריה, עם פיאצה רומנסקית שלמה ואווירה נצחית.",
        },
        mustSee: [
          { it: "Piazza Silvestri – cuore romanico del borgo", en: "Piazza Silvestri – the Romanesque heart of the village", he: "פיאצה סילבסטרי – הלב הרומנסקי של הכפר" },
          { it: "Mercato delle Gaite (rievocazione medievale)", en: "Mercato delle Gaite (medieval re-enactment festival)", he: "מרקטו דלה גאיטה (פסטיבל ימי ביניים)" },
        ],
      },
      {
        name:  "Spoleto",
        emoji: "🎭",
        drive: { it: "40 min", en: "40 min", he: "40 דק'" },
        image: "images/explore/spoleto.jpg",
        desc: {
          it: "Città d'arte e musica, sede del celebre Festival dei Due Mondi. Ponte delle Torri e Rocca Albornoziana.",
          en: "A city of art and music, home to the famous Festival of Two Worlds, the Ponte delle Torri bridge and the Rocca fortress.",
          he: "עיר של אמנות ומוזיקה, ביתו של פסטיבל שני העולמות המפורסם, גשר פונטה דלה טורי והמצודה.",
        },
        mustSee: [
          { it: "Ponte delle Torri – acquedotto medievale spettacolare", en: "Ponte delle Torri – spectacular medieval aqueduct bridge", he: "פונטה דלה טורי – גשר אמות מים מימי ביניים מרהיב" },
          { it: "Rocca Albornoziana & Teatro Romano", en: "Rocca Albornoziana fortress & Roman Theatre", he: "מבצר רוקה אלבורנוציאנה ותיאטרון רומי" },
        ],
      },
      {
        name:  "Cascate delle Marmore",
        emoji: "💦",
        drive: { it: "45 min", en: "45 min", he: "45 דק'" },
        image: "images/explore/marmore.jpg",
        desc: {
          it: "Una delle cascate più alte d'Europa, con un salto di 165 metri creato dagli antichi Romani. Uno spettacolo naturale imperdibile nelle colline umbre.",
          en: "One of Europe's tallest waterfalls, with a 165-metre drop created by the ancient Romans. An unmissable natural spectacle in the Umbrian hills.",
          he: "אחד ממפלי המים הגבוהים ביותר באירופה, עם נפילה של 165 מטר שנוצרה על ידי הרומאים הקדמונים. מחזה טבעי שאסור לפספס בגבעות אומבריה.",
        },
        mustSee: [
          { it: "Belvedere superiore – vista panoramica sull'intera cascata", en: "Upper viewpoint – panoramic view of the entire waterfall", he: "תצפית עליונה – נוף פנורמי של כל המפל" },
          { it: "Sentiero naturalistico tra grotte e vegetazione lussureggiante", en: "Nature trail through caves and lush vegetation", he: "שביל טבע דרך מערות וצמחייה שופעת" },
        ],
      },
      {
        name:  "Rasiglia",
        emoji: "💧",
        drive: { it: "30 min", en: "30 min", he: "30 דק'" },
        image: "images/explore/rasiglia.jpg",
        desc: {
          it: "Un piccolo borgo magico alimentato da sorgenti naturali, con ruscelli che scorrono tra le case medievali. Uno dei borghi più suggestivi d'Umbria.",
          en: "A magical little village fed by natural springs, with streams running between medieval houses. One of Umbria's most enchanting hidden gems.",
          he: "כפר קסום קטן המוזן ממעיינות טבעיים, עם נחלים זורמים בין הבתים המימי-ביניימיים. אחד מהאבנים הנסתרות הקסומות ביותר של אומבריה.",
        },
        mustSee: [
          { it: "I mulini ad acqua medievali e i ruscelli del centro storico", en: "Medieval watermills and streams running through the village", he: "טחנות המים המימי-ביניימיות והנחלים הזורמים בכפר" },
          { it: "Sentiero delle Cascate – percorso naturalistico tra le sorgenti", en: "Waterfalls Trail – a nature walk through the springs", he: "שביל המפלים – הליכת טבע בין המעיינות" },
        ],
      },
      {
        name:  "Lago Trasimeno",
        emoji: "🏊",
        drive: { it: "25 min", en: "25 min", he: "25 דק'" },
        image: "images/explore/trasimeno.jpg",
        desc: {
          it: "Il quarto lago più grande d'Italia, circondato da colline dorate e borghi medievali. Perfetto per una gita rilassante, con traghetti per le isole e ristoranti sul lago.",
          en: "Italy's fourth-largest lake, surrounded by golden hills and medieval villages. Perfect for a relaxing day trip — take a ferry to the islands or enjoy fresh fish by the water.",
          he: "האגם הרביעי בגודלו באיטליה, מוקף גבעות זהובות וכפרים מימי-ביניימיים. מושלם לטיול יום רגוע — קחו מעבורת לאיים או תיהנו מדגים טריים ליד המים.",
        },
        mustSee: [
          { it: "Isola Maggiore – l'unica isola abitata del lago, raggiungibile in traghetto", en: "Isola Maggiore – the lake's only inhabited island, reachable by ferry", he: "איסולה מג'ורה – האי המיושב היחיד באגם, נגיש במעבורת" },
          { it: "Castiglione del Lago – borgo medievale con vista panoramica sul lago", en: "Castiglione del Lago – medieval village with panoramic lake views", he: "קסטיליונה דל לאגו – כפר מימי ביניים עם נוף פנורמי לאגם" },
        ],
      },
    ],
  },

  /* ── Travel / How to get there ──────────────────────────── */
  travel: {
    sectionTitle: { it: "Come Arrivare",   en: "Getting There",    he: "איך להגיע" },
    intro: {
      it: "Il Castello di Rosciano si trova a Torgiano (PG), nel cuore dell'Umbria. Non è necessario noleggiare un'auto: esistono ottime connessioni in treno e autobus.",
      en: "Castello di Rosciano is located in Torgiano (PG), in the heart of Umbria. You do not need to rent a car — there are excellent train and coach connections.",
      he: "קסטלו די רוסקיאנו ממוקם בטורג'יאנו (PG), בלב אומבריה. אין צורך לשכור רכב — ישנן חיבורי רכבת ואוטובוס מצוינים.",
    },
    airports: [
      {
        code: "PEG",
        badge: "green",
        name: { it: "Perugia (PEG) – Opzione migliore", en: "Perugia Airport (PEG) – Best option", he: "נמל תעופה פרוג'ה (PEG) – האפשרות הטובה ביותר" },
        desc: { it: "Solo ~20 minuti dalla location. Piccolo aeroporto con connessioni internazionali limitate.", en: "Only about 20 minutes from the venue. Small airport with limited international connections.", he: "רק כ-20 דקות מהמקום. נמל תעופה קטן עם חיבורים בינלאומיים מוגבלים." },
        url: "https://www.airport.umbria.it/en/",
      },
      {
        code: "FCO",
        badge: "blue",
        name: { it: "Roma Fiumicino (FCO) – Migliore per ospiti internazionali", en: "Rome Fiumicino (FCO) – Best for international guests", he: "רומא פיומיצ'ינו (FCO) – הטוב ביותר לאורחים בינלאומיים" },
        desc: { it: "Il principale aeroporto internazionale d'Italia con voli da tutto il mondo. Ottime connessioni in treno e autobus verso l'Umbria.", en: "Italy's largest international airport with flights from all over the world. Excellent train and coach connections to Umbria.", he: "נמל התעופה הבינלאומי הגדול ביותר באיטליה. חיבורי רכבת ואוטובוס מצוינים לאומבריה." },
        url: "https://www.adr.it/fiumicino",
      },
      {
        code: "FLR",
        badge: "yellow",
        name: { it: "Firenze (FLR) – Alternativa comoda", en: "Florence Airport (FLR) – Convenient alternative", he: "נמל תעופה פירנצה (FLR) – חלופה נוחה" },
        desc: { it: "Alternativa conveniente con facile accesso a Perugia in treno. Ideale se vuoi visitare Firenze prima o dopo il matrimonio.", en: "A convenient alternative with easy access to Perugia by train. Perfect if you plan to visit Florence before or after the wedding.", he: "חלופה נוחה עם גישה קלה לפרוג'ה ברכבת. מושלם אם מתכננים לבקר בפירנצה." },
        url: "https://www.aeroporto.fi.it/en/",
      },
    ],
    trainSection: {
      title: { it: "🚆 In treno", en: "🚆 Traveling by Train", he: "🚆 נסיעה ברכבת" },
      intro: { it: "L'Italia ha un'eccellente rete ferroviaria. La venue è raggiungibile dalle stazioni di Perugia e Assisi.", en: "Italy has an excellent rail network. The venue is easily accessible from Perugia and Assisi railway stations.", he: "לאיטליה רשת רכבות מצוינת. המקום נגיש בקלות מתחנות הרכבת של פרוג'ה ואסיסי." },
      routes: [
        { from: { en: "From Rome", it: "Da Roma", he: "מרומא" }, desc: { en: "Take a train to Perugia or Assisi, then continue by taxi (~20 min) or our wedding shuttle (if available) to the venue.", it: "Prendi un treno per Perugia o Assisi, poi continua in taxi (~20 min) o con il nostro shuttle nuziale (se disponibile).", he: "קח רכבת לפרוג'ה או אסיסי, ואז המשך במונית (~20 דק') או בשאטל החתונה שלנו (אם זמין) למקום." } },
        { from: { en: "From Florence", it: "Da Firenze", he: "מפירנצה" }, desc: { en: "Take a train to Perugia (some direct, others require one change at Terontola). Then taxi ~20 min or our wedding shuttle (if available).", it: "Prendi un treno per Perugia (alcuni diretti, altri con cambio a Terontola). Poi taxi ~20 min o il nostro shuttle nuziale (se disponibile).", he: "קח רכבת לפרוג'ה (חלק ישירות, אחרים עם החלפה בטרונטולה). ואז מונית ~20 דק' או השאטל שלנו (אם זמין)." } },
      ],
      apps: [
        { name: "Trainline", url: "https://www.thetrainline.com/", desc: { en: "Search & book train tickets across operators", it: "Cerca e prenota biglietti per tutti gli operatori", he: "חפש והזמן כרטיסי רכבת" } },
        { name: "Trenitalia", url: "https://www.trenitalia.com/en.html", desc: { en: "Official Italian railway app", it: "App ufficiale della ferrovia italiana", he: "אפליקציית הרכבת האיטלקית הרשמית" } },
      ],
    },
    coachSection: {
      title: { it: "🚌 In autobus (opzione economica)", en: "🚌 Traveling by Coach (Budget-Friendly)", he: "🚌 נסיעה באוטובוס (אפשרות חסכונית)" },
      intro: { it: "Non è necessario noleggiare un'auto. Vari operatori collegano Roma e Firenze con Perugia e Assisi.", en: "You do not need to rent a car. Several coach companies connect Rome and Florence to Perugia and Assisi.", he: "אין צורך לשכור רכב. מספר חברות אוטובוס מחברות את רומא ופירנצה לפרוג'ה ואסיסי." },
      routeTitle: { en: "Suggested route from Rome Fiumicino (FCO)", it: "Percorso consigliato da Roma Fiumicino (FCO)", he: "מסלול מומלץ מרומא פיומיצ'ינו (FCO)" },
      steps: [
        { en: "Arrive at Rome Fiumicino Airport (FCO).", it: "Arrivi a Roma Fiumicino (FCO).", he: "הגעה לנמל תעופה פיומיצ'ינו (FCO)." },
        { en: "Take the Leonardo Express or regional train to Rome Termini (or Rome Tiburtina).", it: "Prendi il Leonardo Express o un treno regionale per Roma Termini (o Roma Tiburtina).", he: "קח את לאונרדו אקספרס או רכבת אזורית לרומא טרמיני (או רומא טיבורטינה)." },
        { en: "From Rome Termini or Tiburtina, take a direct coach to Perugia or Assisi.", it: "Da Roma Termini o Tiburtina, prendi un autobus diretto per Perugia o Assisi.", he: "מרומא טרמיני או טיבורטינה, קח אוטובוס ישיר לפרוג'ה או אסיסי." },
        { en: "From Perugia or Assisi, take a local taxi or our wedding shuttle (if available).", it: "Da Perugia o Assisi, prendi un taxi locale o il nostro shuttle (se disponibile).", he: "מפרוג'ה או אסיסי, קח מונית מקומית או את השאטל שלנו (אם זמין)." },
      ],
      companies: [
        { name: "MarinoBus", url: "https://www.marinobus.it/en/" },
        { name: "Itabus",    url: "https://www.itabus.it/en" },
        { name: "FlixBus",   url: "https://www.flixbus.it/" },
        { name: "Sulga",     url: "https://www.sulga.eu/en/" },
      ],
    },
    carSection: {
      title: { it: "🚗 Auto a noleggio", en: "🚗 Rental Cars", he: "🚗 השכרת רכב" },
      intro: { it: "Se vuoi esplorare l'Umbria con flessibilità, noleggiare un'auto è un'ottima opzione. Le seguenti compagnie operano nei principali aeroporti italiani.", en: "If you'd like the flexibility to explore Umbria, renting a car is a great option. These companies operate at major Italian airports including Rome, Florence and Perugia.", he: "אם תרצו גמישות לחקור את אומבריה, השכרת רכב היא אפשרות נהדרת." },
      companies: [
        { name: "Hertz",      url: "https://www.hertz.it/rentacar/reservation/" },
        { name: "Avis",       url: "https://www.avis.it/en/home" },
        { name: "Europcar",   url: "https://www.europcar.com/en-it" },
        { name: "Sixt",       url: "https://www.sixt.it/" },
        { name: "Budget",     url: "https://www.budget.it/" },
        { name: "Enterprise", url: "https://www.enterprise.it/en/home.html" },
      ],
    },
    shuttleSection: {
      title: { it: "🚌 Possibile shuttle nuziale", en: "🚌 Possible Wedding Shuttle", he: "🚌 שאטל חתונה אפשרי" },
      text: { it: "Stiamo valutando l'organizzazione di uno shuttle da Perugia o Assisi fino alla venue e ritorno. Se sei interessato, puoi indicare la tua preferenza direttamente nel modulo RSVP — ci aiuterà a stimare i posti e a organizzarci al meglio.", en: "We are considering organizing a shuttle service from Perugia or Assisi (depending on demand) to the venue and back. You can indicate your preference directly in the RSVP form — it will help us estimate numbers and finalize arrangements.", he: "אנחנו שוקלים לארגן שאטל מפרוג'ה או אסיסי למקום ובחזרה. ניתן לציין את ההעדפה שלכם ישירות בטופס ה-RSVP — זה יעזור לנו להעריך את מספר הנוסעים ולסיים את ההסדרים." },
    },
    appsSection: {
      title: { it: "📱 App e siti utili", en: "📱 Helpful Apps & Websites", he: "📱 אפליקציות ואתרים שימושיים" },
      apps: [
        { emoji: "🚆", name: "Trainline",   url: "https://www.thetrainline.com/",          desc: { en: "Search & book trains across all operators",       it: "Cerca e prenota treni su tutti gli operatori",          he: "חפש והזמן רכבות אצל כל המפעילים" } },
        { emoji: "🚆", name: "Trenitalia",  url: "https://www.trenitalia.com/en.html",     desc: { en: "Official Italian railway network",                it: "Rete ferroviaria italiana ufficiale",                   he: "רשת הרכבות האיטלקית הרשמית" } },
        { emoji: "🚌", name: "FlixBus",     url: "https://www.flixbus.it/",               desc: { en: "Long-distance coach booking",                    it: "Prenotazione autobus a lunga percorrenza",             he: "הזמנת אוטובוסים לטווח ארוך" } },
        { emoji: "🗺️", name: "Google Maps", url: "https://maps.google.com",               desc: { en: "Plan routes and check live transit",              it: "Pianifica percorsi e controlla i trasporti in tempo reale", he: "תכנן מסלולים ובדוק תחבורה ציבורית בזמן אמת" } },
        { emoji: "🚍", name: "Moovit",      url: "https://moovitapp.com/",                desc: { en: "Local public transportation helper",             it: "Aiuto per i trasporti pubblici locali",                he: "עזרה לתחבורה ציבורית מקומית" } },
      ],
    },
    contactNote: { en: "If you have any questions about getting to the venue, feel free to contact us — we'll be happy to help!", it: "Per qualsiasi domanda su come raggiungere la venue, non esitare a contattarci!", he: "לכל שאלה על הגעה למקום, אל תהססו לפנות אלינו!" },
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
    sectionTitle: { it: "Un Piccolo Pensiero", en: "A Little Gift", he: "מתנה קטנה" },
    intro: {
      it: "La vostra presenza è il regalo più bello. Se desiderate farci un dono, saremmo felici di un contributo per l'inizio della nostra vita insieme ❤️",
      en: "Your presence is the greatest gift. If you'd like to give something, we'd love a contribution toward the beginning of our life together ❤️",
      he: "נוכחותכם היא המתנה הגדולה ביותר. אם תרצו לתת משהו, נשמח לתרומה לתחילת חיינו המשותפים ❤️",
    },
    options: [
      {
        icon:  "🏦",
        title: { it: "Bonifico bancario", en: "Bank transfer", he: "העברה בנקאית" },
        text:  {
          it: "IBAN: IT94T0306921705100000014703\nIntestato a: Simone Giacomucci",
          en: "IBAN: IT94T0306921705100000014703\nPayable to: Simone Giacomucci",
          he: "IBAN: IT94T0306921705100000014703\nלפקודת: Simone Giacomucci",
        },
        url:   "",
        label: { it: "", en: "", he: "" },
      },
      {
        icon:  "📱",
        title: { it: "Bit o Paybox", en: "Bit or Paybox", he: "Bit או Paybox" },
        text:  {
          it: "Numero di telefono di Tsina: 0542021155",
          en: "Tsina's phone number: 0542021155",
          he: "מספר הטלפון של צינה: 0542021155",
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
      it: "Non vediamo l'ora di festeggiare con voi! Compila il modulo e facci sapere se puoi venire.",
      en: "We can't wait to celebrate with you! Please fill in the form and let us know if you can come.",
      he: "אנחנו ממש מצפים לחגוג איתכם! אנא מלאו את הטופס והודיעו לנו אם תוכלו לבוא.",
    },
    // One embedded Google Form URL per language
    formUrls: {
      it: "https://docs.google.com/forms/d/e/1FAIpQLSevYwqZf0lpY1N738RC7SCz0so0PM6TODYFOqqrkEG8L-rRCg/viewform?embedded=true",
      en: "https://docs.google.com/forms/d/e/1FAIpQLSevYwqZf0lpY1N738RC7SCz0so0PM6TODYFOqqrkEG8L-rRCg/viewform?embedded=true",
      he: "https://docs.google.com/forms/d/e/1FAIpQLSevYwqZf0lpY1N738RC7SCz0so0PM6TODYFOqqrkEG8L-rRCg/viewform?embedded=true",
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
