import Container from 'react-bootstrap/Container';

export default function Releases() {
  return (
    <Container sm>
      <h1 className="m-4 text-center">Releases</h1>
      <div className="rounded p-2 m-2 bg-middle">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#"><img style={{height: '4em'}} src="./images/windows.png"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><img style={{height: '3em'}} src="./images/mac.png"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><img style={{height: '3em'}} src="./images/linux.png"/></a>
          </li>
        </ul>
        <table className="my-4 table table-borderless text-light">
          <thead className="border-bottom border-top">
            <tr>
              <th scope="col">Version</th>
              <th scope="col">Type</th>
              <th scope="col"><Download /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1.1.0</th>
              <td>64 bit</td>
              <td className="download">x64-brick-bench.v1.1.0.jar</td>
            </tr>
            <tr>
              <th scope="row">1.1.0</th>
              <td>32 bit</td>
              <td className="download">x32-brick-bench.v1.1.0.jar</td>
            </tr>
            <tr>
              <th scope="row">1.0.9</th>
              <td>64 bit</td>
              <td className="download">x64-brick-bench.v1.0.9.jar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

const Download = () => <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
