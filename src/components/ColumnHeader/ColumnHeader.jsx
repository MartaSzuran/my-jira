import './ColumnHeader.css';

export default function ColumnHeader({ title, numberOfTasks }) {
    return (
        <div className='columnHeader'>{title} {numberOfTasks}</div>
    )
}