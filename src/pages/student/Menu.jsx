import { useState } from "react";
import { Search } from "lucide-react";

import foods from "../../data/FoodData";
import FoodCard from "../../components/student/Foodcard";

const categories = [
  "All",
  "Breakfast",
  "Rice",
  "Snacks",
  "Drinks",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = foods.filter((food) => {
    const searchMatch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" ||
      food.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

          <p className="text-sm font-semibold text-orange-500">
            TODAY'S MENU
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            What are you craving?
          </h1>

          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Choose from today's available canteen food.
          </p>

          {/* Search */}
          <div className="mt-7 flex max-w-xl items-center gap-3 rounded-xl border bg-slate-50 px-3 py-3 sm:px-4">

            <Search size={20} className="shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

        {/* Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white sm:px-5 sm:py-2.5"
                  : "rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 sm:px-5 sm:py-2.5"
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* Result count */}
        <p className="mt-8 text-sm text-slate-500">
          {filteredFoods.length} food items found
        </p>

        {/* Food Cards */}
        {filteredFoods.length > 0 ? (

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
              />
            ))}

          </div>

        ) : (

          <div className="mt-16 text-center">

            <div className="text-5xl">
              🍽️
            </div>

            <h2 className="mt-4 text-xl font-semibold">
              No food found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try another category or search.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}

export default Menu;