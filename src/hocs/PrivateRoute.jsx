// import components
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
	const isAuthenticated = localStorage.getItem("news-app-user");
    return isAuthenticated ? children : <Navigate to="/login" />;
}