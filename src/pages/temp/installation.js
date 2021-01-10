import Container from 'react-bootstrap/Container';
import CodeSegment from '../components/code/code-segment';

export default function Installation() {
  return (
    <Container sm>
      <h1 className="m-4 text-center">Installation</h1>
      <div className="rounded p-2 m-2 bg-middle d-flex align-items-center">
        <div id="list-example" className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action" href="#list-item-1">Download</a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">Install Locally</a>
          <a className="list-group-item list-group-item-action" href="#list-item-3">Run</a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">Clean Up</a>
        </div>
        <div style={{height: '60vh', overflowY: 'auto', position: 'relative'}} data-spy="scroll"
          data-target="#list-example" data-offset="0" className="flex-fill px-4 m-2 border-left ">
          <div id="list-item-1"/>
          <h3>Download</h3>
          <p>Download the latests version of Brick Bench from downloads.</p>
          <p>Make sure your computer has the following technical specifications:</p>
          <ul>
            <li>Some spec</li>
            <li>Another spec</li>
            <li>One last spec</li>
          </ul>
          <p className="alert alert-warning">A warning message about this step.</p>
          <h3 id="list-item-2">Install Locally</h3>
          <p>Instructions related to local installation blah blah blah</p>
          <p>Maybe you'd want to include some code here in which case there could be a simple code display box:</p>
          <CodeSegment>
            <div className="comment">{'// a sample comment'}</div>
            <div>sudo apt update</div>
            <div>curl -o vue-v2.6.10.js https://cdn.jsdelivr.net/npm/vue/dist/vue.js</div>
            <br />
            <div className="comment">{'// could include reserved words'}</div>
            <div><span className="reserved">function</span>() {'{ console.log(hi); }'}</div>
          </CodeSegment>
          <h3 id="list-item-3">Run</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sagittis vitae et leo duis ut diam quam nulla porttitor. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Tellus integer feugiat scelerisque varius morbi enim nunc. Vulputate mi sit amet mauris commodo quis. Sed id semper risus in hendrerit gravida rutrum quisque non. Mattis ampor commodo ullamcorper a. Bibendum ut tristique et egestas quis ipsum suspendisse.</p>
          <p className="alert alert-danger">A very serious warning at this step.</p>
          <h3 id="list-item-4">Clean Up</h3>
          <ul>
            <li>some list items</li>
            <li>some list items</li>
            <li>some list items</li>
            <li>some list items</li>
            <li>some list items</li>
            <li>some list items</li>
          </ul>

        </div>
      </div>
    </Container>
  );
}
