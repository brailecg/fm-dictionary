import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout";

import useSWR from "swr";
import SearchInput from "@/components/SearchInput";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSearch = (word) => {
  const { data, error } = useSWR(
    word === ""
      ? null
      : "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
    fetcher
  );
  return {
    data: data,
    error: error,
  };
};

export default function Home() {
  const [word, setWord] = useState("");

  const { data, error } = useSearch(word);
  console.log({ data });
  console.log({ error });
  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <main className={`py-6 lg:py-12`}>
          <div>
            <SearchInput setWord={setWord} />
          </div>
        </main>
      </Layout>
    </>
  );
}
