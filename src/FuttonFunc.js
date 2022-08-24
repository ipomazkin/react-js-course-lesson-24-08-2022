import React from "react";

export function Button({ children, ...rest }) {
  console.log(rest)

  return (
    <button {...rest}>{children}</button>
  );
}
