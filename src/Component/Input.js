import React from "react";
import Modal from "./Modal";

const Input = ({
  input,
  setInput,
  output,
  setOutput,
  gif,
  setGif,
  gifSearch,
  selectedGif,
  setSelectedGif,
  setModal,
  modal,
  setGifSearch,
}) => {
  const postHandler = () => {
    console.log("input",input)
    if (input.length  || selectedGif.length) {
      setOutput((prev) =>
        prev.concat({
          id: output.length,
          text: input,
          gifs: selectedGif,
        })
      );
      setInput("");
      setSelectedGif([]);
      setGifSearch("");
      setModal(false);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="inputBox">
        <textarea
          className="inputField"
          type="text"
          placeholder="Enter Your Text Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {selectedGif &&
          selectedGif.map((item) => {
            return (
              <div
                style={{ margin: "9px", position: "relative" }}
                key={item.id}
              >
                <div
                  className="cross"
                  onClick={() =>
                    setSelectedGif((prev) =>
                      prev.filter((gif) => gif.id !== item.id)
                    )
                  }
                >
                  ✖
                </div>
                <img src={item.src} alt="oops!" />
              </div>
            );
          })}
      </div>
      <div className="buttonDiv">
        <button className="gifButton" onClick={() => setModal(!modal)}>
          GIF
        </button>
        <button className="postButton" onClick={postHandler}>
          Post
        </button>
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
