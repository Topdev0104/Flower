import NavLink from "../NavLink";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <ul className="text-gray-500 font-semibold">
        <li className="active">
          <NavLink href="/">
            <a className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">
              Home
            </a>
          </NavLink>
        </li>
        {/* <li>
          <NavLink href="/mint">
            <a className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">
              Mint!
            </a>
          </NavLink>
        </li> */}
        <li>
          <NavLink href="/garden">
            <a className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">
              Garden
            </a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
