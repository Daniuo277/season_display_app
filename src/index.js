import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

root.render(<App />);
