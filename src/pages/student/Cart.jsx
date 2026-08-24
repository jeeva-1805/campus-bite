import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

import { useCart } from "../../context/useCart";

function Cart() {
const navigate = useNavigate();
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="text-6xl">🛒</div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            Add some delicious food from the menu.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Browse Menu
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">

          <Link
            to="/menu"
            className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Menu
          </Link>

          <h1 className="mt-5 text-2xl font-bold sm:text-3xl">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Review your items before placing the order.
          </p>

        </div>
      </div>

      {/* Cart Content */}
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-10 lg:grid-cols-3 lg:gap-8">

        {/* Items */}
        <div className="space-y-4 lg:col-span-2">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
            >

              {/* Food Image */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-3xl sm:h-24 sm:w-24 sm:text-4xl">
                {item.image}
              </div>

              {/* Details */}
              <div className="flex-1">

                <h2 className="font-semibold text-slate-900">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {item.category}
                </p>

                <p className="mt-2 font-semibold">
                  ₹{item.price}
                </p>

              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-normal">
                {/* Quantity */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="w-5 text-center font-semibold">
                    {item.cartQuantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100"
                  >
                    <Plus size={16} />
                  </button>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold">
            Order Summary
          </h2>

          <div className="mt-6 flex justify-between text-sm">
            <span className="text-slate-500">
              Subtotal
            </span>

            <span className="font-medium">
              ₹{cartTotal}
            </span>
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <span className="text-slate-500">
              Service Fee
            </span>

            <span className="font-medium">
              ₹0
            </span>
          </div>

          <div className="my-6 border-t border-slate-200" />

          <div className="flex justify-between">
            <span className="font-semibold">
              Total
            </span>

            <span className="text-xl font-bold">
              ₹{cartTotal}
            </span>
          </div>

         <button type="button" onClick={() => navigate("/checkout")}  className="mt-6 w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
         Proceed to Checkout
        </button>

        </div>

      </main>

    </div>
  );
}

export default Cart;