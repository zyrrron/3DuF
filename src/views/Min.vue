<template>
    <div class="page-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <md-app>
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
                            <md-icon>text_fields</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>border_outer</md-icon>
                        </md-button>

                    </md-list-item>

                </md-list>

                <md-toolbar class="md-title" md-elevation="0">Select Layer</md-toolbar>

                <nav class="mdl-navigation" id="layer-controls">
                    <!--<a id="control_button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;raised view-button">Control</a>-->

                    <div id="layer-toolbar">
                        <div
                            id="template-layer-block"
                            class="mdl-button-group layer-block"
                            data-levelindex="0"
                        >
                            <span class="level-index">LEVEL 1</span>
                            <button
                                class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored delete-level"
                                style="visibility: hidden"
                                data-levelindex="0"
                            >
                                <i class="material-icons">delete</i>
                            </button>
                            <!--<button class="mdl-button mdl-js-button mdl-button&#45;&#45;icon mdl-button&#45;&#45;colored">-->
                            <!--<i class="material-icons">visibility_off</i>-->
                            <!--</button>-->
                            <br />
                            <a
                                class="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect layer-button flow-button"
                                data-layerindex="0"
                            >Flow</a>
                            <a
                                class="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect layer-button control-button"
                                data-layerindex="1"
                            >Control</a>
                        </div>
                    </div>

                    <button
                        id="add-new-level"
                        class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    >
                        <i class="material-icons">add_box</i>
                    </button>
                    <!--<a id="cells_button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;raised view-button">Cells</a>-->
                </nav>
            </md-app-drawer>

            <md-app-content>
                <Visualiser />
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
// @ is an alias to /src
import Visualiser from "../components/Visualiser";

export default {
    name: "Min",
    components: {
        Visualiser
    }
};
</script>

<style lang="scss" scoped>
.md-app {
    height: 800px;
    width: 100%;
    border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
</style>
