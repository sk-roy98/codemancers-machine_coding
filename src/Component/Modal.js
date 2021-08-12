import React from "react";

const Modal = ({setGifSearch, setGif, modal, gifSearch, gif, selectedGif, setSelectedGif}) => {
  const gifHandler = async (e) => {
    setGifSearch(e.target.value);
    const giphyKey = "gBBiFL7DfuZzSEsL6fAxhusaYjN2N0P5";
    const giphyUrlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=20&offset=0&q=${e.target.value}`;
    const giphyUrlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=20&offset=0`;
    // ? fetch(giphyUrlTrending)
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setGif(
    //         result.data.map((item) => {
    //           return item.images.fixed_height_small.url;
    //         })
    //       );
    //     })
    // :
    await fetch(giphyUrlSearch)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setGif(
          result.data.map((item) => {
            return item.images.fixed_height_small.url;
          })
        );
      });
  };
  return (
    <div>
      {modal && (
        <div className="gifContainer">
          <input type="search" placeholder="Search GIF here" value={gifSearch} onChange={gifHandler} />
          {gif.map((item) => {
            return (
              <div className="gifBox">
                <img
                  onClick={() => {
                    const id = selectedGif.length;
                    let obj = {
                      id: id,
                      src: item,
                    };
                    setSelectedGif((prev) => prev.concat(obj));
                    // console.log(selectedGif);
                  }}
                  className="gifs"
                  src={item}
                  alt="oops"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Modal;
