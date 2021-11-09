import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function SocialList() {
  return (
    <div className="flex justify-center w-max mx-auto">
      <a
        aria-label="Twitter link"
        className="bg-white m-2 p-2 text-3xl text-green-600 hover:text-green-500 hover:bg-gray-200 border-solid rounded-md border-2 transition duration-300"
        href="https://twitter.com/NuBloomSpace/"
        role="button"
      >
        <div>
          <FaTwitter />
        </div>
      </a>
      <a
        aria-label="Telegram link"
        className="bg-white m-2 p-2 text-3xl text-green-600 hover:text-green-500 hover:bg-gray-200 border-solid rounded-md border-2 transition duration-300"
        href="https://t.me/nubloom"
        role="button"
      >
        <div>
          <FaTelegramPlane />
        </div>
      </a>
      <a
        aria-label="Discord link"
        className="bg-white m-2 p-2 text-3xl text-green-600 hover:text-green-500 hover:bg-gray-200 border-solid rounded-md border-2 transition duration-300"
        href="https://discord.com/invite/A9AnmjjACR"
        role="button"
      >
        <div>
          <FaDiscord />
        </div>
      </a>
    </div>
  );
}
