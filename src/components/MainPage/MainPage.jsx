import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx';
import tasksList from '../../data/tasks.js';
import TaskCreationModal from '../TaskCreationModal/TaskCreationModal.jsx';
import { useState } from 'react';

export default function MainPage() {
    const [openTaskCreationModal, setOpenTaskCreationModal] = useState(false);
    const [taskList, setTaskList] = useState([...tasksList]);
    const handleCloseTaskCreationModal = () => setOpenTaskCreationModal(false);

    return (
        <div>
            <Header setOpenTaskCreationModal={setOpenTaskCreationModal}/>
            <Columns 
                taskList={taskList} 
                setTaskList={setTaskList} 
            />
            <TaskCreationModal 
                open={openTaskCreationModal}
                handleCloseTaskCreationModal={handleCloseTaskCreationModal} 
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </div>
    )
}