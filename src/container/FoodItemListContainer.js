import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoodItemList from '../components/FoodItemList';
import * as basketActions from '../modules/basket';

class FoodItemListContainer extends Component {
  handleClick = food => {
    const { BasketActions, basket } = this.props;
    const isBasket = basket.find(item => item.name === food.name);
    console.log(isBasket);
    if (!isBasket) {
      BasketActions.insert(food);
      return;
    }

    BasketActions.increment(food.name);
  };

  render() {
    const { foodList } = this.props;
    return <FoodItemList foodList={foodList} onClick={this.handleClick} />;
  }
}

const mapStateToProps = ({ food, basket }) => ({
  foodList: food.foodList,
  basket: basket.list,
});

const mapDispachToProps = dispatch => ({
  BasketActions: bindActionCreators(basketActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(FoodItemListContainer);
