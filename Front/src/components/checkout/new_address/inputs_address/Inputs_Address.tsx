import Styled from "styled-components";
import Colors from "../../../../globalStyles/Colors";

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
            .inputs-mobile {
                display: flex;
                .input-DDD {
                    border: none;
                    border-radius: 5px;
                    width: 20%;
                    height: 8vh;
                    background-color: ${Colors.grey};
                    margin-right: 0.5rem;
                }
                .input-DDD::placeholder {
                    padding-left: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                }
                .input-number {
                    border: none;
                    border-radius: 5px;
                    width: 80%;
                    height: 8vh;
                    background-color: ${Colors.grey};
                }
                .input-number::placeholder {
                    padding-left: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                }  
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
                        <div className="inputs-mobile">
                            <input className="input-DDD" placeholder="+11"/>
                            <input className="input-number" placeholder="Enter Number"/>
                        </div>
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