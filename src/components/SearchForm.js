import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { pets, setPets } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchPet = () => {
    setSearchTerm(searchValue.current.value);
    if (searchTerm.length > 1) {
      let filteredData = pets
        .filter((pet) =>
          pet.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((pet) => {
          let { id, name, image, info } = pet;
          return {
            id,
            name,
            image,
            info,
          };
        });
      console.log(filteredData);
      setPets(filteredData);
    } else {
      return pets;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite furry by name</label>
          <input type="text" id="name" ref={searchValue} onChange={searchPet} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
