import React, { useEffect, useState } from "react";
import { SearchIconSvg } from "@/components/svg/SearchIconSvg";

const SearchInput = ({ setWord }) => {
  const [searchWord, setSearchWord] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);

  const searchingWord = (searchingWord) => {
    setEmptySearch(false);
    setSearchWord(searchingWord);
  };

  const setWordCheck = (searchedWord) => {
    if (searchedWord === "") {
      setEmptySearch(true);
    } else {
      setWord(searchedWord);
    }
  };

  return (
    <>
      <div
        className={` ${
          emptySearch && "border border-red-500"
        } hover:border hover:border-component-purple rounded-2xl flex justify-between items-center w-full bg-fmgrey-three h-16  dark:bg-fmblack-two px-4 lg:px-6`}>
        <input
          onChange={(e) => searchingWord(e.target.value)}
          placeholder="Search for any word..."
          type="text"
          className={`text-xl font-bold focus:outline-none bg-fmgrey-three dark:bg-fmblack-two dark:text-white   grow min-w-0`}
        />

        <button onClick={() => setWordCheck(searchWord)} className="min-w-0">
          <SearchIconSvg className={``} />
        </button>
      </div>
      {emptySearch && (
        <p className={` text-red-500`}>Whoops, can't be empty...</p>
      )}
    </>
  );
};

export default SearchInput;
