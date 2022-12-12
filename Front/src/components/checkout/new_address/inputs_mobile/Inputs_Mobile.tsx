import React from 'react';
import InputMask from 'react-input-mask';
import Styled from 'styled-components';
import Colors from '../../../../globalStyles/Colors';

const StyledInputsMobile = Styled.div` 
    display: flex;
    .input-DDD {
        border: none;
        border-radius: 5px;
        width: 20%;
        height: 8vh;
        background-color: ${Colors.grey};
        margin-right: 0.5rem;
        font-size: 1rem;
        padding-left: 1rem;
        font-weight: 600;
        color: ${Colors.low_emphasis};
    }
    .input-DDD::placeholder {
        font-size: 1rem;
        font-weight: 600;
    }
    .input-number {
        border: none;
        border-radius: 5px;
        width: 80%;
        height: 8vh;
        background-color: ${Colors.grey};
        padding-left: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: ${Colors.low_emphasis};
    }
    .input-number::placeholder {                    
        font-size: 1rem;
        font-weight: 600;
    }      
`;

export default function InputsMobile(){
    return(
        <StyledInputsMobile>
            <InputMask className="input-DDD" placeholder="+11" mask="+99"/>
            <InputMask className="input-number" placeholder="Enter Number" mask="99999-9999"/>
        </StyledInputsMobile>
    )
}