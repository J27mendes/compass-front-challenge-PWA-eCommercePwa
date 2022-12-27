import Styled from 'styled-components';
import { perfis } from '../../../globalStyles/Images'; 
import { MdKeyboardArrowRight } from "react-icons/md";
import Colors from '../../../globalStyles/Colors';

const StyledAvaatProfile = Styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;  
    .perfis {
        border-radius: 50%;
        width: 100px;
        height: 100px
    }
    .perfis-nome {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${Colors.text_grey}
    }
    .perfis-email {
        font-size: 1rem;
        margin: 0.5rem 0;
        font-weight: 500;
        color: ${Colors.low_emphasis};
    }
    .perfis-phone{
        font-size: 1rem;
        font-weight: 500;
        color: ${Colors.low_emphasis};
    }

`;

const AvatarProfile = () => {
    return (
        <StyledAvaatProfile>            
            <img className='perfis' src={perfis.Taina} alt="" />
            <div>
                <p className='perfis-nome'>Tina Vargayee</p>
                <p className='perfis-email'>tivavar@vinho.com</p>
                <p className='perfis-phone'>+85-(81)95475-8649</p>
            </div>
            <MdKeyboardArrowRight size={30} />
        </StyledAvaatProfile>
    
    )
}
export default AvatarProfile