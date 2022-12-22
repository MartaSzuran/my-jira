import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';

export default function Column({ 
        id, 
        columnTitle, 
        numberOfTasks, 
        todoTasksList, 
        taskList, 
        setTaskList, 
        setCurrentTask, 
        handleOpenTaskModal
    }) {

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
                setCurrentTask={setCurrentTask}
                handleOpenTaskModal={handleOpenTaskModal}
            />
        </div>
    )
}