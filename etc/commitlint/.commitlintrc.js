
var config = {};

/**
* Link to commit guidance.
*
* @name helpUrl
* @memberof config
* @type {string}
*/
config[ 'helpUrl' ] = 'https://github.com/ivishal-g/base-forge/blob/main/etc/commitlint/docs/COMMIT_GUIDE.md';

/**
* Commit message parser.
*
* @name parserPreset
* @memberof config
* @type {Object}
*/
config[ 'parserPreset' ] = require( './parser-preset' );

/**
* Lint rules.
*
* @name rules
* @memberof config
* @type {Object}
*/
config[ 'rules' ] = require( './rules' );

/**
* Prompt configuration.
*
* @name prompt
* @memberof config
* @type {Object}
*/
config[ 'prompt' ] = require( './prompt' );

module.exports = config;
