import React from "react";
import { connect } from "react-redux";

// TODO pure
function StylesMark({ markedTime }) {
  return (
    <style>
      {`[time-start="${markedTime}"] {
            background: #a7a7c5;
        }`}
    </style>
  );
}

const mapStateToProps = ({ markedTime }) => ({
  markedTime
});

export default connect(mapStateToProps)(StylesMark);
