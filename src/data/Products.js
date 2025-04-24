import vitamin from "../assets/images/vitamin-c.jpg";
import probiotic from "../assets/images/probiotic.jpg";
import immune from "../assets/images/immune.jpg";

export const allProducts = [
  {
    id: "vitamin-c",
    name: "Organic Vitamin C",
    category: "Supplements",
    price: 14.99,
    image: vitamin,
    description:
      "Boost your immunity naturally with our organic Vitamin C tablets.",
    images: [vitamin],
    ingredients: ["Acerola Cherry", "Rosehip"],
    nutritionalInfo: {
      servingSize: "1 tablet",
      calories: 5,
      vitaminC: "500mg (833% DV)",
    },
    reviews: [
      {
        user: "Jane D.",
        comment: "Great product, I feel more energized!",
        rating: 5,
      },
    ],
  },
  {
    id: "natural-probiotic",
    name: "Natural Probiotic",
    category: "Supplements",
    price: 24.99,
    image: probiotic,
    images: [probiotic],
  },
  {
    id: "immune-booster",
    name: "Herbal Immune Booster",
    category: "Herbal",
    price: 18.5,
    image: immune,
    images: [immune],
  },
];
