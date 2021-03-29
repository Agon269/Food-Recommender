import React from "react";
import FoodItem from "./FoodItem";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
function FoodList({ foods, onFoodSelect }) {
  let renderedFoods = "";
  let message = "";
  if (foods === false) {
    message = "No recepie found";
  } else {
    message = "Bon Appétit !!!";
    renderedFoods = foods.map((food, index) => {
      return (
        <Grid item key={food.id}>
          <FoodItem theFood={food} onFoodSelect={onFoodSelect} />
        </Grid>
      );
    });
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Container>
        <Card>
          <CardContent>
            <Typography
              variant="h3"
              className="MuiTypography-alignCenter"
              gutterBottom
            >
              {message}
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={6}
            >
              {renderedFoods}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default FoodList;
