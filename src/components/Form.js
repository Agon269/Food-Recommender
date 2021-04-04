import React from "react";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
export class Form extends React.Component {
  state = {
    query: "",
    cuisine: "",
    diet: "",
    intolerances: "",
    exclude: "",
    type: "",
  };
  submitHandler = (e) => {
    e.preventDefault();

    this.props.onSubmit(
      this.state.query,
      this.state.cuisine,
      this.state.diet,
      this.state.intolerances,
      this.state.exclude,
      this.state.type
    );
  };
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md" style={{ marginTop: "40px" }}>
          <Card>
            <CardContent>
              <Typography
                variant="h3"
                className="MuiTypography-alignCenter"
                gutterBottom
              >
                Find Your Recipe!
              </Typography>
              <form onSubmit={this.submitHandler}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Food name"
                      variant="outlined"
                      fullWidth
                      value={this.state.query}
                      onChange={(e) => {
                        this.setState({ query: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Exclude ingredient"
                      variant="outlined"
                      fullWidth
                      value={this.state.exclude}
                      onChange={(e) => {
                        this.setState({ exclude: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="intolerances"
                      variant="outlined"
                      fullWidth
                      value={this.state.intolerances}
                      onChange={(e) => {
                        this.setState({ intolerances: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Cuisine
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.cuisine}
                        onChange={(e) => {
                          this.setState({ cuisine: e.target.value });
                        }}
                        label="Cuisine"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Indian">Indian</MenuItem>
                        <MenuItem value="Italian">Italian</MenuItem>
                        <MenuItem value="Thai">Thai</MenuItem>
                        <MenuItem value="Chinese">Chinese</MenuItem>
                        <MenuItem value="Mexican">Mexican</MenuItem>
                        <MenuItem value="Mediterranean">Mediterranean</MenuItem>
                        <MenuItem value="African">African</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Diet
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.diet}
                        onChange={(e) => {
                          this.setState({ diet: e.target.value });
                        }}
                        label="Diet"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Gluten Free">Gluten Free</MenuItem>
                        <MenuItem value="Ketogenic">Ketogenic</MenuItem>
                        <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                        <MenuItem value="Vegan">Vegan</MenuItem>
                        <MenuItem value="Pescetarian">Pescetarian</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.type}
                        onChange={(e) => {
                          this.setState({ type: e.target.value });
                        }}
                        label="Type"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="main course">main course</MenuItem>
                        <MenuItem value="side dish">side dish</MenuItem>
                        <MenuItem value="dessert">dessert</MenuItem>
                        <MenuItem value="appetizer">appetizer</MenuItem>
                        <MenuItem value="salad">salad</MenuItem>
                        <MenuItem value="bread">bread</MenuItem>
                        <MenuItem value="breakfast">breakfast</MenuItem>
                        <MenuItem value="soup">soup</MenuItem>
                        <MenuItem value="beverage">beverage</MenuItem>snack
                        <MenuItem value="snack">snack</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Find <FastfoodIcon style={{ marginLeft: "4px" }} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default Form;
