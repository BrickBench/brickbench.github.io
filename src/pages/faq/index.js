import { CodeSegment } from '../../components/code';
import data from './data.json';

export default function Faq() {
  return (
    <div className="container-lg p-3">
        <h1>Frequently Asked Questions</h1>
        {data.faq.map(({q, a}, i) => {
          return (
            <div>
              <h4 className="text-primary font-italic">{q}</h4>
              <p>{a}</p>
            </div>
          );
        })}
    </div>
  );
}
