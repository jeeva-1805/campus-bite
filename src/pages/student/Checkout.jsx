import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Checkout() {
 const { cartItems, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupTime: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (cartItems.length === 0) {
    return;
  }

  placeOrder(formData);

  navigate("/order-success");
};

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="text-6xl">🛒</div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            Add some food before proceeding to checkout.
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
        <div className="mx-auto max-w-7xl px-6 py-8">

          <Link
            to="/cart"
            className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your details and place your food order.
          </p>

        </div>
      </div>

      {/* Checkout Content */}
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3">

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">

          <h2 className="text-xl font-semibold text-slate-900">
            Pickup Details
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Pickup Time */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Pickup Time
              </label>

              <select
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="">Select pickup time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Additional Notes
              </label>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special request?"
                rows="4"
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
            >
              <CheckCircle size={20} />
              Place Order
            </button>

          </form>
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {item.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    Qty: {item.cartQuantity}
                  </p>
                </div>

                <p className="font-medium">
                  ₹{item.price * item.cartQuantity}
                </p>
              </div>
            ))}

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

        </div>

      </main>
    </div>
  );
}

export default Checkout;