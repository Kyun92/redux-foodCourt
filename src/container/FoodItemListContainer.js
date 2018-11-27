import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoodItemList from '../components/FoodItemList';
import * as basketActions from '../modules/basket';

class FoodItemListContainer extends Component {
  render() {
    const { foodList } = this.props;
    return <FoodItemList foodList={foodList} />;
  }
}

const mapStateToProps = ({ food }) => ({
  foodList: food.foodList,
});

const mapDispachToProps = dispatch => ({
  BasketActions: bindActionCreators(basketActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(FoodItemListContainer);
