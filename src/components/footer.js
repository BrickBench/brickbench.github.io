
export default function Footer() {
  return (
    <footer style={{minHeight: '3.2em'}} className="bg-middle p-3">
      <div className="d-flex justify-content-around align-items-start mb-4">
        <div>
          <h5>Developer</h5>
          <a className="link" href="#">Docs</a>
        </div>
        <div>
          <h5>Community</h5>
          <a className="link" href="#">Discord</a>
          <br />
          <a className="link" href="#">Twitter</a>
        </div>
        <div>
          <h5>Project</h5>
          <a className="link" href="#">Github</a>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img src="./images/brick-bench.png" style={{height: '1.6em'}} className="img-fluid" />
        <small className="text-primary">Copyright © 2021, BrickBench</small>
      </div>
    </footer>
  );
}
