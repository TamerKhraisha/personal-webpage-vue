<template>
  <section id="about-me">
    <div class="py-12"></div>
    <v-container class="text-center">
      <div class="d-flex flex-column align-center justify-center">
        <h2 class="display-1 mb-3 primary--text">ABOUT ME</h2>
        <v-img width="400" height="100" src="@/assets/pencil40.jpeg"></v-img>
        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row align="center">
          <v-col>
            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              My name is Tamer Khraisha and I am originally from the Middle
              East. I have been living in Europe for the past 13 years, and
              currently, I am based in Luxembourg. I did my undergraduate
              studies in finance and economics, which constitute my primary
              domain of knowledge. After that, I earned a Ph.D. cum laude in
              Network Science from the Department of Network and Data Science at
              the Central European University in Budapest. Currently, I am
              employed as a Quantitative Developer NextGateTech, where we are
              developing a cloud-based smart oversight platform for the asset
              management industry.
            </v-responsive>
          </v-col>
        </v-row>
      </div>
      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="@/assets/tamer3.jpg"></v-img>
      </v-avatar>

      <div></div>

      <v-btn
        href="http://www.tamerkhraisha.com/files/curriculum_latest.pdf"
        target="_blank"
        color="grey"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          Download My CV
        </span>
      </v-btn>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
