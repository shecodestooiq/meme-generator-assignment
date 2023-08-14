import React, { useContext, useState } from "react";

import InputTextContext from "../data/InputProvider";

function SecondaryInput() {
  const { secondaryInputText, setSecondayInputText } =
    useContext(InputTextContext);

  return (
    <>
      <center>
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            onChange={(e) => setSecondayInputText(e.target.value)}
          />
        </div>
      </center>
    </>
  );
}

export default SecondaryInput;
