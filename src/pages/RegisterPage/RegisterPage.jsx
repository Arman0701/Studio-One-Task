// import hooks
import { useRef } from "react";
import { useDispatch } from "react-redux";

// import helpers
import validRegisterForm from "../../helpers/validRegisterForm";
import { register } from "../../redux-store/userSlice";

// import styles
import style from "./RegisterPage.module.scss";

export default function RegisterPage() {
	const dispatch = useDispatch()
	
	const nameRef = useRef()
	const usernameRef = useRef()
	const passwordRef = useRef()

	const errorMessageRef = useRef()

	function formSubmitHandler(e) {
		e.preventDefault();
		const userData = {
			name: nameRef.current.value,
			username: usernameRef.current.value,
			password: passwordRef.current.value
		};

		if (validRegisterForm(userData)) {
			dispatch(register(userData))
		} else {
			errorMessageRef.current.textContent = "Empty or invalid values."
		}
		
	}
	
    return (
        <div className={style.registerPageWrapper}>
            <form onSubmit={formSubmitHandler}>
                <h3>Create your account</h3>
                <input type="text" placeholder="Your name" ref={nameRef} />
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
