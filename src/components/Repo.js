import React from "react";

const Repo = ({ repo }) => (
  repo.stargazers_count > 0 
  ? (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-6">
          <a href={repo.html_url}>
            {repo.name}
          </a>
        </div>
      </div>
    </div>
  )
  :(
    null
  )

);

export default Repo;
