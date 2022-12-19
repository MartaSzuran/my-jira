import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx'
import tasksList from '../../data/tasks.js';


export default function MainPage() {
    const TASKS = tasksList;

    return (
        <div>
            <Header />
            <Columns tasks={TASKS}/>
        </div>
    )
}