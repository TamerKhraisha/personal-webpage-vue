<template>
  <section id="experience">
    <v-container>
      <v-card flat>
        <v-card-text>
          <div class="d-flex flex-column my-5">
            <p class="title">January 2018 - Present</p>
            <p
              class="headline primary--text"
              style="font-family: Francois One !important"
            >
              Software & Data Developer @ Alphacruncher
            </p>
            <p
              :class="[
                'ma-0',
                'primary--text',
                $vuetify.breakpoint.lgAndDown ? 'subtitle-1' : 'title'
              ]"
            >
              Alphacruncher AG, a spin-off from a Swiss university, is a
              technology company providing professional, scientific and
              technical services. Alphacruncher’s core objective is to boost
              scientific research and education by integrating cutting edge
              advances in computation, data and cloud technology. In 2019
              Alphacruncher launched
              <a
                style="text-decoration:none"
                href="https://nuvolos.cloud/"
                class="cyan--text"
                target="_blank"
                >Nuvolos</a
              >, the knowledge creation cloud, an integrated and unified cloud
              framework designed and built for the needs of academics.
            </p>
            <v-divider class="my-5" />
            <ul style="list-style-type:none" class="pa-0">
              <li class="mb-2" v-for="item in ac_experience" :key="item">
                <div class="d-flex align-center">
                  <v-icon color="deep-orange accent-4" class="mr-3"
                    >mdi-check-circle</v-icon
                  ><span
                    :class="[
                      'ma-0',
                      'primary--text',
                      $vuetify.breakpoint.smAndDown ? 'subtitle-1' : 'title'
                    ]"
                    >{{ item }}</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ac_experience: [
        "Co-developing a machine learning sales forecasting application using Prophet and LightGBM.",
        "Developing the UI/UX for the cloud platform Nuvolos cloud platform using Vue.js and implementing the Material Design Framework using Vuetify.",
        "Creating metadata for data models and supporting online documentation for conventional and alternative financial datasets such as TAQ, CRSP, COMPUSTAT, IVYDB OptionMetrics, RavenPack, DealScan, Mergent, and Abel Noser Ancerno.",
        "Creating interactive web visualizations and dashboards for financial datasets using D3.js and Apache Superset.",
        "Researching methods employed in the extant literature for filtering errors and biases in financial datasets offered with citations.",
        "Writing complex SQL code for implementing the various methods for filtering and manipulating the datasets.",
        "Adding new backend functionalities to the Comprehensive Knowledge Archive Network (CKAN) for data management.",
        "Creating a Python library for automating the identification and correction of date formats in financial datasets.",
        "Automating ETL and data science tasks via Directed Acyclic Graph (DAGs) scripts in Apache Airflow and Metaflow.",
        "Worked on financial data matching for reproducing datasets used inscientific papers.",
        "Created a Python application for performing financial eventstudies using Compustat Global.",
        "Creating dockerized environment for testing web applications using Selenium."
      ]
    };
  }
};
</script>
