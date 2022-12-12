import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";
import InputsMobile from "../inputs_mobile/Inputs_Mobile";

const StyledInputDefault = Styled.div`
.form-input {
    display: flex;
    margin-top: 2rem;
    .form-container {
        width: 50%;
        .form-name {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
            input {
                border: none;
                border-radius: 5px;
                width: 90%;
                height: 8vh;
                background-color: ${Colors.grey};
            }
            input::placeholder {
                padding-left: 1rem;
                font-size: 1rem;
                font-weight: 600;
            } 
        }
        .form-address {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
            input {
                border: none;
                border-radius: 5px;
                width: 90%;
                height: 8vh;
                background-color: ${Colors.grey};
            }
            input::placeholder {
                padding-left: 1rem;
                font-size: 1rem;
                font-weight: 600;
            } 
        }
        .form-city {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
            input {
                border: none;
                border-radius: 5px;
                width: 90%;
                height: 8vh;
                background-color: ${Colors.grey};
            }
            input::placeholder {
                padding-left: 1rem;
                font-size: 1rem;
                font-weight: 600;
            } 
        }
    }
    .form-container-right {
        width: 65%;
        .form-mobile-number {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
        }
        .form-state {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
            input {
                border: none;
                border-radius: 5px;
                height: 8vh;
                background-color: ${Colors.grey};
            }
            input::placeholder {
                padding-left: 1rem;
                font-size: 1rem;
                font-weight: 600;
            } 
        }
        .form-pinCode {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }
            input {
                border: none;
                border-radius: 5px;
                height: 8vh;
                background-color: ${Colors.grey};
            }
            input::placeholder {
                padding-left: 1rem;
                font-size: 1rem;
                font-weight: 600;
            } 
        }       
    }
}    
`; 

export default function InputDefault(){
    return (
        <StyledInputDefault>
            <form className="form-input">
                <div className="form-container">
                    <div className="form-name">
                        <label>Full Name</label>
                        <input placeholder="Enter Name"/>
                    </div>
                    <div className="form-address">
                        <label>Street Address</label>
                        <input placeholder="Enter Address"/>
                    </div>
                    <div className="form-city">
                        <label>City</label>
                        <input placeholder="Enter City"/>
                    </div>
                </div>
                <div className="form-container-right">
                    <div className="form-mobile-number">
                        <label>Mobile Number</label>
                        <InputsMobile />
                    </div>
                    <div className="form-state">
                        <label>State</label>
                        <input placeholder="Enter State"/>                        
                    </div>
                    <div className="form-pinCode">
                        <label>Pin Code</label>
                        <input placeholder="Enter Pin Code"/>
                    </div>
                </div>                    
            </form> 
        </StyledInputDefault>        
    )
}