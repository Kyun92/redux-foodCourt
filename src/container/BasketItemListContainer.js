import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as basketActions from "../modules/basket";
import BasketItemList from "../components/BasketItemList";

class BasketItemListContainer extends Component {
  handleIncrement = id => {
    this.props.BasketActions.icrement(id);
  };

  handleDecrement = basketItem => {
    // 얘가 문제다 .
    const { basket, BasketActions } = this.props;
    const isZero = basket.find(item => item.id === basketItem.id);
    if (isZero.count !== 0) {
      BasketActions.decrement(basketItem.id);
      return;
    }
  };

  handleRemove = id => {
    this.props.BasketActions.remove(id);
  };

  render() {
    const { basket } = this.props;
    return <BasketItemList basket={basket} />;
  }
}

const mapStateToProps = ({ basket }) => ({
  basket: basket.list
});

const mapDispachToProps = dispatch => ({
  BasketActions: bindActionCreators(basketActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(BasketItemListContainer);
