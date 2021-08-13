import React from "react";

const List = ({output, input, selectedGif}) => {
    console.log(output)
  return (
    <div className="outputBox">
       
      {output.map((item) => {
        return (
          <div className="outputItem">
            <div className={"outputText"}>{item.text}</div>
            <div className={"gifOutput"}>
              {item.gifs.map((links) => {
                return (
                  <div style={{ margin: "3px" }} key={links.id}>
                    <img src={links.src} alt="oops!" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
