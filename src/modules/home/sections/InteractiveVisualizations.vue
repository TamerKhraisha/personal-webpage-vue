<template>
  <section class="grey lighten-5" id="features">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-1 mb-3 primary--text text-uppercase">
        interactive visualizations
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-data-iterator
        :items="visualizations"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        hide-default-footer
      >
        <template v-slot:default="props">
          <v-row>
            <v-col v-for="(item, i) in props.items" :key="i" cols="12" md="4">
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <a
                    style="text-decoration:none"
                    :href="item.link"
                    target="_blank"
                  >
                    <v-img :aspect-ratio="16 / 9" :src="item.src">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          :class="[
                            'px-2',
                            'd-flex',
                            'transition-fast-in-fast-out',
                            ' font-weight-bold',
                            'cyan darken-2',
                            'v-card--reveal',
                            'white--text',
                            $vuetify.breakpoint.lgAndDown ? 'title' : 'headline'
                          ]"
                          style="height: 100%;"
                        >
                          {{ item.text }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative;">
                      <span
                        :class="[
                          hover ? 'cyan--text' : 'black--text',
                          $vuetify.breakpoint.lgAndDown
                            ? 'headline'
                            : 'display-1'
                        ]"
                      >
                        {{ item.title }}
                      </span>
                    </v-card-text>
                  </a>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
      <div class="mt-5">
        <v-btn
          small
          fab
          text
          outlined
          color="info"
          class="mr-1"
          @click="formerPage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          fab
          small
          text
          outlined
          color="info"
          class="ml-1"
          @click="nextPage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      itemsPerPage: 3,
      page: 1,
      visualizations: [
        {
          title: "Interactive Illustration of the Force Layout in D3.js",
          src: require("@/assets/d3.png"),
          link:
            "http://tamerkhraisha.com/visualizations/DS_presentation/index.html",
          text:
            "D3.js is one of the most powerful options available for producing web-based data visualizations. Here I illustrate how the D3 Force Layout (one of the several domains available in D3.js) works in detail."
        },
        {
          title: "Visualization of the Syndicated Lending Market",
          src: require("@/assets/banknotes.jpg"),
          link:
            "http://tamerkhraisha.com/visualizations/syndicated_loans_bubble_chart/index.html",
          text:
            "A D3.js interactive visualization illustrating the market share of banks in the syndicated lending market."
        },
        {
          title: "The Network of Associations Between Personality Traits",
          link:
            "http://tamerkhraisha.com/visualizations/psychological_traits_network/index.html",
          src: require("@/assets/pencil11.jpg"),
          text:
            "A D3.js interactive visualization of a network created by connecting different personality traits using linear associations."
        },
        {
          title: "Evolution of The International Weapon Trade Network",
          src: require("@/assets/weapon.jpg"),
          link:
            "http://tamerkhraisha.com/visualizations/weapon_trade_network/index.html",
          text:
            "A D3.js interactive visualization of the temporal evolution of the international weaponn trade among countries."
        },
        {
          title: "Visualizing Graph-Related Attributes of a Financial Network",
          src: require("@/assets/syndicated-graph-attributes.png"),
          link:
            "http://tamerkhraisha.com/visualizations/NetworkAttributes.html",
          text:
            "D3.js is one of the most powerful options available for producing web-based data visualizations. Here I illustrate how the D3 Force Layout (one of the several domains available in D3.js) works in detail."
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.visualizations.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
