import { IoChevronForward } from "react-icons/io5";

function ChangeBackground({ onClick }) {
  return (
    <button
      aria-label="Change background"
      className={"relative mr-4 p-4 text-white rounded-lg text-2xl hover:bg-black hover:bg-opacity-30"
      }
      onClick={onClick}
      title="Shuffle"
    >
      <div className="absolute inset-0 rounded-lg backdrop-filter backdrop-blur-lg bg-gradient-to-r from-black to-gray-800 opacity-70"></div>
      <div className="relative">
       <IoChevronForward/> 
      </div>
    </button>
  );
}

export default ChangeBackground;