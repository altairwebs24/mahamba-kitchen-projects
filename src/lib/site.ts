export const mediaBase = "https://lmuvqxscnjgmabdqkgzx.supabase.co/storage/v1/object/public/project-media/";

export const images = {
  hero: `${mediaBase}featured-kitchen.jpg`,
  marble: `${mediaBase}marble-kitchen.jpg`,
  entertainment: `${mediaBase}fluted-entertainment.jpg`,
  compact: `${mediaBase}compact-kitchen.jpg`,
  graphite: `${mediaBase}graphite-kitchen.jpg`,
  glass: `${mediaBase}glass-cabinet-kitchen.jpg`,
  neutral: `${mediaBase}neutral-island.jpg`,
};

export const projects = [
  { title: "The Marble Island", category: "Kitchens", image: images.hero, alt: "White marble island and custom cabinetry in a completed kitchen" },
  { title: "The Fluted Wall", category: "Entertainment units", image: images.entertainment, alt: "Custom entertainment wall with fluted panels, shelving and TV unit" },
  { title: "The Modern Kitchen", category: "Kitchens", image: images.marble, alt: "Contemporary white kitchen with marble island and dark appliances" },
  { title: "The Graphite Kitchen", category: "Kitchens", image: images.graphite, alt: "Graphite grey kitchen cabinetry with integrated appliances" },
  { title: "The Glass Cabinet Kitchen", category: "Kitchens", image: images.glass, alt: "White kitchen with glass-fronted upper cabinets and integrated lighting" },
  { title: "The Neutral Island", category: "Kitchens", image: images.neutral, alt: "Neutral kitchen with island sink and marble-look floor" },
  { title: "The Compact Kitchen", category: "Kitchens", image: images.compact, alt: "Compact kitchen with white upper cabinetry and tiled backsplash" },
];

export const contact = {
  phone: "+27 73 540 4885",
  phoneHref: "tel:+27735404885",
  whatsapp: "https://wa.me/27735404885",
  email: "mahambakitchen@gmail.com",
  address: "3579 Umulayeso Street, Mamelodi East Extension 3, Mahube",
};

export function pageHead(title: string, description: string, image?: string) {
  return {
    meta: [
      { title: `${title} | Mahamba Kitchen Projects` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Mahamba Kitchen Projects` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
    ],
  };
}