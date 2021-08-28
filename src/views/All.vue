<template>
  <div class="out">
<div class="container" id="main" v-for="oceania in allOceania" v-bind:key="oceania.name">
    <div class="text-center " id="cover">
    <hr>
<span>{{oceania.capital}},</span>&nbsp;&nbsp;<span  id="go">{{oceania.name}}</span><br>
  <img v-bind:src = oceania.flag />

    </div>
    <div class=" container outer">
   <div class="outer-1">
    <p>CallingCode: {{oceania.callingCodes[0]}}</p>
    <p>TopLevelDomain: {{oceania.topLevelDomain[0]}}</p>
    <p>AltSpellings: {{oceania.altSpellings[0]}}</p>
    <p>LatLng: {{oceania.latlng[0]}},&nbsp;{{oceania.latlng[1]}}</p>
    <p>Region: {{oceania.region}}</p>
    <p>Subregion: {{oceania.subregion}}</p>
     <p>Population: {{oceania.population}}</p>
    <p>alpha2Code: {{oceania.alpha2Code}}</p>
    <p>alpha3Code: {{oceania.alpha3Code}}</p>
    <p>Area: {{oceania.area}}</p>
   </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="container outer-2">
    <p>Denonym: {{oceania.demonym}}</p>
    <p>Timezone: {{oceania.timezones}}</p>
    <p>NativeName: {{oceania.nativeName}}</p>
    <p>Language: {{oceania.languages[0].name}}</p>
     <p>CurrencyCode: {{oceania.currencies[0].code}}</p>
     <p>CurrencyName: {{oceania.currencies[0].name}}</p>
     <p>CurrencySymbol: {{oceania.currencies[0].symbol}}</p>
     <p>Cioc: {{oceania.cioc}}</p>
     <p>gini: {{oceania.gini}}</p>
     <p>NumericCode: {{oceania.numericCode}}</p>
    </div>
    </div>
    <hr>
  </div><br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Oceania',
  methods: {
    ...mapActions(['getCountriesAll'])
  },
  computed: mapGetters(['allOceania']),
  created () {
    this.getCountriesAll()
  }
}
</script>

<style lang="scss" scoped>
.out{
background-color: whitesmoke;
}
img{
width:30%;
margin:15px;
}
#main{
background-color:white
}
.outer{
display: flex;
background-color: white;
border-radius: 16px;
}
</style>
