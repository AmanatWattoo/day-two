
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1><b><u>Welcome to React App Development</u></b></h1>
      <h2><b><u>Class-2</u></b></h2>
      <div className='App-header'>
        <fieldset className='App'>
          <form>
            <input type="text" placeholder='Enter your name here' maxLength={12}></input>
            <input type="Password" placeholder='Enter your Password here' maxLength={12}></input>
            <input type="Password" placeholder='Type again password' maxLength={12}></input>
            <input type="Date">Date</input>
            <input type="submit" value="submit">submit</input>
          </form>
        </fieldset>

      </div>
    </div>
  );
}

export default App;
