<template>
  <section id="experience">
    <v-container>
      <v-card flat>
        <v-card-text>
          <div class="d-flex flex-column my-5">
            <p class="title">July 2021 - Present</p>
            <p
              class="headline primary--text"
              style="font-family: Francois One !important"
            >
              Quantitative Developer @ NextGateTech
            </p>
            <p
              :class="[
                'ma-0',
                'primary--text',
                $vuetify.breakpoint.lgAndDown ? 'subtitle-1' : 'title'
              ]"
            >
              Next Gate Tech leverages the latest cloud technology to give
              clients all their data from multiple unharmonized/unstructured
              sources, as one consistent, consolidated, and independent source
              enabling them to streamline their day-to-day processes.
            </p>
            <v-divider class="my-5" />
            <ul style="list-style-type:none" class="pa-0">
              <li class="mb-2" v-for="item in ngt_experience" :key="item">
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

          <div class="h-divider">
            <div class="shadow"></div>
            <div class="text2">
              <img src="@/assets/divider.png" />
            </div>
          </div>
          <br />

          <div class="d-flex flex-column my-5">
            <p class="title">January 2018 - June 2021</p>
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
      ],
      ngt_experience: [
        "Developing a workflow solution for building and running data and analytical pipelines in production.",
        "Co-developing microservice applications for harmonizing, transforming, and enriching client data for production release.",
        "Developing an event-driven distributed cloud orchestration solution for automating and monitoring microservice processes.",
        "Designing and optimizing database solutions and best practices for OLTP and OLAP.",
        "Developing a data transformation solution for converting the workflow outcome into readable input for the client dashboard.",
        "Conducting and presenting detailed research into the technologies and design patterns for orchestration, cloud solutions and economics, and database optimization."
      ]
    };
  }
};
</script>
<style scoped>
.h-divider {
  margin: auto;
  margin-top: 80px;
  width: 80%;
  position: relative;
}

.h-divider .shadow {
  overflow: hidden;
  height: 20px;
}

.h-divider .shadow:after {
  content: "";
  display: block;
  margin: -25px auto 0;
  width: 100%;
  height: 25px;
  border-radius: 125px/12px;
  box-shadow: 0 0 8px black;
}

.h-divider .text {
  width: 100px;
  height: 45px;
  padding: 10px;
  position: absolute;
  bottom: 100%;
  margin-bottom: -33px;
  left: 50%;
  margin-left: -60px;
  border-radius: 100%;
  box-shadow: 0 2px 4px #999;
  background: white;
}

.h-divider .text i {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  border-radius: 100%;
  border: 1px dashed #aaa;
  text-align: center;
  line-height: 50px;
  font-style: normal;
  color: #999;
}

.h-divider .text2 {
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 100%;
  margin-bottom: -35px;
  left: 50%;
  margin-left: -25px;
  border-radius: 100%;
  box-shadow: 0 2px 4px #999;
  background: white;
}

.h-divider img {
  position: absolute;
  margin: 4px;
  max-width: 60px;
  border-radius: 100%;
  border: 1px dashed #aaa;
}
</style>
