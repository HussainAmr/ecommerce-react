import React from "react";
// import Counter from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";

import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Protected>
				<Home></Home>,
			</Protected>
		),
	},
	{
		path: "/login",
		element: <LoginPage></LoginPage>,
	},
	{
		path: "/signup",
		element: <SignupPage></SignupPage>,
	},
	{
		path: "/cart",
		element: (
			<Protected>
				<CartPage></CartPage>,
			</Protected>
		),
	},
	{
		path: "/checkout",
		element: (
			<Protected>
				<CheckoutPage></CheckoutPage>,
			</Protected>
		),
	},
	{
		path: "/productdetail/:id",
		element: (
			<Protected>
				<ProductDetailPage></ProductDetailPage>,
			</Protected>
		),
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
