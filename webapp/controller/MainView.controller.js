sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
*/
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer1abad.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();        
            var sGCashKey = oTextBundle.getText("mopkeygcash"); // GCASH
            var sCCKey = oTextBundle.getText("mopkeycc");       // CC

            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCCLabel = this.getView().byId("idLblCC");
            var oCCInput = this.getView().byId("idInputCC");
            
            var sSelectedPaym = oEvent.getParameter("selectedItem").getProperty("text");
            if (sSelectedKey === sGCashKey){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }

            if (sSelectedKey === sCCKey){
                // show the mobile field
                oCCLabel.setVisible(true);
                oCCInput.setVisible(true);
            } else {
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }
            
            sap.m.MessageToast.show(sSelectedPaym); 
        },

        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();
            
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("errReqFieldMsg");
            // Check if first name is blank
            if (oInputFNameValue === "" ){
                sap.m.MessageToast.show(sMsg); 
            } else if(oInputFNameValue === "" && oInputLNameValue === ""){
                sap.m.MessageToast.show(sMsg); 
            }
        },


    })  ;
});