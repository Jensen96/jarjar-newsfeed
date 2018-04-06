import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default class ViewUpdate extends React.PureComponent {
  render() {
    const { by, text, imageSrc, created } = this.props;
    return (
      <div className="card view-update">
        <p className="profilePic">
          <img src={imageSrc} height="100" width="100" alt={by} />{" "}
          <div> {by} </div>
        </p>
        <p> {text}</p>
        <p>{moment(created).format("hh:mm-DD.MMM")}</p>
        <button type="button" class="btn btn-secondary">
          Show comments
        </button>
      </div>
    );
  }
}
