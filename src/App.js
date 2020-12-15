// import logo from './logo.svg';
import './App.css';
import './Style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Notes from './components/Notes';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
