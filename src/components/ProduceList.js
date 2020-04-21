import React from "react";
import Produce from "./Produce";

const availableProduce = [
  {
    season: "Winter Season",
    produce: [
      "Chestnuts",
      "Grapefruit",
      "Lemons",
      "Oranges",
      " Tangerines",
      "Kale",
      "Leeks",
      "Turnips",
      "Radishes",
    ],
  },

  {
    season: "Spring Season",
    produce: [
      "Apricot",
      "Avacado",
      "Mango",
      "Pineapple",
      "Rhubarb",
      "Strawberries",
      "Carrots",
      "Celeriac",
      "Chives",
      "Collard",
      "Fava Beans",
      "Fennel",
      "Mustard Greens",
    ],
  },
  {
    season: "Summer Season",
    produce: [
      "Berries",
      "Nectarines",
      "Peaches",
      "Plums",
      "Tomatoes",
      "Watermelon",
      "Broccoli",
      "Cucumber",
      "Green Beans",
      "Zucchini",
    ],
  },
  {
    season: "Fall Season",
    produce: [
      "Apples",
      "Cranberries",
      "Figs",
      "Grapes",
      "Pears",
      "Pomegranate",
      "Quince",
      "Butternut Squash",
      "Cauliflower",
      "Garlic",
      "Ginger",
      "Mushrooms",
      "Potatoes",
      "Pumpkin",
      "Sweet Potatoes",
      "Swiss Chard",
    ],
  },
];

function monthlyProduce() {
  return (
    <React.Fragment>
      <hr />
      {availableProduce.map((produce, index) => (
        <Produce
          season={produce.season}
          produce={produce.produce}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default monthlyProduce;
