import React from 'react';
import { CodeSegment } from '../../components/code';
import Releases from './releases';

export default function Get() {
  const [os, setOs] = React.useState("windows");
  // Assuming there will eventually be a mac version,
  // we want to do it this way instead of using a bool
  const windows = os === "windows";
  return (
    <div className="container-md">
      <h1 className="my-4">Installation</h1>
      <div className="rounded p-2 my-2 bg-middle dark-bottom">
        <div className="d-flex">
          <button className={'btn flex-fill '+(windows ? 'active' : '')} onClick={() => setOs("windows")}>
            <img style={{height: '4em'}} src="./images/windows.png" className="img-fluid"/>
          </button>
          <button className={'btn flex-fill '+(!windows ? 'active' : '')} onClick={() => setOs("linux")}>
            <img style={{height: '3em'}} src="./images/linux.png" className="img-fluid"/>
          </button>
        </div>
        {windows ? <WindowsInstallation /> : <LinuxInstallation />}
        <div className="text-primary text-center">And you're good to go!</div>
      </div>
      <h1 className="my-4">Change Logs</h1>
      <Releases />
    </div>
  );
}

const WindowsInstallation = () => {
  return (
    <ol>
      <li>
        Download the latest version of BrickBench: <a className="link" href="#">brickbench-windows.jar</a>
      </li>
      <li>
        Unzip the <CodeSegment inline><code className="reserved">.zip
        </code></CodeSegment> archive from the Releases page.
      </li>
      <li>
        Double click the <CodeSegment inline><code className="reserved">run.bat
        </code></CodeSegment> file to execute the local installation.
      </li>
    </ol>
  );
}
const LinuxInstallation = () => {
  return (
    <ol>
      <li>
        Download the latest version of BrickBench: <a className="link" href="#">brickbench-linux.jar</a>
      </li>
      <li>
        Unzip the <CodeSegment inline><code className="reserved">.zip
        </code></CodeSegment> archive from the Releases page.
      </li>
      <li>
        Double click the <CodeSegment inline><code className="reserved">run.sh
        </code></CodeSegment> file to execute the local installation.
      </li>
    </ol>
  );
}
