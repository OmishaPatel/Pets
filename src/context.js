import React, { useState, useContext, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

import axios from "axios";
const url = "http://eulerity-hackathon.appspot.com/pets";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const petsData = response.data;

      if (petsData) {
        const newPets = petsData.map((pet) => {
          const { title, description, url } = pet;
          return {
            id: uuidv1(),
            image: url,
            name: title,
            info: description,
          };
        });

        setPets(newPets);
      } else {
        setPets([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <AppContext.Provider value={{ pets, loading, setPets, fetchPets }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
