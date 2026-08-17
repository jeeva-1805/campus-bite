import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          Campus<span className="text-orange-500">Bite</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-7">

          <Link
            to="/menu"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Menu
          </Link>

          <Link
            to="/orders"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            My Orders
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-xl bg-slate-100 p-3 hover:bg-slate-200"
          >
            <ShoppingCart size={20} />

            {/* Cart Count */}
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
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