import React, { useState } from "react";
import axios from 'axios';
import './css/ImageDetect.css';

const ImageDetect = (props) => {
    const [isLoading, setLoading] = useState(true); // Waits for API to load before displaying result on page
    const [apiData, setApiData] = useState(); // Stores response from API
    const [imageStored, setImageStored] = useState(null); // Stores and displays image on page
    const [firstTime, setFirstTime] = useState(true); // Displays message on initial page load until image is uploaded
    const [errorState, setErrorState] = useState();

    // Handles submit event. Posts image data to API for image analysis
    async function handleSubmit(event){
    if (event.target.files.length){
      setFirstTime(false);
      setLoading(true);
      setImageStored(URL.createObjectURL(event.target.files[0]));

    var exImage = new FormData();
    exImage.append('file', event.target.files[0]);
      
    axios.post('http://localhost:5000/upload', exImage)
      .then((res) => {
        let result;
        console.log(res);
        if(res.data.code === "ValidationException"){
          setApiData(`Invalid file format. Upload a .jpg or a .png file`)
          setLoading(false);
        } else {
          if(res.status === 200){
            if (res.data.length === 0) setApiData(null);
            else {
              result = JSON.stringify(res.data[0].Name).replace(/\"/g, "");
              setApiData(`Detected Vehicle Body: ${result}`);
            }
          setLoading(false);
        } else {
          setApiData(`${res.data.code}. Upload a .jpg or a .png file`);
          setLoading(false)
        }
        }
      })
      .catch(function (error) {
        setErrorState(error);
        setLoading(false)
      })
      } else {
        console.log('Cancelled image');
      }
    };

    return (
      <div className="imageDetectContainer">
        <div className="imageContainer">
          <img src={imageStored} alt="Uploaded" />
        </div>
        <p className="resultHeader">{
          firstTime ? 'Upload an image of a vehicle!' : 
          isLoading ? "Loading..." :
          errorState ? "Server is offline, try again later" :
          apiData == null ? `No vehicle detected` : apiData
          }
        </p>
        <form action="/upload" method="post" encType="multipart/form-data">
            <label htmlFor="sampleFile" className="custom-file-upload">Upload Image</label>
            <input type="file" name="sampleFile" id="sampleFile" accept="image/png, image/jpeg, image/jpg" multiple={false} onChange={handleSubmit}/>
        </form>
      </div>
    )
};

export default ImageDetect;
