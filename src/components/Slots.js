import React, { Component } from "react";
import SlotsItem from "./SlotsItem";
import PropTypes from "prop-types";

class Slots extends Component {
  render() {
    return this.props.slots.map((slot,index) =>{
      // console.log(index)
      return <SlotsItem
        key={slot.id}
        slot={slot}
        markBooked={this.props.markBooked}
        updateName={this.props.updateName}
        SlotsItem={this.props.SlotsItem}
        position = {index+1}
      />
  }
  );
  }
}
// proptypes
Slots.propTypes = {
  slots: PropTypes.array.isRequired,
};

export default Slots;
