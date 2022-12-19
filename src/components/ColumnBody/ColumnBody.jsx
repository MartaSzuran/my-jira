import TaskCard from '../TaskCard/TaskCard.jsx'
import { ItemTypes } from '../../constants/itemTypes';
import { useDrop } from 'react-dnd';
import './ColumnBody.css';

export default function ColumnBody({ todoTasksList }) {
    function moveCard(id, collectedProps) {
        return
    }

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => moveCard(item.id, collectedProps),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    })

    const tasksList = todoTasksList.map((task) => 
        <TaskCard key={task.id} task={task} />
    )

    return (
        <div ref={drop} className="columnBody">
            {tasksList}
        </div>
    )
}