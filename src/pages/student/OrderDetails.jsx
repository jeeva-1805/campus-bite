import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Package,
} from "lucide-react";

import { useCart } from "../../context/useCart";

function OrderDetails() {
  const { orderId } = useParams();
  const { orders } = useCart();

  const order = orders.find((item) => item.id === orderId);

  // Order not found
  if (!order) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <Package size={40} className="text-orange-500" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Order not found
          </h1>

          <p className="mt-3 text-slate-500">
            We couldn't find the order you're looking for.
          </p>

          <Link
            to="/orders"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Back to My Orders
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">

          <Link
            to="/orders"
            className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to My Orders
          </Link>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Order ID
              </p>

              <h1 className="mt-1 text-2xl font-bold text-slate-900">
                {order.id}
              </h1>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
              <CheckCircle size={17} />
              {order.status}
            </div>

          </div>

        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-10">

        {/* Order Information */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            Order Information
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">

            <div>
              <p className="text-xs text-slate-400">
                Order Date
              </p>

              <p className="mt-1 font-medium text-slate-700">
                {order.createdAt}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Pickup Time
              </p>

              <p className="mt-1 font-medium text-slate-700">
                {order.customer?.pickupTime || "Not specified"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Status
              </p>

              <p className="mt-1 font-semibold text-green-600">
                {order.status}
              </p>
            </div>

          </div>

        </div>

        {/* Customer Details */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            Customer Details
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-xs text-slate-400">
                Name
              </p>

              <p className="mt-1 font-medium text-slate-700">
                {order.customer?.name || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Phone
              </p>

              <p className="mt-1 font-medium text-slate-700">
                {order.customer?.phone || "Not available"}
              </p>
            </div>

          </div>

          {order.customer?.notes && (
            <div className="mt-6">
              <p className="text-xs text-slate-400">
                Additional Notes
              </p>

              <p className="mt-1 text-sm text-slate-700">
                {order.customer.notes}
              </p>
            </div>
          )}

        </div>

        {/* Ordered Items */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex items-center gap-2">
            <Package size={20} className="text-orange-500" />

            <h2 className="text-lg font-semibold text-slate-900">
              Ordered Items
            </h2>
          </div>

          <div className="mt-6 space-y-3">

            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              >

                <div>
                  <p className="font-semibold text-slate-900">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    ₹{item.price} × {item.cartQuantity}
                  </p>
                </div>

                <p className="font-semibold text-slate-900">
                  ₹{item.price * item.cartQuantity}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Total */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Amount
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900">
                ₹{order.total}
              </p>
            </div>

            <Clock
              size={32}
              className="text-slate-300"
            />
          </div>

        </div>

      </main>
    </div>
  );
}

export default OrderDetails;