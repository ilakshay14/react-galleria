import React from 'react';
import styled from 'styled-components';
import {FlexColumn} from '../../theme/defaultStyles';

const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,1);
    ${FlexColumn};
    display: ${({visible}) => visible? 'initial': 'none'};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    text-align: center;
    line-height: 100vh;

    .close-modal{
        background-color: white;
        width: 30px;
        height: 30px;
        border-radius: 3px;
        ${FlexColumn};

        font-size: 120%;
        position: absolute;
        top: 10px;
        left: 10px;

        cursor: pointer;
    }
    
    img{
        max-width: 90%;
        vertical-align: middle;
        
    }
    
`;

const Modal = ({url, visible, hide}) => {
    return (
        <StyledModal visible={visible} onClick={hide}>
            <div className="close-modal" onClick={hide}>
                <ion-icon name="close-circle"></ion-icon>
            </div>
            <img src={url}/>
            
        </StyledModal>
    );
}


 
export default Modal;