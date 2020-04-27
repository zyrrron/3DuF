<template>
    <div class="page-container">
        <md-app>
            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
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
