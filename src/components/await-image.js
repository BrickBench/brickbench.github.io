import { Fragment, useState } from 'react';

export default function AwaitImage(props) {
  const [loading, setLoading] = useState(true);
  let {className, ...vettedProps} = props;
  if (loading) {
    className += ' d-none';
  }
  return (
    <div>
      <img {...vettedProps} className={className} alt="..." onLoad={() => setLoading(false)} />
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
