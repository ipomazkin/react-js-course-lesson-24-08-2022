/**
 * @description The Dropdown component.
 */
import React, { useState } from "react";
import data from './data.json'

export const Dropdown = function (props) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="">
      <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
      {isShow && (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      )}
    </div>
  );
};
