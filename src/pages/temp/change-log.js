import Container from 'react-bootstrap/Container';

export default function ChangeLog() {
  return (
    <Container sm>
      <h1 className="m-4 text-center">Change Log</h1>
      <div className="rounded p-2 m-2 bg-middle">
        <div className="border-bottom p-2">
          <h3 className="p-0 m-0">Ver. 1.1.0 <span class="badge badge-primary">New</span></h3>
          <small className="text-muted">January 5th 2021</small>
          <div>Changes</div>
          <Plus content={'Added this new feature'} />
          <Plus content={'Also added this new feature'} />
          <Minus content={'Removed this feature because of this reason'} />
          <div>Bug Fixes</div>
          <ul>
            <li>Bug number one</li>
            <li>Bug number two</li>
            <li>Bug number three</li>
          </ul>
          <div>In Development</div>
          <ul>
            <li>Feature number one</li>
            <li>Feature number two</li>
            <li>Feature number three</li>
          </ul>
        </div>
        <div className="border-bottom p-2">
          <h3 className="p-0 m-0">Ver. 1.0.9</h3>
          <small className="text-muted">January 1st 2021</small>
          <div>Changes</div>
          <Plus content={'Only added one feature'} />
          <Minus content={'Removed this feature'} />
          <Minus content={'Removed this feature too'} />
          <Minus content={'Removed this guy'} />
          <Minus content={'Goodbye fellow'} />
          <div>Bug Fixes</div>
          <small className="text-muted">(none)</small>
          <div>In Development</div>
          <ul>
            <li>Feature number one</li>
          </ul>
        </div>
        <div className="border-bottom p-2">
          <h3 className="p-0 m-0">Ver. 1.0.8</h3>
          <small className="text-muted">December 20th 2021</small>
          <div>Changes</div>
          <Plus content={'Only added one feature'} />
          <Minus content={'Removed this feature'} />
          <Minus content={'Removed this feature too'} />
          <Minus content={'Removed this guy'} />
          <Minus content={'Goodbye fellow'} />
          <div>Bug Fixes</div>
          <small className="text-muted">(none)</small>
          <div>In Development</div>
          <ul>
            <li>Feature number one</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const Plus = ({content}) => <div className="text-primary code">{'+ '+content}</div>
const Minus = ({content}) => <div className="text-danger code">{'- '+content}</div>
