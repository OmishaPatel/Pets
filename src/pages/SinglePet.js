import React from "react";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/styledcomponents/Button.style";
const SinglePet = () => {
  const { id } = useParams();
  const { pets } = useGlobalContext();

  const getImage = async (image) => {
    try {
      await axios({
        url: `${image}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png");
        link.click();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section petinfo-section">
      {pets
        .filter((item) => item.id === id)
        .map((item) => {
          const { name, info, image, id } = item;
          return (
            <div className="petinfo" key={id}>
              <img src={image} alt={name} />
              <div className="pet-info">
                <h1>
                  <span className="pet-data">Hi I am:</span>
                  {name}
                </h1>
                <h2>
                  <span className="pet-data">Some Cool Facts About Me:</span>
                  {info}
                </h2>
                <Button
                  backgroundColor="#e33682"
                  onClick={() => getImage(image)}
                >
                  Click here to download my cute image
                </Button>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default SinglePet;
