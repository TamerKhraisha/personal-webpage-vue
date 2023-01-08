<template>
  <section id="features" class="grey lighten-5">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-1 mb-3 primary--text text-uppercase">
        recent projects
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="(item, i) in projects" :key="i" cols="12" md="4">
          <v-card class="py-12 px-4" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar class="mb-12" size="128">
                  <v-img src="@/assets/visualization.jpg"></v-img>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center primary--text text-uppercase"
              style="font-family: Francois One !important"
            >
              <a
                :href="item.link"
                target="_blank"
                style="text-decoration: none;"
              >
                <v-hover v-slot:default="{ hover }">
                  <span
                    :class="[
                      'headline',
                      'mb-2',
                      hover ? 'cyan--text' : 'primary--text'
                    ]"
                    style="font-family: Francois One !important;"
                    >{{ item.title }}</span
                  >
                </v-hover>
              </a>
            </v-card-title>

            <v-card-text class="subtitle-1 text-justify">
              {{ item.text.substring(0, 210) }}...
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title:
            "patent citation analysis with Neo4j Data Science(coming soon)",
          text:
            "This project will use the Neo4j Graph Data Science library to analyze patent citations. Problems like community decection, centrality, similary, path finding, and link prediction in patent data will be explored and analyzed."
        },
        {
          title: "United States Patent and Trademark (USPTO) Data Parser",
          link: "https://github.com/TamerKhraisha/uspto-patent-data-parser",
          text:
            "A python tool for reading, parsing, and finding patents using the United States Patent and Trademark (USPTO) Bulk Data Storage System. This tool is designed to parse the Patent Grant Full Text Data section, which contains full text of each patent grant issued weekly (Tuesdays) from January 1, 1976 to present (excludes images/drawings)."
        },
        {
          title: "A Reusable SQL QueryBuilder built with Vue and Vuetify",
          link: "https://github.com/TamerKhraisha/Vuetify-QueryBuilder",
          text:
            "Vuetify Query Builder is a SQL query interface that makes it easy for your users to write queries without the need to know SQL. It's useful if you have users whose knowledge of SQL is at the basic level. The componnent covers the basic SQL command but it is very easy to extend to include more complex SQL functionalities."
        }
      ]
    };
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
