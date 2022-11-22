import React, { useState, useEffect } from "react";

const App = () => {
  const [names, setNames] = useState([]);
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);
  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch("/names.json");
      const data = await response.json();
      setNames(data);
    };
    fetchNames();
  }, []);
  const onSelectedNameChange = async (name) => {
    const response = await fetch(`${name}.json`);
    const data = await response.json();
    setSelectedNameDetails(data);
  };
  onSelectedNameChange()
  return (
    <div>
      {names.map((name) => (
        <button
          onClick={() => {
            onSelectedNameChange(name);
          }}
        >
          {name}
        </button>
      ))}
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
};

export default App;
