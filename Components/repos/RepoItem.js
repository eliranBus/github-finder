import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card" style={{ marginTop: "5px", padding: "5px" }}>
      <h5>
        <a href={repo.html_url} style={{ textDecoration: "none" }}>
          {repo.name}
        </a>
      </h5>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
