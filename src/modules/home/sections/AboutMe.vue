<template>
  <section id="about-me">
    <div class="py-12"></div>
    <v-container>
      <h2 class="display-1 mb-3 primary--text text-center">ABOUT ME</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row align="center" justify="center">
        <v-col order="1" order-md="0" md="5" cols="10">
          <p
            class="primary--text py-0 subtitle"
            style="font-family: Francois One !important"
          >
            My name is Tamer Khraisha and I am a software developer, scientific
            researcher, and a writer. I have been living in Europe for the past
            13 years, and currently, I am based in Luxembourg.
          </p>
          <span>
            I did my undergraduate studies in finance and economics, which
            constitute my primary domain of knowledge. After that, I earned a
            Ph.D. cum laude in Network Science from the Department of Network
            and Data Science at the Central European University in Budapest.
            Currently, I am employed as a Quantitative Developer at
            NextGateTech, where we are developing a cloud-based oversight
            platform for the asset management industry.
          </span>
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
          <div class="d-flex justify-center">
            <v-img
              max-width="500"
              max-height="550"
              src="@/assets/Amsterdam.jpeg"
            ></v-img>
          </div>
        </v-col>
      </v-row>

      <div></div>
    </v-container>
    <v-avatar v-if="false" class="elevation-12 " size="128">
      <v-img src="@/assets/tamer3.jpg"></v-img>
    </v-avatar>
    <div class="py-12"></div>
  </section>
</template>
