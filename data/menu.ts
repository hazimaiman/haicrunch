export type ProductCategory = "tart" | "chocobar" | "cookies" | "cake" | "brownies";
export type ProductOrderMode = "pickup" | "delivery" | "both";

export type Product = {
  id: string;
  sortOrder: number;
  name: string;
  image: string;
  description: string;
  price: string;
  tag: string;
  category: ProductCategory;
  flavor: string;
  orderMode: ProductOrderMode;
  isPromoEligible: boolean;
  flavorOptions?: string[];
};

export const whatsappNumber = "60101234567";

export const categoryInfo: Record<
  ProductCategory,
  {
    label: string;
    shortStory: string;
    story: string;
    bestFor: string;
  }
> = {
  chocobar: {
    label: "Chocobar and Choco Series",
    shortStory:
      "HaiCrunch first product line made with premium chocolate and creative flavors.",
    story:
      "Chocobar is the first product in HaiCrunch history. We built it with premium chocolate and playful flavor logic like KitKat, Cadbury, Milo, Hotlink, and Nestum to make every bite memorable.",
    bestFor: "Gift boxes and celebration snack tables",
  },
  tart: {
    label: "Cheese Tart",
    shortStory:
      "A buttery event favorite with creamy cheese center and smooth finish.",
    story:
      "Our cheese tart is one of the most requested event orders. The tart shell stays buttery with a creamy cheese center, making it easy to serve for meetings, doorgifts, and festive gatherings.",
    bestFor: "Events, meetings, and festive trays",
  },
  cookies: {
    label: "Cookies",
    shortStory:
      "The signature HaiCrunch product inspired by mother style homemade baking.",
    story:
      "Cookies are the core signature of HaiCrunch, inspired by mother style homemade cookies. Flavors include chocolate, red velvet, matcha, and dark chocolate, finished with melted milk chocolate, white chocolate, and white chocolate matcha toppings.",
    bestFor: "Daily cravings and family sharing jars",
  },
  cake: {
    label: "Cakes",
    shortStory:
      "Celebration cakes and slices usually chosen for birthdays and close family moments.",
    story:
      "Most cake orders come from birthday celebrations and close family events. From batik cake to sponge and red velvet cheese combinations, this line is made to celebrate meaningful moments.",
    bestFor: "Birthdays and personal celebrations",
  },
  brownies: {
    label: "Brownies",
    shortStory:
      "Rich and fudgy bars made for chocolate comfort and dessert trays.",
    story:
      "Our brownies are dense, chocolate rich, and easy to serve for tea time, gifts, and event add-ons. A reliable comfort dessert with premium cocoa taste.",
    bestFor: "Dessert trays and tea-time boxes",
  },
};

const menuItems: Product[] = [
  {
    id: "1",
    sortOrder: 1,
    name: "Cheese Tart Classic",
    image: "/menu/1.jpg",
    description: "Buttery shell with creamy cheese center and smooth finish.",
    price: "RM18 / box",
    tag: "Event Favorite",
    category: "tart",
    flavor: "Cheese",
    orderMode: "pickup",
    isPromoEligible: true,
  },
  {
    id: "2",
    sortOrder: 2,
    name: "Cheese Tart Signature",
    image: "/menu/2.jpg",
    description: "Soft creamy tart for meetings, gifts, and festive tables.",
    price: "RM20 / box",
    tag: "Festive",
    category: "tart",
    flavor: "Cheese",
    orderMode: "pickup",
    isPromoEligible: true,
  },
  {
    id: "3",
    sortOrder: 3,
    name: "Chocoball Premium Mix",
    image: "/menu/3.jpg",
    description: "Premium chocoball with mixed topping choices in one line.",
    price: "RM22 / box",
    tag: "First Product",
    category: "chocobar",
    flavor: "Mixed",
    orderMode: "both",
    isPromoEligible: true,
    flavorOptions: ["KitKat", "Cadbury", "Milo", "Hotlink", "Nestum"],
  },
  {
    id: "4",
    sortOrder: 4,
    name: "Brown and Red Velvet Cookies",
    image: "/menu/4.jpg",
    description: "Crunchy cookies with rich red velvet and cocoa tones.",
    price: "RM18 / jar",
    tag: "Signature",
    category: "cookies",
    flavor: "Red Velvet",
    orderMode: "both",
    isPromoEligible: true,
  },
  {
    id: "5",
    sortOrder: 5,
    name: "Chocoball Milk Chocolate",
    image: "/menu/5.jpg",
    description: "Classic chocoball dipped with smooth milk chocolate.",
    price: "RM19 / jar",
    tag: "Choco Chips Line",
    category: "chocobar",
    flavor: "Milk Chocolate",
    orderMode: "both",
    isPromoEligible: true,
  },
  {
    id: "6",
    sortOrder: 6,
    name: "Chocochips Milk Chocolate",
    image: "/menu/6.jpg",
    description: "Crunchy chocochips coated with milk chocolate topping.",
    price: "RM20 / jar",
    tag: "Choco Chips Line",
    category: "chocobar",
    flavor: "Milk Chocolate",
    orderMode: "both",
    isPromoEligible: true,
  },
  {
    id: "7",
    sortOrder: 7,
    name: "Chocojar Chocochips White Chocolate",
    image: "/menu/7.jpg",
    description: "Layered chocojar with white chocolate finish.",
    price: "RM20 / jar",
    tag: "Choco Chips Line",
    category: "chocobar",
    flavor: "White Chocolate",
    orderMode: "delivery",
    isPromoEligible: true,
  },
  {
    id: "8",
    sortOrder: 8,
    name: "Red Velvet Cookies White Chocolate",
    image: "/menu/8.jpg",
    description: "Soft red velvet cookie profile with white chocolate topping.",
    price: "RM19 / jar",
    tag: "Signature",
    category: "cookies",
    flavor: "Red Velvet",
    orderMode: "both",
    isPromoEligible: true,
  },
  {
    id: "9",
    sortOrder: 9,
    name: "Batik Cake Original",
    image: "/menu/9.JPG",
    description: "Dense batik cake with traditional chocolate biscuit texture.",
    price: "RM18 / slice box",
    tag: "Cake",
    category: "cake",
    flavor: "Chocolate",
    orderMode: "pickup",
    isPromoEligible: false,
  },
  {
    id: "10",
    sortOrder: 10,
    name: "Batik Cake Milk Chocolate",
    image: "/menu/10.JPG",
    description: "Batik cake line finished with milk chocolate coating.",
    price: "RM20 / slice box",
    tag: "Cake",
    category: "cake",
    flavor: "Milk Chocolate",
    orderMode: "pickup",
    isPromoEligible: true,
  },
  {
    id: "11",
    sortOrder: 11,
    name: "Batik Cake Milk Chocolate Plus",
    image: "/menu/11.JPG",
    description: "Extra rich milk chocolate batik for celebration trays.",
    price: "RM22 / slice box",
    tag: "Cake",
    category: "cake",
    flavor: "Milk Chocolate",
    orderMode: "pickup",
    isPromoEligible: true,
  },
  {
    id: "12",
    sortOrder: 12,
    name: "Kek Sponge Choc Milk",
    image: "/menu/12.JPG",
    description: "Soft sponge cake with chocolate and milk chocolate layers.",
    price: "RM16 / loaf",
    tag: "Birthday Pick",
    category: "cake",
    flavor: "Chocolate",
    orderMode: "pickup",
    isPromoEligible: true,
  },
  {
    id: "13",
    sortOrder: 13,
    name: "Brownies Classic",
    image: "/menu/13.JPG",
    description: "Fudgy brownie bites for gifts and tea time.",
    price: "RM12 / box",
    tag: "Brownies",
    category: "brownies",
    flavor: "Dark Chocolate",
    orderMode: "both",
    isPromoEligible: true,
  },
  {
    id: "14",
    sortOrder: 14,
    name: "Red Velvet Cheese White Choc Cake",
    image: "/menu/14.JPG",
    description: "Red velvet cheese cake topped with white chocolate glaze.",
    price: "RM24 / cake",
    tag: "Birthday Pick",
    category: "cake",
    flavor: "Red Velvet",
    orderMode: "pickup",
    isPromoEligible: true,
  },
];

export default menuItems;
