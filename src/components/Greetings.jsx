import React from 'react';
// ITERATION 2
const Greetings = (props) => {
  const { lang, children } = props;
  return <div>
      <p>{lang === "fr" ? "Bonjour" : "Hallo"} {children}</p>
  </div>;
};

export default Greetings;
