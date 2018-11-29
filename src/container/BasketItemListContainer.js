import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as basketActions from "../modules/basket";
import BasketItemList from "../components/BasketItemList";

class BasketItemListContainer extends Component {
  handleIncrement = id => {
    this.props.BasketActions.increment(id);
  };

  handleDecrement = id => {
    const { basket, BasketActions } = this.props;
    const isZero = basket.find(item => item.id === id);
    if (isZero.count === 1) {
      BasketActions.remove(id);
      return;
    }
    BasketActions.decrement(id);
  };

  handleRemove = id => {
    this.props.BasketActions.remove(id);
  };

  getTotal = () => {
    const { basket } = this.props;
    const total = basket.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);

    return total;
  };

  render() {
    const { basket } = this.props;
    return (
      <BasketItemList
        basket={basket}
        total={this.getTotal()}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onRemove={this.handleRemove}
      />
    );
  }
}

const mapStateToProps = ({ basket }) => ({
  basket: basket.list,
  total: basket.total
});

const mapDisptachToProps = dispatch => ({
  BasketActions: bindActionCreators(basketActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(BasketItemListContainer);
