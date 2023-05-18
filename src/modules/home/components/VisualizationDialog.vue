<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-hover v-slot:default="{ hover }">
        <span
          v-on="on"
          :class="[$vuetify.breakpoint.lgAndDown ? 'display-2' : 'display-1']"
        >
          <span
            :class="[
              hover ? ['cyan--text', 'mouse-hover'] : 'grey--text',
              'visualization-title',
            ]"
            >{{ visualizationTitle }}</span
          >
        </span>
      </v-hover>
    </template>
    <v-card>
      <v-toolbar dark dense color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ visualizationTitle }}</v-toolbar-title>
      </v-toolbar>
      <iframe
        style="position: absolute; height: 100%; width: 100%; border: none"
        :src="visualizationLink"
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    visualizationTitle: String,
    visualizationLink: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped>
.visualization-title {
  font-family: "Petemoss", cursive;
}
.mouse-hover {
  cursor: pointer;
}
</style>