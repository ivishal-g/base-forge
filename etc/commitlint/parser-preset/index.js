var config = require( 'conventional-changelog-conventionalcommits' );

var conf = config({
	// Define an array of prefixes used to detect references to issues:
	'issuePrefixes': [
		'#',
		'gh-'
	],

	// Define a pattern to match a reverted commit:
	'revertPattern': /^Revert\s([\s\S]*)\s*This reverts commit (\w*)\./
});

module.exports = conf;
