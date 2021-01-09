import React from 'react';

export default function Releases() {
  const [os, setOs] = React.useState("windows");
  // Assuming there will eventually be a mac version,
  // we want to do it this way instead of using a bool
  const windows = os === "windows";
  return (
    <div className="container-lg">
      <div className="rounded p-2 m-2 bg-middle dark-bottom">
        <div className="d-flex">
          <button className={'btn flex-fill '+(windows ? 'active' : '')} onClick={() => setOs("windows")}>
            <img style={{height: '4em'}} src="./images/windows.png"/>
          </button>
          <button className={'btn flex-fill '+(!windows ? 'active' : '')} onClick={() => setOs("linux")}>
            <img style={{height: '3em'}} src="./images/linux.png"/>
          </button>
        </div>
        {windows ? <div>windows release</div> : <div>linux release</div>}
      </div>
    </div>
  );
}
