import checkUniqueUsername from "./checkUniqueUsername";

export default async function validRegisterForm(userData) {
	// getting all fields form userData object
	const { name, username, password } = userData;
	let isUnique;
	
	await checkUniqueUsername(username).then(res => {
		isUnique = res
	})

	const validName = name.length > 3;
	const validPass = password.length > 6;
	const validUsername = username.length <= 18 && username.length > 0 

	return isUnique && validName && validPass && validUsername;
}