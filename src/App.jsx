import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3030/data", { data });
      setResponse(result.data); // Menyimpan response dari backend
    } catch (error) {
      console.error("Error:", error);
      setResponse({ message: "Error occurred while sending data." });
    }
  };

  return (
    <div>
      <h1>Submit Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={handleChange}
          placeholder="Enter data"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
