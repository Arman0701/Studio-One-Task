export default function generateFakeAccessToken() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	let token = '';
  
	for (let i = 0; i < 32; i++) {
	  token += characters.charAt(Math.floor(Math.random() * characters.length));
	}
  
	return `${token}`;
  }
  