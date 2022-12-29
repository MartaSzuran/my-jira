import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx';
import tasksList from '../../data/tasks.js';
import TaskCreationModal from '../TaskCreationModal/TaskCreationModal.jsx';
import { useState } from 'react';

export default function MainPage() {
    const [searchValue, setSearchValue] = useState('');
    const [openTaskCreationModal, setOpenTaskCreationModal] = useState(false);
    const [taskList, setTaskList] = useState([...tasksList]);
    const handleCloseTaskCreationModal = () => setOpenTaskCreationModal(false);

    
    // const callBackendAPI = async () => {
    //     await fetch('http://localhost:5000/api/tasks/').then((response) => response.json()).then((data) => setNewTasks(data));
    // };

    // callBackendAPI();

    return (
        <div>
            <Header setOpenTaskCreationModal={setOpenTaskCreationModal} setSearchValue={setSearchValue}/>
            <Columns 
                taskList={taskList} 
                setTaskList={setTaskList}
                searchValue={searchValue} 
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