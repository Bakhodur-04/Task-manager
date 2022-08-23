import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {getYear, getNowMonth, getNowDay} from './utils/date';

function App() {
  const year = getYear();
  const month = getNowMonth();
  const day = getNowDay();

  return (
    <div className="App">
      <Header />

      <Main year={year} month={month} day={day}/>
    </div>
  );
}

export default App;
