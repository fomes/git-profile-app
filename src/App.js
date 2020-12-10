import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repo from "./components/Repo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.e058a9418614bb87",
        client_secret: "af0898cdcfda4a9d900ef7516aec2d22135c2aca",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: [],
      search: ""
    };
  }

  getUser = e => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;

    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map(repo => (
            <Repo repo={repo} key={repo.name} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container" style={{height: "79vh"}}>
          <div className="search card card-body mb-3">
            <h1>Github search</h1>
            <input
              onChange={this.getUser}
              className="form-control"
              placeholder="Digite o nome de um usuário..."
              required
            />
          </div>
          {user.length !== 0 ? this.renderProfile() : null}
        </div>
        <div className="card-footer text-muted text-center">Felipe Gomes</div>
      </div>
    );
  }
}

export default App;
