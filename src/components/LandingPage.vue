<template>
  <div class="landing-page">
    <header class="landing-header">
      <router-link class='title' to='/'>CHAT APP</router-link>
      <section class="links">
        <router-link class='link' to='/login'>Login</router-link>
      </section>
    </header>
    <router-view/>
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
  text-decoration: none;
  color:  #082d52;
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
  justify-content: space-between;
}
.link {
  text-decoration: none;
  color: #082d52;
  font-size: 18px;
  margin: 10px;
}
</style>
