sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof logaligroup.invoives.model.models} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */
    function (Controller, MessageToast, models, ResourceModel) {
        "use strict";

              
        return Controller.extend("logaligroup.invoives.controller.App", {
            
            onInit: function () {
                
              

            },
            
            onShowHello: function () {
                //read text i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
