<template>
  <tool-bar></tool-bar>
  <router-view></router-view>
</template>

<script>
import ToolBar from "./highlife/components/tool-bar.component.vue";

import "../src/global.css";

export default { components: { ToolBar } };
</script>

<style></style>
