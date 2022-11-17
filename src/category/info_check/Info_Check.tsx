import Styled from "styled-components";
import Colors from "../../Colors";

const StyledInfoCheck = Styled.div`
fieldset {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        .info-check {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            margin-left: -0.3rem;
            input {
                width: 18px;
                height: 18px;
            }
            label {
                font-family: "Inter";
                font-weight: 500;
                margin-left: 0.3rem;
                color: ${Colors.low_emphasis}
            }
        }
    }    
`;

const InfoCheck = () => {
    return (
        <StyledInfoCheck>
            <fieldset>
                <div className="info-check">
                    <input type="checkbox" id="Blue" name="Blue" />
                    <label htmlFor="Blue">Blue</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="MaroonRed" name="MaroonRed" />
                    <label htmlFor="Maroon Red">Maroon Red</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="CrimsonRed" name="CrimsonRed" />
                    <label htmlFor="CrimsonRed">Crimson Red</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="Seinna Pink" name="SeinnaPink" />
                    <label htmlFor="SeinnaPink">Seinna Pink</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="Teal" name="Teal" />
                    <label htmlFor="Teal">Teal</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="Aquamarine" name="Aquamarine" />
                    <label htmlFor="Aquamarine">Aquamarine</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="OffWhite" name="OffWhite" />
                    <label htmlFor="OffWhite">Off-White</label>
                </div>
                <div className="info-check">
                    <input type="checkbox" id="MuaveOrange" name="MuaveOrange" />
                    <label htmlFor="MuaveOrange">Muave Orange</label>
                </div>
            </fieldset>
        </StyledInfoCheck>
        
    )
}

export default InfoCheck