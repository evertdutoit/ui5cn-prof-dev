/*global QUnit*/

sap.ui.define([
	"edt/myFirstApp/controller/myFirstApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("myFirstApp Controller");

	QUnit.test("I should test the myFirstApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});