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
    //background-color: #f0f2f5;
    //border: 1px solid black !important;

    input[type="file"]{
        /* border: 1px solid black; */
            display: none;
        }    

    @media only screen and (max-width: 480px){
        width: 95%;

        .cover-photo{
            height: 250px;

            img{
                border-radius: 10px;
            }

            .profile-photo{
                width: 150px;
                height: 150px;

                left: 10px;

                label{
                    left: 10px;
                    bottom: 0;
                }
            }
        }

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