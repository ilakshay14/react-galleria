import { useState, useEffect } from 'react';
import StyledGalleria from './StyledGalleria';
import StyledModal from '../../components/Modal/Modal';
import { HTTP_POST, HTTP_GET } from '../../utils/axios.config';

const Galleria = () => {

    const [photos, addPhoto] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ viewImage, setViewImage ] = useState("");

    useEffect(()=>{
        HTTP_GET('images').then(response => {
            addPhoto(response)
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

    const showImage = (e) => {
        console.log(e);
        setViewImage(e.target.src);
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    return (
        <StyledGalleria>
            <StyledModal visible={showModal} url={viewImage} hide={hideModal}/>
            <div className="file-input-wrapper">
                <label className="file-input">
                    <input type="file" onChange={uploadFile} />
                    Choose a file
                </label>
            </div>
            {/* </form> */}
            <div className="gallery">
                {
                    photos.map(photo => <img 
                        key={photo} 
                        onClick={showImage} 
                        src={photo} />)
                }

            </div>
        </StyledGalleria>
    );
}
 
export default Galleria;