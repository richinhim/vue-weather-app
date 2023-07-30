import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeatherInfo(city) {
      const API_KEY = "eb8c17c7e444065139587353869e392a";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url); // axios 사용시 promise 사용해야
      console.log(res);

      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.disPlayTemperature(main.temp),
        //temperature: main.temp,
        humidity: main.humidity,
        wind: wind.speed,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
        //https://openweathermap.org/img/wn/04d.png
        //temperature: res.data.main.temp,
      };
      return weatherResult;
      //return res.data;
    },
    disPlayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};
export default weatherMixin;
