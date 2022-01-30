import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const language = (nationality) => {
    if (nationality === 'en') return 'Hello';
    else if (nationality === 'de') return 'Hallo';
    else if (nationality === 'fr') return 'Bonjour';
  };

  console.log();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(setEmail);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(setPassword);
  };

  const handleSelect = (e) => {
    setNationality(e.target.value);
    console.log(setNationality);
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email </label>
          <input
            onChange={handleEmail}
            type="email"
            id="email"
            name="email"
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            onChange={handlePassword}
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </div>

        <div>
          <p>Naionality</p>
          <select
            onChange={handleSelect}
            name="nationality"
            id="nationality"
            value={nationality}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <button type="submit">Sign up</button>
      </form>

      {language(nationality)}

      <p>Your email address is: {email}</p>
    </div>
  );
};

export default SignupPage;
