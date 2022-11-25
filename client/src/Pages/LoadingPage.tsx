import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingPage = () => {
    return (
      <div className="loading">
        <h1>Front-End React App</h1>
        <h2>Loading ...</h2>
        <ClipLoader 
          color={"#0048ba"}
          size={300}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
    
}