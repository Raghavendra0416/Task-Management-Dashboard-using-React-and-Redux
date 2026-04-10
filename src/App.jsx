import './CSS/App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card'
import AddListItem from './Components/AddListItem';

function App() {

  return (
    <div>
      <NavBar />
      <div id="main-style">
        <Card />
      </div>
    </div>

  )
}

export default App
