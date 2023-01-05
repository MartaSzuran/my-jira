import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx';
import TaskCreationModal from '../TaskCreationModal/TaskCreationModal.jsx';
import { useState } from 'react';

export default function MainPage() {
    const [searchValue, setSearchValue] = useState('');
    const [openTaskCreationModal, setOpenTaskCreationModal] = useState(false);
    const handleCloseTaskCreationModal = () => setOpenTaskCreationModal(false);

    return (
        <div>
            <Header setOpenTaskCreationModal={setOpenTaskCreationModal} setSearchValue={setSearchValue}/>
            <Columns 
                searchValue={searchValue} 
            />
            <TaskCreationModal 
                open={openTaskCreationModal}
                handleCloseTaskCreationModal={handleCloseTaskCreationModal} 
            />
        </div>
    )
};