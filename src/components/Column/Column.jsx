import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';

export default function Column({ title, numberOfTasks, todoTasksList}) {

    return (
        <div>
            <ColumnHeader title={title} numberOfTasks={numberOfTasks} />
            <ColumnBody todoTasksList={todoTasksList} />
        </div>
    )
}