import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios'
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { OrdersShow } from "./OrdersShow";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { MyCart } from "./MyCart";
import { Footer } from "./Footer";
import { Contact } from "./Contact";


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
      {
        path: "/orders/:id",
        element: <OrdersShow />,
        loader: ({params}) => axios.get(`http://localhost:3000/orders/${params.id}.json`).then(response => response.data)
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;