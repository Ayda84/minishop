import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillSearchHeartFill } from "react-icons/bs";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row items-center justify-between border-2 border-maintext md:rounded-2xl p-1 rounded-[5px] md:p-2 bg-gray-100"
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="جستجو..."
        className="focus:outline-none bg-transparent"
      />
      <button type="submit" className="cursor-pointer">
        <BsFillSearchHeartFill className="md:w-6 md:h-6" />
      </button>
    </form>
  );
}