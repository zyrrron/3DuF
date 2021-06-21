import dialogPolyfill from "dialog-polyfill";
import Registry from "../../core/registry";
import axios from 'axios';

export default class DAMPFabricationDialog {
    constructor() {
        this.__sendFabricationSubmissionButton = document.getElementById("send_designs_button");
        this.__dialog = document.getElementById("damp_fabricate_dialog");
        this.__showFabDialogButton = document.querySelector("#damp_fabricate");

        const ref = this;
        if (!this.__dialog.showModal) {
            dialogPolyfill.registerDialog(this.__dialog);
        }
        this.__showFabDialogButton.addEventListener("click", function () {
            ref.__dialog.showModal();
        });

        this.__sendFabricationSubmissionButton.onclick = function () {
            // Registry.viewManager.activateTool("InsertTextTool");
            const email = document.getElementById("fabricate_dialog_email_field").value;
            const address = document.getElementById("fabricate_dialog_address_field").value;
            console.log(Registry.currentDevice.toInterchangeV1());
            const endpoint = "http://fabrication-service.damplab.org/api/v1/submit";
            axios
                .post(endpoint, {
                    email: email,
                    design: JSON.stringify(Registry.currentDevice.toInterchangeV1()),
                    address: address
                })
                .then(res => {
                    console.log(res);
                    alert("Add the submission code here");
                })
                .catch(err => {
                    console.error(err);
                    alert("Error submiting the design for fabrication:" + err.message);
                });
        };

        this.__dialog.querySelector(".close").addEventListener("click", function () {
            ref.__dialog.close();
        });
    }
}
