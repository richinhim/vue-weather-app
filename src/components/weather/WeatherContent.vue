<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <CitySelector />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "weathercontent",
  components: {
    ContentHeader,
    CitySelector,
  },
};
</script>

<style></style>
