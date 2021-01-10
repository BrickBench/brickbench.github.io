import { useState } from 'react';
import data from './data.json';

export default function Screenshots() {
  const [selected, setSelected] = useState('');
  return (
    <div className="container-fluid">
      <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <img src={'./images/screenshots/'+selected}
            className="img-fluid rounded" />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {data.screenshotFilenames.map(filename =>
          <img key={filename} data-toggle="modal" data-target="#imageModal"
            onClick={() => {
              setSelected(filename);
            }}
            src={'./images/screenshots/'+filename} alt={''}
              className="screenshot img-fluid m-4 rounded" style={{height: '10em'}}
          />
        )}
      </div>
    </div>
  );
}
