<template>
  <v-container fill-height text-center>
    <div style="width:100%" class="d-flex justify-center flex-column">
      <div class="my-5 d-flex flex-column align-center">
        <v-avatar size="100">
          <v-img src="@/assets/tamer3.jpg"></v-img>
        </v-avatar>
        <span class="mt-5 font-weight-bold title"
          >Tamer Khraisha Personal Webpage</span
        >
      </div>
      <div class="mb-5">
        oops..It seems that you have inserted a URL which currently does not
        exist.
      </div>
      <div>
        <v-btn text :to="{ name: 'home' }" color="secondary"
          >Go home page</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
