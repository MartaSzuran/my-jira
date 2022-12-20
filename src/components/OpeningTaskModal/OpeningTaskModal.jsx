import { Box, Typography, Modal } from "@mui/material";
import './OpeningTaskModal.css';

export default function OpeningTaskModal({task, open, setOpen, handleClose}) {
    const {title, description, id} = task;
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box className='openingTaskModal'>
            <Typography variant="p" >
                {id}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {description}
            </Typography>
        </Box>
        </Modal>
    )
}