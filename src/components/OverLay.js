import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);
  const { food } = props;
  let { onClose } = props;

  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  let steps = "";
  if (
    food.analyzedInstructions[0] !== undefined &&
    food.analyzedInstructions[0] !== null
  ) {
    steps = food.analyzedInstructions[0].steps.map((insta, index) => {
      return (
        <Typography gutterBottom style={{ padding: "10px" }} key={index}>
          {" "}
          {insta.step}{" "}
        </Typography>
      );
    });
  } else {
    steps = (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography gutterBottom variant="h3" style={{ padding: "50px" }}>
            {" "}
            No recepie found
          </Typography>
        </Grid>

        <Grid item>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {food.title}
        </DialogTitle>
        <DialogContent dividers>{steps}</DialogContent>
      </Dialog>
    </div>
  );
}
