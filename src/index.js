import React from 'react';
import ReactDOM from 'react-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hi there!</div>;
};

root.render(<App />);
