import Styled from 'styled-components';

const SytledFooterMore = Styled.div`
display: none;
@media(max-width: 800px){
    display: flex;
    border: solid red 1px;
}
`;
const FooterMore = () => {
    return (
        <SytledFooterMore>
            <p>More about CORA'L</p>
            <img src="" alt="seta para cima"/>
        </SytledFooterMore>        
    )
}

export default FooterMore