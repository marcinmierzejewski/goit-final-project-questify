import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";
import "./index.scss";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<Dashboard />} />
							<Route path="landing" element={<LandingPage />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
