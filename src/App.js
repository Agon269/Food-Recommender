import React from "react";
import Form from "./components/Form";
import spoonacular from "./apis/spoonacular";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import OverLay from "./components/OverLay";
export class App extends React.Component {
  state = { foods: [], onFoodClick: null };
  onSubmit = async (query, cuisine, diet, intolerances, exclude, type) => {
    const result = await spoonacular.get("/recipes/complexSearch", {
      params: {
        query: query,
        cuisine: cuisine,
        diet: diet,
        intolerances: intolerances,
        excludeIngredients: exclude,
        type: type,
      },
    });

    if (result.data.results.length === 0) {
      this.setState({ foods: false });
    } else {
      this.setState({ foods: result.data.results });
    }
  };
  onFoodClick = (food) => {
    this.setState({ onFoodClick: food });
  };
  onClose = () => {
    this.setState({ onFoodClick: null });
  };

  render() {
    return (
      <div>
        <Header />

        <Form onSubmit={this.onSubmit} />
        {this.state.foods.length === 0 ? (
          ""
        ) : (
          <FoodList foods={this.state.foods} onFoodSelect={this.onFoodClick} />
        )}
        {this.state.onFoodClick === null ? (
          ""
        ) : (
          <OverLay food={this.state.onFoodClick} onClose={this.onClose} />
        )}
      </div>
    );
  }
}

export default App;
