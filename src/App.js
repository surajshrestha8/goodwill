
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Content from './Components/Content/content';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#09143D'}}>
     <Navbar/>
     <Header/>
     <Content/>
    </div>
  );
}

export default App;
