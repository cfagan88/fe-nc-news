function Error({ status, msg }) {
  return (
    <p>
      Uh-oh! {status} {msg}
    </p>
  );
}

export default Error;
