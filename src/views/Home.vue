<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/colors2_small.jpg" />
    <HelloWorld msg="Hi, this is Tamer Khraisha. Welcome to my personal webpage." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
