import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between mx-auto  shadow-lg sticky top-0 bg-white z-50">
      <Link to="/">
        <img className="w-16" src={LOGO_URL} alt="foodapplogo"></img>
      </Link>
      <div>
        <ul className="flex">
          <li className="py-6 px-4 hover:text-orange-600">
            <Link
              to="/help"
              className="flex items-center justify-center gap-2 font-medium text-base"
            >
              <i class="fa-solid fa-circle-info "></i>Help
            </Link>
          </li>
          <li className="py-6 px-4 hover:text-orange-600">
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 font-medium text-base"
            >
              <i className="fa-solid fa-cart-shopping"></i>(
              {cartItems.length})
            </Link>
          </li>
          <li className="py-6 px-4 hover:text-orange-600">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 font-medium text-base"
            >
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
