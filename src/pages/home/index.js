import React from 'react';
import { CodeSegment } from '../../components/code';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: 0
    };
    this.nextPreview = this.nextPreview.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPreview, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextPreview() {
    $('.preview').animate({opacity: 0}, 500, () => {
      this.setState({preview: (this.state.preview + 1) % 6}, () => {
        $('.preview').animate({opacity: 1}, 500);
      });
    });
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="bg-bottom d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
          <div className="w-25 mr-5">
            <h1>Brick Bench</h1>
            <h3>The <strong className="text-primary">premier</strong> map rendering tool for early TT games.</h3>
          </div>
          <img className="img-fluid" id="logo" src="./images/brick-bench.png" />
        </div>
        <div className="d-flex justify-content-center align-items-center bg-primary text-secondary" style={{height: '50vh'}}>
          <Preview childNum={this.state.preview}>
              <img className="preview img-fluid rounded" src="./images/screenshots/theed2.png"/>
              <img className="preview img-fluid rounded" src="./images/screenshots/theed3.png"/>
              <img className="preview img-fluid rounded" src="./images/screenshots/dagobah3.png"/>
              <img className="preview img-fluid rounded" src="./images/screenshots/dagobah4.png"/>
              <img className="preview img-fluid rounded" src="./images/screenshots/kamino2.png"/>
              <img className="preview img-fluid rounded" src="./images/screenshots/kamino3.png"/>
          </Preview>
          <div className="w-25">
            <h2>Explore Maps in Detail</h2>
            <p>Brick Bench offers an exhaustive set
            of features and options to simplify viewing game maps, allowing
            you to explore levels as you've never seen them before.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-bottom" style={{height: '50vh'}}>
            <h2>Straightforward and Simple</h2>
            <p className="w-25 text-center">Brick Bench is easy to set up and use. Get started in seconds
            and learn more about the tool with well-managed documentation.
            </p>
            <div>
              <NavLink className="btn btn-primary" to="/get">Get Started</NavLink>
              <NavLink className="btn btn-secondary" to="/usage">Learn More</NavLink>
            </div>
        </div>
      </div>
    );
  }
}

function Preview({children, childNum}) {
  return (
    <div className="mr-5 d-flex justify-content-center align-items-center"
      style={{height: '75%', width: '25%'}}>
      {children[childNum]}
    </div>
  );
}
