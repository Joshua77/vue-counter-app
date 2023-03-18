<template>
  <div className="page-not-found">
    <h1>Error 404</h1>
    <div>
      <h2>We can't find that page.</h2>
      <p>Page may have been deleted or moved.</p>
      <p>Deepest Apologies. Let's help you navigate back to shore</p>
      <div>
        <p>Let's go</p>
        <router-link className="link active" to="/">"Home"</router-link>
        <p>and try from there.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
