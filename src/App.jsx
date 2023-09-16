import './App.css'
import Card from './Components/Card';
import Subcription from './Components/Subcription';

function App() {

  return (
    <div className='md:flex lg:flex'>
      <div className='child'>
        <Subcription></Subcription>
      </div>
      <div className='child child--absolute'>
        <Card></Card>
      </div>
    </div>
  )
}

export default App;
