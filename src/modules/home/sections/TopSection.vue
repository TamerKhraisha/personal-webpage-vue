<template>
  <section id="hero">
    <v-img height="100vh" src="@/assets/earth.jpg">
      <v-theme-provider dark>
        <v-container fill-height>
          <div
            style="width:100%"
            class="d-flex flex-column justify-center align-center white--text mt-10"
          >
            <span
              :class="[
                $vuetify.breakpoint.lgAndDown ? 'display-1' : 'display-2'
              ]"
              style="font-family: Francois One !important"
            >
              TAMER KHRAISHA
            </span>
            <span
              :class="[
                $vuetify.breakpoint.lgAndDown ? 'headline' : 'display-1'
              ]"
            >
              Software & Data Developer
            </span>
            <v-btn
              class="mt-5"
              fab
              outlined
              @click="$vuetify.goTo('#about-me')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>
