import './App.css';
import About from './components/about'
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
        </div>
      </div>
    </div>
  );
}

export default App;
