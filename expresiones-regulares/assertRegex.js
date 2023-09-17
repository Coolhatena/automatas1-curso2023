const assertRegex = (string, pattern) => {
	const regex = new RegExp(pattern);
	return ( regex.test(string) ) ? 'Se encontró el patrón✅' : 'No se encontró el patrón ❌';
	
};

export default assertRegex;