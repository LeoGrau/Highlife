<template>
  <div class="bg">
    <div class="bg-img" />
    <div class="bg-under-nav">
      <div class="bg-text">
        <h2>Welcome to the world best coaching app</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100vh;
}

.bg-under-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(70px);
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  justify-content: center;
}

.bg-img {
  position: absolute;
  background-image: url("../assets/images/background-1.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
}

.bg-text {
  position: absolute;
  display: flex;
  color: white;
  z-index: 13;
  font-size: 2rem;
  font-family: var(--electrolize-f);
}

.bg-text > h2 {
  text-shadow: 2px 2px black;
}
</style>
