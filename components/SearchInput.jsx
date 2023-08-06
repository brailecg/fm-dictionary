import React, { useEffect, useState } from "react";
import { SearchIconSvg } from "@/components/svg/SearchIconSvg";

const SearchInput = ({ setWord }) => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div // searchbar
      className={` rounded-2xl flex items-center w-full bg-fmgrey-three h-16 px-2 lg:px-6 dark:bg-fmblack-two`}>
      <input
        onChange={(e) => setSearchWord(e.target.value)}
        type="text"
        className={`text-xl font-bold focus:outline-none bg-fmgrey-three grow dark:bg-fmblack-two dark:text-white`}
      />
      <button onClick={() => setWord(searchWord)}>
        <SearchIconSvg className={``} />
      </button>
    </div>
  );
};

export default SearchInput;
