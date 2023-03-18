<template>
    <NavBar/>
    <section>
      <div className="avatar-container">
        <img width="100" height="120" src="../assets/joshua.jpg" className="avatar" alt="avatar" title="avatar" loading="eager" />
        <h1 className="intro">Hi! I am Joshua Akinola </h1>
      </div>
      <div className="info">
        <h2>I am a software engineer at Altschoool Africa. Thanks for checking...</h2>
        <p>
          Try out my amazing Counter app built with Vue JS.
        </p>
      
      </div>
    </section>
    <Footer/>
  </template>
  
<script>
  import { NavBar, Footer } from "../components";
  export default {
    name: 'HomePage',
    components: {
      NavBar, Footer
    },
  }
</script>
  