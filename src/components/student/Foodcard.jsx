import { useCart } from "../../context/useCart";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(food);
    alert(`${food.name} added to cart!`);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex h-48 items-center justify-center bg-orange-50 text-7xl">
        {food.image}
      </div>

      <div className="p-4 sm:p-5">

        <div className="flex items-start justify-between gap-3">

          <div>
            <h2 className="text-base font-semibold sm:text-lg">
              {food.name}
            </h2>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              {food.category}
            </p>
          </div>

          <p className="text-base font-bold sm:text-lg">
            ₹{food.price}
          </p>

        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-sm text-slate-500">
            {food.quantity} available
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:w-auto"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default FoodCard;