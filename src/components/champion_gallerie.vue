<template>
  <div class="ChampionGallery"> 
    <ChampionCard
    v-for="champion in champs_data"
      :key="champion.key"
      :name="champion.name" 
      :id="champion.id"
      :tags="champion.tags[0]" 
      :title="champion.title"
      :blurb="champion.blurb"
      :info="champion.info.difficulty"
    />
  </div>
  
</template>

<script>
import ChampionCard from './champion_card'
import getChampData from '../api/Riot.js'
getChampData()

export default {
  name: 'ChampionGallery',
  computed: {
    champsOrganizedData: function() {
			const field = ["AZName", "ZAName"].includes(this.champsSortType) ? "name" : "tags"
			const reversed = ["ZAName", "ZABreed"].includes(this.champsSortType)
			const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
			const comparator = (a, b) => a[field].localeCompare(b[field]) 
			let data = this.champs_data.filter(filterFunc)
			data = data.sort(comparator)
			if (reversed) data = data.reverse()
			return data
		}
  },
  data () {
    return {
      dataTab: [],
      champs_data: [],
      searchType: "",
      champsSortType: "AZName"
    }
  },
  created: function() {
    this.retrieve_champ_data()
    console.log(this.champs_data)
  },
  methods: {
		async retrieve_champ_data() {
      this.dataTab = await getChampData()
      this.champs_data = this.dataTab.data
      }
  },
  components: {
    ChampionCard,
    }
}
</script>

<style scoped>
  .ChampionGallery {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>