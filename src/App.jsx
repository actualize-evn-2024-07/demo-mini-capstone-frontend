import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios'
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { MyCart } from "./MyCart";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        loader: () => axios.get("http://localhost:3000/products.json").then(response => response.data)
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/my_cart",
        element: <MyCart />,
        loader: () => axios.get("http://localhost:3000/carted_products.json").then(response => response.data)
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;