import Header from './components/Header/Header.jsx';
import Columns from './components/Columns/Columns.jsx';
import tasksList from './data/tasks.js';
import './App.css';

const TASKS = tasksList;

function App() {
  return (
    <>
      <Header />
      <Columns tasks={TASKS}/>
    </>
  );
}

export default App;
