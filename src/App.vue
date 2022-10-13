<template>
  <hl-toolbar></hl-toolbar>
  <router-view></router-view>
</template>

<script>
import HlToolbar from "./components/hl-toolbar.vue";

import "../src/global.css";

export default { components: { HlToolbar } };
</script>

<style></style>
