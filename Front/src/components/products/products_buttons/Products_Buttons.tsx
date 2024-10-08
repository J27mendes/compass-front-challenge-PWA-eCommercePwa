import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import Styled from "styled-components";
import Colors from "../../../globalStyles/Colors";
import { icons } from "../../../globalStyles/Images";
import ModalContainer from "./modal_container/Modal_Container";
import ModalReturn from "./modal_return/Modal_Return";
import ModalPriceDetails from "./modal_price_details/Modal_Price_Details";
import ModalCheck from "./modal_check/Modal_Check";
import ModalPlaceButton from "./modal_place_button/Modal_Place_Button";
import ModalContinue from "./modal_continue/Modal_Continue";
import { allProducts } from '../../../mock/index';
import { useParams } from 'react-router-dom';
import ProductWishlist from "../ProductsWishlist/ProductsWishlisr";


ReactModal.setAppElement("#root");

const StyledProductsButtons = Styled.div`
    display: flex;
    margin-top: 2rem;
    .button-bag {
        display: flex;
        justify-content: center;
        background-color: ${Colors.primary};
        color: ${Colors.grey};
        border: solid 1px ${Colors.primary};
        border-radius: 5px;  
        width: 320px; 
        height: 8vh;
        font-weight: 600;
        padding-top: 1rem;
        padding-right: 3rem;        
        margin-right: 2rem;
        cursor: pointer;
        img {
        width: 25px;
        height: 25px;
        margin-top: -0.5rem;
        }
    }
`;

const StyledModal = Styled.div`
width: 360px;
    hr {
        margin-top: 1rem;
    } 
`;

const ProductsButtons = () => {
  const { id } = useParams();
  const [cardProduct, setProduct] = useState<any>({})
  useEffect(() => {
      const [newProducts] = allProducts.filter((product) => product.id === Number(id))
      setProduct(newProducts)
  },[id]) 


  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const custom = {
    content: {
      top: "13%",
      left: "auto",
      right: "1%",
      bottom: "auto",
    },
  };
  return ( 
    <>
      <StyledProductsButtons>
        <button onClick={handleOpenModal} className="button-bag">
          <img src={icons.Bag_white} alt="icone de sacola" />
          Add to bag
        </button>
        <ProductWishlist text={'Add to Wishlist'} />
      </StyledProductsButtons>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={custom}
      >
        <StyledModal>
          <ModalReturn />
          <ModalContainer image={cardProduct.img} info={cardProduct.arrivalsInfo} name={cardProduct.arrivalsName} price={cardProduct.arrivalsPrice}/>
          <hr /> 
          <ModalPriceDetails price={cardProduct.arrivalsPrice}/>
          <ModalCheck /> 
          <ModalPlaceButton />
          <ModalContinue />     
        </StyledModal>        
      </ReactModal>
    </>
  );
};
export default ProductsButtons;
