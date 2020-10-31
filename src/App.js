import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';


import Header from "./components/Header/Header";

import Galleria from "./components/Galleria/Galleria";

const Wrapper = styled.div`
    width: 70%;
    height: 100vh;
    margin: 0 auto;
    padding: 10px;

    input[type="file"]{
        /* border: 1px solid black; */
            display: none;
        }    

    @media only screen and (max-width: 480px){
        width: 95%;
    }

    
`;


const App = () => {
    return (
        <Wrapper>
            
            <Header/>
            {/* <form encType="multipart/form-data"> */}
            <Galleria/>
        </Wrapper>
    );
}

export default App;