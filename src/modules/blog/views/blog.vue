<template>
  <div>
    <v-content>
      <TopSection />
      <BlogIterator />
    </v-content>
  </div>
</template>

<script>
const TopSection = () => import("../sections/topSection");
const BlogIterator = () => import("../sections/blogIterator");
export default {
  name: "Blog",
  components: { TopSection, BlogIterator }
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg")
    no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
}
</style>
