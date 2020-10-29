import styled from 'styled-components';
import { FlexColumn } from '../../theme/defaultStyles';

const StyledHeader = styled.div`
        width: 100%;
        height: 300px;
        position: relative;

        .upload-icon{
            width: 40px;
            height: 40px;
            background-color: #f0f2f5;
            border: 3px solid black;
            border-radius: 50%;
            position: absolute;
            bottom: -20px;
            right: 10px;
            font-size: 150%;
            text-align: center;
            cursor: pointer;
            ${FlexColumn};

            transition: all 0.1s linear;

            :hover{
                box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
                transform: scale(1.2);
            }

            label{
                line-height: 100%;
                cursor: pointer;
            }
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .profile-photo{
            width: 200px;
            height: 200px;

            position: absolute;
            bottom: -50px;
            left: 20px;
            border-radius: 50%;
            border: 3px solid black;

            img{
                /* width: 100%; */
                height: 100%;
                border-radius: 50%;
                
                object-fit: cover;
                //object-position: top;
            }

            label{
                border: 1px solid black;
                line-height: 100%;
                cursor: pointer;
                width: 30px;
                height: 30px;
                background-color: #f0f2f5;
                border: 3px solid black;
                border-radius: 50%;
                position: absolute;
                bottom: 5px;
                left: 20px;
                font-size: 130%;
                text-align: center;
                ${FlexColumn};
            }

        }
`;

export default StyledHeader;