import { createContext, useState } from "react";
import ban1 from "./ban1.jpg"

// list of brush products
const brush_list = [
  {
    id: 1,
    name: "Blend Trend Face Brush - 003 Contour",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
    price: 699,
    rating: "4.7(428)",
    love: false,
    trending: true,
  },
  {
    id: 2,
    name: "Blend Trend Eyeshadow Brush - 043 Round Xl",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
    price: 499,
    rating: "4.6(53)",
    love: false,
    trending: true,
  },
  {
    id: 3,
    name: "Blend Trend Eyeshadow Brush - 042 Round",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
    price: 799,
    rating: "4.1(945)",
    love: false,
    trending: true,
  },
  {
    id: 4,
    name: "EYES & FACE Combo",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
    price: 999,
    rating: "4.9(568)",
    love: false,
  },
  {
    id: 5,
    name: "Blend Trend Face Brush - 006 Highlighter",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
    price: 499,
    rating: "4.6(188)",
    love: false,
    trending: true,
  },
  {
    id: 6,
    name: "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
    price: 249,
    rating: "4.5(97)",
    love: false,
    trending: true,
  },
  {
    id: 7,
    name: "Blend Trend Eyeshadow Brush - 041 Flat",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
    price: 499,
    rating: "4.6(352)",
    love: false,
  },
  {
    id: 8,
    name: "Blend Trend Face Brush - 007 Powder",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
    price: 799,
    rating: "4.9(143)",
    love: false,
    trending: true,
  },
  {
    id: 9,
    name: "Blend Trend Foundation Brush - 052 Kabuki",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
    price: 499,
    rating: "4.6(318)",
    love: false,
    trending: true,
  },
  {
    id: 10,
    name: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
    price: 119,
    rating: "4.8(96)",
    love: false,
  },
  {
    id: 11,
    name: "Blend Trend Dual Face Brush - 075 Powder + Foundation",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
    price: 349,
    rating: "4.6(73)",
    love: false,
    trending: true,
  },
  {
    id: 12,
    name: "Blend Trend Face Brush - 001 Blush",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
    price: 999,
    rating: "5(168)",
    love: false,
    trending: true,
  },
  {
    id: 13,
    name: "Face Essentials Combo",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
];

// list of trending products
const trend_list = [
  {
    id: 14,
    name: "Matte Attack Transferproof Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
    price: 699,
    rating: "4.7(428)",
    love: false,
  },
  {
    id: 15,
    name: "Air Kiss Powder Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    price: 499,
    rating: "4.6(53)",
    love: false,
  },
  {
    id: 16,
    name: "Matte As Hell Crayon Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    price: 799,
    rating: "4.1(945)",
    love: false,
  },
  {
    id: 17,
    name: "Ace Of Face Foundation Stick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    price: 999,
    rating: "4.9(568)",
    love: false,
  },
  {
    id: 18,
    name: "Nothing Else Matter Longwear Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
    price: 499,
    rating: "4.6(188)",
    love: false,
  },
  {
    id: 19,
    name: "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
    price: 249,
    rating: "4.5(97)",
    love: false,
  },
  {
    id: 20,
    name: "Smudge Me Not Liquid Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
    price: 499,
    rating: "4.6(352)",
    love: false,
  },
  {
    id: 21,
    name: "Contour De Force Face Palette",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    price: 799,
    rating: "4.9(143)",
    love: false,
  },
  {
    id: 22,
    name: "Bling Leader Illuminating Moisturizer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
    price: 499,
    rating: "4.6(318)",
    love: false,
  },
  {
    id: 23,
    name: "Contour De Force Mini Bronzer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
    price: 399,
    rating: "4.8(96)",
    love: false,
  },
  {
    id: 24,
    name: "Blend The Rules Eyeshadow Palette",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    price: 1199,
    rating: "4.6(73)",
    love: false,
  },
  {
    id: 25,
    name: "Contour De Force Mini Blush",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
    price: 3499,
    rating: "5(168)",
    love: false,
  },
  {
    id: 26,
    name: "Mettle Satin Lipstick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",
    price: 999,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 27,
    name: "Dream Cover SPF15 Mattifying Compact",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 28,
    name: "Arch Arrival Brow Definer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 29,
    name: "Gloss Boss 24HR Eyeliner - 01 Back In Black (Black)",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 30,
    name: "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 31,
    name: "Goddess Of Flawless SPF30+ BB Cream",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
    price: 699,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 32,
    name: "Base Of Glory Pore Minimizing Primer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
    price: 799,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 33,
    name: "Set The Tone Tinted Powder",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
    price: 699,
    rating: "4.6(148)",
    love: false,
  },
];

// list of skin products
const skin_list = [
  {
    id: 34,
    name: "Citrus Got Real Cooling Stick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",
    price: 399,
    rating: "4.7(428)",
    love: false,
  },
  {
    id: 35,
    name: "Cheat Sheet Clarifying Mask",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
    price: 99,
    rating: "4.6(53)",
    love: false,
  },
  {
    id: 36,
    name: "Citrus Got Real Daily Moisturizer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
    price: 499,
    rating: "4.1(945)",
    love: false,
  },
  {
    id: 37,
    name: "Aquaholic Instant Pore Cleansing Mask",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
    price: 499,
    rating: "4.9(568)",
    love: false,
  },
  {
    id: 38,
    name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    price: 599,
    rating: "4.6(188)",
    love: false,
  },
  {
    id: 39,
    name: "Cheat Sheet Anti-Aging Mask",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
    price: 99,
    rating: "4.5(97)",
    love: false,
  },
  {
    id: 40,
    name: "Citrus Got Real SPF30 Sunscreen",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",
    price: 399,
    rating: "4.6(352)",
    love: false,
  },
  {
    id: 41,
    name: "Citrus Got Real Brightening Peel",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646235720",
    price: 599,
    rating: "4.9(143)",
    love: false,
  },
  {
    id: 42,
    name: "Charcoal Patrol Bubble Mask",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
    price: 149,
    rating: "4.6(318)",
    love: false,
  },
  {
    id: 43,
    name: "Coffee Culture Eye Firming Cream",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
    price: 399,
    rating: "4.8(96)",
    love: false,
  },
  {
    id: 44,
    name: "Aquaholic Hydrating Primer",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
    price: 699,
    rating: "4.6(73)",
    love: false,
  },
  {
    id: 45,
    name: "Citrus Got Real Retinol Brightening Serum",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
    price: 4999,
    rating: "5(168)",
    love: false,
  },
  {
    id: 46,
    name: "Aquaholic Clarifying Spot Gel",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",
    price: 399,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 47,
    name: "Bling Leader Illuminating Sunscreen SPF35 PA+++ - 01 Gold Diggin 50g",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_547e9188-e44c-4cf7-a32e-fc0f410e8062.jpg?v=1651852720",
    price: 599,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 48,
    name: "Bling Leader Illuminating Sunscreen SPF35 PA+++ - 02 Pink Trippin 50g",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e5df3bb8-4439-4980-ada2-aa90b126ada3.jpg?v=1651852746",
    price: 599,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 49,
    name: "Power Clay Mask Stick",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
    price: 699,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 50,
    name: "Coffee Culture Pore Purifying Mask",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 51,
    name: "Citrus Got Real Refreshing Mist",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 52,
    name: "Aquaholic Hyaluronic Serum",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730",
    price: 499,
    rating: "4.6(148)",
    love: false,
  },
  {
    id: 53,
    name: "Acne Combo (Pack of 6)",
    src: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
    price: 559,
    rating: "4.6(148)",
    love: false,
  },
];

let addItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    name: "AIR KISS POWDER LIPSTICK",
    price: 499,
    id: 1,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
    name: "LIP ZIP MATTE TOPPER",
    price: 499,
    id: 2,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    name: "METTLE PRIMING BALM",
    price: 1099,
    id: 3,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    price: 599,
    id: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
    name: "Set The Tone Tinted Powder",
    price: 699,
    id: 5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    name: "MATTE AS HELL CRAYON LIPSTICK",
    price: 799,
    id: 6,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
    name: "Goddess Of Flawless SPF30+ BB Cream",
    price: 699,
    id: 7,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
    name: "Kohl Of Honour Intense Kajals",
    price: 249,
    id: 8,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    name: "Blend The Rules Eyeshadow Palette",
    price: 1199,
    id: 9,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
    name: "Base Of Glory Pore Minimizing Primer",
    price: 799,
    id: 10,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    name: "Contour De Force Face Palette",
    price: 799,
    id: 11,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    name: "ACE OF FACE FOUNDATION STICK",
    price: 999,
    id: 12,
  },
];

const adds = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283",
    name: "SHINE AND POUT MAKEUP VALUE SET",
    price: 999,
    offer: 1198,
    discount: "(19% OFF)",
    id: 1,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_116c638f-21f6-4640-aab0-6022540b24e1.jpg?v=1649692784",
    name: "MESMERIZE EYE MAKEUP SET",
    price: 1299,
    offer: 1598,
    discount: "(23% OFF)",
    id: 2,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
    name: "GLAM EYE MAKEUP VALUE SET",
    price: 1249,
    offer: 1546,
    discount: "(38% OFF)",
    id: 3,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    name: "SET OF 4 KAJAL SET",
    price: 799,
    offer: 996,
    discount: "(14% OFF)",
    id: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    name: "SET OF 4 KAJAL SET",
    price: 799,
    offer: 996,
    discount: "(16% OFF)",
    id: 5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
    name: "RED CARPET MAKEUP TRIO",
    price: 799,
    offer: 1047,
    discount: "(18% OFF)",
    id: 6,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238",
    name: "SUNSCREAM + KOHL VALUE SET",
    price: 549,
    offer: 898,
    discount: "(19% OFF)",
    id: 7,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222",
    name: "LIP BALM AND SWEET MASK",
    price: 299,
    offer: 349,
    discount: "(19% OFF)",
    id: 8,
  },
];
const slideImages2 = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    id: 1,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/6d99e54c-1213-4184-a8f8-0aca166a298f.jpg",
    id: 2,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg",
    id: 3,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg",
    id: 4,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg",
    id: 5,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg",
    id: 6,
  },
];
const slideImages3 = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg",
    id: 1,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    id: 2,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
    id: 3,
  },
];


const slideImages4 = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/f40172c6-147a-4895-ac1f-d430c3cc0a55.jpg",
    id: 1,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/9a090aa5-6bd8-4d10-a77f-409c3619fc89.jpg",
    id: 2,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/2ef5fc68-77d8-4083-9a4d-f37f42e98feb.jpg",
    id: 3,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/58490d17-977a-46d4-ae71-c9baf559a736.jpg",
    id: 4,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/a246bd5c-0383-4f03-905c-d6ab7f3bdb23.jpg",
    id: 5,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/ea727dfe-f673-4cb5-b9b3-354bcf5c41a2.jpg",
    id: 6,
  },
];
let addss = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
    name: "Matte As Hell Crayon Lipstick Minis Set",
    price: 1090,
    offer: 1799,
    discount: "(38% OFF)",
    id: 1,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
    name: "Smudge Me Not Liquid Lipstick Minis Set",
    price: 799,
    offer: 999,
    discount: "(20% OFF)",
    id: 2,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645",
    name: "DATE NIGHT MAKEUP KIT",
    price: 1599,
    offer: 2195,
    discount: "(27% OFF)",
    id: 3,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
    name: "WEDDING MAKEUP KIT",
    price: 1699,
    offer: 2343,
    discount: "(27% OFF)",
    id: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983",
    name: "FESTIVAL READY KIT",
    price: 2499,
    offer: 3590,
    discount: "(30% OFF)",
    id: 5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654578412",
    name: "EVERYDAY MAKEUP KIT",
    price: 1499,
    offer: 1994,
    discount: "(27% OFF)",
    id: 6,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932",
    name: "ANNIVERSARY KIT",
    price: 1999,
    offer: 2793,
    discount: "(28% OFF)",
    id: 7,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1642487420",
    name: "PARTY READY KIT",
    price: 1299,
    offer: 1744,
    discount: "(30% 0FF)",
    id: 8,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_969f5548-2c56-4506-ada8-159b53a8f630.jpg?v=1649423977",
    name: "GLAM UP KIT",
    price: 1999,
    offer: 2793,
    discount: "(28% OFF)",
    id: 9,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-SETS-WBG-IMAGES-Set2.jpg?v=1632844196",
    name: "HIGH-5 KIT",
    price: 999,
    offer: 1296,
    discount: "(22% OFF)",
    id: 10,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",
    name: "4-IN-1 MAKEUP-KIT",
    price: 999,
    offer: 1295,
    discount: "(20% OFF)",
    id: 11,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/combo-image.jpg?v=1646298736",
    name: "GO-GETTER SET",
    price: 899,
    offer: 1146,
    discount: "(30% OFF)",
    id: 12,
  },
];

let addsss = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1637068160",
    name: "ARCH ARRIVAL BROW PEN",
    price: 499,
    id: 1,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Launch---Sweat-No-More-Makeup-Kit---WBG-Images_11.jpg?v=1653494527",
    name: "SWEAT NO MORE MAKEUP KIT",
    price: 2699,
    offer: 3793,
    discount: "(28% OFF)",
    id: 2,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
    name: "ARCH ARRIVAL MICRO BROW PEN",
    price: 499,
    id: 3,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649087039",
    name: "SUMMER MAKEUP KIT",
    price: 1799,
    offer: 2442,
    discount: "(26% OFF)",
    id: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
    name: "CITRUS GOT REAL RETINOL BRIGHTNING SERUM",
    price: 499,
    id: 5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646235720",
    name: "CITRUS GOT REAL BRIGHTNING PEEL",
    price: 599,
    id: 6,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-hydrating-mist-01.jpg?v=1644312897",
    name: "COFFEE CULUTURE HYDRATING MIST",
    price: 499,
    id: 7,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638445456",
    name: "TWO GOOD TO BE TRUE DUAL EYESHADOW",
    price: 499,
    id: 8,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-hydrating-mist-01.jpg?v=1644312897",
    name: "COFFEE CULUTURE HYDRATING MIST",
    price: 499,
    id: 9,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638445456",
    name: "TWO GOOD TO BE TRUE DUAL EYESHADOW",
    price: 499,
    id: 10,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
    name: "OWN THE LIGHT LIQUID HIGHLIGHTER",
    price: 649,
    id: 11,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
    name: "DOUBLE DATE EXTREME VOLUME MASCARA DUO",
    price: 749,
    id: 12,
  },
];
let sugarbeauty = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/5959a7b1-efdd-4fce-812a-c6a940fcdcd9.jpg",
    id: 1,
    navigate: "www.google.com",
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/b9a64f84-817c-4984-a9e3-a75ec31843e4.jpg",
    id: 2,
    navigate: "www.myntra.com",
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/47cd2c21-b320-4473-8fdc-9eb49ddefdda.jpg",
    id: 3,
    navigate: "www.sugar.com",
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/47cd2c21-b320-4473-8fdc-9eb49ddefdda.jpg",
    id: 4,
    navigate: "www.youtube.com",
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/f41ec860-3e9d-46b1-8c48-8ad7feb8d9e8.jpg",
    id: 5,
    navigate: "www.facebook.com",
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/5959a7b1-efdd-4fce-812a-c6a940fcdcd9.jpg",
    id: 6,
    navigate: "www.twitter.com",
  },
];

let addssss = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
    name: "POWER CLAY MASK STICK",
    price: 699,
    id: 1,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
    name: "AQUAHOLIC INSTANT PORE CLEANING MASK",
    price: 499,
    id: 2,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
    name: "COFFEE CULTURE EYE FIRMING CREAM",
    price: 399,
    id: 3,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
    name: "CHEAT SHEET CLARIFYING MASK",
    price: 99,
    id: 4,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
    name: "CHEAT SHEET CLARIFYING MASK",
    price: 99,
    id: 5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730",
    name: "AQUAHOLIC HYALOURONIC SERUM",
    price: 499,
    id: 6,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708",
    name: "COFFEE CULTURE CLEANINSING BALM STICK",
    price: 699,
    id: 7,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
    name: "CHEAT SHEET CLARIFYING MASK",
    price: 99,
    id: 8,
  },
];
let imggg = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/4188e9cd-11e4-452e-bec3-577894e7ec81.jpg",
    id: 1,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/46e14c59-119d-4c5b-8055-819d8bf35e06.jpg",
    id: 2,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/10374315-c48d-47b0-bb86-3374a2dde76b.jpg",
    id: 3,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/eb4002ec-c165-4aaf-90b3-f813484fae25.jpg",
    id: 4,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/f6d29c12-e7cf-476e-a654-b6697e0fa8de.jpg",
    id: 5,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/7b184616-6420-4992-ac33-23feeb482956.jpg",
    id: 6,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg",
    id: 7,
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/4188e9cd-11e4-452e-bec3-577894e7ec81.jpg",
    id: 8,
  },
];

const slideImages = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/7ade2492-3273-491d-bf3c-4051a2594fd6.jpg",
      id:1
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/f0877fa8-c09d-4c6e-9392-4e0eb70a2ccc.jpg",
      id:2
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/2938eed1-8d16-4dec-bab2-f6e484adb659.gif",
      id:3
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/75ec7af2-2b60-4c0a-9d56-c9e12d328420.jpg",
      id:4
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
      id:5
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
      id:6
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/9f8fe6f9-3ebe-4d1b-9b15-d5e5e642868b.jpg",
      id:7
  },
];
//**************************************************************************** */

const slideImages1 = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg",
      id:1
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg",
      id:2
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg",
      id:3
  },
];

export const Box = createContext();
export const BoxProvider = ({ children }) => {
  const [search, setsearch] = useState(" ")
 const bigarr=[...brush_list,...trend_list,...skin_list]

  return (
    <Box.Provider
      value={{
        brush_list,
        trend_list,
        skin_list,
        search, 
        setsearch,
        bigarr,
        addItems,
        adds,
        slideImages2,
        slideImages3,
        slideImages4,
        addss,
        addsss,
        sugarbeauty,
        addssss,
        imggg,
        slideImages1,
        slideImages
      }}
    >
      {children}
    </Box.Provider>
  );
};
