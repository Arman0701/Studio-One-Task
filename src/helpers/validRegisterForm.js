export default function validRegisterForm(userData) {
	// getting all fields form userData object
	const { name, username, password } = userData;

	const validName = name.length > 3;
	const validPass = password.length > 6;
	const validUsername = username.length <= 18 && username.length > 0 

	return validName && validPass && validUsername;
}