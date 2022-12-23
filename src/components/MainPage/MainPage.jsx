import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx';
import tasksList from '../../data/tasks.js';
import { useState } from 'react';

export default function MainPage() {
    const [openTaskCreationModal, setOpenTaskCreationModal] = useState(false);
    const [taskList, setTaskList] = useState([...tasksList]);

    return (
        <div>
            <Header setOpenTaskCreationModal={setOpenTaskCreationModal}/>
            <Columns 
                taskList={taskList} 
                setTaskList={setTaskList} 
                openTaskCreationModal={openTaskCreationModal} 
                setOpenTaskCreationModal={setOpenTaskCreationModal} 
            />
        </div>
    )
}