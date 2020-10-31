const Photos = ({ photos, show }) => {
    //console.log(show);
    return (
        <div className="gallery">
            {
                photos && photos.map(photo => <img
                    key={photo._id}
                    onClick={show}
                    src={photo.url} />)
            }
        </div>
    );
}

export default Photos;