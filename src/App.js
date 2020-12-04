import './App.css';
import Body from './components/Body/Body';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Body />
        <Footer />
      </div>
  );
}

export default App;
