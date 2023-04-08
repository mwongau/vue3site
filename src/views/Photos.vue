<script>
export default {
  data() {
    return {
      img: '/acupy.jpg',
      count: 1
    }
  },
  methods: {
    select() {
      this.count++
      if (this.count > 3) 
         {this.count = 1;}
    }
  }
}
</script>

<template>
<div class="photos">
   <h1>Photos</h1>
   <button @click="select"><b>Click to select next photo</b></button>
   <br />
   <h4 v-if="count==1">Australian Catholic University, Strathfield Campus, NSW, Australia</h4>
   <img v-if="count==1" src="\acupy.jpg" alt="acu">
   <h4 v-if="count==2">University of Technology Sydney, Building 5, Sydney, Australia</h4>
   <img v-if="count==2" src="\uts-bldg5.jpg" alt="acu">
   <h4 v-if="count==3">Homebush Public School, Homebush, NSW, Australia</h4>
   <img v-if="count==3" src="\hps.jpg" alt="acu">   
</div>
</template>





