import React from 'react';
import $ from 'jquery';
import showdown from 'showdown';

showdown.setOption('disableForced4SpacesIndentedSublists', true);
const converter = new showdown.Converter();

export default class Releases extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      releases: [],
      loading: true
    };
  }

  componentDidMount() {
    $.get('https://api.github.com/repos/BrickBench/BrickBench/releases', (releases) => {
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
        {this.state.releases.map(({name, body, tag_name, assets}, i) => {
          return (
            <div key={i} className="bg-middle rounded my-2 p-2 dark-bottom">
              <div className="d-flex justify-content-between border-bottom align-items-center">
                <div>
                  <h3>{name}</h3>
                  <h5 className="text-primary">
                    {tag_name}
                    {i === 0 ? <span className="ml-2 badge badge-primary">New</span> : <React.Fragment />}
                  </h5>
                </div>
                <a className="btn btn-primary" href={assets[0].browser_download_url}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                </a>
              </div>
              <p dangerouslySetInnerHTML={{__html: converter.makeHtml(body)}}></p>
            </div>
          );
        })}
      </div>
    );
  }
}
