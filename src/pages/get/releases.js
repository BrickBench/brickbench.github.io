import React from 'react';
import $ from 'jquery';

export default class Releases extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      releases: [],
      loading: true
    };
  }

  componentDidMount() {
    $.get('https://api.github.com/repos/aydangoon/ghp-test/releases', (releases) => {
      console.log(releases);
      this.setState({
        loading: false,
        releases: releases
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.state.releases.map(({name, body, tag_name, published_at, author}, i) => {
          return (
            <div key={i}>
              <div className="border-bottom d-flex justify-content-between">
                <div>
                  <h1>{name}</h1>
                  <h3 className="text-primary">v{tag_name}</h3>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src={author.avatar_url} alt="..." style={{height: '3em'}} className="rounded-circle"/>
                  <div>{(new Date(published_at)).toLocaleDateString()}</div>
                </div>
              </div>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
