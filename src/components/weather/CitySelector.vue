<template>
  <div>
    <ul class="city-selector">
      <li
        @click="selectCity(city)"
        :class="{ isSelected: city.selected }"
        v-for="city in cities"
        :key="city.code"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      cities: [
        { code: "seoul", label: "Seoul", selected: false },
        { code: "incheon", label: "Incheon", selected: false },
        { code: "singapore", label: "Singapore", selected: false },
        { code: "Kuala Lumpur", label: "Kuala Lumpur", selected: false },
        { code: "Kota Bharu", label: "Kota Bharu", selected: false },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      //city.selected = true;

      //부모로 이벤트를 전달해줘야
      this.$emit("selectCity", city);
    },
  },
};
</script>

<style scoped>
.city-selector {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.05em solid #efefef;
  padding: 0.3em;
  cursor: pointer;
}
.isSelected {
  background: #fd1d1d;
  color: #fff;
}
</style>
