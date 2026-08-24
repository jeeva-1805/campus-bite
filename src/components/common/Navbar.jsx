import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/useCart";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          Campus<span className="text-orange-500">Bite</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3 sm:gap-7">

          <Link
            to="/menu"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Menu
          </Link>

          <Link
            to="/orders"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-950 sm:inline-flex"
          >
            My Orders
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-xl bg-slate-100 p-2.5 hover:bg-slate-200 sm:p-3"
          >
            <ShoppingCart size={18} className="sm:h-5 sm:w-5" />

            {/* Cart Count */}
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white sm:text-xs">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;