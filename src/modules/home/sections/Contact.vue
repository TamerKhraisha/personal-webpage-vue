<template>
  <v-sheet id="contact" tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2
        class="display-1 mb-3 text-uppercase text-center primary--text"
        style="font-family: Francois One !important"
      >
        get in touch
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-container fill-height>
        <v-row no-gutters justify="space-around" align="center">
          <v-col md="5" cols="12">
            <div
              class="title primary--text mb-3"
              style="font-family: Francois One !important"
            >
              CONTACT INFO
            </div>
            <div class="title my-2">
              <v-icon class="mr-3">mdi-map-marker</v-icon>Budapest (Hungary)
            </div>
            <div class="title my-2">
              <v-icon class="mr-3">mdi-phone</v-icon>+(36) 70 590 1083
            </div>
            <div class="title my-2">
              <v-icon class="mr-3">mdi-email</v-icon>tamer.khraisha2@gmail.com
            </div>
            <div class="py-3"></div>
            <div
              class="title primary--text mb-3"
              style="font-family: Francois One !important"
            >
              SOCIAL MEDIA
            </div>
            <div class="d-flex align-center justify-start">
              <v-btn
                href="https://www.facebook.com/people/Tamer-Khraisha/100014826257439"
                class="mr-1"
                target="_blank"
                icon
                text
                large
                ><v-icon x-large>mdi-facebook</v-icon></v-btn
              >
              <v-btn
                href="https://twitter.com/Tamer_Khraisha"
                target="_blank"
                class="mr-1"
                large
                icon
                text
                ><v-icon x-large>mdi-twitter</v-icon></v-btn
              >
              <v-btn
                href="https://www.linkedin.com/in/tamer-khraisha/"
                target="_blank"
                class="mr-1"
                large
                icon
                text
                ><v-icon x-large>mdi-linkedin</v-icon></v-btn
              >
              <v-btn
                href="https://github.com/TamerKhraisha"
                target="_blank"
                class="mr-1"
                large
                icon
                text
                ><v-icon x-large>mdi-github</v-icon></v-btn
              >
              <v-btn
                href="https://codepen.io/TamerKhraisha"
                target="_blank"
                large
                icon
                text
                ><v-icon x-large>mdi-codepen</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <v-img
              id="budapest-image"
              contain
              src="../../../assets/budapest.png"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-sheet>
</template>
<style scoped>
#budapest-image {
  box-shadow: 40px 0px 70px 5px white inset, -10px -10px 10px 5px white inset;
}
</style>
