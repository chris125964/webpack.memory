import React from "react";

export const Header = (): JSX.Element => {
  const viewport = (
    <div>
      w x h: {window.innerWidth} x {window.innerHeight}
    </div>
  );

  return (
    <header className="header">
      <h3>{viewport}</h3>
    </header>
  );
};
