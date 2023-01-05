import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';

export default function Column({ 
        id, 
        columnTitle, 
        numberOfTasks, 
        todoTasksList, 
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
                handleOpenTaskModal={handleOpenTaskModal}
            />
        </div>
    )
}