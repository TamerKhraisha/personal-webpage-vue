<template>
  <main-curriculum />
</template>

<script>
const mainCurriculum = () => import("../components/MainCurriculum");

export default {
  name: "Curriculum",
  components: { mainCurriculum }
};
</script>
