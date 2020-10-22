<template>
    <div id = "app">

      <div id = "welcome">
          <h1>maxines</h1>
          <ul>
            <li><a href="default.asp">Women</a></li>
            <li><a href="news.asp">Men</a></li>
            <li><a href="about.asp">Unisex</a></li>
            <li><a href="about.asp">Accessories</a></li>
            <li><a href="contact.asp">Clearance</a></li>
            
          </ul>
      </div>

        <div id=filters>
            <p>new arrivals</p>
            <p>sale</p>
            <p>tops</p>
            <p>pants</p>
            <p>shorts</p>
            <p>dress's</p>
            <p>tops</p>

            <select id="sortby">
                            
                 <option value="Best Match" selected >Best Match</option>
                  <option value = "Price Low-High">Price Low-High</option>
                  <option value = "Price High-Low">Price High-Low</option>
                  <option value = "Newest">Newest</option>
                           
            </select>

        </div>
        <div id="products">
            <ul>
                <li v-for="personName of products" 
                v-bind:key="personName['.key']">
               
                  <img v-bind:src="'../'+personName.photo" @click="showInfo(), info = personName"/> 
                  
                  <p>{{personName.name}}</p>
                  <p>{{personName.price}}</p>

                </li>

                <div id = "modal-overlay2"  @click="showModal=false">
                  <div id="buttonClose">
                      <button @click="closeModal()">Back</button>  
                    </div>
                    
                    
                    <img v-bind:src="'../'+info.photo"/> 
                    
                    <h2>{{info.name}}</h2>
                    <h2>{{"$"+info.price}}</h2>
                </div>

            </ul>
        </div>
    </div>
</template>

<script>
import { productRef } from '../firebase';
import { db } from '../firebase';

export default {
  data() {
    return{
      showModal: false,
      username: '',
      password: '',
      users: '',
      products: '',
      showModal2: false,
      show : false,
      info: ''
    }
  },
  methods:{
    submitUser(){
      productRef.push({name: "pink dress", price: '29.99',quanity:4,id:9,photo: "images/pinkdress.jpg"})
    },
    login(){
      let _this = this;
      var data = db.ref('loginInfo/');

      data.on('value', function(snapshot) {
        _this.users = snapshot.val()
      });
    },
    update(){
        let _this = this;
        var data = db.ref('products/');

      data.on('value', function(snapshot) {
        _this.products = snapshot.val()
      });
    },
    showInfo(){
      // Get the modal
            var modal = document.getElementById("modal-overlay2");
            modal.style.display = "block";
    },
    closeModal(){
            var modal = document.getElementById("modal-overlay2");
            modal.style.display = "none";
    }
    
  },
  created() {
      this.update()
      //this.submitUser()
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 40%;
  
  padding:0!important;
  margin:0!important;
  width: 100%;
  overflow: hidden;
}
#welcome{
  margin: 0;
  line-height: 40%;
  padding: 0;
  border-bottom: 2px solid black;
  
  
  
}
#welcome p,ul,li, a{
  margin: 0!important;
  padding: 0.7%!important;
  text-decoration: none;
  color: black;
}
#welcome h1{
  margin: 0!important;
  padding: 1.5%!important;
  font-family: 'Indie Flower', cursive;
  font-size: 250%;
}
#modal-overlay2 button{
  
  border: 1px solid black;
  margin: 0;
  padding: 0.5%;
 
  
}
#modal-overlay2 h2{
  float: left;
  padding: 1%;
  margin-top: 5px;
}
#modal-overlay2{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color:white;
    border: 2px solid rgb(172, 172, 172);
    width: 95%;
    height: 95%;
    
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.3s;
    display:none;
}
#modal-overlay2 img{
  width: 300px;
  float: left;
  padding: 2%;
}

button{
  background-color: transparent;
  border: 2px solid black;
}


li{
  text-decoration: none;
  list-style-type: none;
  padding:2%;
  display: inline-block; 
}

li img{
  width: 200px;
  box-shadow: 3px 2px 10px rgb(194, 194, 194);
  padding: 1%;
  
}
li :hover{
  opacity: 50%;
}
p{
  text-align: left;
  margin-left: 2%;
  font-size: 80%;
}
#filters{
  float: left;
  line-height: 15px;
  margin-top:-10px!important;
  /* background-color: lime; */
  height: 500px;
  width: 150px;
  overflow: hidden;
  margin-left:20.5%!important;
  margin-top: 15px!important;
  
}
#filters p{
  padding: 1.5%;
  font-size: 100%;
  cursor: pointer;
}
#filters select{
  margin-left: -30px!important;
  margin: auto;
}
#filters p:hover{
  opacity: 50%;
}
#products{
  /* background-color: rgb(248, 248, 248); */
  width:30%;
  margin: auto;
  margin-top: 15px!important;
   
}
select{
  border-radius: 0px;
  border: none;
  background-color: rgb(235, 235, 235);
  padding: 4%;
}
@media only screen and (max-width: 2000px) {
  #products{
  /* background-color: rgb(248, 248, 248); */
  width:50%;

  }
  #filters{
  float: left;
  line-height: 15px;
  margin-top:-10px!important;
  /* background-color: lime; */
  height: 500px;
  width: 150px;
  overflow: hidden;
  margin-left:15.5%!important;
  margin-top: 15px!important;
  
}
}

</style>
