
import './App.css';
import Main from "../src/components/main"
import Navbar from "../src/components/navbar"
import Button from './components/Button';
import "../src/components/main.css"
import "../src/components/navbar.css"


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="buttonPage">
        <div className="innercontentDiv">
          <h1 className="maintext">Say hello to ReactJS</h1>
          <p className="text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
