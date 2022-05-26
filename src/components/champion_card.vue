<template>
    <div class='ChampionCard'>
        <div class='card'>
                <img class="splashart" :src="url"/>
                <div class="name">{{name}}</div>
                <div class="title">{{title}}</div>
                <div class="tags">{{tags}}</div>
                <h4> Difficulté : <div class="info">{{info}}</div></h4>
                <div class="blurb">{{blurb}}</div>
        </div>
    </div>
</template>

<script>
    export default {
		name: 'ChampionCard',
		props: {
			name: String,
            id: String,
			tags: String,
            title: String,
            info: Number,
            blurb: String
		},
        created: function() {
            this.url = "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/" + this.id + ".png"
        }
	}
</script>


<style scoped>
	.ChampionCard {
		width:200px;
        background-color: rgba(0,213,255,0.5);
        transition: 400ms;
        border-radius: 3px;
	}
    .ChampionCard:hover {
        transform: scale(1.1);
        background-color: rgba(0,213,255,1);
    }
	.splashart{
        margin-top: 3px;
		width:50px;
	}
	.card {
		font-size: 20px;
	}
    .name{
        font-family: "Arial Black";
        font-size: 25px;
    }
    .tags{
        font-family: "Futura";
        color: #FFFFFF;
    }
    .title{
        font-family: "Futura";
    }
    h4 {
        font-size: 15px;
    }
    .blurb {
        font-family: "Futura";
        font-size: 10px;
        transition: 200ms;
    }
    .blurb:hover {
        color: #FFFFFF;
        cursor:pointer;
    }
</style>
