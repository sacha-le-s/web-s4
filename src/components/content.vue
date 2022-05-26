<template>
  <div class="Content">
    <ul>
    <img id ="grologo" alt="wildriftlogo" src="../assets/logoentier.png" >
      <h1>
        Wild Data
      </h1>
      
      <h2>
        The data
      </h2>
      <h2>
        you didn't ask for..
      </h2>
      <h3>
        You'll find a lot of information you might think you do not need but take it please it will make the rift healthier.
      </h3>
      <h2>
       Swipe up and check out the gallery
      </h2>
    </ul>
    <MyButton/>
    <ChampionGallery/>
    <Footer/>
    
  </div>
</template>

<script>
import ChampionGallery from './champion_gallerie'
import Footer from './footer'
import MyButton from './button'

export default {
  name: 'Content',
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
      console.log('xD')
    }
  },
  components: {
    ChampionGallery,
    Footer,
    MyButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Content{
  position: absolute;
  width: 100%;
  margin-top : 60px;
  height: 90%;
}
ul{
  height: 100%;
}

#grologo{
  height: 150px;
}

h3{
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
  height: ;
  width: 100%;
  text-align: center;
  font-family: "Arial Black";
  font-size: 20px;
  background-color: rgba(199, 155, 59, 0.8);
  padding: 20px;
}
h2{
  text-align: center;
  font-size: 30px;
  height: 10px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 346px;
}
h1{
  text-align: left;
  font-family: "Arial Black";
  font-size: 66px;
  margin-left: auto;
  margin-right: auto;
  width: 346px;
}
</style>