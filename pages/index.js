import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout";

import useSWR from "swr";
import SearchInput from "@/components/SearchInput";
import { PlayIconSvgMini } from "@/components/svg/PlayIconSvg";
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
  return (
    <>
      <Layout>
        <main className={`py-6 lg:py-12`}>
          <div>
            <div className={` `}>
              <SearchInput setWord={setWord} />
            </div>

            {data !== undefined && data?.title === "No Definitions Found" && (
              <div className={` flex flex-col items-center space-y-4 mt-6`}>
                <Image src={"/images/errorImage.png"} width={64} height={64} />
                <p className={`font-bold dark:text-white text-base lg:text-xl`}>
                  {data.title}
                </p>
                <p className={` text-xs text-fmgrey-one lg:text-lg`}>
                  {data.message}
                  {data.resolution}
                </p>
              </div>
            )}
            {data !== undefined &&
              Array.isArray(data) &&
              data.map((word, index) => {
                return (
                  <div key={index} className={` mt-4`}>
                    <p
                      className={` text-4xl font-bold text-fmblack-one dark:text-white`}>
                      {word.word}
                    </p>
                    <div className={` flex space-x-2 pt-2`}>
                      {word.phonetics.length > 0 &&
                        word.phonetics.map((phoneticCurrentValue, index) => {
                          return (
                            phoneticCurrentValue.audio &&
                            phoneticCurrentValue.text && (
                              <button
                                key={index}
                                className={`flex px-2 items-center space-x-2 rounded-xl border border-component-purple`}>
                                <p className={`text-component-purple`}>
                                  {phoneticCurrentValue.text}
                                </p>
                                {phoneticCurrentValue.audio && (
                                  <PlayIconSvgMini
                                    audioUrl={phoneticCurrentValue.audio}
                                  />
                                )}
                              </button>
                            )
                          );
                        })}
                    </div>

                    {word.meanings.map((meaning, index) => {
                      return (
                        <div key={index}>
                          <div className={` flex items-center my-7`}>
                            <p
                              className={` text-lg font-bold italic dark:text-white`}>
                              {meaning.partOfSpeech}
                            </p>
                            <div
                              className={` ml-6 border border-grey grow`}></div>
                          </div>

                          {meaning.definitions.length > 0 && (
                            <div>
                              <p className={` text-fmgrey-one mb-4`}>Meaning</p>
                              <ul
                                className={` space-y-2 list-disc marker:text-component-purple px-5`}>
                                {meaning.definitions.map((def, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className={` space-y-3 dark:text-white`}>
                                      <div>{def.definition}</div>

                                      {def.example && (
                                        <p className={` text-fmgrey-one`}>
                                          "{def.example}"
                                        </p>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                          <div className={` mt-6 space-y-4`}>
                            {meaning.synonyms.length > 0 && (
                              <div className={` inline-block   space-x-3`}>
                                <p className={` text-fmgrey-one inline-block`}>
                                  Synonyms
                                </p>

                                {meaning?.synonyms.map((syn, index) => {
                                  return (
                                    <a
                                      href="#"
                                      key={index}
                                      className={` hover:underline hover:underline-offset-4 inline-block text-component-purple font-bold`}>
                                      {syn}
                                    </a>
                                  );
                                })}
                              </div>
                            )}

                            {meaning.antonyms.length > 0 && (
                              <div className={`flex  space-x-4`}>
                                <p className={` text-fmgrey-one inline-block`}>
                                  Antonyms
                                </p>

                                {meaning?.antonyms.map((ant, index) => {
                                  return (
                                    <a
                                      href="#"
                                      key={index}
                                      className={` inline-block text-component-purple font-bold`}>
                                      {ant}
                                    </a>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {word.sourceUrls.length > 0 && (
                      <>
                        <div className={`border border-grey grow mb-4`}></div>
                        <div>
                          <p
                            className={` text-fmgrey-one underline underline-offset-2`}>
                            Source
                          </p>
                          {word.sourceUrls.map((url, index) => {
                            return (
                              <a
                                href="#"
                                key={index}
                                className={` dark:text-white text-fmblack-three inline-block`}>
                                {url}
                              </a>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </main>
      </Layout>
    </>
  );
}
