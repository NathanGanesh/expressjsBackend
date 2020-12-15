var dbProps = require('./db_properties');

var mySql = require('mysql');
const { insecureAuth } = require('./db_properties');

module.exports = {
	getConnection: () => {
		return mySql.createConnection({
			host: dbProps.host,
			user: dbProps.user,
			password: dbProps.password,
			database: dbProps.database,
			insecureAuth: dbProps.insecureAuth
		});
	}
};
