// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import helpers
import validLoginForm from "../../helpers/validLoginForm";

// import action creators
import { getUserProfile, login } from "../../redux-store/userSlice";

// import styles
import style from "./LoginPage.module.scss";

export default function LoginPage() {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	
	const usernameRef = useRef()
	const passwordRef = useRef()
	const errorMessageRef = useRef()
	
    function formSubmitHandler(e) {
        e.preventDefault();
		const userData = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};

		if (validLoginForm(userData)) {
			const disp = dispatch(getUserProfile(userData))
			disp.then(({payload}) => {
				if (payload.length === 1) {
					navigate("/profile")
				}
			})
		} else {
			errorMessageRef.current.textContent = "The username or password you entered is incorrect."
		}
		
		
		// find the data of user with corresponding 
		// username and pass and store its token 
		// to local storage for further usage

		// TODO
		
    }

    return (
        <div className={style.loginPageWrapper}>
            <form onSubmit={formSubmitHandler}>
                <h3>Login to your account</h3>
				<input type="text" placeholder="Username" ref={usernameRef} />
				<input type="password" placeholder="Password" ref={passwordRef} />
				<button type="submit">Login</button>

				<p ref={errorMessageRef}></p>
            </form>
			<p>No account yet?</p>
			<a href="/register"><span>Click here for simple registration.</span></a>
        </div>
    );
}
