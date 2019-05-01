/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-env commonjs */
/* eslint-disable global-require */

module.exports = function buildPreset() {
	return {
		presets: [
			require('@babel/preset-env'),
			require('@babel/preset-react'),
		],
		plugins: [
			require('@babel/plugin-proposal-object-rest-spread'),
			require('@babel/plugin-proposal-class-properties'),
			require('babel-plugin-transform-export-extensions'),
		],
	};
};
