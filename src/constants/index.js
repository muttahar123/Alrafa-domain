import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigPhone1,
  bigPhone2,
  bigPhone3,
  customer1,
  customer2,
  customer3,
  Phone4, 
  Phone5,
  Phone6,
  Phone7,
  Phone8,
  Phone9,
  Phone10,
  Phone11,
  thumbnailPhone1,
  thumbnailPhone2,
  thumbnailPhone3,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "aboutUs", label: "About Us", scroll: true },
  { href: "/products", label: "Products" },
  { href: "contactUs", label: "Contact Us", scroll: true },
];

export const electronics = [
  {
    thumbnail: thumbnailPhone1,
    bigPhone: bigPhone1,
  },
  {
    thumbnail: thumbnailPhone2,
    bigPhone: bigPhone2,
  },
  {
    thumbnail: thumbnailPhone3,
    bigPhone: bigPhone3,
  },
];

export const statistics = [
  { value: "5k+", label: "Products" },
  { value: "2k+", label: "Stores" },
  { value: "1M+", label: "Customers" },
];

export const allProducts = [
  {
    id: 0,
    name: "JBL Tune 720BT Headphone",
    price: 249,
    description:
      "JBL Headphones white color Tune 720BT",
    category: "Airpods",
    image:
      "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw160915e6/01.JBL_Tune%20720BT_Product%20Image_Hero_White.png?sw=535&sh=535",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 1,
    name: "Samsung Galaxy Z Fold6 5G  ",
    price: 4299,
    description:
      "Samsung Galaxy Z Fold6 5G Smartphone with AI (Dual SIM, 12GB RAM, 256GB, Silver Shadow) ",
    category: "Samsung",
    image:
      "https://eezepc.com/wp-content/uploads/2024/07/Samsung-Galaxy-Z-Fold6-5G-Smartphone-with-AI-EEZEPC-Price-in-Pakistan-Silver-2-1536x1536.webp",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro Max 1TB",
    price:  6899,
    description:
      "Apple iPhone 16 Pro Max Dual sim Hong Kong 🇭🇰 (: Colours available Natural, Desert, Silver, Black:)",
    category: "Apple",
    image:
      "https://www.mega.pk/items_images/Apple+iPhone+16+Pro+Max+Price+in+Pakistan%2C+Specifications%2C+Features_-_25334.webp",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 3,
    name: "Apple AirPods 4  with USB-C",
    price: 749,
    description:
      "Apple AirPods Noise-Canceling Earbuds with USB-C Charging Case (4th Generation) ",
    category: "Airpods",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502960502",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2 Black case",
    price: 3499,
    description:
      "Apple Watch Ultra 2 GPS + Cellular, 49mm Black Titanium Case with Black Titanium Milanese Loop",
    category: "Watches",
    image:
      "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_apple-ultra_2_-myshop-pk-3.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    name: "Apple AirPods Max 2 2024  ",
    price: 1999,
    description:
      "Apple AirPods Max 2 2024 - MWW73  (:Colours are availible:) MWW43 - Midnight MWW53 - Straight MWW63 - Blue MWW73 - Orange MWW83 - Purple",
    category: "Airpods",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-orange_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724927052299",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 6,
    name: "Apple iPad Pro 11″ M4 256GB ",
    price: 3450,
    description:
      "Apple iPad Pro 11″ M4 Chip 256GB WiFi (MVV83)...",
    category: "Apple",
    image:
      "https://www.bing.com/th?id=OIP.iQvJvnoJVLxsIcu6XvgyagHaHa&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 7,
    name: "Apple iPad Pro 11″ M4 512GB",
    price: 3800,
    description:
      "Apple iPad Pro 11″ M4 Chip 512GB WiFi (MVV83)...",
    category: "Apple",
    image:
      "https://www.czone.com.pk/images/thumbnails-large/20-czone.com.pk-1540-16194-070624095257.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    name: "Apple iPad Pro 7thGen 256GB",
    price: 4300,
    description:
      "Apple iPad Pro 7th Generation Apple M4 Chip |13-Inch Display (256GB, WiFi, MVX23 Space Black)",
    category: "Apple",
    image:
      "data:image/jpeg;base64,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",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 9,
    name: "Apple iPad Pro 7th Gen 512GB ",
    price: 5000,
    description:
      "Apple iPad Pro 7th Generation Apple M4 Chip |13-Inch Display (512GB, WiFi, MVX23 Space Black and silver)",
    category: "Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0hQBcvUl_cI9BG1n7zEVFFkYMHdRbz4e1A&s",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    name: "Apple iPad Pro 7thGen Apple 1TB ",
    price: 6400,
    description:
      "Apple iPad Pro 7th Generation Apple M4 Chip |13-Inch Display (1TB, WiFi, MVX23 Space grey) ",
    category: "Apple",
    image:
      "data:image/jpeg;base64,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",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 11,
    name: "Apple 10.9″ iPad Air 5thGen 256GB",
    price: 2200,
    description:
      "Apple MM9L3 10.9″ iPad Air with M1 Chip 5th Gen, 256GB, Wi-Fi Only, Space Gray",
    category: "Apple",
    image:
      "https://www.czone.com.pk/images/thumbnails-large/copy-2-czone.com.pk-1540-13073-080422042522.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 12,
    name: "Apple iPad 64GB 9th Gen MK2K3 ",
    price: 999,
    description:
      "Apple iPad 64GB 9th Gen Wi-Fi 10.2' MK2K3 Space Gray",
    category: "Apple",
    image:
      "https://static3.webx.pk/files/821/Images/ipad-9th-1-industechpk-821-0-050123111212839.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 13,
    name: "Apple iPad 256GB 9th Gen MK2K3",
    price: 1400,
    description:
      "Apple iPad 256GB 9th Gen Wi-Fi 10.2' MK2K3 Space Gray",
    category: "Apple",
    image:
      "https://static3.webx.pk/files/821/Images/ipad-9th-1-industechpk-821-0-050123111212839.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    name: "Apple 8.3″ iPad Mini (6Gen, 64GB)",
    price: 600,
    description:
      "Apple 8.3″ iPad Mini (6th Gen, 64GB, Wi-Fi Only)",
    category: "Apple",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-pink-wifi?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eDJDc00wczl1QWk5QmpVYitFNXQwN0Y2ME45L1lWWDhkYWVYaTNEZnBvQTRiVGtTNXdaWUN6Z1d5TXhjdWE5bzhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXVnUG4rVDEyRXlYS2FlekVRL0hyc1ZlcXpIQ2FPdTd3djVrSms4cG5zNHZ3PT0=&traceId=1",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 15,
    name: "Apple iPad 10.9' 10th Gen - 64GB",
    price: 1300,
    description:
      "Apple iPad 10.9' 10th Gen - 64GB - WiFi - Silver MPQ03",
    category: "Apple",
    image:
      "https://www.czone.com.pk/images/thumbnails-large/39-czone.com.pk-1540-14276-170123101311.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 16,
    name: "Apple iPad 10' 10th Gen - 256GB ",
    price: 1800,
    description:
      "Apple iPad 10.MPQ039' 10th Gen - 256GB - WiFi - Silver ",
    category: "Apple",
    image:
      "https://www.czone.com.pk/images/thumbnails-large/39-czone.com.pk-1540-14276-170123101311.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    name: "Buy Apple Watch Series 10 ",
    price: 1599,
    description:
      "Buy Apple Watch Series 10 42mm aluminium Gps Colours available Rose gold, Silver, Jetblack",
    category: "Watches",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuY0dmQWU1UUhxNENQZVRyQjk5ZnRCcVBpVENpMUluRnVNbld0T1NWSFh2cXlYK1hMV0U1ZW9xcCtlRHF3V3gyZThGL0dtL1JkeEJQSnRCMXJsZFBFY2doN2ZiODFwWklZeDgrZ0RtbVRXag",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 18,
    name: "Samsung Galaxy S24 Ultra",
    price: 3299,
    description:
      "Samsung Galaxy S24 Ultra 12GB 512GB",
    category: "Samsung",
    image:
      "https://qmart.pk/cdn/shop/files/Samsung_Galaxy-S24-Ultra-Qmart-2_2eced1e2-faae-41d2-af37-f53b61c25937.jpg?v=1705758939&width=600",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 19,
    name: "Apple iPad Air M2 6Gen 13' 128GB",
    price: 2650,
    description:
      "Apple iPad Air M2 2024 6th Gen 13' 128GB Wi-Fi.",
    category: "Apple",
    image:
      "https://alfamall.com/pub/media/catalog/product/cache/1a89dbb01e019c7ecb20ce1cadff1320/i/p/ipad-air-6-11-inch-m2-chip-price-in-pakistan-14.jpg",
    rating: { rate: 2.1, count: 430 },
  }, 
  {
    id: 20,
    name: "Apple iPad Air 6thGen M2 256GB",
    price: 2650,
    description:
      "Apple iPad Air 6th Generation M2 Chip | 11inch Display (256GB, WiFi) ",
    category: "Apple",
    image:
      "https://alfamall.com/pub/media/catalog/product/cache/1a89dbb01e019c7ecb20ce1cadff1320/i/p/ipad-air-6-11-inch-m2-chip-price-in-pakistan-6.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 21,
    name: "Apple Watch Series 10 46mm",
    price: 1699,
    description:
      "Apple Watch Series 10 Aluminum Case GPS + Cellular 46mm Sport Colours available Rose gold, Silver, Jetblack",
    category: "Apple",
    image:
      "https://th.bing.com/th/id/OIP.6_VGuUH9X-_e_uPKk-ERuwHaD4?w=330&h=180&c=7&r=0&o=5&pid=1.7",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 22,
    name: "Apple iPhone 16 Pro Max 512GB",
    price:  5950,
    description:
      "Apple iPhone 16 Pro Max Dual sim Hong Kong 🇭🇰 (: Colours available Natural, Desert, Silver, Black:)Super Retina XDR displays Apple Inteligence",
    category: "Apple",
    image:
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/iphone_16_pro_max_desert_titanium_1?1728654466?g=0",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 23,
    name: "Apple iPhone 16 Pro Max 256GB",
    price:  5950,
    description:
      "Apple iPhone 16 Pro Max Dual sim Hong Kong 🇭🇰 Super Retina XDR displays Apple Inteligence (: Colours available Natural, Desert, Silver, Black:)",
    category: "Apple",
    image:
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/iphone_16_pro_max_black_titanium_1?1728661389?g=0",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 24,
    name: "Apple Watch Ultra 2 Black case",
    price: 3099,
    description:
      "Apple Watch Ultra 2 GPS + Cellular, 49mm Black Titanium Case with Black 49mm Dark Green Alpine Loop - Medium - Natural Titanium Finish",
    category: "Watches",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXMU3ref_AV2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1724776714663",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 25,
    name: "Apple Watch Ultra 2 Black case",
    price: 3099,
    description:
      "Apple Watch Ultra 2 GPS + Cellular, 49mm Black Titanium Case with Black 49mm Dark Black Ocean Loop - Medium - Natural Titanium Finish",
    category: "Watches",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXTL3ref_VW_34FR+watch-case-49-titanium-natural-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_GB?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=dmFXbnhKLy82VnJYRUd6dzc5OTdwM2pDV2hhem5qNnpDenFtKzI1OXdzYkpncG05NXptdno5VmVNOFY1RGFaTE96dTRSSXdkWit3NnU2Q1orZWxLbWV2QUJBYmhnTmp6cVYvdjdRS2o3cTMvWXkzeWRMRFBCNG8yZ2FmMHMxanRWeVdlL2VtcDBtK3hQLzRUc3ZsbmM3eWo4YmE0SG5qYzd0OW5UYnpudkJxQ1RlL3AxRzV5SVRWdEVjOUNzaUZOclRNSDE2TkNRbnBpQlJ6dXd3WUMxZUc3Nnp1SVhzTWtwRCtsZTJzQklnQQ",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 26,
    name: "Apple Watch Ultra 2 Natural case",
    price: 3099,
    description:
      "Apple Watch Ultra 2 GPS + Cellular, 49mm Natural Titanium Case with Black 49mm Dark Green Alpine Loop - Medium - Natural Titanium Finish",
    category: "Watches",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMU3ref_VW_34FR+watch-case-49-titanium-natural-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=U0xaTzhWRGJUUEFqcDAzODZmYVlyWGpDV2hhem5qNnpDenFtKzI1OXdzYkpncG05NXptdno5VmVNOFY1RGFaTE96dTRSSXdkWit3NnU2Q1orZWxLbVNCYWZ0M2xobjlJWjF6VEVYcVFORGQxMElNdmlqOUo3NFdlSG12b28wYWJSd2NzWllSMVowSzNFMjFhV0RNcWhKUDhoaDQvQk1qdG9oYWwxVDBSWE5ueFBYN1QxYzVKQXZvbXpRaU9oa2xkSndoMjNQaXpaYS9oa3VMMEdpclFocEsyaFRNMWxETjRNSCtjT2c2cTFmRQ",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 27,
    name: "Apple Watch Ultra 2 Natural case",
    price: 3099,
    description:
      "Apple Watch Ultra 2 GPS + Cellular, 49mm Natural Titanium Case with Black 49mm Dark Black Ocean Loop - Medium - Natural Titanium Finish",
    category: "Watches",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXTL3ref_VW_34FR+watch-case-49-titanium-natural-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_GB?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=dmFXbnhKLy82VnJYRUd6dzc5OTdwM2pDV2hhem5qNnpDenFtKzI1OXdzYkpncG05NXptdno5VmVNOFY1RGFaTE96dTRSSXdkWit3NnU2Q1orZWxLbWV2QUJBYmhnTmp6cVYvdjdRS2o3cTMvWXkzeWRMRFBCNG8yZ2FmMHMxanRWeVdlL2VtcDBtK3hQLzRUc3ZsbmM3eWo4YmE0SG5qYzd0OW5UYnpudkJxQ1RlL3AxRzV5SVRWdEVjOUNzaUZOclRNSDE2TkNRbnBpQlJ6dXd3WUMxZUc3Nnp1SVhzTWtwRCtsZTJzQklnQQ",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 28,
    name: "Apple Watch (SE 2023) 44mm",
    price: 999,
    description:
      "Apple Watch (SE 2023) 44mm GPS + Cellular, 44mm Case with Black 44mm (Colours are availible MIDNIGHT , STARLIGHT ,SILVER )",
    category: "Watches",
    image:
      "https://www.apple.com/v/apple-watch-se/r/images/overview/hero/hero__f76n0zejlxqq_large.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 29,
    name: "Apple Watch (SE 2023) 40mm",
    price: 849,
    description:
      "Apple Watch (SE 2023) 40mm GPS + Cellular, 40mm Case with Black 44mm (Colours are availible MIDNIGHT , STARLIGHT ,SILVER )",
    category: "Watches",
    image:
      "https://www.apple.com/v/apple-watch-se/r/images/overview/hero/hero__f76n0zejlxqq_large.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 30,
    name: "Apple AirPods 4  ",
    price: 549,
    description:
      "Apple AirPods Earbuds with USB-C Charging Case (4th Generation) ",
    category: "Airpods",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502960502",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 31,
    name: "Apple AirPods pro 2",
    price: 799,
    description:
      "Apple AirPods pro 2 Noise-Canceling Earbuds with USB-C Charging Case (4th Generation) ",
    category: "Airpods",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502960502",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 32,
    name: "Apple AirPods Max 2 2024 MWW63 ",
    price: 1999,
    description:
      "Apple AirPods Max 2 2024 - MWW73  (:Colours are availible:) MWW43 - Midnight MWW53 - Straight MWW63 - Blue MWW73 - Orange MWW83 - Purple",
    category: "Airpods",
    image:
      "https://www.apple.com/v/airpods-max/h/images/overview/bento/blue/bento_1_airpod_max_blue__blqgkfdancya_xlarge.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 33,
    name: "Apple AirPods Max 2 2024 MWW83 ",
    price: 1999,
    description:
      "Apple AirPods Max 2 2024 - MWW83  (:Colours are availible:) MWW43 - Midnight MWW53 - Straight MWW63 - Blue MWW73 - Orange MWW83 - Purple",
    category: "Airpods",
    image:
      "https://www.apple.com/v/airpods-max/h/images/overview/bento/purple/bento_1_airpod_max_purple__2udwesqoiyq2_xlarge.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 34,
    name: "Apple Watch Series 10 42mm",
    price: 1599,
    description:
      "Apple Watch Series 10 Aluminum Case GPS + Cellular 42mm Sport Colours available Rose gold, Silver, Jetblack",
    category: "Watches",
    image:
      "https://i0.wp.com/gsmart.pk/wp-content/uploads/2024/09/Apple-Watch-Series-10-Aluminum-Case-GPS-Cellular-42mm-Sport-Band-Lake-Green-.jpg?fit=2000%2C2000&ssl=1",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 35,
    name: "JBL Tune 510 Headphone",
    price: 99,
    description:
      "JBL Headphones white color Tune 720BT",
    category: "Airpods",
    image:
      "https://www.bing.com/th?id=OIP.DpO9BvSC8255RfrqM4QGqgHaHa&w=181&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 36,
    name: "JBL Live 670NC Headphones",
    price: 449,
    description:
      "JBL Headphones white color Tune 670NC",
    category: "Airpods",
    image:
      "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw350bd7db/JBL_Live%20670NC_Product%20Image_Hero_Black.png?sw=535&sh=535",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 37,
    name: "JBL Tune 520 Headphone",
    price: 139,
    description:
      "JBL Headphones white color Tune 520",
    category: "Airpods",
    image:
      "https://www.bing.com/th?id=OIP.DpO9BvSC8255RfrqM4QGqgHaHa&w=181&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 38,
    name: "JBL Tune 660NC Headphone",
    price: 99,
    description:
      "JBL Headphones Black color Tune 660NC",
    category: "Airpods",
    image:
      "https://cdn.mos.cms.futurecdn.net/a4kKf4mT5XhbMfMHVhnjP6-1920-80.jpg.webp",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 39,
    name: "JBL Live 770NC Headphone",
    price: 499,
    description:
      "JBL Headphones Golden color Live 770NC",
    category: "Airpods",
    image:
      "https://mobiel-product.imgix.net/kd67sqztqhtrovxangw3r2qmm8yd?w=420&h=420&dpr=1&trim=none&auto=compress%2Cformat&q=95",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 40,
    name: "JBL Tune 770 Headphone",
    price: 329,
    description:
      "JBL Headphones Golden color tune 770",
    category: "Airpods",
    image:
      "https://mobiel-product.imgix.net/zd3flqjo7iovhubl8q2ur8sq6fwb?w=420&h=420&dpr=1&trim=none&auto=compress%2Cformat&q=95",
    rating: { rate: 3.9, count: 120 },
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy fast, free shipping on all electronics purchases.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Make payments securely with multiple payment options.",
  },
  {
    imgURL: support,
    label: "24/7 Support",
    subtext: "Our team is available to assist you around the clock.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "John Doe",
    rating: 4.8,
    feedback:
      "The iPhone 13 Pro Max I purchased was delivered on time and in perfect condition. Highly satisfied!",
  },
  {
    imgURL: customer2,
    customerName: "Jane Smith",
    rating: 4.9,
    feedback:
      "The MacBook Pro is an absolute beast for work. Great customer service and fast delivery.",
  },
  {
    imgURL: customer3,
    customerName: "Samuel Green",
    rating: 4.7,
    feedback:
      "Purchased the Dell XPS 15 and it's fantastic. The whole process was smooth and seamless.",
  },
  
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "iPhone 16 Pro Max", link: "/" },
      { name: "Samsung Note 20 Ultra", link: "/" },
      { name: "Apple Ipad Pro", link: "/" },
      { name: "Apple Airpods", link: "/" },
      { name: "Apple Watches", link: "/" },
      { name: "JBL Watches", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "Track Shipment", link: "/" },
      { name: "Deliveries", link: "/" },
      { name: "Return policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "alrafa.electronics.dxb@gmail.com",
        link: "mailto:alrafa.electronics.dxb@gmail.com",
      },
      { name: "+971503713437", link: "tel:+971503713437" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/alrafa.dxb/",
  },
];
