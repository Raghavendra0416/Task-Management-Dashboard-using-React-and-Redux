import './CSS/App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card'
import NewTask from './Components/NewTask';
import Rough from './Components/Rough';
import Filter from './Components/Filter';

function App() {

  return (
    <div>
      <NavBar />
      <div id="main-style">
        <Card />
        <NewTask />
        <Filter />
      </div>
    </div>

  )
}

export default App
