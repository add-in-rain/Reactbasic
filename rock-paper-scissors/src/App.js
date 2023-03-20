import logo from './logo.svg';
import './App.css';
import Box from './component/Box'

function App() {
  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>     
    </div>
  );
}

export default App;