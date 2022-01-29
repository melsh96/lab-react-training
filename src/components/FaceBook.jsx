import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [users, setUsers] = useState(profiles);
  return (
    <div>
      {users.map((e, index) => {
        return (
          <div key={index} className="card" style={{ marginBottom: 20 }}>
            <img
              src={e.img}
              alt={e.img}
              style={{ width: 100, heigth: 200, objectFit: 'cover' }}
            />
            <div className="text">
              <p>
                <strong>First name: </strong>
                {e.firstName} <br />
                <strong>Last name: </strong>
                {e.lastName}
                <br />
                <strong>Country: </strong>
                {e.country}
                <br />
                <strong>Type: </strong>
                {e.isStudent === false ? 'Teacher' : 'Student'}
                <br />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
