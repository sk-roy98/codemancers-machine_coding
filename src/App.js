import "./App.css";
import { useEffect, useState } from "react";
import Input from "./Component/Input";
import List from "./Component/List";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [gif, setGif] = useState([]);
  const [gifSearch, setGifSearch] = useState("");
  const [selectedGif, setSelectedGif] = useState([]);
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   const giphyKey = "gBBiFL7DfuZzSEsL6fAxhusaYjN2N0P5";
  //   const giphyUrlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=20&offset=0`;
  //   async function trending() {
  //     fetch(giphyUrlTrending)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setGif(
  //           result.data.map((item) => {
  //             return item.images.fixed_height_small.url;
  //           })
  //         );
  //       });
  //   }
  //   trending();
  // }, []);

  return (
    <div className="App">
      <h1>Giphy Textbox</h1>
      <section>
        <Input
          input={input}
          setInput={setInput}
          output={output}
          setOutput={setOutput}
          gif={gif}
          gifSearch={gifSearch} 
          setGif={setGif}
          selectedGif={selectedGif}
          setSelectedGif={setSelectedGif}
          setModal={setModal}
          modal={modal}
          setGifSearch={setGifSearch}
        />
        <List output={output} />
      </section>
    </div>
  );
}
