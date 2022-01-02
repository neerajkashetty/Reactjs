import React from "react";
import './Expenses.css'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import InstagramIcon from '@material-ui/icons/Instagram';
import { LinkedIn , Mail, Person} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const ExpneseItem = (props) =>{
    return(
        <div className="header">
            <h1 className="name">Neeraj Kashetty.</h1>
            <IconButton  > 
            <InstagramIcon className="headericons" fontSize="large" />
            </IconButton>

            <IconButton >
                <LinkedIn fontSize="large" className="headericons"/>
            </IconButton>

            {/* <IconButton > */}<div>
                <Mail fontSize="large" className="headericons"></Mail>
                <h1 className="charr">neeraj.kashetty29@gmail.com</h1>
            {/* </IconButton> */}
            </div>
           
        </div>
        

    );
}

export default ExpneseItem;