<template>
    <div className="navbar-container">
      <div className="logo-container">
        <a href="https://www.altschoolafrica.com/">
          <img src="../assets/altschoolLogo.svg" className="logo" alt="logo" title="logo"
            loading="eager" width="80" height="80" />
        </a>
      </div>
  
      <div className="navbar">
        <router-link className="link" exact-active-class="active" to="/">Home</router-link>
        <router-link className="link" exact-active-class="active" to="/counter">Counter</router-link>
  
        
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'NavBar'
  }
</script>