<template>
  <div class="content-header">
    <h2>날씨를 알려드리겠습니다.</h2>
    <p>원하시는 도시를 선택해 주세요.</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ContentHeader",
};
</script>

<style scoped>
.content-header {
  padding: 1em;
}

.content-header p {
  font-size: 14px;
  margin-top: 0.5em;
}
</style>
