import axios from "axios";
const KEY = process.env.REACT_APP_FOOD_KEY;
export default axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: KEY,
    number: 6,
    addRecipeInformation: true,
    instructionsRequired: true,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
