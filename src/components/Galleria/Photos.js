//import { useState } from 'react';

const Photos = ({ photos, show }) => {
    console.log(show);
    return (
        <div className="gallery">
            {
                photos && photos.map(photo => <img
                    key={photo}
                    onClick={show}
                    src={photo} />)
            }
        </div>
    );
}

export default Photos;