import React from "react";

const List = ({output}) => {
  return (
    <div className="outputBox">
      {output.map((item) => {
        return (
          <div className="outputItem">
            {item.text}
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
