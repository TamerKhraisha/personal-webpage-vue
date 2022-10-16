<template>
  <section>
    <v-img height="100vh" src="@/assets/earth.jpg">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="error"
          ></v-progress-circular>
        </v-row>
      </template>
      <v-theme-provider dark>
        <v-container fill-height>
          <div
            style="width:100%"
            class="d-flex justify-center align-center flex-column white--text mt-10"
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
              >Academic Achievements and Research</span
            >
            <v-btn
              class="mt-5"
              fab
              outlined
              @click="$vuetify.goTo('#academia')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>
