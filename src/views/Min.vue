<template>
    <div class="page-container">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <md-app style="overflow:hidden">
            <md-app-drawer md-permanent="full">
                <img class="logo" src="img/logo.png" />
                <br />
                <br />
                <a
                    id="getting-started-button"
                    class="popdown mdl-button mdl-js-button mdl-js-ripple-effect"
                    title="About"
                    style="color: hotpink"
                >Getting Started</a>

                <md-toolbar class="md-title" md-elevation="0">Tools</md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-button class="md-icon-button md-raised">
                            <md-icon class="fa fa-mouse-pointer"></md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>aspect_ratio</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>text_fields</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>photo_size_select_small</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>pan_tool</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>description</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon class="fas fa-route"></md-icon>
                            <!-- <md-icon class="fas fa-route"></md-icon> -->
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>border_outer</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>

                <LayerToolbar />

                <nav class="mdl-navigation" id="feature-import-static">
                    <a
                        id="show_import_dialog"
                        class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised feature-button mdl-button--colored"
                    >Import</a>
                    <div id="customComponentToolBar">
                        <div
                            id="template-custom-component-button"
                            class="button_row"
                            style="visibility: hidden; display: none;"
                        >
                            <a
                                class="custom-component-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised feature-button"
                            >Mixer</a>
                            <button class="params-button mdl-button mdl-js-button mdl-button--icon">
                                <i class="material-icons">settings</i>
                            </button>
                        </div>
                    </div>
                </nav>
                <div
                    id="arrayBox"
                    style="z-index: 20; left: 250px; top: 30px; position: absolute; background-color: #fff;"
                    class="hidden-block"
                >
                    <h5>Generate:</h5>

                    <!--<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">-->
                    <!--<input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>-->
                    <!--<span class="mdl-radio__label">Bank</span>-->
                    <!--</label>-->
                    <!--<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">-->
                    <!--<input type="radio" id="option-2" class="mdl-radio__button" name="options" value="2">-->
                    <!--<span class="mdl-radio__label">Grid</span>-->
                    <!--</label>-->

                    <!--<br/>-->

                    <label>X :</label>
                    <div class="mdl-textfield mdl-js-textfield" style="width: 50px">
                        <input
                            class="mdl-textfield__input"
                            type="text"
                            pattern="-?[0-9]*([0-9]+)?"
                            id="replicate-x"
                        />
                        <span class="mdl-textfield__error">Input is not an integer !</span>
                    </div>
                    <label>Y :</label>
                    <div class="mdl-textfield mdl-js-textfield" style="width: 50px">
                        <input
                            class="mdl-textfield__input"
                            type="text"
                            pattern="-?[0-9]*([0-9]+)?"
                            id="replicate-y"
                        />
                        <span class="mdl-textfield__error">Input is not an integer !</span>
                    </div>

                    <h5>Spacing:</h5>

                    <label>X (mm) :</label>
                    <div class="mdl-textfield mdl-js-textfield" style="width: 50px">
                        <input class="mdl-textfield__input" type="text" id="textinput_xspacing" />
                        <!--<label class="mdl-textfield__label" for="textinput_xpos">x (mm)</label>-->
                    </div>
                    <button
                        id="button-xspacing-up"
                        class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    >
                        <i class="material-icons">arrow_upward</i>
                    </button>
                    <button
                        id="button-xspacing-down"
                        class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    >
                        <i class="material-icons">arrow_downward</i>
                    </button>
                    <br />
                    <label>Y (mm) :</label>
                    <div class="mdl-textfield mdl-js-textfield" style="width: 50px">
                        <input class="mdl-textfield__input" type="text" id="textinput_yspacing" />
                        <!--<label class="mdl-textfield__label" for="textinput_ypos">y (mm)</label>-->
                    </div>
                    <button
                        id="button-yspacing-up"
                        class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    >
                        <i class="material-icons">arrow_upward</i>
                    </button>
                    <button
                        id="button-yspacing-down"
                        class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    >
                        <i class="material-icons">arrow_downward</i>
                    </button>

                    <br />

                    <!-- Raised button with ripple -->
                    <button
                        id="generate-replication"
                        class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    >Generate</button>
                    <!-- Raised button with ripple -->
                    <button
                        id="cancel-replication"
                        class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    >Cancel</button>
                </div>
            </md-app-drawer>

            <md-app-content id="main-containter-krishna" md-tag="div">
                <Visualiser />
            </md-app-content>

            <HelpDialog />
            <ResolutionToolbar />
            <ImportHelpDialog />
            <ImportDXFDialog />
            <DOEDialog />
            <EditDeviceDialog />
            <InsertTextDialog />
            <ChangeAllDialog />
            <EditBorderDialog />
        </md-app>
    </div>
</template>

<script>
// @ is an alias to /src
import Visualiser from "../components/Visualiser";
import LayerToolbar from "../components/LayerToolbar";
import EditDeviceDialog from "../components/EditDeviceDialog";
import InsertTextDialog from "../components/InsertTextDialog";
import ChangeAllDialog from "../components/ChangeAllDialog";
import EditBorderDialog from "../components/EditBorderDialog";
import DOEDialog from "../components/DOEDialog";
import ImportDXFDialog from "../components/ImportDXFDialog";
import ImportHelpDialog from "../components/ImportDXFDialog";
import ResolutionToolbar from "../components/ResolutionToolbar";
import HelpDialog from "../components/HelpDialog";

export default {
    name: "Min",
    components: {
        Visualiser,
        LayerToolbar,
        EditDeviceDialog,
        InsertTextDialog,
        ChangeAllDialog,
        EditBorderDialog, 
        DOEDialog,
        ImportDXFDialog,
        ImportHelpDialog,
        ResolutionToolbar,
        HelpDialog
    }
};
</script>

<style lang="scss" scoped>
html, body {
    margin: 0; 
    height: 100%;
    overflow: hidden;
}

// .md-app-container{
//     overflow: hidden;
// }

#main-container-krishna{overflow:hidden}

.md-app {
    height: 100vh;
    width: 100%;
    border: 1px solid rgba(#000, 0.12);
    overflow: hidden;
}

.md-app-content {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

// Demo purposes only
.md-drawer {
    width: 230px;
    // height: 100%;
    max-width: calc(100vw - 125px);
}
</style>
