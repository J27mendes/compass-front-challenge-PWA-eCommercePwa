import Styled from "styled-components";
import Colors from "../Colors";
import { imgs } from "../components/Images";

const StyledError = Styled.section`
    width: 100%;    
        .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        .error-img {
            margin-top: 5rem;
            width: 300px;
            border-radius: 15px;
        }
        .error-text{
            display: flex;
            align-items: flex-end;
            margin: 2rem;
            font-weight: 700;
            .error-message {
                font-size: 20px;
                color: ${Colors.red};
            }
            .error-title {
                font-size: 50px;
                color: ${Colors.red};
                margin: 0 1rem;
            }
            .error-subtitle {
                color: ${Colors.red};
            }
        }
        .error-description {
            font-size: 20px;
            font-weight: 700;
        }
    }
}  
`

const Error = () => {
    return (
        <StyledError>   
            <section className="error-container">
                <img className="error-img" src={imgs.Error404} alt="imagem de erro" />
                <div className="error-text">
                    <p className="error-message">Ops...</p>
                    <h1 className="error-title">404</h1>
                    <h2 className="error-subtitle">File not found</h2>
                </div>
                <p className="error-description">The file you are looking for may be damaged, deleted, moved, or a bug may have caused the error.</p>
            </section>
                    
        </StyledError>           
    )
}

export default Error