export const mediaBase = "https://lmuvqxscnjgmabdqkgzx.supabase.co/storage/v1/object/public/project-media/";

export const images = {
  hero: `${mediaBase}featured-kitchen.jpg`,
  marble: `${mediaBase}marble-kitchen.jpg`,
  entertainment: `${mediaBase}fluted-entertainment.jpg`,
  compact: `${mediaBase}compact-kitchen.jpg`,
  graphite: `${mediaBase}graphite-kitchen.jpg`,
  glass: `${mediaBase}glass-cabinet-kitchen.jpg`,
  neutral: `${mediaBase}neutral-island.jpg`,
  emerald: `${mediaBase}emerald-kitchen.jpg`,
  galley: `${mediaBase}galley-kitchen.jpg`,
  oak: `${mediaBase}oak-kitchen.jpg`,
  corner: `${mediaBase}corner-kitchen.jpg`,
  wardrobe: `${mediaBase}bedroom-wardrobe.jpg`,
  mosaicIsland: `${mediaBase}mosaic-island.jpg`,
  monochrome: `${mediaBase}monochrome-kitchen.jpg`,
  flutedIsland: `${mediaBase}fluted-island.jpg`,
  mosaicKitchen: `${mediaBase}mosaic-kitchen.jpg`,
};

export const projects = [
  { title: "The Marble Island", category: "Kitchens", image: images.hero, alt: "White marble island and custom cabinetry in a completed kitchen" },
  { title: "The Fluted Wall", category: "Entertainment units", image: images.entertainment, alt: "Custom entertainment wall with fluted panels, shelving and TV unit" },
  { title: "The Modern Kitchen", category: "Kitchens", image: images.marble, alt: "Contemporary white kitchen with marble island and dark appliances" },
  { title: "The Graphite Kitchen", category: "Kitchens", image: images.graphite, alt: "Graphite grey kitchen cabinetry with integrated appliances" },
  { title: "The Glass Cabinet Kitchen", category: "Kitchens", image: images.glass, alt: "White kitchen with glass-fronted upper cabinets and integrated lighting" },
  { title: "The Neutral Island", category: "Kitchens", image: images.neutral, alt: "Neutral kitchen with island sink and marble-look floor" },
  { title: "The Compact Kitchen", category: "Kitchens", image: images.compact, alt: "Compact kitchen with white upper cabinetry and tiled backsplash" },
  { title: "The Emerald Kitchen", category: "Kitchens", image: images.emerald, alt: "Green gloss kitchen design with marble island, wine rack and wood accents" },
  { title: "The Galley Kitchen", category: "Kitchens", image: images.galley, alt: "Galley kitchen with white cabinetry, gas hob and grey subway tile splashback" },
  { title: "The Oak Kitchen", category: "Kitchens", image: images.oak, alt: "Kitchen with light oak cabinetry, white counters and freestanding gas stove" },
  { title: "The Corner Kitchen", category: "Kitchens", image: images.corner, alt: "White L-shaped kitchen with stone countertops and granite-look flooring" },
  { title: "The Bedroom Wardrobe", category: "Wardrobes & storage", image: images.wardrobe, alt: "Built-in bedroom wardrobe in white gloss with dark wood drawers" },
  { title: "The Mosaic Island", category: "Kitchens", image: images.mosaicIsland, alt: "Kitchen island with gas hob, mosaic splashback and pendant lighting" },
  { title: "The Monochrome Kitchen", category: "Kitchens", image: images.monochrome, alt: "White kitchen with black-framed glass cabinets and black appliances" },
  { title: "The Fluted Island", category: "Kitchens", image: images.flutedIsland, alt: "White breakfast island with fluted wood panelling and black pendant lights" },
  { title: "The Mosaic Kitchen", category: "Kitchens", image: images.mosaicKitchen, alt: "White kitchen with mosaic splashback, corner sink and pendant lighting" },
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