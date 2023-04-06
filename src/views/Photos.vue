<script>
export default {
  data() {
    return {
      acu: '/acupy.jpg',
      uts: '/uts-bldg5.jpg'
    }
  }
}
</script>

<template>
<div class="photos">
   <h1>Photos</h1>
   <h4>Australian Catholic University, Strathfield Campus</h4>
   <img :src="acu" alt="acu">
   <br />

   <h4>University of Technology Sydney, Building 5</h4>
   <img :src="uts" alt="acu">
</div>
</template>





