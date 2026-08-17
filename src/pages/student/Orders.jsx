import { Link } from "react-router-dom";
import { ArrowLeft, Package, Clock, CheckCircle } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Orders() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <Package size={40} className="text-orange-500" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            No orders yet
          </h1>

          <p className="mt-3 text-slate-500">
            Your placed orders will appear here.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800"
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
            to="/"
            className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            View your previous food orders.
          </p>

        </div>
      </div>

      {/* Orders */}
      <main className="mx-auto max-w-5xl px-6 py-10 space-y-6">

        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >

        <div className="mt-6 border-t border-slate-200 pt-5">
        <Link to={`/orders/${order.id}`}  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
         View Order Details
        </Link>
        </div>

            {/* Order Header */}
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Order ID
                </p>

                <h2 className="mt-1 font-bold text-slate-900">
                  {order.id}
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                <CheckCircle size={17} />
                {order.status}
              </div>

            </div>

            {/* Order Details */}
            <div className="mt-5 grid gap-4 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">
                    Ordered At
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    {order.createdAt}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Pickup Time
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  {order.customer?.pickupTime}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Total
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  ₹{order.total}
                </p>
              </div>

            </div>

            {/* Items */}
            <div className="mt-6 border-t border-slate-200 pt-5">

              <h3 className="font-semibold text-slate-900">
                Ordered Items
              </h3>

              <div className="mt-4 space-y-3">

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-slate-900">
                        {item.name}
                      </p>

                      <p className="text-sm text-slate-500">
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

          </div>
        ))}

      </main>
    </div>
  );
}

export default Orders;