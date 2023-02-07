// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import helpers
import validRegisterForm from "../../helpers/validRegisterForm";

// import action creators
import { registerUser } from "../../redux-store/userSlice";

// import styles
import style from "./RegisterPage.module.scss";

export default function RegisterPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const nameRef = useRef()
	const usernameRef = useRef()
	const passwordRef = useRef()

	const errorMessageRef = useRef()

	async function formSubmitHandler(e) {
		e.preventDefault();
		// clean all errors
		errorMessageRef.current.textContent = ""
		
		const userData = {
			name: nameRef.current.value,
			username: usernameRef.current.value,
			password: passwordRef.current.value
		};
		const valid = await validRegisterForm(userData)

		if (valid) { 
			const disp = dispatch(registerUser(userData))

			disp.then(response => {
				
				if (response.meta.requestStatus === "fulfilled") {
					localStorage.setItem("news-app-user", response.payload.profile.token)
					navigate("/profile")
				}
			})
		} else {
			errorMessageRef.current.textContent = "Invalid values or not unique username."
		}
		
	}
	
    return (
        <div className={style.registerPageWrapper}>
            <form onSubmit={formSubmitHandler}>
                <h3>Create your account</h3>
                <input type="text" placeholder="Your name" ref={nameRef} autoFocus />
                <input type="text" placeholder="Username" ref={usernameRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button type="submit">Create a new account</button>

				<p ref={errorMessageRef}></p>
            </form>
            <p>Already have an account?</p>
            <a href="/login">
                <span>Click here to login.</span>
            </a>
        </div>
    );
}
