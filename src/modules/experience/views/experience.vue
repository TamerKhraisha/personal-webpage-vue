<template>
  <div>
    <v-content>
      <TopSection />
      <experienceList />
    </v-content>
  </div>
</template>

<script>
const experienceList = () => import("../sections/experienceList");
const TopSection = () => import("../sections/topSection");
export default {
  name: "Experience",
  components: { experienceList, TopSection }
};
</script>
