
export default function Footer() {
  return (
    <footer style={{minHeight: '3.2em'}} className="bg-middle p-3">
      <div className="d-flex justify-content-around align-items-start mb-4">
        <div>
          <h5>Developer</h5>
          <a className="link" href="https://docs.google.com/document/d/1RXuAUQNmjFDr9oPZbHN-2UgKCik0rLudYj0bE-GejzM/edit?usp=sharing"
            target="_blank">Docs</a>
        </div>
        <div>
          <h5>Community</h5>
          <a className="link" href="#" onClick={()=>{alert('Jav#6478');}}>Discord</a>
        </div>
        <div>
          <h5>Project</h5>
          <a className="link" href="https://github.com/BrickBench/BrickBench"
            target="_blank">Github</a>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img src="./images/brick-bench.png" style={{height: '1.6em'}} className="img-fluid" />
      </div>
    </footer>
  );
}
