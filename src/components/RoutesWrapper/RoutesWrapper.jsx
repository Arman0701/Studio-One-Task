// import components | hooks
import { Route, Routes, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

// import pages
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NewsPage from "../../pages/NewsPage";
import ProfilePage from "../../pages/ProfilePage";

// import styles
import style from "./RoutesWrapper.module.scss";
import PrivateRoute from "../../hocs/PrivateRoute";

export default function RoutesWrapper() {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0,  x: -100, delay: 1000 },
        enter: { opacity: 1, x: 0,  delay: 1000 },
        leave: { opacity: 0, x: -100,  delay: 1000 },
    });

    return transitions((props, item) => (
        <animated.div
            className={style.routesWrapper}
            style={{
				...props,
                position: "absolute",
                width: "100%",
            }}
        >
            <Routes location={item}>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </animated.div>
    ));
}
