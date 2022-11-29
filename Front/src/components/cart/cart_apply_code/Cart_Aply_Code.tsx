import { useState } from "react";
import Styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Colors from "../../../globalStyles/Colors";

const StyledCartApplyCode = Styled.div`
width: 85%;
margin-top: 3rem;
margin-left: 2rem;  
    .coupon-code {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .open-apply {
          font-weight: 600;
          cursor: pointer;
        }
        
    }
    .apply-coupon {
        display: flex;
        width: 50%;
        justify-content: space-between;
        align-items: center;
        background-color: ${Colors.grey};
        border-radius: 5px;       
        margin-top: 2rem;
        height: 8vh;
        .apply {
            margin-left: 1rem;
        }
        .check {
            margin-right: 1rem;
            font-size: 0.9rem;
            color: ${Colors.primary};
            font-weight: 600;
        }
    }
`;

export default function CartApplyCode() {
  const [open, setOpen] = useState(false);
  return (
    <StyledCartApplyCode>
      <div className="coupon-code">
        <div onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} className="open-apply">
          Apply Coupon Code
        </div>
        {open ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} /> }
      </div>
      <hr />
      {open ? 
      <div className="apply-coupon">
        <p className="apply">Apply Coupon Code</p>
        <p className="check">CHECK</p> 
      </div>
      : null }
    </StyledCartApplyCode>
  );
}
