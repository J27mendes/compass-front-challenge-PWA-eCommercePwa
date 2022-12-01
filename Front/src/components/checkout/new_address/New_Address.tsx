import { useState } from "react";
import Styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import InputDefault from "./inputs_address/Inputs_Address";

const StyledNewAddress = Styled.div`
width: 85%;
margin-top: 3rem;
margin-left: 2rem;  
    .new-address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .open-address {
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
        }  
    }
`;

export default function NewAddress (props:any){
    const [open, setOpen] = useState(false);
    return (
        <StyledNewAddress>
            <div className="new-address">
                <div onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} className="open-address" >
                    {props.address ? props.address : props.select }
                </div>
                {open ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} /> }
            </div>
            <hr />
            {open && props.address ? <InputDefault /> : null }
        </StyledNewAddress>
    )
}