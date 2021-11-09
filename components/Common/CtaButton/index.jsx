function CtaLinkButton(props) {
  return (
    <a
      {...props}
      className="py-3 px-4 font-medium capitalize text-center text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
      rel="noopener"
    >
      {props.children}
    </a>
  );
}

export default CtaLinkButton;
