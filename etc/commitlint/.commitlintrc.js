
import parserPreset from './parser-preset/index.js';
import rules from './rules/index.js';
import prompt from './prompt/index.js';

const config = {};

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
config[ 'parserPreset' ] = parserPreset;

/**
* Lint rules.
*
* @name rules
* @memberof config
* @type {Object}
*/
config[ 'rules' ] = rules;

/**
* Prompt configuration.
*
* @name prompt
* @memberof config
* @type {Object}
*/
config[ 'prompt' ] = prompt;

export default config;
