// import hooks
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import action createors
import { deleteAccount, logout } from "../../../redux-store/userSlice";

// import styles
import style from "./DeleteAccountModal.module.scss";

export default function DeleteAccountModal({ close }) {
    const dispatch = useDispatch();
	const navigate = useNavigate();
    const passInputRef = useRef();
    const [error, setError] = useState("");

    function formSubmitHandler(e) {
        e.preventDefault();
        const pass = passInputRef.current.value;
        setError("");

        if (pass) {
            const disp = dispatch(deleteAccount(pass));

            console.log("disp ::: ", disp);
			disp.then(response => {
				if (response.meta.requestStatus === "fulfilled") {
					// localStorage.setItem("news-app-user", response.payload.profile.token)
					dispatch(logout())
					navigate("/login")
				}
			})


            close();
        } else {
            setError("Please, fill this field.");
        }
    }

    return (
        <div className={style.deleteAccountModalWrapper}>
            <form onSubmit={formSubmitHandler} onReset={close}>
                <h3>Delete your account?</h3>

                <h4>
                    Remember that your data never can be recovered. To apply
                    this operation you must type your password.
                </h4>
                <label>
                    <span>Type here</span>
                    <input type="text" ref={passInputRef} />
                </label>
                <p>{error}</p>
                <div className={style.actions}>
                    <button type="reset">Cancel</button>
                    <button type="submit">Apply</button>
                </div>
            </form>
        </div>
    );
}
