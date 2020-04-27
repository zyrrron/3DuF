<template>
    <div id="view_container" >
            <div id="canvas_block" class="shown-block fade-transition">
                <canvas id="c" tabindex="0" width="500" height="500" resize></canvas>
            </div>
            <div id="renderContainer" class="hidden-block fade-transition"></div>
    </div>
</template>

<script>
import { Registry, ViewManager, BareViewManager } from "../app/index"
import { Examples } from "../app/index"

    export default {
       mounted: function() {

        let viewManager = new BareViewManager();

        Registry.viewManager = viewManager;

        viewManager.loadDeviceFromJSON(JSON.parse(Examples.example2));
        viewManager.updateGrid();
        Registry.currentDevice.updateView();

        window.dev = Registry.currentDevice;
        window.Registry = Registry;

        window.view = Registry.viewManager.view;
       }
    }
</script>

<style lang="scss" scoped>
#view-container {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>