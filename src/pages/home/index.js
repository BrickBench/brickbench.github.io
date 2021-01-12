import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import AwaitImage from '../../components/await-image';


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
        <div className="bg-bottom d-flex flex-wrap justify-content-center align-items-center"
          style={{minHeight: '50vh'}}>
          <div className="mx-5">
            <h1>Brick Bench</h1>
            <h3>A map loading tool for early TT games.</h3>
          </div>
          <img className="img-fluid" alt="..." src="./images/brick-bench.png" />
        </div>
        <div className="bg-primary d-flex flex-wrap justify-content-center align-items-center text-secondary"
          style={{minHeight: '50vh'}}>
          <Preview childNum={this.state.preview}>
              {['theed2', 'theed3', 'dagobah3', 'dagobah4', 'kamino2', 'kamino3']
                .map(name => <AwaitImage key={name} className="preview img-fluid rounded"
                  src={'./images/screenshots/'+name+'.png'}/>
              )}
          </Preview>
          <div className="w-25 mx-5" style={{minWidth: '200px'}}>
            <h2>Explore Maps in Detail</h2>
            <p>Brick Bench offers an exhaustive set
            of features and options to simplify viewing game maps, allowing
            you to explore levels as you've never seen them before.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-bottom" style={{minHeight: '50vh'}}>
            <h2>Straightforward and Simple</h2>
            <p className="text-center mx-5">Brick Bench is easy to set up and use. Get started in seconds
            and learn more about the tool with well-managed documentation.
            </p>
            <div>
              <NavLink className="btn btn-primary" to="/get">Get Started</NavLink>
              <NavLink className="btn btn-primary" to="/usage">Learn More</NavLink>
            </div>
        </div>
      </div>
    );
  }
}

function Preview({children, childNum}) {
  return (
    <div className="w-25" style={{minWidth: '200px'}}>
      {children[childNum]}
    </div>
  );
}
