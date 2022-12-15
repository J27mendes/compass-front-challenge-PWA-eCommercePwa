import Styled from "styled-components";

const StyledModalPriceDetails = Styled.div`
  margin-top: 1rem;
  .modal-subtotal {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .modal-tax {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 500;    
  } 
  .modal-total {
    display: flex;
    justify-content: space-between;
    font-weight: 600; 
  }  
`;
const ModalPriceDetails = ({price}:any) => {
    return (
        <StyledModalPriceDetails>
            <div className="modal-subtotal">
                <p>Subtotal:</p>
                <p>{price}</p>
            </div>
            <div className="modal-tax">
                <p>Tax:</p>
                <p>$2.00</p>
            </div>
            <div className="modal-total">
                <p>Total:</p>
                <p>$111.38</p>
            </div>
        </StyledModalPriceDetails>
        
    )
}

export default ModalPriceDetails