'use client'

import { useEffect, useState } from "react";
import MyListbox from "@/components/Listbox";
import Range from "@/components/Range";
import Pagination from "@/components/Pagination";
import Card from '@/components/Card';
import { DIFFICULTY } from '@/shared/consts/difficulty.consts';
import MyPopover from '@/components/Mypopover';
import Grid from '@/components/Grid';

export default function Recipes() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [range, setRange] = useState(0);
  const [dificulty, setDificulty] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("api/categories")
      .then((res) => res.json())
      .then((resultsFromApi) => {
        setCategories(resultsFromApi);
      });
  }, []);

  useEffect(() => {
    fetch("api/recipes/filter", {
      method: "POST",
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((resultsFromApi) => {
        setRecipes(resultsFromApi);
      });
  }, []);

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleDificulty = (dificulty) => {
    setDificulty(dificulty);
  };

  const handleRange = (range) => {
    setRange(range);
  };

  const handleRecipes = () => {
    const filters = {
      and: [
        {
          property: "Tags",
          status: {
            equals: "Done",
          },
        },
      ],
    };

    if (category.length > 0) {
      filters.and.push({
        property: "Select",
        multi_select: {
          contains: category,
        },
      });
    }

    if (dificulty.length > 0) {
      filters.and.push({
        property: "Dificultad",
        select: {
          equals: dificulty,
        },
      });
    }

    if (range > 0) {
      filters.and.push({
        property: "Tiempo_total",
        number: {
          less_than_or_equal_to: Number(range),
        },
      });
    }

    fetch("/api/recipes/filter", {
      method: "POST",
      body: JSON.stringify(filters),
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((resultFromApi) => {
        setRecipes(resultFromApi);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Recetas</h1>
      <MyPopover title={"Filtros"}>
        <div>
          <div className="mb-4">
            <span>
              <b>Tiempo total </b>
            </span>
            <Range getRange={handleRange} />
          </div>
          <div className="mb-4">
            <span>
              <b>Categoria</b>
            </span>
            <MyListbox list={categories} getSelected={handleCategory} />
          </div>
          <div className="mb-4">
            <span>
              <b>Dificultad</b>
            </span>
            <MyListbox list={DIFFICULTY} getSelected={handleDificulty} />
          </div>
          <button onClick={handleRecipes}>Aplicar</button>
        </div>
      </MyPopover>

      <Grid recipes={recipes} />
      {recipes.next_cursor ? <Pagination /> : null}
    </>
  );
}