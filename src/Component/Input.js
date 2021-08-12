import React from "react";
import Modal from "./Modal";

const Input = ({input, setInput, output, setOutput, gif, setGif, gifSearch, selectedGif, setSelectedGif, setModal, modal, setGifSearch}) => {
  const postHandler = () => {
    if (input.length > 1) {
      setOutput((prev) =>
        prev.concat({
          id: output.length,
          text: input,
          gifs: selectedGif,
        })
      );
    }
    setInput("");
    setSelectedGif([]);
    setGifSearch("");
    setModal(false);
  };
  return (
    <div>
      <div className="inputBox">
        <input
          className="inputField"
          type="text"
          placeholder="Enter Your Text Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {selectedGif &&
          selectedGif.map((item) => {
            return (
              <div style={{ margin: "5px" }} key={item.id}>
                <img src={item.src} alt="oops!" />
              </div>
            );
          })}
      </div>
      <div className="buttonDiv">
        <button onClick={() => setModal(!modal)}>GIF</button>
        <button onClick={postHandler}>Post</button>
        <Modal
          setGifSearch={setGifSearch}
          setGif={setGif}
          modal={modal}
          gifSearch={gifSearch}
          gif={gif}
          selectedGif={selectedGif}
          setSelectedGif={setSelectedGif}
        />
      </div>
  </div>
  );
};

export default Input;
