export default function validLoginForm(userData) {
	// getting all fields form userData object
	const { username, password } = userData;

	const validUsername = username.length <= 18 && username.length > 0 
	const validPass = password.length > 6;

	return validPass && validUsername;
	
}