sap.ui.define([
        "sap/ui/core/UIComponent",
        "logaligroup/invoives/model/models",
        "sap/ui/model/resource/ResourceModel"
        
    ],
    /**
     * 
     * @param {typeof sap/ui/core/UIComponent} UIComponent 
    */
    function (UIComponent, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("logaligroup.invoives.Component", {
           
            metadata: { manifest : "json"
               
            },
           
            init: function () {
                // call init function
                UIComponent.prototype.init.apply(this, arguments);

                // Modelo de Datos
                this.setModel(models.createRecipient());

                //set i18n
                var i18nModel = new ResourceModel( {bundleName : "logaligroup.invoives.i18n.i18n"});
                this.setModel(i18nModel, "i18n");

                
            }
        });
    }
);