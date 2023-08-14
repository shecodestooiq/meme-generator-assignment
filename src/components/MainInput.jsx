import React, { useContext, useState } from "react";

import InputTextContext from "../data/InputProvider";

function MainInput() {
  const { mainInputText, setInputText } = useContext(InputTextContext);

  return (
    <>
      <center>
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </center>
    </>
  );
}

export default MainInput;
