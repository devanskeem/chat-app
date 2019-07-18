<template>
  <div class="landing-page">
    <header class="landing-header">
      <h1 class='title'>CHAT APP</h1>
      <section class="links">
        <router-link to='/login'>Login</router-link>
      </section>
    </header>
  </div>
</template>


<script>
export default {
  name: 'LandingPage'
}
</script>


<style scoped>
.title {
  margin: 0 10px 0 10px;
  font-size: 25px;
}
.landing-page {
  width: 100vw;
  height: cacl(100vh - 5m);
  background: whitesmoke;
}
.landing-header {
  background: rgba(0, 0, 0, .2);
  margin: 0;
  height: 5em;
  display: flex;
  align-items: center;
}
</style>
