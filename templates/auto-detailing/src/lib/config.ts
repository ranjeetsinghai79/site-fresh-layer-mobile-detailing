import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Fresh Layer Mobile Detailing",
    tagline: "Your Car Deserves The Best",
    phone: "(619) 433-8974",
    phoneHref: "tel:+16194338974",
    email: "info@freshlayerdetailing.com",
    address: "San Diego, CA",
    city: "San Diego",
    serviceAreas: ["San Diego", "La Jolla", "Del Mar", "Coronado", "Rancho Santa Fe", "Poway"],
    license: "Licensed & Insured",
    since: "2015",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ocean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Complete Mobile Detailing", desc: "Full-service detailing brought right to your location, making your car look brand new.", urgent: false },
    { icon: "shield-check", title: "Ceramic Coating", desc: "Long-lasting protection and an incredible shine for your vehicle's paintwork.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Restore your car's finish by removing swirls, scratches, and imperfections.", urgent: false },
    { icon: "truck", title: "RV & Boat Detailing", desc: "Specialized detailing services for your recreational vehicles and marine crafts.", urgent: false },
    { icon: "star", title: "Exotic Car Detailing", desc: "Premium care for luxury and high-performance vehicles, preserving their pristine condition.", urgent: false },
    { icon: "heart", title: "Interior Car Detailing", desc: "Deep cleaning and restoration of your car's interior for a fresh, hygienic cabin.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "La Jolla", stars: 5, text: "Fresh Layer did an amazing job on my Tesla Model 3. The ceramic coating looks incredible and the car practically glows. They were punctual, professional, and the price was very fair for the quality of work. Highly recommend their mobile service!" },
    { name: "Mark T.", location: "Del Mar", stars: 5, text: "I had Fresh Layer perform paint correction and a full detail on my classic Mustang. The results were beyond my expectations. My car hasn't looked this good since it rolled off the factory floor. The team was meticulous and clearly passionate about their craft." },
    { name: "Jessica R.", location: "Coronado", stars: 5, text: "My SUV desperately needed an interior detail after a long road trip with kids and pets. Fresh Layer transformed it! Every stain was gone, and it smelled so fresh. The convenience of them coming to my home was a huge plus. Fantastic service!" }
  ],

  trustBadges: [
    "Mobile Service", "1,200+ Jobs Completed", "Exotic Car Specialists", "Gift Certificates Available", "Maintenance Memberships"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1200, label: "Jobs Completed", suffix: "+", decimals: 0 },
    { value: 9, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "truck", title: "Mobile Convenience", desc: "We come to you, saving you time and hassle with our on-location detailing services." },
    { icon: "award", title: "Expert Technicians", desc: "Our detailers are highly trained and passionate about making your vehicle shine." },
    { icon: "shield-check", title: "Premium Products", desc: "We use only the highest quality, professional-grade detailing products for superior results." },
    { icon: "sparkles", title: "Exceptional Results", desc: "We guarantee a showroom finish, paying meticulous attention to every detail." },
    { icon: "thumbs-up", title: "Customer Satisfaction", desc: "Your happiness is our priority; we strive to exceed your expectations every time." },
    { icon: "clock", title: "Flexible Scheduling", desc: "Book an appointment that fits your busy schedule, at your home or office." }
  ],

  formServiceOptions: ["Complete Mobile Detailing", "Ceramic Coating", "Paint Correction", "RV & Boat Detailing", "Exotic Car Detailing", "Interior Car Detailing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!