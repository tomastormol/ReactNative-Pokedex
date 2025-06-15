import { useState, useEffect } from "react";

const generationRanges = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 898],
};

export default function useFilteredPokemons(fullList) {
  const [selectedGenerations, setSelectedGenerations] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedGenerations.length === 0) {
      setFilteredList(fullList);
    } else {
      const ranges = selectedGenerations.map((gen) => generationRanges[gen]);
      const filtered = fullList.filter((pokemon) =>
        ranges.some(([min, max]) => pokemon.id >= min && pokemon.id <= max)
      );
      setFilteredList(filtered);
    }
  }, [selectedGenerations, fullList]);

  const toggleGeneration = (genId) => {
    setSelectedGenerations((prev) =>
      prev.includes(genId)
        ? prev.filter((id) => id !== genId)
        : [...prev, genId]
    );
  };

  return {
    selectedGenerations,
    filteredList,
    toggleGeneration,
    showModal,
    setShowModal,
  };
}
