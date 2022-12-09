import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoader from "./components/PageLoader/PageLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Outlet />
			<ToastContainer autoClose={3000} />
		</Suspense>
	);
};

export default App;
