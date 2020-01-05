sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("edt.myFirstApp.controller.myFirstApp", {
		onInit: function () {

		},
		onBeforeRendering: function() {

		},
		onAfterRendering: function() {

		},
		onExit: function() {

		},
		toSecondPage: function(oEvt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("page2", {}, true);
		},
		inputChange: function(oEvt) {
			var sInput = oEvt.getParameter('value');
			MessageToast.show(sInput);
		}
	});
});