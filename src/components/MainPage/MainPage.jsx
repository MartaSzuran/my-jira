import Header from '../Header/Header.jsx';
import Columns from '../Columns/Columns.jsx';
import TaskCreationModal from '../TaskCreationModal/TaskCreationModal.jsx';
import { useState } from 'react';

export default function MainPage() {
    const [openTaskCreationModal, setOpenTaskCreationModal] = useState(false);
    const handleCloseTaskCreationModal = () => setOpenTaskCreationModal(false);

    return (
        <div>
            <Header setOpenTaskCreationModal={setOpenTaskCreationModal}/>
            <Columns />
            <TaskCreationModal 
                open={openTaskCreationModal}
                handleCloseTaskCreationModal={handleCloseTaskCreationModal} 
            />
        </div>
    )
};