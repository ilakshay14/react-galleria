import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { FadeIn } from './theme/Animations';
import { FlexColumn, FlexRow } from './theme/defaultStyles';

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

    .cover-photo{
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
                width: 100%;
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
    }

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
            margin-top: 20px;
            flex: 0 0 47%;
            width: 47%;
            height: 250px;
            border-radius: 5px;
            object-fit: cover;
            object-position: center;
            animation: ${FadeIn} ease-in-out forwards 1s;

        }
    }
    
`;


const App = () => {

    const [photos, addPhoto] = useState([]);
    const [cover, setCover] = useState("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
    const [ profile, setProfile ] = useState("https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80");

    useEffect(()=>{
        axios.get('http://192.168.29.173:3000/images').then(response => {
            console.log(response.data);
            addPhoto(response.data)
        })
    },[]);

    const uploadFile = (e) => {
        //e.preventDefault();
        let data = new FormData();
        
        let myImage = e.target.files[0];
        console.log(myImage);
        
        
        let blobURL = URL.createObjectURL(e.target.files[0]);

        data.append("image", myImage);
        
        console.log(data);

        if (e.target.name === "cover") {
            setCover(blobURL);
            return;
        }

        if (e.target.name === "profile") {
            setProfile(blobURL);
            return;
        }

        

        axios.post('http://192.168.29.173:3000/upload',
            data).then(response => {
                if(response.status === 201){
                    let myPhotos = photos;
                    myPhotos.push(blobURL);
                    addPhoto([...myPhotos]);
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <Wrapper>
            <div className="cover-photo">
                <div className="upload-icon">
                
                    <label className="">
                        <input type="file" name="cover" onChange={uploadFile} />
                        <ion-icon name="camera"></ion-icon>
                    </label>

                </div>
                <div className="profile-photo">
                    <img src={profile}/>
                    <label className="">
                        <input type="file" name="profile" onChange={uploadFile} />
                        <ion-icon name="pencil"></ion-icon>
                    </label>
                </div>
                <img src={cover} />
            </div>
            {/* <form encType="multipart/form-data"> */}
            <div className="file-input-wrapper">
                <label className="file-input">
                    <input type="file" onChange={uploadFile} />
                    Choose a file
                </label>
            </div>
            {/* </form> */}
            <div className="gallery">
                {
                    photos.map(photo => <img key={photo} src={photo} />)
                }

            </div>
        </Wrapper>
    );
}

export default App;