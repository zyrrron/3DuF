<template>
    <div class="page-container">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

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

            <md-app-content>
                <Visualiser />
            </md-app-content>
            <dialog id="help_dialog" class="mdl-dialog">
                <div class="mdl-dialog__content">
                    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">3DuF v1.1</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <img src="img/cidar_logo.png" width="100%" />
                            3DuF is microfluidic design environment developed by
                            <a
                                href="http://cidarlab.org"
                                target="_blank"
                            >CIDAR</a>.
                            For any help or queries, please send an email to
                            <a
                                href="mailto: 3dufhelp@gmail.com"
                            >3dufhelp@gmail.com</a>.
                            Source code, issue tracking and feature requests are available at
                            <a
                                href="https://github.com/CIDARLAB/3DuF/"
                                target="_blank"
                            >Github</a>.
                            <hr />Developed by:
                            Aaron Heuckroth, Joshua Lippai and Radhakrishna Sanka.
                            <hr />Error Tracking powered by
                            <a
                                href="https://trackjs.com"
                            >https://trackjs.com</a>.
                        </div>

                        <div class="mdl-card__menu">
                            <button
                                class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect close"
                            >
                                <i class="material-icons">clear</i>
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
            <div id="resolution-toolbar" class="hidetoolbar">
                <div>
                    <label
                        class="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                        for="grid-enable-toggle"
                    >
                        <input
                            type="checkbox"
                            id="grid-enable-toggle"
                            class="mdl-switch__input"
                            checked
                        />
                        <span class="mdl-switch__label">Enable Automatic Grid</span>
                    </label>
                    <label
                        class="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                        for="render-snap-toggle"
                    >
                        <input
                            type="checkbox"
                            id="render-snap-toggle"
                            class="mdl-switch__input"
                            checked
                        />
                        <span class="mdl-switch__label">Render Snap Points</span>
                    </label>
                    <br />
                    <div id="grid-resolution-slider"></div>
                    <br />
                    <br />
                </div>
            </div>

            <dialog id="intro_help_dialog" class="mdl-dialog" style="overflow-y: auto;">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Getting Started</h2>
                </div>
                <div class="mdl-dialog__content">
                    <div style="overflow-y: visible; max-height: 600px;">
                        <h5>Academic Publications:</h5>
                        <p>
                            Sanka, Radhakrishna, Joshua Lippai, Dinithi Samarasekera, Sarah Nemsick, and Douglas Densmore.
                            <br />“3DμF - Interactive Design Environment for Continuous Flow Microfluidic Devices.”
                            <br />Scientific Reports 9, no. 1 (December 2019).
                        </p>
                        <a
                            href="https://doi.org/10.1038/s41598-019-45623-z"
                        >https://doi.org/10.1038/s41598-019-45623-z</a>

                        <h5>Videos</h5>

                        <table>
                            <tr>
                                <td>
                                    <iframe
                                        width="355"
                                        height="200"
                                        src="https://www.youtube.com/embed/05nU8eQ73U8"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="355"
                                        height="200"
                                        src="https://www.youtube.com/embed/YOrnnZjma28"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center">Introduction</td>
                                <td style="text-align: center">Long Tutorial</td>
                            </tr>
                        </table>
                        <br />

                        <p>
                            <b>Send in comments, suggestions and issues to</b>
                            <a href="mailto: 3dufhelp@gmail.com">3dufhelp@gmail.com</a>.
                        </p>

                        <h5>Designs From Literature</h5>Check the various designs from microfluidic literature recreated in 3DµF can be found
                        <a
                            href="https://cidarlab.github.io/3DuF-Paper-Designs/"
                            target="_blank"
                        >here</a>.
                        <h5>Usage</h5>
                        <table class="tg">
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>del</pre>
                                </td>
                                <td class="tg-yw4l">- Delete Feature</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>F</pre>
                                </td>
                                <td class="tg-yw4l">- Reset Canvas</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>Esc</pre>
                                </td>
                                <td
                                    class="tg-yw4l"
                                >- Activate Select Tool/ Deselect Selected Components</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>ctrl+C , ctrl+V</pre>
                                </td>
                                <td class="tg-yw4l">- Activate Component Copy Mode</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>ctrl+Z</pre>
                                </td>
                                <td class="tg-yw4l">- Undo Last Edit</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>ctrl+A</pre>
                                </td>
                                <td class="tg-yw4l">- Select All</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>ctrl+S</pre>
                                </td>
                                <td class="tg-yw4l">- Save JSON file</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>left click</pre>
                                </td>
                                <td class="tg-yw4l">- Place Feature</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>right click</pre>
                                </td>
                                <td class="tg-yw4l">- Select Feature</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>mouse scroll</pre>
                                </td>
                                <td class="tg-yw4l">- Zoom</td>
                            </tr>
                            <tr>
                                <td class="tg-yw4l">
                                    <pre>arrow keys</pre>
                                </td>
                                <td class="tg-yw4l">- Pan</td>
                            </tr>
                        </table>
                    </div>

                    <div class="mdl-card__menu">
                        <button
                            class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect close"
                        >
                            <i class="material-icons">clear</i>
                        </button>
                    </div>
                </div>
            </dialog>

            <dialog id="import_dialog" class="mdl-dialog">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Drag and drop the DXF file on the canvas</h2>
                </div>
                <div class="mdl-dialog__content">
                    <canvas id="component_preview_canvas" tabindex="1" width="500" height="400"></canvas>
                </div>
                <form action="#">
                    <div class="mdl-textfield mdl-js-textfield" width="300px">
                        <input class="mdl-textfield__input" type="text" id="new_component_name" />
                        <label class="mdl-textfield__label" for="new_component_name">Name...</label>
                    </div>
                </form>
                <br />
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button id="import_component_button" type="button" class="mdl-button">Import</button>
                    <button type="button" class="mdl-button close">Cancel</button>
                </div>
            </dialog>

            <dialog id="doe_dialog" class="mdl-dialog">
                <div class="mdl-card__title">
                    <h2
                        class="mdl-card__title-text"
                    >Generate Design of Experiments for a Single Component</h2>
                </div>
                <div class="mdl-dialog__content">
                    <input type="file" class="upload" id="doe_input" />
                    <div id="taguchi-table"></div>
                </div>
                <!--<form action="#">-->
                <!--<div class="mdl-textfield mdl-js-textfield" width="300px">-->
                <!--<input class="mdl-textfield__input" type="text" id="new_component_name">-->
                <!--<label class="mdl-textfield__label" for="new_component_name">Name...</label>-->
                <!--</div>-->
                <!--</form>-->
                <br />
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button
                        id="download-doe-button"
                        type="button"
                        class="mdl-button"
                    >Download Designs</button>
                    <button type="button" class="mdl-button close">Cancel</button>
                </div>
            </dialog>

            <dialog id="edit_device_dialog" class="mdl-dialog">
                <div class="mdl-dialog__content">
                    <!-- Textfield with Floating Label -->
                    <h4>Rename:</h4>
                    <form action="#">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input
                                class="mdl-textfield__input"
                                type="text"
                                id="devicename_textinput"
                            />
                            <label
                                class="mdl-textfield__label"
                                for="devicename_textinput"
                            >Device Name</label>
                        </div>
                    </form>

                    <h4>Resize:</h4>
                    <!-- Numeric Textfield with Floating Label -->
                    <form action="#">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input
                                class="mdl-textfield__input"
                                type="text"
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                id="xspan_textinput"
                            />
                            <label class="mdl-textfield__label" for="xspan_textinput">X-Span (mm)</label>
                            <span class="mdl-textfield__error">Input is not a number!</span>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input
                                class="mdl-textfield__input"
                                type="text"
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                id="yspan_textinput"
                            />
                            <label class="mdl-textfield__label" for="yspan_textinput">Y-Span (mm)</label>
                            <span class="mdl-textfield__error">Input is not a number!</span>
                        </div>
                    </form>
                </div>
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button id="accept_resize_button" type="button" class="mdl-button">Save</button>
                    <button type="button" class="mdl-button close">Cancel</button>
                </div>
            </dialog>
            <dialog id="insert_text_dialog" class="mdl-dialog">
                <div class="mdl-dialog__content">
                    <!-- Textfield with Floating Label -->
                    <h4>Insert Text:</h4>
                    <form action="#">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input
                                class="mdl-textfield__input"
                                type="text"
                                id="inserttext_textinput"
                            />
                            <label class="mdl-textfield__label" for="inserttext_textinput">Text</label>
                        </div>
                    </form>
                </div>
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button id="accept_text_button" type="button" class="mdl-button">Insert</button>
                    <button type="button" class="mdl-button close">Cancel</button>
                </div>
            </dialog>
            <dialog id="border_settings_dialog" class="mdl-dialog">
                <div class="mdl-dialog__content">
                    <!-- Textfield with Floating Label -->
                    <h4>Drag Drop the DXF file containing border to import:</h4>
                    <div class="mdl-dialog__content">
                        <canvas id="border_import_panel" tabindex="1" width="300" height="200"></canvas>
                        <br />
                        <input type="file" class="upload" id="dxf_input" />
                    </div>
                </div>
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button id="import_border_button" type="button" class="mdl-button">Import Border</button>
                    <button id="delete_border_button" type="button" class="mdl-button">Delete Border</button>
                    <button type="button" class="mdl-button close">Close</button>
                </div>
            </dialog>
            <dialog id="change_all_dialog" class="mdl-dialog">
                <div class="mdl-dialog__content">
                    <!-- Textfield with Floating Label -->
                    <h5>
                        Change All Components:
                        <span id="component_type_span"></span>
                    </h5>
                </div>
                <table id="similar_components_table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th scope="col">Name</th>
                            <th scope="col">Change</th>
                        </tr>
                    </thead>
                </table>
                <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                    <button id="change_all_button" type="button" class="mdl-button">Change</button>
                    <button type="button" class="mdl-button close">Cancel</button>
                </div>
            </dialog>
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
