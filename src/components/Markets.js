import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.names}</h3>
      <p>
        <em>{props.day}</em>
      </p>
      <p> {props.location} </p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  day: PropTypes.string,
};

export default Ticket;
