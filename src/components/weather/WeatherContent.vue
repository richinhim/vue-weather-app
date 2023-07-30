<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <CitySelector @selectCity="selectCity" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin"; //@/절대경로
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "weathercontent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  mixins: [weatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    async selectCity(city) {
      if (city.selected) {
        //this.getWeatherInfo(city);
        const weather = await this.getWeatherInfo(city); //promise가 반환됨

        console.log(weather, "weather");

        this.weatherList.push(weather);
        //this.weatherList.push(city);
      } else {
        //스플라이스
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
      console.log(city, "parent received");
    },
  },
};
</script>

<style></style>
