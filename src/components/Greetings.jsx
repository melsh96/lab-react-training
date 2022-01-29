import React from 'react';
// ITERATION 2
const Greetings = (props) => {
  const { lang, children } = props;

  const translator = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div>
      <p>
        {/* {lang === 'fr' ? 'Bonjour' : 'Hallo'} {children} */}
        {translator[lang]} {children}
      </p>
    </div>
  );
};

export default Greetings;
