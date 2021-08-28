<template>
  <div class="jumbotron contact">
   <h5>Contact Us </h5>
    <P>At papilocollanso@gmail.com for suggestions, averts and updates.</P>
    <p>Phone: +2348034206320</p>
    <p>We will reply you as fast  as<span> we can!</span> </p>
  </div>
</template>

<script>
export default { name: 'Contact' }
</script>

<style lang="scss" scoped>
p > span{
color: white;
}
h5{
text-align: start;
text-decoration: underline;
}
p{

  text-align: start;
  display: block;
  color: black;
}
.jumbotron{
background-image: url('../assets/contact.jpg');
color: black;
}
img{
width: 48%;
}
</style>
