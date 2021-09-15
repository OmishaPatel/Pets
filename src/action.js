import Axios from "axios";
import { v1 as uuidv1 } from "uuid";
export const fetchPets = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_PETS_REQUEST" });
  try {
    const response = await Axios.get(
      "http://eulerity-hackathon.appspot.com/pets"
    );
    const petsData = response.data;
    const newPets = petsData.map((pet) => {
      const { title, description, url } = pet;
      return {
        id: uuidv1(),
        image: url,
        name: title,
        info: description,
      };
    });
    dispatch({ type: "FETCH_PETS_SUCCESS", payload: newPets });
  } catch (error) {
    dispatch({ type: "FETCH_PETS_FAILURE", error });
  }
};
export const filteredPet = (data) => {
  return {
    type: "FILTER_PETS",
    payload: data,
  };
};
