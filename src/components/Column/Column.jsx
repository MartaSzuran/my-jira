import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';

export default function Column({ id, columnTitle, numberOfTasks, todoTasksList, taskList, setTaskList }) {

    return (
        <div>
            <ColumnHeader 
                columnTitle={columnTitle} 
                numberOfTasks={numberOfTasks} 
            />
            <ColumnBody 
                id={id} 
                todoTasksList={todoTasksList} 
                taskList={taskList} 
                setTaskList={setTaskList} 
            />
        </div>
    )
}