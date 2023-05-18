<template>
  <div>
    <v-content>
      <TopSection />
      <AboutMe />
      <LatestUpdates />
      <RecentProjects />
      <Quotes />
      <InteractiveVisualizations />
      <Contact />
    </v-content>
  </div>
</template>

<script>
const Contact = () => import("../sections/Contact");
const LatestUpdates = () => import("../sections/LatestUpdates");
const Quotes = () => import("../sections/Quotes");

const TopSection = () => import("../sections/TopSection");
const AboutMe = () => import("../sections/AboutMe.vue");
const RecentProjects = () => import("../sections/RecentProjects");
const InteractiveVisualizations = () =>
  import("../sections/InteractiveVisualizations");

export default {
  name: "Home",
  components: {
    AboutMe,
    Contact,
    LatestUpdates,
    Quotes,
    TopSection,
    RecentProjects,
    InteractiveVisualizations
  }
};
</script>
