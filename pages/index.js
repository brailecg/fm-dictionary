import { useThemeContext } from "@/store/ThemeContext";

import { Inter, Lora, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  const { typeFace, toggleThemeHandler, toggleTypeFace } = useThemeContext();
  const toggleTheme = () => {
    toggleThemeHandler();
  };

  const usedTypeFace = () => {
    if (typeFace === "inter") return inter;
    else if (typeFace === "lora") return lora;
    else return inconsolata;
  };
  console.log({ usedTypeFace: usedTypeFace().style.fontFamily });
  return (
    <>
      <style jsx global>
        {`
          main {
            font-family: ${usedTypeFace().style.fontFamily};
          }
        `}
      </style>
      <main className={`bg-white dark:bg-black h-screen w-screen`}>
        <button
          type="button"
          className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
          onClick={toggleTheme}>
          Toggle Theme
        </button>

        <label htmlFor="typeFace">Choose a Typeface:</label>

        <select
          name="typeFace"
          id="typeFace"
          value={typeFace}
          onChange={(e) => toggleTypeFace(e.target.value)}>
          <option value="inter">Inter</option>
          <option value="lora">Lora</option>
          <option value="inconsolata">inconsolata</option>
        </select>
      </main>
    </>
  );
}
