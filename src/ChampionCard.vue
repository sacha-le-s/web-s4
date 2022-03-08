<template>
  <div class="champion-card">
    <img class="picture" src="https://my-best-kennel.com/pictures/45.png"/>
    <div>
      <h2 class="name">Nasus</h2>
      <p class="type">Top</p>
    </div>  
  </div>
</template>

<script>
	export default {
	  name: 'ChampionCard'
	}
</script>

<style>
	.champion-card {
	  display: flex;
	}

	h2 {
		 font-size: 20px;
	}
</style>