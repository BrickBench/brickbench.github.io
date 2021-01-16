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
        {this.state.releases.map(({name, body, tag_name, published_at, author}, i) => {
          let [month, day, year] = (new Date(published_at)).toLocaleDateString("en-US").split("/");
          year = year.substring(2);
          let date = [month, day, year].join('/');
          return (
            <div key={i} className="bg-middle rounded my-2 p-2 dark-bottom">
              <div className="d-flex justify-content-between border-bottom">
                <div>
                  <h3>{name}</h3>
                  <h5 className="text-primary">
                    {tag_name}
                    {i === 0 ? <span class="ml-2 badge badge-primary">New</span> : <React.Fragment />}
                  </h5>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center">
                  <img src={author.avatar_url} alt="..." style={{height: '3em'}} className="rounded-circle"/>
                  <div>{date}</div>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{__html: converter.makeHtml(body)}}></p>
            </div>
          );
        })}
      </div>
    );
  }
}
