import { Box, Button, ButtonGroup, Typography, Modal, ClickAwayListener, Paper, Popper, MenuItem, MenuList } from "@mui/material";
import { useState } from 'react';
import  closeIcon  from '../../images/close-icon.png';
import  arrowDropDown  from '../../images/arrow-drop-down.png';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './OpeningTaskModal.css';

export default function OpeningTaskModal({task, open, handleClose}) {
    const {title, description, id, type} = task;
    
    const options = [TO_DO, IN_PROGRESS, DONE];

    const [openGroupButton, setOpenGroupButton] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const openPopper = Boolean(anchorEl);
    const popperId = openPopper ? 'simple-popper' : undefined;

    const handleClickShowPopper = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpenGroupButton(true);
    };   

    const handleCloseButtonGroup = () => {
        setOpenGroupButton(false);
    };

    const chooseTaskType = (option) => {
        // console.log(option);
        setAnchorEl(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box className="openingTaskModal">

            <Box className="openingTaskHeader">
                <Typography variant="p" >
                    {id}
                </Typography>
                <Button variant="outlined" color="success" size="small" onClick={handleClose}>
                    <img src={closeIcon} alt="closeIcon" className="closeIconImage"/>
                </Button>
            </Box>

            <Typography variant="h4" className="modalTitle" >
                {title}
            </Typography>

            <ButtonGroup variant="outlined" color="success"  className="chooseButton">
                <Button onClick={handleClickShowPopper}>{type}</Button>
                <Button
                    size="small"
                    aria-controls={openGroupButton ? 'split-button-menu' : undefined}
                    aria-expanded={openGroupButton ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    aria-describedby={popperId}
                    onClick={handleClickShowPopper}
                >
                    <img src={arrowDropDown} alt="arrowDropDown" className="dropDownIconImage"/>
                </Button>  
            </ButtonGroup>  
        
            <Popper
                id='simple-popper'
                anchorEl={anchorEl}
                open={openPopper}
                role={undefined}
                transition
                disablePortal
            >
                <Paper>
                <ClickAwayListener onClickAway={handleCloseButtonGroup}>
                    <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option) => (
                            <MenuItem
                                key={option}
                                onClick={() => chooseTaskType(option)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </MenuList>
                </ClickAwayListener>
                </Paper>
            </Popper>

            <Typography className="openingTaskModalDescription">
                {description}
            </Typography>
        </Box>
        </Modal>
    )
}