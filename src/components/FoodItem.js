import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import TimerIcon from "@material-ui/icons/Timer";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FoodItem(props) {
  const classes = useStyles();

  const { onFoodSelect } = props;
  const food = props.theFood;

  const diets = food.diets.map((diet, index) => {
    return (
      <Chip
        label={diet}
        color="primary"
        icon={<DoneIcon />}
        style={{ marginRight: "2px", marginTop: "4px" }}
        key={index}
      />
    );
  });
  return (
    <Card
      className={classes.root}
      onClick={() => {
        onFoodSelect(food);
      }}
    >
      <CardHeader title={food.title} />
      <CardMedia
        className={classes.media}
        image={food.image}
        title={food.title}
      />
      <CardContent>
        {food.dishTypes[0] !== undefined ? (
          <Chip
            label={food.dishTypes[0]}
            color="secondary"
            style={{ marginRight: "2px", marginTop: "4px" }}
          />
        ) : (
          ""
        )}

        <Chip
          label={food.readyInMinutes}
          color="secondary"
          icon={<TimerIcon />}
          style={{ marginRight: "2px", marginTop: "4px" }}
        />

        {food.diets.length === 0 ? "" : <div>{diets}</div>}

        {food.cheap === true ? (
          <Chip
            label="Cheap!!!"
            color="primary"
            icon={<DoneIcon />}
            style={{ marginRight: "2px", marginTop: "4px" }}
          />
        ) : (
          ""
        )}

        {food.glutenFree === true ? (
          <Chip
            label="Gluten free!!!"
            icon={<DoneIcon />}
            style={{ marginRight: "2px", marginTop: "4px" }}
          />
        ) : (
          ""
        )}

        {food.vegan === true ? (
          <Chip
            label="Vegan"
            color="secondary"
            icon={<DoneIcon />}
            style={{ marginRight: "2px", marginTop: "4px" }}
          />
        ) : (
          ""
        )}

        {food.veryHealthy === true ? (
          <Chip
            label="Very Healthy"
            color="secondary"
            icon={<DoneIcon />}
            style={{ marginRight: "2px", marginTop: "4px" }}
          />
        ) : (
          ""
        )}
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteIcon color="secondary" style={{ marginRight: "5px" }} />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ marginRight: "5px" }}
        >
          {food.aggregateLikes}
        </Typography>

        <Button href={food.sourceUrl} target="_blank" color="primary">
          Source <SendIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
