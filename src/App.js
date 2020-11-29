import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <Body />
        <Footer />
      </div>
  );
}

export default App;
