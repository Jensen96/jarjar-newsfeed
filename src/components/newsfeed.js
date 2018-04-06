import React from "react";
import PropTypes from "prop-types";

import ViewUpdate from "./view-update";
import AddUpdate from "./add-update";

export default class JarJarNewsfeed extends React.PureComponent {
  static propTypes = {
    onAddUpdate: PropTypes.func.isRequired,
    updates: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { onAddUpdate, updates } = this.props;

    return (
      <div className="card-grid">
        <h1 className="newsfeed">Newsfeed</h1>
        {/* * render a list of updates here */
        updates.map(update => <ViewUpdate key={update.id} {...update} />)}
      </div>
    );
  }
}
