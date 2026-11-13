export type PortfolioAction = { label: string; url: string; kind: "products" | "download" | "partnership" | "website" | "custom" };
export type PortfolioItem = {
 id: string; slug: string; name: string; category: string; categoryHi: string;
 shortDescription: string; shortDescriptionHi: string; description: string; descriptionHi: string;
 productsText: string; productsTextHi: string; manufacturingText: string; manufacturingTextHi: string;
 partnerText: string; partnerTextHi: string; wholesaleText: string; wholesaleTextHi: string;
 retailText: string; retailTextHi: string; businessInfo: string; businessInfoHi: string;
 logoUrl: string; coverUrl: string; appDownloadUrl: string; websiteUrl: string;
 actions: PortfolioAction[]; active: boolean;
};
const mk=(id:string,slug:string,name:string,category:string,categoryHi:string,desc:string,descHi:string,detail:string,detailHi:string,logo:string,cover:string,app="",website="",actions:PortfolioAction[]=[]):PortfolioItem=>({
 id,slug,name,category,categoryHi,shortDescription:desc,shortDescriptionHi:descHi,description:detail,descriptionHi:detailHi,
 productsText:"Add the complete product range and product catalogue details here.",productsTextHi:"यहां सभी उत्पादों की सूची और उत्पाद कैटलॉग की जानकारी जोड़ें।",
 manufacturingText:"Share third-party / contract manufacturing capabilities, minimum order quantities and enquiry details after internal approval.",manufacturingTextHi:"थर्ड-पार्टी / कॉन्ट्रैक्ट मैन्युफैक्चरिंग की क्षमता, न्यूनतम ऑर्डर और पूछताछ की जानकारी स्वीकृति के बाद यहां जोड़ें।",
 partnerText:"Distribution, reseller and business collaboration opportunities. Share your proposal with our team.",partnerTextHi:"डिस्ट्रीब्यूशन, रीसेलर और बिजनेस सहयोग के अवसर। अपना प्रस्ताव हमारी टीम के साथ साझा करें।",
 wholesaleText:"Wholesale and bulk purchasing enquiries are welcome. Final terms are subject to confirmation.",wholesaleTextHi:"होलसेल और बल्क खरीद संबंधी पूछताछ का स्वागत है। अंतिम शर्तें पुष्टि के अधीन होंगी।",
 retailText:"Retailer enquiries and local business opportunities are welcome.",retailTextHi:"रिटेलर पूछताछ और स्थानीय व्यावसायिक अवसरों का स्वागत है।",
 businessInfo:detail,businessInfoHi:detailHi,logoUrl:logo,coverUrl:cover,appDownloadUrl:app,websiteUrl:website,actions,active:true
});
export const defaultPortfolio:PortfolioItem[]=[
 mk("alhind","al-hind-dawakhana","Al-Hind Dawakhana","Healthcare & Wellness","स्वास्थ्य एवं वेलनेस","Ayurvedic, Unani and herbal wellness products.","आयुर्वेदिक, यूनानी और हर्बल वेलनेस उत्पाद।","Al-Hind Dawakhana is a healthcare and wellness brand focused on Ayurvedic, Unani and herbal product categories.","अल-हिंद दवाखाना आयुर्वेदिक, यूनानी और हर्बल उत्पाद श्रेणियों पर केंद्रित स्वास्थ्य एवं वेलनेस ब्रांड है।","/images/al-hind-dawakhana-logo.svg","/images/al-hind-dawakhana-cover.svg","","",[{label:"All Products",url:"/contact",kind:"products"},{label:"Business Partnership",url:"/partnership",kind:"partnership"}]),
 mk("sweetheart","sweetheart","Sweetheart","Cleaning Products","क्लीनिंग उत्पाद","Cleaning and household care product brand.","क्लीनिंग और घरेलू देखभाल उत्पाद ब्रांड।","Sweetheart represents the group's cleaning and household care product category, with a focus on practical everyday-use solutions.","Sweetheart, KIRZ Group की क्लीनिंग और घरेलू देखभाल उत्पाद श्रेणी का ब्रांड है।","/images/sweetheart-logo.svg","/images/sweetheart-cover.svg","","",[{label:"All Products",url:"/contact",kind:"products"},{label:"Become a Retailer",url:"/partnership",kind:"partnership"}]),
 mk("softprint","soft-print","Soft Print","Printing & Publishing","प्रिंटिंग एवं पब्लिशिंग","Printing, publishing and creative communication.","प्रिंटिंग, पब्लिशिंग और क्रिएटिव कम्युनिकेशन।","Soft Print is the group's printing and publishing identity for print production and creative communication requirements.","Soft Print, KIRZ Group की प्रिंटिंग और पब्लिशिंग पहचान है।","/images/soft-print-logo.svg","/images/soft-print-cover.svg","","",[{label:"Our Services",url:"/contact",kind:"products"},{label:"Business Enquiry",url:"/partnership",kind:"partnership"}]),
 mk("postokirz","postokirz","PostoKIRZ App","Digital Tools","डिजिटल टूल्स","A digital poster creation platform.","डिजिटल पोस्टर बनाने का प्लेटफॉर्म।","PostoKIRZ is a digital poster-making platform concept designed to help users create promotional and informational creatives.","PostoKIRZ एक डिजिटल पोस्टर मेकर प्लेटफॉर्म है, जो प्रचार और जानकारी से जुड़े क्रिएटिव बनाने में मदद करता है।","/images/postokirz-logo.svg","/images/postokirz-cover.svg","","",[{label:"Explore App",url:"/contact",kind:"website"},{label:"Partner With Us",url:"/partnership",kind:"partnership"}]),
 mk("kirznews","kirz-news","KIRZ News","News & Media","न्यूज़ एवं मीडिया","News, information and media publishing.","समाचार, जानकारी और मीडिया पब्लिशिंग।","KIRZ News is the group's news and media initiative for publishing updates and informational content.","KIRZ News, KIRZ Group की न्यूज़ और मीडिया पहल है।","/images/kirz-news-logo.svg","/images/kirz-news-cover.svg","","",[{label:"Latest Updates",url:"/contact",kind:"website"},{label:"Media Collaboration",url:"/partnership",kind:"partnership"}]),
 mk("kirzstore","kirz-store","KIRZ Store","E-commerce","ई-कॉमर्स","An online store for herbal and wellness products.","हर्बल और वेलनेस उत्पादों का ऑनलाइन स्टोर।","KIRZ Store is the group's e-commerce platform focused on herbal, Ayurvedic and Unani product categories.","KIRZ Store, KIRZ Group का ई-कॉमर्स प्लेटफॉर्म है, जो हर्बल, आयुर्वेदिक और यूनानी उत्पादों पर केंद्रित है।","/images/kirz-store-logo.svg","/images/kirz-store-cover.svg","","https://www.kirzstore.com",[{label:"Shop All Products",url:"https://www.kirzstore.com",kind:"products"},{label:"Wholesale Enquiry",url:"/partnership",kind:"partnership"}]),
 mk("addressbook","address-book","Address Book App","Digital Utility","डिजिटल यूटिलिटी","A simple contact and business address management app.","कॉन्टैक्ट और बिजनेस एड्रेस मैनेज करने का ऐप।","Address Book is a digital utility initiative for saving and organizing personal and business contacts. App availability and download details can be managed here.","Address Book एक डिजिटल यूटिलिटी पहल है, जिसमें व्यक्तिगत और व्यावसायिक कॉन्टैक्ट व्यवस्थित किए जा सकते हैं। ऐप की उपलब्धता और डाउनलोड जानकारी यहां मैनेज की जा सकती है।","/images/address-book-logo.svg","/images/address-book-cover.svg","","",[{label:"Explore App",url:"/brands/address-book",kind:"website"},{label:"Business Enquiry",url:"/partnership",kind:"partnership"}]),
 mk("ayusaathi","ayu-saathi","Ayu Saathi","Wellness & Digital","वेलनेस एवं डिजिटल","Wellness information and practical health tools.","वेलनेस जानकारी और उपयोगी हेल्थ टूल्स।","Ayu Saathi is a wellness information initiative. Its features, content and availability can be updated by the KIRZ Group team.","Ayu Saathi वेलनेस जानकारी की एक पहल है। इसकी सुविधाएं, सामग्री और उपलब्धता KIRZ Group टीम अपडेट कर सकती है।","/images/ayu-saathi-logo.svg","/images/ayu-saathi-cover.svg","","",[{label:"Explore Features",url:"/contact",kind:"website"},{label:"Partnership",url:"/partnership",kind:"partnership"}]),
 mk("tridosh","tridosh-report","Tridosh Report","Wellness Tools","वेलनेस टूल्स","A report-based wellness assessment tool.","रिपोर्ट आधारित वेलनेस असेसमेंट टूल।","Tridosh Report is a wellness assessment concept. Any health-related output should be presented as informational and not as a medical diagnosis.","Tridosh Report एक वेलनेस असेसमेंट की अवधारणा है। स्वास्थ्य संबंधी परिणाम केवल जानकारी के लिए हों, चिकित्सा निदान के रूप में नहीं।","/images/tridosh-report-logo.svg","/images/tridosh-report-cover.svg","","",[{label:"View Report Details",url:"/contact",kind:"website"},{label:"Business Enquiry",url:"/partnership",kind:"partnership"}])
];

for (const item of defaultPortfolio) {
  item.actions = [
    { label: "All Products / Services", url: `/brands/${item.slug}#products-services`, kind: "products" },
    { label: "Third-Party Manufacturing", url: `/brands/${item.slug}#manufacturing`, kind: "custom" },
    { label: "Become a Business Partner", url: `/brands/${item.slug}#partners`, kind: "partnership" },
    { label: "Become a Wholesaler", url: `/brands/${item.slug}#wholesalers`, kind: "custom" },
    { label: "Become a Retailer", url: `/brands/${item.slug}#retailers`, kind: "custom" },
    ...(item.websiteUrl ? [{ label: "Official Website", url: item.websiteUrl, kind: "website" as const }] : [])
  ];
}

export const PORTFOLIO_STORAGE_KEY="kirz_group_portfolio_v1";
