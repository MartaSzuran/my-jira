import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx'
import tasksList from '../../data/tasks.js';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function MainPage() {
    const TASKS = tasksList;

    return (
        <div>
            <Header />
            <DndProvider backend={HTML5Backend}>
                <Columns tasks={TASKS}/>
            </DndProvider>
        </div>
    )
}