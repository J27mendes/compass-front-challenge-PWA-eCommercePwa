import Styled from 'styled-components';
import OrderSumary from './order_sumary/Order_Sumary';
import SumaryPrice from './sumary_price/Sumary_Price';

const StyleSumary = Styled.div`
    width: 50%;
    margin-top: 1rem;
`;

export default function Sumary () {
    return (
        <StyleSumary>
            <OrderSumary />
            <SumaryPrice />
        </StyleSumary>        
    )
}