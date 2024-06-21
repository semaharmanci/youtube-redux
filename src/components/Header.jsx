import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  //form gonderilince calisacak fonk
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    //metin bos ise fonk durdur
    if (text.trim() === "") return;
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center" to="/">
        <img
          className="w-[100px] "
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          alt="logo"
        />
        <h1 className="text-xl font-sans max-sm:hidden">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          placeholder="ara.."
          className=" group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white py-2 px-5 outline-none rounded-l-[20px] focus:border-blue-500"
        />
        <button className="px-4 text-2xl bg-zinc-800">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <IoIosNotifications className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
}
export default Header;
