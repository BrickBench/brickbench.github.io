import { Fragment, useState } from 'react';

export default function AwaitImage(props) {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <img {...props} alt="..." onLoad={() => setLoading(false)} />
      {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Fragment />
        )
      }
    </div>
  );
}
