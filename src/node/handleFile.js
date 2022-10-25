const fs = require("fs");
const { log } = require("./log.js");
const CONST = require("./constants.js");

const readData = (filePath = CONST.defaultPath) => {
	let fileBuffer = null;
	try {
		fileBuffer = fs.readFileSync(filePath, CONST.fileEncoding);
		fileBuffer = JSON.parse(fileBuffer);
	} catch (error) {
		return error;
	}

	return fileBuffer;
};

const writeData = (filePath = contactsPath, fileContents = "") => {
	try {
		return fs.writeFileSync(
			filePath,
			JSON.stringify(fileContents),
			CONST.fileEncoding
		);
	} catch (error) {
		return error;
	}
};

module.exports = { readData, writeData };
// export { readData, writeData };
