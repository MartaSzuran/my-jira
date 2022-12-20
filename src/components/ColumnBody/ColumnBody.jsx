import TaskCard from '../TaskCard/TaskCard.jsx';
import { ItemTypes } from '../../constants/itemTypes';
import { useDrop } from 'react-dnd';
import './ColumnBody.css';

export default function ColumnBody({ id, todoTasksList, setTaskList, taskList }) {

    const moveTask = (id, dropResult) => {
        const currentTasks = taskList.filter((task) => {
            if (task.id === id) {
                task.type = dropResult
                return task;
            } 
            return task;
        })
        setTaskList(currentTasks);
    };

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, dropResult) => moveTask(item.id, dropResult = id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const tasksList = todoTasksList.map((task) => 
        <TaskCard key={task.id} task={task} />
    );

    return (
        <div>
            <div ref={drop} className="columnBody">
                {tasksList}
            </div>
        </div>
    )
}