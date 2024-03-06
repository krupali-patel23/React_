import React, { useState} from 'react';
import { imageDb } from '../firebase/firebase';
import { uploadBytes, ref } from 'firebase/storage';
import { v4 } from 'uuid';

function Firecomponent() {
    const [img, setImg] = useState(null);
    // const [imgUrl, setImgUrl] = useState([]);
    const handLeClick = () => {
        const imgRef = ref(imageDb, v4());
        uploadBytes(imgRef, img);
    }

    return (
        <div className="App">
            <input type="file" onChange={(e) => setImg(e.target.files[0])} /><br /><br />
            <button onClick={handLeClick}>Upload</button>
        </div>
    );
};

export default Firecomponent;
