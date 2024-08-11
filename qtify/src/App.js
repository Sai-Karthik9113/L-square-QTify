import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import Hero from './components/Hero/Hero';
import AlbumSection from './components/Section/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AlbumSection />
    </div>
  );
}

export default App;
