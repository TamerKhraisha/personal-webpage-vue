<template>
  <section id="hero">
    <v-img height="100vh" src="@/assets/pencil2.jpg">
      <v-theme-provider dark>
        <v-container fluid fill-height>
          <Blog />
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>
<script>
const Blog = () => import("../sections/Blog");
export default {
  name: "something",
  components: {
    Blog
  }
};
</script>
