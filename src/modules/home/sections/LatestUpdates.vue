<template>
  <section id="blog" class="grey lighten-5">
    <div class="py-12"></div>

    <v-container>
      <h2
        class="display-1 mb-3 text-uppercase text-center primary--text francois-one"
      >
        RECENT ACTIVITIES
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="(item, i) in articles" :key="i" cols="12" md="4">
          <v-img
            :src="item.src"
            class="mb-4"
            height="275"
            max-width="100%"
          ></v-img>
          <p
            style="font-family: Francois One !important"
            class="caption text-uppercase red--text"
          >
            {{ item.category }}
          </p>
          <a :href="item.link" target="_blank" style="text-decoration: none;">
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
          <div class="title font-weight-light mb-5 mt-2">
            {{ item.text.substring(0, 150) }}...
          </div>
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
      articles: [
        {
          src: require("@/assets/swiss_day.jpg"),
          title: "Swiss Research Data Day 2020",
          category: "conference",
          link: "https://www.dlcm.ch/swiss-research-data-day-2020/call",
          text:
            "The 2020 edition of the Swiss Research Data day will focus on all aspects of Research Data Management(RDM).The event brings together an interdisciplinary community of researchers, librarians, funders, publishers and policy-makers, providing a critical look at the new developments in RDM practices, standards and technologies.\nIn this conference, I will by presenting Nuvolos, the knowledge creation cloud, an integrated and unified cloud framework designed and built for the needs of academics."
        },
        {
          src: require("@/assets/network-science.jpg"),
          category: "blog article",
          title:
            "Industry Applications of Network Science and Graph Algorithms",
          text:
            "Network science has emerged as an interdisciplinary field of research to leverage network data's increasing availability to investigate a wide range of complex phenomena such as collective social behavior, technological development, financial stability, biological interactions, and many more. Simply put, network data consists of entities known as nodes, and relations between them are known as links. Nodes can be persons, organizations, URLs, or proteins. Links can represent relations such as the friendship between persons, technological transfers between firms, hyperlinks between websites, and chemical interactions between proteins. Network science employs an extensive array of analytical methods and data science techniques borrowed from sociology, mathematics, physics, computer science, economics, and other fields.\nMost current research in network science has focused on measurements and the construction of theoretical and data-driven models. Although less has been done on the industry side, there are several cases and areas in which network science has either been successfully employed or could potentially be applied. In this article, I will illustrate some of these applications and provide examples and references for further investigations."
        },
        {
          src: require("@/assets/finance.jpg"),
          category: "scientific publication",
          title: "A Holistic Approach to Financial Data Science",
          text:
            "The scientific analysis of financial data, both for practical and theoretical purposes, has continuously been an active and evolving area. Traditionally, financial modeling and analysis have primarily relied on financial econometrics, which applies statistical methods to the problems of finance. Recently, advances in analytical and algorithmic methods, powerful technological solutions, and the expansion of the financial data ecosystem have created new opportunities and provided novel and robust ways to solve existing and new problems in finance. To expand the scope of financial econometrics and incorporate these novelties, the field of financial data science (FDS) has emerged. Crucially, FDS adds more interdisciplinary, methodological variety and technological components to the analysis process, thus generating the need for a holistic view in the management of an FDS project. In this article, the author presents a holistic and structured approach to efficiently and effectively manage an FDS project. The main contribution of the article is to provide a comprehensive, financial domain–oriented approach to FDS management that can be used by researchers and practitioners to exploit the opportunities arising from the evolving finance landscape."
        }
      ]
    };
  }
};
</script>
