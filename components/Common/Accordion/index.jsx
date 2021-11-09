import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";

function Accordion({ children, toggleActive, isActive, headerComponent }) {
  return (
    <div className="relative text-white transform-gpu transition-all ease-linear duration-300 max-w-full md:max-w-lg md:w-full mt-2 md:mt-0">
      <div className="absolute inset-0 rounded-lg backdrop-filter backdrop-blur-lg bg-gradient-to-r from-gray-800 to-gray-600 opacity-90"></div>
      <div className="relative md:w-full my-auto md:min-w-full select-none rounded-lg">
        <div
          className="relative flex flex-row items-center justify-between cursor-pointer p-4 gap-1 md:w-full"
          onClick={toggleActive}
        >
          <div>{headerComponent}</div>
          <div className="flex-grow">
            {isActive ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="relative px-4 pb-4 md:w-full">{children}</div>
      )}
    </div>
  );
}

export default Accordion;
