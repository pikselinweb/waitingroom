export default function CallTitle(props) {
  const { fullName } = props;
  return (
    <div className="call-title">
      <small className="primary-c rl-margin">Call with</small>
      <h2 className="title rl-margin">{fullName}</h2>
    </div>
  );
}
