import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1><b><u>Welcome to React App Development</u></b></h1>
      <div className='App-header'>
        <fieldset className='App'>
          <form>
            <input type="text" placeholder='Enter your name here' maxLength={12}></input>
            <input type="Password" placeholder='Enter your Password here' maxLength={12}></input>
            <input type="Password" placeholder='Type again password' maxLength={12}></input>
          </form>
        </fieldset>

      </div>
    </div>
  );
}

export default App;
