import { useState } from 'react';
import StyledHeader from './StyledHeader';
import { DEFAULT_PROFILE, DEFAULT_COVER } from '../../utils/default.configs';
//import { HTTP_POST, HTTP_GET } from '../../utils/axios.config';

const Header = () => {
    const [cover, setCover] = useState(DEFAULT_COVER);
    const [ profile, setProfile ] = useState(DEFAULT_PROFILE);

    const uploadFile = (e) => {
        //let myImage = e.target.files[0];
        let blobURL = URL.createObjectURL(e.target.files[0]);

        if (e.target.name === "cover") {
            setCover(blobURL);
            return;
        }

        if (e.target.name === "profile") {
            setProfile(blobURL);
            return;
        }
    }

    return (
        <StyledHeader>
            <div className="upload-icon">

                <label className="">
                    <input type="file" name="cover" onChange={uploadFile} />
                    <ion-icon name="camera"></ion-icon>
                </label>

            </div>
            <div className="profile-photo">
                <img src={profile} />
                <label className="">
                    <input type="file" name="profile" accept="image/*" capture onChange={uploadFile} />
                    <ion-icon name="pencil"></ion-icon>
                </label>
            </div>
            <img src={cover} />
        </StyledHeader>
    );
}

export default Header;