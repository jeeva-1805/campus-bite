import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Clock3,
  ShoppingBag,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            <Clock3 size={16} />
            Skip the canteen queue
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Your campus food,
            <br />
            <span className="text-orange-500">
              ready when you are.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Pre-order your favourite canteen food, check availability,
            and track your order without waiting in line.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

            <Search
              className="ml-3 text-slate-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search for food..."
              className="flex-1 bg-transparent px-2 py-3 outline-none"
            />

            <Link
              to="/menu"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Search
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <ShoppingBag
            className="mb-4 text-orange-500"
            size={28}
          />

          <h3 className="text-lg font-semibold">
            Pre-order easily
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Order your food before reaching the canteen.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <Clock3
            className="mb-4 text-orange-500"
            size={28}
          />

          <h3 className="text-lg font-semibold">
            Save your time
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Avoid long queues during college breaks.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <ArrowRight
            className="mb-4 text-orange-500"
            size={28}
          />

          <h3 className="text-lg font-semibold">
            Track your order
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Know whether your order is accepted,
            preparing or ready.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;