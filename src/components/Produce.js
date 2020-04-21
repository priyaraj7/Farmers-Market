import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
      <h3>
        <em>{props.season}</em>
      </h3>
      <ul>
        {props.produce.map((produce) => (
          <li key={produce}>
            <em>{produce}</em>
          </li>
        ))}
      </ul>

      <hr />
    </React.Fragment>
  );
}

Produce.propTypes = {
  season: PropTypes.string,
  produce: PropTypes.array,
};

export default Produce;
