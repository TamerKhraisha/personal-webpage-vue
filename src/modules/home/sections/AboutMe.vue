<template>
  <section id="about-me">
    <div class="py-12"></div>
    <v-container class="text-center" id="me">
      <div class="d-flex flex-column align-center justify-center">
        <h2 class="display-1 mb-3 primary--text">ABOUT ME</h2>
        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row align="center" justify="center">
          <v-col order="1" order-md="0" md="6" cols="12">
            <v-responsive
              class="mx-auto title font-weight-light"
              max-width="800"
            >
              My name is Tamer Khraisha, I have been living in Europe for the
              past 13 years, and currently, I am based in Luxembourg. I did my
              undergraduate studies in finance and economics, which constitute
              my primary domain of knowledge. After that, I earned a Ph.D. cum
              laude in Network Science from the Department of Network and Data
              Science at the Central European University in Budapest. Currently,
              I am employed as a Quantitative Developer NextGateTech, where we
              are developing a cloud-based smart oversight platform for the
              asset management industry.
            </v-responsive>
            <v-btn
              href="http://www.tamerkhraisha.com/files/curriculum_latest.pdf"
              target="_blank"
              color="grey"
              outlined
              large
              v-if="false"
            >
              <span class="grey--text text--darken-1 font-weight-bold">
                Download My CV
              </span>
            </v-btn>
          </v-col>
          <v-col md="6" cols="12">
            <div class="v-flex justfiy-center">
              <v-img
                width="500"
                height="400"
                src="@/assets/Amsterdam.jpeg"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </div>

      <div></div>
    </v-container>
    <v-avatar v-if="false" class="elevation-12 " size="128">
      <v-img src="@/assets/tamer3.jpg"></v-img>
    </v-avatar>
    <div class="py-12"></div>
  </section>
</template>
<style scoped>
#me {
  background-image: src("@/assets/lux.jpg");
}
</style>
