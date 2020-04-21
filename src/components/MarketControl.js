import React from "react";
import MarketList from "./MarketList";
import Seasonproduce from "./ProduceList";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formVisibleOnPage: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
  //   handleClick = () => {
  //     this.setState((prevState) => ({
  //       formVisibleOnPage: !prevState.formVisibleOnPage,
  //     }));
  //   };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Seasonproduce />;
      buttonText = "Return to Market List";
    } else {
      currentlyVisibleState = <MarketList />;
      buttonText = "Click here to see produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MarketControl;
