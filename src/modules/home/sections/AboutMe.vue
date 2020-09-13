<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-1 mb-3 primary--text khraisha">
        ABOUT ME
      </h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8 tamer"
        max-width="720"
      >
        My name is Tamer Khraisha and I am originally from the Middle East. I
        have been living in Europe for the past 12 years, and currently, I am
        based in Budapest, Hungary. I did my undergraduate studies in finance
        and economics, which constitute my primary domain of knowledge. After
        that, I earned a Ph.D. cum laude in Network Science from the Department
        of Network and Data Science at the Central European University in
        Budapest. Currently, I am employed as a software and data developer at
        Alphacruncher, where we are mainly developing
        <a
          style="text-decoration:none"
          href="https://nuvolos.cloud/"
          target="_blank"
          >Nuvolos</a
        >, the knowledge creation cloud, an integrated and unified cloud
        platform designed for online education and research.
      </v-responsive>

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
