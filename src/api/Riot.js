
const getChampData =
    async function() {
  const response = await fetch(
      'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
  if (response.status == 200) {
    const data = await response.clone().json()
    console.log(await response.clone().json())
    return data
  }

  else {
    new Error(response.statusText)
  }
}

export default getChampData