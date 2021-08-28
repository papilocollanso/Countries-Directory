<template>
  <div>
<main role="main">

  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron bg-white text-center">
    <div class="container">
    <p id="count">Countries Directory</p>
      <img src="../assets/blue.jpg" alt="globe"/>
      <p>This is a detailed information about what Countries Directory is.</p>
      <p>Choose a <span style="color:red; font-weight:bold;">Region</span> before making a search.</p>
      <p><router-link to="/learn" class="btn btn-primary text-white">Learn More &raquo;</router-link></p>
    </div>
  </div>

  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4">
        <h2>All</h2>
        <p>This include information about countries in the World. </p>
         <p><router-link to="/all" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
      <div class="col-md-4">
        <h2>Africa</h2>
        <p>This include information about countries in this region. </p>
          <p><router-link to="/africa" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
      <div class="col-md-4">
        <h2>Americas</h2>
        <p>This include information about countries in this region.</p>
      <p><router-link to="/americas" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
        <div class="col-md-4">
        <h2>Europe</h2>
        <p>This include information about countries in this region.</p>
        <p><router-link to="/europe" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
        <div class="col-md-4">
        <h2>Asia</h2>
        <p>This include information about countries in this region.</p>
          <p><router-link to="/asia" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
        <div class="col-md-4">
        <h2>Oceania</h2>
        <p>This include information about countries in this region.</p>
        <p><router-link to="/oceania" class="btn btn-primary text-white">View details &raquo;</router-link></p>
      </div>
    </div>

    <hr>

  </div> <!-- /container -->
</main>
  </div>

</template>

<script>
export default { name: 'Header' }
</script>

<style lang="scss" scoped>
#count{
font-weight:bold;
font-size: 25px;
color:black;
}
/* Move down content because we have a fixed navbar that is 3.5rem tall */
body {
  padding-top: 3.5rem;
}
#bold{
font-weight: bold;
}
 .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
