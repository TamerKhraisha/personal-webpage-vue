<template>
  <div>
    <v-content>
      <TopSection />
      <AboutMe />
      <LatestUpdates />
      <Quotes />
      <RecentProjects />
      <InteractiveVisualizations />
      <Contact />
    </v-content>
    <Footer />
  </div>
</template>

<script>
const Contact = () => import("../sections/Contact");
const AboutMe = () => import("../sections/AboutMe");
const Footer = () => import("../sections/Footer");
const LatestUpdates = () => import("../sections/LatestUpdates");
const Quotes = () => import("../sections/Quotes");

const TopSection = () => import("../sections/TopSection");
const RecentProjects = () => import("../sections/RecentProjects");
const InteractiveVisualizations = () =>
  import("../sections/InteractiveVisualizations");

export default {
  name: "Home",
  components: {
    AboutMe,
    Contact,
    Footer,
    LatestUpdates,
    Quotes,
    TopSection,
    RecentProjects,
    InteractiveVisualizations
  }
};
</script>
