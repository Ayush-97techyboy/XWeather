import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=8f1a6c8d546e4ade9a860448241604&q=${city}`
      );
      onSearch(response.data);
    } catch (err) {
      alert("Failed to fetch weather data");
    } finally {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <div>
      <TextField
        type="text"
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        style={{
          backgroundColor: "#063b21",
          border: "none",
          color: "white",
          padding: "6px",
          textAlign: "center",
          textDecoration: "none",
          marginTop: "10px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading data...</p>}
      </div>
    </div>
  );
};

export default SearchForm;
