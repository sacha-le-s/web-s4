<template>
	<div>
		<button v-on:click="doStuff('Clicked', $event)">Tri par nom/rôle</button>	
	</div>
</template>

<script>
export default {
  name: 'MyButton',
	methods: {
		doStuff : function(word, event) {
			event.target.text = "My Button " + word
		}
	}
}
</script>