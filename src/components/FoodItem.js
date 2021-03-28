import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  const [expanded, setExpanded] = React.useState(false);
  const { onFoodSelect } = props;
  const food = props.theFood;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
