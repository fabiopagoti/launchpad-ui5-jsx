sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: pagoti.fabio.launchpad.jsx",
		defaults: {
			page: "ui5://test-resources/pagoti/fabio/launchpad/jsx/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "pagoti/fabio/launchpad/jsx/",
				never: "test-resources/pagoti/fabio/launchpad/jsx/"
			},
			loader: {
				paths: {
					"pagoti/fabio/launchpad/jsx": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for pagoti.fabio.launchpad.jsx"
			},
			"integration/opaTests": {
				title: "Integration tests for pagoti.fabio.launchpad.jsx"
			}
		}
	};
});
