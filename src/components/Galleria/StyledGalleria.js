import styled from 'styled-components';
import { FadeIn } from '../../theme/Animations';
import { FlexColumn, FlexRow } from '../../theme/defaultStyles';

const StyledGalleria = styled.div`
    .file-input-wrapper{
        /* border: 1px solid black; */
        width: 95%;
        height: 40px;
        margin-top: 70px;

        ${FlexRow}
        justify-content: flex-end;

        .file-input{
            
            display: inline-block;
            width: 30%;
            height: 40px;
            border-radius: 20px;
            background-color: white;
            box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 3px;

            font-size: 120%;
            text-align: center;
            line-height: 35px;
            cursor: pointer;    
            }
    }

    .gallery{
        margin: 20px auto;
        //border: 1px solid black;
        width: 100%;
        height: auto;
        ${FlexRow};
        justify-content: space-evenly;
        align-content: flex-start;
        align-items: flex-start;

        img{
            margin-top: 10px;
            flex: 0 0 47%;
            width: 47%;
            height: 250px;
            border-radius: 5px;
            object-fit: cover;
            object-position: center;
            animation: ${FadeIn} ease-in-out forwards 1s;

        }
    }

    @media only screen and (max-width: 480px){
        .file-input-wrapper{
            .file-input{
                width: 90%;
            }
        }

        .gallery{
            img{
                height: 200px;  
            }
        }
    }

    @media only screen and (min-width: 1200px){
        .gallery{
            img{
                flex: 0 0 30%;
                width: 32%;
            }
        }
    }
`;

export default StyledGalleria;