export const siteConfig = {

    author:{
        name: "@ferminoscleaningservices", 
        title: "Fermino's Cleaning Services",
        bio: "Cleanig Services in USA. SINCE 2014"

    },
    social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
    }
} as const;
export type SiteConfig = typeof siteConfig