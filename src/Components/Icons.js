import React from 'react';
import { FaPen, FaTimes, FaRegCircle  } from 'react-icons/fa';

const  Icons = ({itemIcons})=>{
            switch(itemIcons) {
                case "Circle":
                    return <FaRegCircle className="icons"/>;
                case "Cross":
                    return <FaTimes className="icons"/>;
                default:
                    return <FaPen className="icons"/>;
            }
        
}

export default Icons;