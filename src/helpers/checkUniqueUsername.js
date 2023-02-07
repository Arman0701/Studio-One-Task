
export default async function checkUniqueUsername(newUsername) {
	const requestPromise = new Promise((resolve, reject) => {
		fetch("http://localhost:3001/users")
			.then((response) => response.json())
			.then((users) => {
				const values = Object.values(users);
	
				values.forEach((user) => {
					if (user.profile.username === newUsername) {
						reject(false)
					}
				});
				resolve(true);
			});
	})
    let isUniqueUsername = false;

    await requestPromise.then((res) => {
		isUniqueUsername = res;
    }).catch(rej => {
		isUniqueUsername = rej;
	})

	return isUniqueUsername;
}
