import React from "react";
import Loading from "./Loading";
import Pet from "./Pet";
import { useGlobalContext } from "../context";

const PetsList = () => {
  const { pets, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (pets.length < 1) {
    return <h2 className="section-title">No Pets Found</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Fluffy Furries</h2>
      <div className="pets-center">
        {pets.map((item) => {
          return <Pet key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default PetsList;
