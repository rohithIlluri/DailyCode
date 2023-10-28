import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  // Your error handling UI goes here
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
