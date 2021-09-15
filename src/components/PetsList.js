import React, { useEffect } from "react";
import Loading from "./Loading";
import Pet from "./Pet";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../action";

const PetsList = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPets());
  }, []);

  if (pets.loading) {
    return <Loading />;
  }
  if (pets.items.length < 1) {
    return <h2 className="section-title">No Pets Found</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Fluffy Furries</h2>
      <div className="pets-center">
        {pets.items.map((item) => {
          return <Pet key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default PetsList;
