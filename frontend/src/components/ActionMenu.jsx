// ActionMenu.jsx

import React, { useCallback } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import '../styles/ActionMenu.css'
import { DeleteIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical, BsFillEyeFill } from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserUpdateModal from './UserUpdateModal';
import UseToast from '../customHook/UseToast';


const ActionMenu = ({ id, getData, data }) => {
    const navigate = useNavigate();
    const toastMsg = UseToast();

    const handleDelete = useCallback(() => {
        axios.delete(`https://upforce-backend.onrender.com/api/user/${id}`)
            .then((res) => {
                toastMsg({
                    title: `User deleted successfully`,
                    status: "success"
                });
                getData();
            })
            .catch((error) => {
                toastMsg({
                    title: `${error.message}`,
                    status: "error"
                });
            });
    }, [id]);

    const handleView = () => {
        navigate(`/user/${id}`);
    };

    return (
        <div className="action-menu-container">
            <Menu>
                <MenuButton as={Button}>
                    {<BsThreeDotsVertical />}
                </MenuButton>
                <MenuList className="action-menu-list">
                    <MenuItem onClick={handleView}>{<BsFillEyeFill className='view-icon' />} {" "}View</MenuItem>
                    <MenuItem>{<UserUpdateModal id={id} getData={getData} data={data} />}</MenuItem>
                    <MenuItem onClick={handleDelete}>{<DeleteIcon id='delete-icon'/>} {" "}Delete</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default ActionMenu;
