import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const DownloadImage = () => {
  const pets = useSelector((state) => state.items);
  // options hold all the urls selected by user for images
  const [options, setOptions] = useState([]);
  const handleChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setOptions(value);
  };
  const handleSubmit = async () => {
    console.log(options);
    let imageArray = options.map((url) => {
      return axios.get(url);
    });
    try {
      await Promise.all(imageArray).then((response) => {
        const path = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = path;
        link.setAttribute("download", "image.png");
        link.click();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Download Your Favorite Furry Image:
        <select onChange={handleChange} multiple={true} value={options}>
          {pets.map((pet) => {
            // image variable holds the url
            const { name, image, id } = pet;
            return (
              <option value={image} key={id}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
      <input value="Download" type="submit"></input>
    </form>
  );
};

export default DownloadImage;
