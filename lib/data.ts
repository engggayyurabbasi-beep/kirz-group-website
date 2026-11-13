export type Locale = "en" | "hi";
export type Brand = {
  slug: string;
  name: string;
  category: string;
  categoryHi: string;
  description: string;
  descriptionHi: string;
  detail: string;
  detailHi: string;
  initial: string;
  focus: string; focusHi: string; offerings: string[]; offeringsHi: string[];
};
export const brands: Brand[] = [
 {slug:"al-hind-dawakhana",name:"Al-Hind Dawakhana",category:"Healthcare & Wellness",categoryHi:"स्वास्थ्य एवं वेलनेस",description:"Ayurvedic, Unani and herbal wellness products.",descriptionHi:"आयुर्वेदिक, यूनानी और हर्बल वेलनेस उत्पाद।",detail:"Al-Hind Dawakhana is a healthcare and wellness brand focused on Ayurvedic, Unani and herbal product categories. Explore the brand's product range and business enquiries through its official channels.",detailHi:"अल-हिंद दवाखाना आयुर्वेदिक, यूनानी और हर्बल उत्पाद श्रेणियों पर केंद्रित स्वास्थ्य एवं वेलनेस ब्रांड है। उत्पादों और व्यावसायिक पूछताछ के लिए इसके आधिकारिक माध्यमों से संपर्क करें।",initial:"A",focus:"Herbal knowledge. Everyday wellness.",focusHi:"हर्बल ज्ञान। रोजमर्रा की वेलनेस।",offerings:["Ayurvedic product range","Unani product range","Herbal wellness categories","Trade and distribution enquiries"],offeringsHi:["आयुर्वेदिक उत्पाद श्रेणी","यूनानी उत्पाद श्रेणी","हर्बल वेलनेस उत्पाद","ट्रेड और डिस्ट्रीब्यूशन पूछताछ"]},
 {slug:"sweetheart",name:"Sweetheart",category:"Cleaning Products",categoryHi:"क्लीनिंग उत्पाद",description:"Cleaning and household care product brand.",descriptionHi:"क्लीनिंग और घरेलू देखभाल उत्पाद ब्रांड।",detail:"Sweetheart represents KIRZ Group's cleaning and household care product category, with a focus on practical everyday-use solutions.",detailHi:"Sweetheart, KIRZ Group की क्लीनिंग और घरेलू देखभाल उत्पाद श्रेणी का ब्रांड है, जो रोजमर्रा के उपयोग के लिए व्यावहारिक समाधान पर केंद्रित है।",initial:"S",focus:"A cleaner everyday, made simple.",focusHi:"रोजमर्रा की सफाई, आसान तरीके से।",offerings:["Household cleaning products","Everyday care solutions","Retail and wholesale enquiries","Distribution opportunities"],offeringsHi:["घरेलू क्लीनिंग उत्पाद","रोजमर्रा की देखभाल के समाधान","रिटेल और होलसेल पूछताछ","डिस्ट्रीब्यूशन के अवसर"]},
 {slug:"soft-print",name:"Soft Print",category:"Printing & Publishing",categoryHi:"प्रिंटिंग एवं पब्लिशिंग",description:"Printing, publishing and creative communication.",descriptionHi:"प्रिंटिंग, पब्लिशिंग और क्रिएटिव कम्युनिकेशन।",detail:"Soft Print is the group's printing and publishing identity for print production and creative communication requirements.",detailHi:"Soft Print, KIRZ Group की प्रिंटिंग और पब्लिशिंग पहचान है, जो प्रिंट प्रोडक्शन और क्रिएटिव कम्युनिकेशन से जुड़ी सेवाओं पर केंद्रित है।",initial:"S",focus:"Ideas into print. Clarity in every detail.",focusHi:"विचारों को प्रिंट में बदलें। हर विवरण में स्पष्टता।",offerings:["Print production","Publishing requirements","Promotional print materials","Creative communication enquiries"],offeringsHi:["प्रिंट प्रोडक्शन","पब्लिशिंग संबंधी आवश्यकताएं","प्रमोशनल प्रिंट सामग्री","क्रिएटिव कम्युनिकेशन पूछताछ"]},
 {slug:"postokirz",name:"PostoKIRZ",category:"Digital Tools",categoryHi:"डिजिटल टूल्स",description:"A digital poster creation platform.",descriptionHi:"डिजिटल पोस्टर बनाने का प्लेटफॉर्म।",detail:"PostoKIRZ is a digital poster-making product concept designed to help users create promotional and informational creatives.",detailHi:"PostoKIRZ एक डिजिटल पोस्टर मेकर प्लेटफॉर्म है, जिसका उद्देश्य प्रचार और जानकारी से जुड़े क्रिएटिव तैयार करने में मदद करना है।",initial:"P",focus:"Create. Customize. Communicate.",focusHi:"बनाएं। कस्टमाइज़ करें। साझा करें।",offerings:["Poster creation tools","Promotional creative formats","Digital design workflows","Product and collaboration enquiries"],offeringsHi:["पोस्टर बनाने के टूल","प्रमोशनल क्रिएटिव फॉर्मेट","डिजिटल डिजाइन वर्कफ्लो","प्रोडक्ट और सहयोग संबंधी पूछताछ"]},
 {slug:"kirz-news",name:"KIRZ News",category:"News & Media",categoryHi:"न्यूज़ एवं मीडिया",description:"News, information and media publishing.",descriptionHi:"समाचार, जानकारी और मीडिया पब्लिशिंग।",detail:"KIRZ News is the group's news and media initiative for publishing updates and informational content.",detailHi:"KIRZ News, KIRZ Group की न्यूज़ और मीडिया पहल है, जिसके माध्यम से अपडेट और जानकारीपूर्ण सामग्री प्रकाशित की जाती है।",initial:"K",focus:"Information that keeps you connected.",focusHi:"आपको जोड़े रखने वाली जानकारी।",offerings:["News and information publishing","Digital media content","Editorial and media enquiries","Content collaboration"],offeringsHi:["समाचार और जानकारी का प्रकाशन","डिजिटल मीडिया सामग्री","एडिटोरियल और मीडिया पूछताछ","कंटेंट सहयोग"]},
 {slug:"kirz-store",name:"KIRZ Store",category:"E-commerce",categoryHi:"ई-कॉमर्स",description:"An online store for herbal and wellness products.",descriptionHi:"हर्बल और वेलनेस उत्पादों का ऑनलाइन स्टोर।",detail:"KIRZ Store is the group's e-commerce platform focused on herbal, Ayurvedic and Unani product categories.",detailHi:"KIRZ Store, KIRZ Group का ई-कॉमर्स प्लेटफॉर्म है, जो हर्बल, आयुर्वेदिक और यूनानी उत्पाद श्रेणियों पर केंद्रित है।",initial:"K",focus:"Herbal and wellness shopping, online.",focusHi:"हर्बल और वेलनेस उत्पादों की ऑनलाइन खरीदारी।",offerings:["Herbal product catalogue","Ayurvedic and Unani categories","Online ordering","Wholesale and bulk order enquiries"],offeringsHi:["हर्बल उत्पाद कैटलॉग","आयुर्वेदिक और यूनानी श्रेणियां","ऑनलाइन ऑर्डर","होलसेल और बल्क ऑर्डर पूछताछ"]}
];
export const copy = {
  en: {
    home: "Home", about: "About Us", businesses: "Businesses", brands: "Our Brands", partnership: "Partnership", contact: "Contact",
    login: "Admin Login", heroEyebrow: "DIVERSIFIED BUSINESS GROUP", heroLine1: "Building Businesses.", heroLine2: "Creating Opportunities.",
    heroText: "A group of growing businesses united by a commitment to quality, trust and meaningful progress.",
    explore: "Explore Our Businesses", partner: "Partner With Us", trust1: "Multiple Business Verticals", trust2: "Quality & Reliability", trust3: "Partnership Opportunities", trust4: "Growth Through Innovation",
    aboutEyebrow: "WHO WE ARE", aboutTitle: "A vision for better business.", aboutText: "KIRZ Group brings diverse business initiatives together under one identity, creating room for collaboration, innovation and sustainable growth.",
    portfolio: "OUR PORTFOLIO", portfolioTitle: "Businesses built around possibility.", brandsTitle: "One group. Distinct identities.",
    partnershipTitle: "Good partnerships create lasting opportunities.", partnershipText: "Connect with KIRZ Group for distribution, reselling and business collaboration enquiries.",
    learnMore: "Learn more", viewAll: "View all brands", sendEnquiry: "Submit Enquiry", name: "Full Name", phone: "Mobile Number", email: "Email Address", interest: "Interested In", message: "Message",
    select: "Select an option", distribution: "Distribution", reselling: "Reselling", wholesale: "Wholesale", collaboration: "Business Partnership", other: "Other",
    formNote: "This demo form validates your details in the browser. Connect a secure backend before accepting live enquiries.",
    aboutPageTitle: "Different ventures. One shared vision.", vision: "Our Vision", mission: "Our Mission", values: "Our Values",
    visionText: "To develop a trusted and diverse group of businesses with a focus on long-term value.",
    missionText: "To support customers and partners through reliable products, services and business relationships.",
    valuesText: "Trust, quality, customer focus, responsible growth and continuous improvement.",
    contactTitle: "We'd be glad to hear from you.", contactText: "For company and brand enquiries, please use the partnership form or contact the official KIRZ Group team.",
    adminTitle: "Admin Portal", adminSubtitle: "Sign in to manage the KIRZ Group website.", username: "Email or Username", password: "Password", signIn: "Sign In",
    dashboard: "Dashboard", overview: "Website Overview", manageBrands: "Brand Profiles", manageEnquiries: "Partnership Enquiries", signOut: "Sign Out",
    adminDemo: "Demo interface only. Secure authentication and database access must be configured before production use.",
    footerText: "A growing group of businesses working across diverse sectors with a shared focus on trust, quality and opportunity.",
    footerExplore: "EXPLORE", footerInfo: "INFORMATION", privacy: "Privacy Policy", terms: "Terms & Conditions"
  },
  hi: {
    home: "होम", about: "हमारे बारे में", businesses: "व्यवसाय", brands: "हमारे ब्रांड", partnership: "बिजनेस पार्टनरशिप", contact: "संपर्क",
    login: "एडमिन लॉगिन", heroEyebrow: "विविध व्यवसायिक समूह", heroLine1: "व्यवसायों का निर्माण।", heroLine2: "नए अवसरों का सृजन।",
    heroText: "गुणवत्ता, विश्वास और निरंतर प्रगति के संकल्प के साथ आगे बढ़ता व्यवसायिक समूह।",
    explore: "हमारे व्यवसाय देखें", partner: "हमारे साथ जुड़ें", trust1: "विभिन्न व्यवसायिक क्षेत्र", trust2: "गुणवत्ता और विश्वसनीयता", trust3: "पार्टनरशिप के अवसर", trust4: "नवाचार के साथ विकास",
    aboutEyebrow: "हम कौन हैं", aboutTitle: "बेहतर व्यवसाय की एक सोच।", aboutText: "KIRZ Group विभिन्न व्यवसायिक पहलों को एक पहचान के अंतर्गत जोड़ता है, जिससे सहयोग, नवाचार और निरंतर विकास के अवसर बनते हैं।",
    portfolio: "हमारे व्यवसाय", portfolioTitle: "संभावनाओं पर आधारित व्यवसाय।", brandsTitle: "एक समूह, अलग-अलग पहचान।",
    partnershipTitle: "अच्छी साझेदारी नए अवसर बनाती है।", partnershipText: "डिस्ट्रीब्यूशन, रीसेलिंग और बिजनेस सहयोग के लिए KIRZ Group से संपर्क करें।",
    learnMore: "और जानें", viewAll: "सभी ब्रांड देखें", sendEnquiry: "पूछताछ भेजें", name: "पूरा नाम", phone: "मोबाइल नंबर", email: "ईमेल", interest: "किस विषय में रुचि है", message: "संदेश",
    select: "विकल्प चुनें", distribution: "डिस्ट्रीब्यूशन", reselling: "रीसेलिंग", wholesale: "होलसेल", collaboration: "बिजनेस पार्टनरशिप", other: "अन्य",
    formNote: "यह डेमो फॉर्म ब्राउज़र में जानकारी की जांच करता है। वास्तविक पूछताछ लेने से पहले सुरक्षित बैकएंड जोड़ना जरूरी है।",
    aboutPageTitle: "अलग-अलग व्यवसाय, एक साझा सोच।", vision: "हमारा विजन", mission: "हमारा मिशन", values: "हमारे मूल्य",
    visionText: "विश्वास और दीर्घकालिक मूल्य पर केंद्रित विविध व्यवसायों का एक मजबूत समूह बनाना।",
    missionText: "विश्वसनीय उत्पादों, सेवाओं और व्यावसायिक संबंधों के माध्यम से ग्राहकों और भागीदारों का सहयोग करना।",
    valuesText: "विश्वास, गुणवत्ता, ग्राहक प्राथमिकता, जिम्मेदार विकास और निरंतर सुधार।",
    contactTitle: "हम आपसे जुड़कर खुश होंगे।", contactText: "कंपनी और ब्रांड से जुड़ी पूछताछ के लिए पार्टनरशिप फॉर्म का उपयोग करें।",
    adminTitle: "एडमिन पोर्टल", adminSubtitle: "KIRZ Group वेबसाइट को मैनेज करने के लिए साइन इन करें।", username: "ईमेल या यूजरनेम", password: "पासवर्ड", signIn: "साइन इन",
    dashboard: "डैशबोर्ड", overview: "वेबसाइट का सारांश", manageBrands: "ब्रांड प्रोफाइल", manageEnquiries: "पार्टनरशिप पूछताछ", signOut: "लॉग आउट",
    adminDemo: "यह केवल डेमो इंटरफेस है। लाइव उपयोग से पहले सुरक्षित लॉगिन और डेटाबेस जोड़ना जरूरी है।",
    footerText: "विभिन्न क्षेत्रों में कार्यरत व्यवसायों का समूह, जिसका साझा आधार विश्वास, गुणवत्ता और अवसर हैं।",
    footerExplore: "जानकारी", footerInfo: "अन्य लिंक", privacy: "प्राइवेसी पॉलिसी", terms: "नियम एवं शर्तें"
  }
} as const;
