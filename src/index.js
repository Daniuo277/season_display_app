import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }
}

root.render(<App />);
