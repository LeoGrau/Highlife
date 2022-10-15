<template>
  <nav class="navbar flex justify-content-between align-items-center p-4">
    <div class="logo" @click="goToHome()">Highlife</div>
    <div class="actions">
      <ul class="flex gap-3">
        <li><router-link to="/sign-in">Sign in</router-link></li>
        <li><router-link to="/sign-up">Sign up</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      property: "value",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background-color: var(--raisin-black-tr-8);
  position: fixed;
  z-index: 12;
}

.logo {
  cursor: pointer;
  font-size: 2rem;
  font-family: var(--righteous-f);
  color: white;
}

ul > li > :deep(a) {
  color: white;
  font-family: var(--rajdhani-f);
  font-weight: 500;
}
</style>
