<template>
  <section>
    <v-img height="100vh" src="@/assets/pencil3.jpg">
      <v-theme-provider dark>
        <v-container fill-height>
          <div
            style="width:100%"
            class="d-flex justify-center align-center flex-column white--text mt-10"
          >
            <span class="display-1 mb-3">
              Tamer Khraisha
            </span>
            <span
              :class="[$vuetify.breakpoint.mdAndDown ? 'title' : 'headline']"
              style="font-family: Francois One !important"
              >Software and Analytical Skills</span
            >
            <v-btn class="mt-5" fab outlined @click="$vuetify.goTo('#skills')">
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>
