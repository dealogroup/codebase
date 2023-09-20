import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-white "
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="U.S.A" invert={invert} className="text-teal-300">
          on bay mark
          <br />
          Newtown city of Las Vegas
        </Office>
      </li>
      <li>
        <Office name="London" invert={invert}>
          13 long Street
          <br />
          Downtown, Allyway
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
