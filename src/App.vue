<template>
  <div id="app">

    
  
    
    <store/>
    

    
  </div>
</template>

<script>

import store from './components/store.vue'


export default {
  name: 'App',
  components: {
    store,
    
  },
 
  
}
</script>

<style scoped>
  
  #app{
    user-select: none;
    scroll-behavior: smooth;
    background-repeat: no-repeat;
    background-position-y: -200px;
    background-size: contain;
    overflow: hidden;
    display: block!important;
    margin-left: auto!important;
    margin-right: auto!important;
  }
  #item1{
  
   float:left;
 
   
  }


  

</style>
