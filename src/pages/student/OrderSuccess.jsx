import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShoppingBag,
  Home,
  Receipt,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

function OrderSuccess() {
  const { orders } = useCart();

  const latestOrder = orders[0];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle
            size={42}
            className="text-green-600"
          />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-slate-500">
          Your food order has been successfully placed.
        </p>

        {/* Order Details */}
        {latestOrder && (
          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-left">

            {/* Order ID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Receipt size={20} className="text-orange-500" />

                <div>
                  <p className="text-xs text-slate-400">
                    Order ID
                  </p>

                  <p className="font-semibold text-slate-900">
                    {latestOrder.id}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                Confirmed
              </span>
            </div>

            {/* Pickup Time */}
            <div className="mt-5 border-t border-slate-200 pt-4">
              <p className="text-xs text-slate-400">
                Pickup Time
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {latestOrder.customer?.pickupTime || "Not specified"}
              </p>
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="font-medium text-slate-600">
                Total Amount
              </span>

              <span className="text-xl font-bold text-slate-900">
                ₹{latestOrder.total}
              </span>
            </div>

          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            to="/orders"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            <Receipt size={19} />
            My Orders
          </Link>

          <Link
            to="/menu"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            <ShoppingBag size={19} />
            Order More
          </Link>

        </div>

        {/* Home */}
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <Home size={16} />
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;