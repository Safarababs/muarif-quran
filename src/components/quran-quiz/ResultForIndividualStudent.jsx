import React, { useState } from 'react';
import axios from 'axios';

const ResultCheck = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    axios
      .get(`http://localhost:3000/result/${phoneNumber}`) // Replace with your backend API endpoint
      .then((response) => {
        setIsLoading(false);
        setResult(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Error occurred while fetching the result.');
      });
  };

  return (
    <div style={{marginTop:"7rem"}}>
      <h1>Check Result</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter Phone Number"
        />
        <button type="submit">Check</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {result && (
        <div>
          <p>Name: {result.name}</p>
          <p>Phone Number: {result.phoneNumber}</p>
          <p>City: {result.city}</p>
          <p>Obtained Marks: {result.obtainedMarks}</p>
          {/* Display any other relevant result information */}
        </div>
      )}
    </div>
  );
};

export default ResultCheck;
