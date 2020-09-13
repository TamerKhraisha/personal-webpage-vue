<template>
  <div>
    <v-content>
      <topSection />
      <skillList />
    </v-content>
  </div>
</template>

<script>
const topSection = () => import("../sections/topSection");
const skillList = () => import("../sections/skillList");

export default {
  name: "Skills",
  components: { topSection, skillList }
};
</script>
