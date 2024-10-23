"use client";

import axios from "axios";
import { useState } from "react";

interface FoodCategory {
  id: string;
  foodName: string;
  images: string;
  price: string;
  description: string;
}

export const Test = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);

  const foodHandler = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `http://localhost:8000/food`
      );
      console.log(response);

      setFoodCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={foodHandler}>Hoolnuudaa avah</button>

      <ul>
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <li key={category.id} style={{ marginBottom: "20px" }}>
              <h3>{category.foodName}</h3>
              <img
                src={category.images}
                alt={category.foodName}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{category.description}</p>
              <p>{category.price}</p>
            </li>
          ))
        ) : (
          <p>No food categories available.</p>
        )}
      </ul>
    </div>
  );
};