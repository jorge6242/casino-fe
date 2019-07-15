import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { updateCurrency } from '../../Actions/slotMachineActions';
import snackBarStatus from '../../Actions/snackbarActions';
import "./index.sass";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
});

class SlotMachine extends Component {
  state = {
    reel1: [
      "cherry",
      "lemon",
      "apple",
      "lemon",
      "banana",
      "banana",
      "lemon",
      "lemon"
    ],
    reel2: [
      "lemon",
      "apple",
      "lemon",
      "lemon",
      "cherry",
      "apple",
      "banana",
      "lemon"
    ],
    reel3: [
      "lemon",
      "apple",
      "lemon",
      "apple",
      "cherry",
      "lemon",
      "banana",
      "lemon"
    ],
    simpleWin: false,
    onlyTwoWin: false,
    reference: ""
  };

  /**
   * Get new ramdom values from array
   */
  getRamdom = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  /**
   * Handle to start Slot Machine
   */
  handlePull = () => {
    const { reel1, reel2, reel3 } = this.state;
    this.setState({
      reel1: this.getRamdom(reel1),
      reel2: this.getRamdom(reel2),
      reel3: this.getRamdom(reel3)
    });
    this.getRules();
    this.forceUpdate();
  };

  /**
   * Method to change the value of the current row of fruits
   * in this case the third  row is the reference to possible combinations
   * to win
   */
  renderSlot = (fruit, index, position) => {
    const { simpleWin, onlyTwoWin, reference, reel1, reel2, reel3 } = this.state;
    let show = false;
    if (onlyTwoWin && position === 1 && reel1[3] === reel2[3]) {
      show = true
    }
    if (onlyTwoWin && position === 2 && ((reel1[3] === reel2[3]) || (reel2[3] === reel3[3]))) {
      show = true
    }
    if (onlyTwoWin && position === 3 && reel2[3] === reel3[3]) {
      show = true
    }
    return (
      <Grid key={index} container spacing={0}>
        <Grid item xs={12} className="icon-container">
          <div className="icon">
            <i
              className={`${fruit} ${
                (simpleWin && index === 3) ||
                (onlyTwoWin && show && fruit === reference && index === 3)
                  ? "active"
                  : ""
              }`}
            />
          </div>
        </Grid>
      </Grid>
    );
  };

  /**
   * Handle to custom message is the user win or lose
   */
  displayMessage = (title, type) => {
    this.props.snackBarStatus({ 
      payload: {
          title,
          type,
          enable: true,
      },
    });
  }
  
  /**
   * Find possible duplicated for rules of two fruits
   */
  findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) !== index);

  /**
   * Rules of the possibles combinations in the slot machine
   */
  getRules = () => {
    const { currency } = this.props;
    const { reel1, reel2, reel3 } = this.state;
    const isDouble = this.findDuplicates([reel1[3], reel2[3], reel3[3]]);
    
  /**
   * Conditions for three possibble combination fruits
   */
    if (
      reel1[3] === "cherry" &&
      reel2[3] === "cherry" &&
      reel3[3] === "cherry"
    ) {
      this.setState({ simpleWin: true, onlyTwoWin: false, reference: "" });
      this.props.updateCurrency(currency + 50);
      this.displayMessage('You won 50 Coins!', 'success');
      
    } else if (
      reel1[3] === "apple" &&
      reel2[3] === "apple" &&
      reel3[3] === "apple"
    ) {
      this.setState({ simpleWin: true, onlyTwoWin: false, reference: ""});
      this.props.updateCurrency(currency + 20);
      this.displayMessage('You won 20 Coins!', 'success');
    } else if (
      reel1[3] === "lemon" &&
      reel2[3] === "lemon" &&
      reel3[3] === "lemon"
    ) {
      this.setState({ simpleWin: true, onlyTwoWin: false, reference: ""});
      this.props.updateCurrency(currency + 3);
      this.displayMessage('You won 3 Coins!', 'success');
    } else if (
      reel1[3] === "banana" &&
      reel2[3] === "banana" &&
      reel3[3] === "banana"
    ) {
      this.setState({ simpleWin: true, onlyTwoWin: false, reference: ""});
      this.props.updateCurrency(currency + 15);
      this.displayMessage('You won 15 Coins!', 'success');
    } 
  /**
   * Conditions for two possibble combination fruits
   */
    else if (isDouble.length === 1 && isDouble[0] !== 'lemon') {
      this.setState({
        onlyTwoWin: true,
        simpleWin: false,
        reference: isDouble[0],
      });
      if (isDouble[0] === 'cherry') {
        this.props.updateCurrency(currency + 40);
        this.displayMessage('You won 40 Coins!', 'success');
      }
      if (isDouble[0] === 'apple') {
        this.props.updateCurrency(currency + 10);
        this.displayMessage('You won 10 Coins!', 'success');
      }
      if (isDouble[0] === 'banana') {
        this.props.updateCurrency(currency + 5);
        this.displayMessage('You won 5 Coins!', 'success');
      }
      this.forceUpdate();
    } else {
      this.setState({ simpleWin: false, onlyTwoWin: false, reference: ""});
      this.props.updateCurrency(currency - 1);
      this.displayMessage('You lose 1 Coin!', 'error');
    }
    this.forceUpdate();
  };

  render() {
    const { currency } = this.props;
    const { reel1, reel2, reel3 } = this.state;
    return (
      <Grid container spacing={0} id="slot-container">
        <Grid item xs={6} className="title">
          Slot Machine
        </Grid>
        <Grid item xs={6} className="currency">
          {currency} Coins
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            {reel1.map((fruit, index) => this.renderSlot(fruit, index,1))}
          </Grid>
          <Grid item xs={4}>
            {reel2.map((fruit, index) => this.renderSlot(fruit, index,2))}
          </Grid>
          <Grid item xs={4}>
            {reel3.map((fruit, index) => this.renderSlot(fruit, index,3))}
          </Grid>
        </Grid>
        <Grid item xs={12} className="button-container" onClick={() => this.handlePull()}>
          <Button variant="contained" color="primary">
            Pull
          </Button>
        </Grid>
      </Grid>
    );
  }
};

const mS = ({ slotMachineReducer: { currency } }) => ({ currency });

const mD = {
  updateCurrency,
  snackBarStatus,
}

export default connect(
  mS,
  mD,
)(withStyles(styles)(SlotMachine));
