// ===================================================
// 
// Total.js - framework for Node.js platform
// 
// ===================================================

const options = {};

options.ip = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
 options.port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
// options.config = { name: 'Total.js' };
options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);