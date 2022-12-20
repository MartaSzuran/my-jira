import TaskCard from '../TaskCard/TaskCard.jsx';
import { ItemTypes } from '../../constants/itemTypes';
import { useDrop } from 'react-dnd';
import './ColumnBody.css';

export default function ColumnBody({ id, todoTasksList, setTaskList, taskList }) {

    function moveCard(id, dropResult) {
        setTaskList(taskList.filter((task) => {
            if (task.id === id) {
                task.type = dropResult
                return task
            } 
            return task
        }))

    }

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, dropResult) => moveCard(item.id, dropResult=id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const tasksList = todoTasksList.map((task) => 
        <TaskCard key={task.id} task={task} />
    )

    function IfTasksExists() {
        if ( tasksList.length > 0) {
            return (
            <div ref={drop} className="columnBody">
                {tasksList}
            </div>
            )
        } else {
            return <div ref={drop} className="emptyDragArea" />
        }
    }

    return (
        <div ref={drop} className="columnBody">
            <IfTasksExists />
        </div>
    )
}