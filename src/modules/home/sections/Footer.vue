<template>
  <v-footer
    style=" background-image: -webkit-linear-gradient(to right, #004e92, #000428);background-image: linear-gradient(to right, #004e92, #000428);"
    class="justify-center"
    height="50"
    color="#eeeeee"
  >
    <div
      style="font-family: Francois One !important"
      class="subtitle-1 white--text text-center d-flex align-center"
    >
      &copy; {{ new Date().getFullYear() }} — Handcrafted with
      <v-icon class="px-1" small color="red">mdi-heart</v-icon> by Tamer
      Khraisha
    </div>
  </v-footer>
</template>
