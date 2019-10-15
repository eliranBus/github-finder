import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light" style={{ marginBottom: "1em" }}>
        Back To Search
      </Link>
      <br></br>
      Hirable: {""}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2" style={{ padding: "20px" }}>
        <div className="text-center">
          <img
            src={avatar_url}
            alt=""
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
          <a href={html_url} target="_blank" className="btn btn-dark my-1">
            Visit Github Profile
          </a>
        </div>
      </div>
      <h3 style={{ margin: "15px 0" }}>Edditional Information:</h3>
      <div
        className="card"
        style={{
          padding: "20px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div
          className="badge badge-primary w-25"
          style={{ padding: "10px", margin: "5px" }}
        >
          Followers: {followers}
        </div>
        <div
          className="badge badge-success w-25"
          style={{ padding: "10px", margin: "5px" }}
        >
          Following: {following}
        </div>
        <div
          className="badge badge-danger w-25"
          style={{ padding: "10px", margin: "5px" }}
        >
          Public Repos: {public_repos}
        </div>
        <div
          className="badge badge-dark w-25"
          style={{ padding: "10px", margin: "5px" }}
        >
          Public Gists: {public_gists}
        </div>
      </div>
      <h3 style={{ margin: "15px 0" }}>Repositories:</h3>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
