import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout";

import useSWR from "swr";
import SearchInput from "@/components/SearchInput";
import { PlayIconSvgMobile } from "@/components/svg/PlayIconSvg";
import Image from "next/image";

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

            {data !== undefined && data?.title === "No Definitions Found" && (
              <div className={` flex flex-col items-center`}>
                <Image src={"/images/errorImage.png"} width={64} height={64} />
                <p className={`font-bold  text-base lg:text-xl`}>
                  {data.title}
                </p>
                <p className={` text-xs lg:text-lg`}>
                  {data.message}
                  {data.resolution}
                </p>
              </div>
            )}
            {data !== undefined &&
              Array.isArray(data) &&
              data.map((word, index) => {
                return (
                  <div key={index}>
                    <p>{word.word}</p>
                    <p>{word.phonetic}</p>
                    {word.origin && (
                      <div>
                        <p>Origin:</p> <p>{word.origin}</p>{" "}
                      </div>
                    )}
                    {word.meanings.map((meaning, index) => {
                      return (
                        <div key={index}>
                          <div>{meaning.partOfSpeech}</div>

                          {meaning.definitions.length > 0 && (
                            <div>
                              <p>Meaning</p>
                              <div>
                                {meaning.definitions.map((def, index) => {
                                  return (
                                    <div key={index}>
                                      <div>{def.definition}</div>

                                      {def.example && (
                                        <div>"{def.example}"</div>
                                      )}
                                      {def.synonyms.length > 0 && (
                                        <div>
                                          <p>Synonyms:</p>
                                          <div>
                                            {meaning?.synonyms.map(
                                              (syn, index) => {
                                                return (
                                                  <div key={index}>{syn}</div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      )}

                                      {def.antonyms.length > 0 && (
                                        <div>
                                          <p>Antonyms:</p>
                                          <div>
                                            {meaning?.antonyms.map(
                                              (ant, index) => {
                                                return (
                                                  <div key={index}>{ant}</div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {meaning.synonyms.length > 0 && (
                            <div>
                              <p>Synonyms:</p>
                              <div>
                                {meaning?.synonyms.map((syn, index) => {
                                  return <div key={index}>{syn}</div>;
                                })}
                              </div>
                            </div>
                          )}

                          {meaning.antonyms.length > 0 && (
                            <div>
                              <p>Antonyms:</p>
                              <div>
                                {meaning?.antonyms.map((ant, index) => {
                                  return <div key={index}>{ant}</div>;
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <PlayIconSvgMobile />
                  </div>
                );
              })}
          </div>
        </main>
      </Layout>
    </>
  );
}
