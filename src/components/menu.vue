<template>
  <div class="Menu">
    <img id ="logo" alt="wildriftlogo" src="../assets/logosimple.png" >
    <ul>
      <li class = "item">
        Accueil
      </li>
      <li class = "item">
        Patchs
      </li>
      <li class = "item">
        Champions
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String 
  },
  data(){
    return {
      dataTab: []
    }
  },
  methods: {
    doStuff(){
      console.log('truc')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo{
  margin: 6px ;
  height : 38px;
  mix-blend-mode: normal;
  transition: 100ms;
}
#logo:hover{
  filter: drop-shadow(3px 3px 3px #aaa); 
  cursor:pointer;
}
.Menu{
  font-family: "Futura";
  font-size: 15px;
  background-color: #FFFFFF;
  border-bottom: 5px solid #131E37;
  background-blend-mode: hard-light;
  color: #131E37;
  display: flex;
  justify-content: left;
  height: 8%;
  width: 100%;
  z-index: 3;
  opacity: 100%;
  position: absolute;
}
li{
  font-size: 22px;
  list-style: none;
  margin: 15px 0px;
}
.item{
  font-size: 15px;
  margin: 10% 20%;
  transition: 200ms;
}
.item:hover{
  color: #00D5FF;
  cursor:pointer;
}
ul{
  display: flex;
  margin-right: 20%;
}
</style> 