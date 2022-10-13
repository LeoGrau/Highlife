<template>
  <div class="navbar flex justify-space-between">
    <div>Highlife</div>
    <div class="actions">
      <ul class="flex gap-3">
        <li><router-link to="/sign-in">Sign in</router-link></li>
        <li><router-link to="/sign-up">Sign up</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: 'value',
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background-color: var(--raisin-black);
}
</style>
