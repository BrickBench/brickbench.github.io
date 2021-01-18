import { useEffect } from 'react';
import $ from 'jquery';
import { Container, Col, Row } from 'react-bootstrap';
import { CodeSegment } from '../../components/code';
import data from './data.json';

export default function Usage() {

  useEffect(() => {
    console.log('scroll spy refresh!');
    $('[data-spy="scroll"]').each(() => {
      var $spy = $(this).scrollspy('refresh');
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <div id="spy-target" className="p-2 list-group list-group-flush w-100 sidebar dark-bottom rounded">
            <a className="list-group-item list-group-item-action" href="#overview">Overview</a>
            <a className="list-group-item list-group-item-action" href="#controls">Controls</a>
            <a className="list-group-item list-group-item-action" href="#file-types">File Types</a>
            <a className="list-group-item list-group-item-action" href="#object-types">Object Types</a>
          </div>
        </div>
        <div className="col-sm-6 p-2">
          <div className="px-4 m-2 dark-bottom">
            <div id="overview">
              <h1>Overview</h1>
              <p>BrickBench is a tool for loading map files for the early TT Games
              games using the <CodeSegment inline><code className="reserved">{'.gsc'}</code></CodeSegment>
              file format (
                <a className="link" target="_blank" href={data.links.tcs}>Lego Star Wars: The Complete Saga</a>,&nbsp;
                <a className="link" target="_blank" href={data.links.lij}>Lego Indiana Jones</a>,&nbsp;
                and <a className="link" target="_blank" href={data.links.lb}>Lego Batman</a>).
              </p>
              <p>The focus is on TCS, but LIJ
                and Batman have increasing compatibility as well.
              </p>
              <p>
                BrickBench currently supports the following files on PC:
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                {data.fileTypes.map(({type}) =>
                    <CodeSegment inline key={type}>
                      <code className="reserved">{type}</code>
                    </CodeSegment>
                )}
              </div>
              <p>There are two options for loading:</p>
              <ul>
                <li>Load a specific file by selecting the file in the file explorer
                popup or dragging it into the window.
                </li>
                <li>Load all relevant map files for a map by selecting the file
                directory in the file explorer popup, or dragging a directory into the window.
                <ul>
                  <li>For <CodeSegment inline>
                    <code className="reserved">{'.ai2'}</code>
                  </CodeSegment> files to load with the directory option, they should
                  be included in a subdirectory called AI in the map directory.
                  </li>
                </ul>
                </li>
              </ul>
              <p>Once a map is loaded, information about the various subcomponents
              of the map such as triggers, locators for scripts, and splines can be
              viewed on the left.
              </p>
              <p>You can adjust various settings such as sensitivity and your default
              home directory in the "Settings" menu under File. To view more details
              about a specific setting or menu bar item, hover over it and a tooltip
              will appear.
              </p>
            </div>
            <div id="controls">
              <h1>Controls</h1>
              <ul>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">{'WASD'}</code>
                  </CodeSegment>
                  to move.
                </li>
                <li>Mouse to rotate the camera.</li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">Enter</code>
                  </CodeSegment>
                  to toggle locking the mouse cursor for camera movement.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">0-9</code>
                  </CodeSegment>
                  to toggle rendering for the top menu.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">G</code>
                  </CodeSegment>
                  to move to a specific position.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">C</code>
                  </CodeSegment>
                  to toggle compact mode.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">H</code>
                  </CodeSegment>
                  to toggle shadows.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">L</code>
                  </CodeSegment>
                  to open the load menu.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">R</code>
                  </CodeSegment>
                  to reset the view to the origin.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">V</code>
                  </CodeSegment>
                  to open a movement speed prompt.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">+</code>
                  </CodeSegment>
                  and <CodeSegment inline>
                    <code className="reserved">-</code>
                  </CodeSegment>
                  or scrollwheel to change movement speed.
                </li>
                <li>
                  <CodeSegment inline>
                    <code className="reserved">T</code>
                    </CodeSegment>(or<CodeSegment inline>
                    <code className="reserved">CTRL T</code></CodeSegment> for P2)
                  to teleport to the current camera position while the TCS hook is active.
                </li>
              </ul>
            </div>
            <div id="file-types">
              <h1>File Types</h1>
              <p>The TT Games engine has various file types used for map loading.
              The following are supported by BrickBench:
              </p>
              <ul>
                {data.fileTypes.map(({type, desc}) =>
                    <li>
                      <CodeSegment inline key={type}>
                        <code className="reserved">{type}</code>
                      </CodeSegment>
                      <span>{desc}</span>
                    </li>
                )}
              </ul>
            </div>
            <div id="object-types">
              <h1>Object Types</h1>
              <p>This is a quick reference to what the objects in the top bar and search area are:</p>
              <ul>
                {data.objectTypes.map(({type, desc}) =>
                    <li>
                      <span className="text-primary font-weight-bold">{type + ' '}</span>
                      <span>{desc}</span>
                    </li>
                )}
              </ul>
              <p>If you want more detail or to find where these objects are stored,
              please consult the documentation linked at the bottom of this page.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="dark-bottom sidebar p-2">
            <h5>Related Content</h5>
            <a className="link" target="_blank" href={data.links.allGames}>Where can I download these games?</a>
            <br />
            <a className="link" target="_blank" href={data.links.gameFiles}>How do I access game data files?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
