import TaskCard from '../TaskCard/TaskCard.jsx';
import { ItemTypes } from '../../constants/itemTypes';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { dropTask } from '../../redux/slices/tasksSlice.js';
import './ColumnBody.css';

export default function ColumnBody({ 
        id, 
        todoTasksList, 
        handleOpenTaskModal 
    }) {

    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => dispatch(dropTask({id: item.id, dropResult: id})),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const tasksList = todoTasksList.map((task) => 
        <TaskCard 
            key={task.id} 
            task={task} 
            handleOpenTaskModal={handleOpenTaskModal}
        />
    );

    return (
        <div>
            <div ref={drop} className="columnBody">
                {tasksList}
            </div>
        </div>
    );
};