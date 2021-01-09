
export default function CodeSegment(props) {
  const display = props.inline ? 'd-inline' : 'd-block';
  return (
    <div className={'bg-top rounded p-1 m-1 code ' + display}>
      {props.children}
    </div>
  );
}
