import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <div>home</div>
            },
            {
                path : '/products',
                element : <Products></Products>,
                loader : () => fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses')
            },
            {
                path : '/about',
                element : <div>About</div>
                
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/registration',
                element : <Registration></Registration>
            },
            {
                path : '/product-details/:id',
                element : <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute> ,
                loader : ({params})=> fetch(`https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses/${params.id}`)
            }
        ]
    }
])

export default Router;