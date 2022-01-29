import React from 'react';

const NumbersTable = (props) => {
  const { limit } = props;

  console.log(limit);

  const tables = () => {
    let arr = [];
    for (let i = 0; i < props.limit; i++) {
      // Did i < limit.length, did not work
      if (i % 2) {
        arr.push(
          <div
            key={i}
            style={{ backgroundColor: 'red', width: 50, height: 50 }}
          >
            {i}
          </div>
        );
      } else {
        arr.push(
          <div key={i} style={{ width: 50, height: 50 }}>
            {i}
          </div>
        );
      }
    }
    return arr;
  };

  const newTable = tables();

  console.log(newTable);

  return <div>{newTable.map((e) => e)}</div>;
};

export default NumbersTable;
