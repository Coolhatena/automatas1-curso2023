const theresInvalidFlags = (flagsString) => {
	const flagChecker = /[^igmsuy]/;
	const isNotAFlag = flagChecker.test(flagsString)
	return isNotAFlag 
}

const assertRegex = (string, pattern, flags) => {
	if ( theresInvalidFlags(flags) ){
		alert("Se introdujeron flags invalidas, verifiquelas nuevamente");
		return [false, ""]
	}
	const regex = new RegExp(pattern, flags);
	const result = [regex.test(string), string.match(regex)];
	return result;
};

export default assertRegex;
