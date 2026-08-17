import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/student/Home";
import Menu from "./pages/student/Menu";
import Cart from "./pages/student/Cart";
import Checkout from "./pages/student/Checkout";
import OrderSuccess from "./pages/student/OrderSuccess";
import Orders from "./pages/student/Orders";
import OrderDetails from "./pages/student/OrderDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<OrderDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;