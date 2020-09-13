<template>
  <div>
    <v-content>
      <TopSection />
      <educationList />
    </v-content>
  </div>
</template>

<script>
const TopSection = () => import("../sections/topSection");
const educationList = () => import("../sections/educationList");

export default {
  components: { TopSection, educationList },
  data() {
    return {};
  }
};
</script>
