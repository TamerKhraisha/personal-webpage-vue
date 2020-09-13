<template>
  <section id="skills">
    <v-container>
      <v-card flat>
        <v-card-text>
          <div class="d-flex align-start flex-column">
            <div style="width:100%" class="d-flex flex-column">
              <div class="d-flex flex-column">
                <span
                  :style="
                    $vuetify.breakpoint.mdAndUp
                      ? 'padding-top:100px'
                      : 'padding-top:50px'
                  "
                  class="title text-uppercase black--text mb-3"
                  >software skills</span
                >
                <span
                  :class="[
                    'mb-3',
                    'text-justify',
                    $vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'
                  ]"
                >
                  I strongly believe that professional knowledge of software
                  development should go beyond learning tools and technologies.
                  Mastering best practices and adopting a pragmatic approach
                  throughout the full software development process is what
                  guarantees efficiency and productivity.
                </span>
              </div>
              <v-list-item-group
                :style="
                  $vuetify.breakpoint.xlAndUp
                    ? 'width:80%'
                    : $vuetify.breakpoint.lgAndUp
                    ? 'width:90%'
                    : 'width:100%'
                "
              >
                <template v-for="(item, index) in softwareSkills">
                  <v-list-item
                    :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : ''"
                    :key="index"
                  >
                    <v-list-item-avatar size="70">
                      <v-img contain height="42" :src="item.icon" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        ><span
                          style="font-family: Francois One !important"
                          class="subtitle-1 primary--text"
                          >{{ item.headline }}</span
                        ></v-list-item-title
                      >
                      <v-list-item-subtitle>
                        <v-rating
                          v-model="item.value"
                          :length="item.length"
                          readonly
                          color="primary"
                          background-color="primary"
                          full-icon="mdi-checkbox-blank-circle"
                          empty-icon="mdi-checkbox-blank-circle-outline"
                          :size="$vuetify.breakpoint.smAndDown ? 13 : 20"
                        >
                        </v-rating>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider
                    v-if="index + 1 < softwareSkills.length"
                    :key="item.headline"
                    inset
                  ></v-divider>
                </template>
              </v-list-item-group>
            </div>
            <div style="width:100%" class="d-flex flex-column">
              <div class="d-flex flex-column">
                <span
                  :style="
                    $vuetify.breakpoint.mdAndUp
                      ? 'padding-top:100px'
                      : 'padding-top:50px'
                  "
                  class="title text-uppercase black--text mb-3"
                  >Analytical Skills</span
                >
                <span
                  :class="[
                    'mb-3',
                    'text-justify',
                    $vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'
                  ]"
                >
                  In mastering analytical tools, my approach is mainly based on
                  three principles: (1) understandng the type of problems a tool
                  can solve within a domain, (2) the assumptions behind the
                  tool, and (3) illustrating the pros and cons of the tool.
                </span>
              </div>
              <v-list-item-group
                :style="
                  $vuetify.breakpoint.xlAndUp
                    ? 'width:80%'
                    : $vuetify.breakpoint.lgAndUp
                    ? 'width:90%'
                    : 'width:100%'
                "
              >
                <template v-for="(item, index) in analyticalSkills">
                  <v-list-item
                    :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : ''"
                    :key="index"
                  >
                    <v-list-item-avatar size="70">
                      <v-img contain height="50" :src="item.icon"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        ><span
                          style="font-family: Francois One !important"
                          class="subtitle-1 primary--text"
                          >{{ item.headline }}</span
                        ></v-list-item-title
                      >
                      <v-list-item-subtitle>
                        <v-rating
                          v-model="item.value"
                          :length="item.length"
                          readonly
                          color="primary"
                          background-color="primary"
                          full-icon="mdi-checkbox-blank-circle"
                          empty-icon="mdi-checkbox-blank-circle-outline"
                          :size="$vuetify.breakpoint.smAndDown ? 10 : 20"
                        >
                        </v-rating>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider
                    v-if="index + 1 < analyticalSkills.length"
                    :key="item.headline"
                    inset
                  ></v-divider>
                </template>
              </v-list-item-group>
            </div>
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
      ex3: { label: "thumb-color", val: 50, color: "red" },
      softwareSkills: [
        {
          headline: "Python programming and development",
          icon: require("@/assets/python-icon.svg"),
          value: 8,
          length: 9,
          description: [
            "Advanced knowledge of Numpy, Scipy, and Matplotlib",
            "Advanced knowledge of data manipulation and analysis using Pandas",
            "Advanced knowledge of network data analysis using networkx",
            "Imtermediate-advanced knowledge of generators, iterators, decorators, and closures",
            "Intermediate knowledge of and Object-Relational Mappiing and SQLAlchemy",
            "Intermediate knowledge of scikit-learn for machine learning",
            "Basic knowledge of BeautifulSoup"
          ]
        },
        {
          headline: "SQL langauge and database management systems and design",
          icon: require("@/assets/sql-logo.svg"),
          value: 7,
          length: 9,
          description: [
            "Intermediate knowledge of the standard SQL-92 lauguage",
            "Intermediate-Advanced knowledge of the could-based warehouse Snowflake",
            "Intermediate knowledge of relational database management systems (RDBMS), in particular PostGres",
            "Basic theoretical knowledge of non-RDBMS like NoSQL"
          ]
        },
        {
          headline: "Amazon Web Services (S3, EC2, RDS)",
          icon: require("@/assets/aws-logo.svg"),
          value: 6,
          length: 9,
          description: [
            "Good knowledge working with virtual machines on Amazon Elastic Compute cloud EC2",
            "Good knowledge of Amazon Simple Storage Service (S3), in particular using python boto3 package",
            "Good knowledge working with databases with Amazon Relational Database Service RDS"
          ]
        },
        {
          headline: "Vue.js",
          icon: require("@/assets/vue-logo.svg"),
          value: 8,
          length: 9,
          description: [
            "Advanced knowledge of app development and modular design using Vue, Vuex, and axios",
            "Advanced knowledge of the Material Design Component Framework Veutify"
          ]
        },
        {
          headline: "HTML & CSS",
          icon: require("@/assets/html-logo.svg"),
          value: 7,
          length: 9,
          description: [
            "Intermediate-advanced knowledge with long experience with HTML(5) and CSS",
            "Intermediate-advanced knowledge of Responsive Design",
            "Intermediate knowledge of website deployment with Amazon Web Services and GoDaddy",
            "Intermediate knowledge of content-management systems like WordPress and Weebly",
            "Avdanced knowledge of SVG"
          ]
        },
        {
          headline: "JavaScript",
          icon: require("@/assets/javascript-logo.svg"),
          value: 7,
          length: 9,
          description: [
            "Experience with the standard object-oriented JavaScript language.",
            "Extended knowlage of DOM manipulation",
            "Advanced knowledge of element selection and manipulation",
            "very good knowledge of closures, prototypes, and javascript classes"
          ]
        },
        {
          headline: "D3.js",
          icon: require("@/assets/d3-logo.svg"),
          value: 6,
          length: 9,
          description: [
            "Advanced knowledge of D3 graph construction and online visualizations",
            "Advanced knowledge of SVG manupulation with D3 methods",
            "Avdanced knowledge with reading JSON, CSV, TSV, and other data formats with D3",
            "Advanced knowledge with transitions and geometric measures with D3",
            "Advanced understanding of the force-layout",
            "Worked with chart types like graphs, bar charts, multi-barcharts, line charts, time-series charts, chord diagrams, network graphs, and bubble charts"
          ]
        },
        {
          headline: "OS virtualization with Docker",
          icon: require("@/assets/docker-logo.svg"),
          value: 6,
          length: 9,
          description: [
            "Very Good knowledge of Dockerfiles, docker run and docker compose.",
            "Basic experience with Docker swarm"
          ]
        },
        {
          headline: "R programming",
          icon: require("@/assets/r-logo.svg"),
          value: 4,
          length: 9,
          description: [
            "Intermediate experience with R data structures such as matrices and dataframes",
            "basic knowledge of data visualization using ggplot2"
          ]
        }
      ],

      analyticalSkills: [
        {
          headline: "Data Mining/Machine Learning Algorithms and Techniques",
          icon: require("@/assets/machine-learning-logo.svg"),
          value: 8,
          length: 9,
          description: [
            "Data preparation, feature extraction, and data filtering",
            "Exploratory data analysis",
            "Dimensionality Reduction and Transformation",
            "Similarity and distances measures",
            "Good knowledge of data structures and algorithms",
            "Good knowledge of the linear regression model, its assumptions, and results interpretation",
            "Good knowledge of concepts such as regularization, cross-validation, training and testing datasets",
            "Good knowledge of the basic Support vector machines model",
            "Good knowledge of of the standard neural networks model",
            "Good knowledge of of k-means algorithm",
            "Good knowledge of the basics of reccomender systems"
          ]
        },
        {
          headline: "Networks and Complex Systems Analysis",
          icon: require("@/assets/networks-icon.svg"),
          value: 8,
          length: 9,
          description: [
            "Exploratory analysis of network data",
            "Social Network Analysis",
            "Application of network science in organizational mapping problems",
            "Financial and economic network modelling",
            "Network data manipulation and filtering",
            "Advanced knowledge of graph algorithms such as path finding, centrality measurement, and community detection",
            "Network formation models"
          ]
        },
        {
          headline: "Financial Data Analysis and Modelling",
          icon: require("@/assets/financial-analysis-logo.svg"),
          value: 6,
          length: 9,
          description: [
            "Time-series, cross-section, and panel data analysis",
            "Good knowledge of the concepts of corporate finance",
            "Financial network and contagion modelling",
            "Financial data preparation, filtering, and manipulation",
            "Value-at-Risk, Expected Shortfall",
            "Stochastic processes, Random fields, and Gaussian processes",
            "Basic knowledge of factor models",
            "Basic knowledge of derivatives",
            "Basic knowledge of asset pricing"
          ]
        },
        {
          headline: "Technological innovation analysis",
          icon: require("@/assets/technological-analysis-logo.svg"),
          value: 7,
          length: 9,
          description: [
            "Good experience analyzing processes of technological development such as emergence, diffusion, and evolution",
            "Analysis of the dynamics of exploration and exploitation in organizations",
            "Analysis of solution spaces and technological fitness landscapes",
            "Analysis of technological collaboration and alliances using networks"
          ]
        },
        {
          headline: "Computer Simulations",
          icon: require("@/assets/computer-simulations-logo.svg"),
          value: 7,
          length: 9,
          description: [
            "Experience with agent-based and multi-agent simulations",
            "Good knowledge of evolutionary computing methods including Ant Colony Optimization, Genetic Algorithms, Genetic Programming, and Differential Evolution"
          ]
        }
      ]
    };
  }
};
</script>
