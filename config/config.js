module.exports = function () {
	let MONGO_DB;
	let FIG_DB = process.env.DB_1_PORT;
	
	if (FIG_DB) {
		MONGO_DB = FIG_DB.replace("tcp", "mongodb") + "/dev_db";
	} else {
		MONGO_DB = process.env.MONGO_URL;
	}

	return {
		db: MONGO_DB
	};
};