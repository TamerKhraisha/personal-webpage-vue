<template>
  <section id="blog">
    <v-container
      :style="
        $vuetify.breakpoint.lgAndDown ? 'margin-top:128px' : 'margin-top:128px;'
      "
      :fluid="$vuetify.breakpoint.lgAndDown"
    >
      <h2 class="display-1 mb-3 primary--text text-uppercase text-center">
        blog posts
      </h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row no-gutters justify="center" align="center">
        <v-col>
          <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:default="props">
              <div class="d-flex align-center flex-column">
                <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
                  <v-timeline-item
                    v-for="(item, index) in props.items"
                    :key="index"
                    fill-dot
                    :color="item.dotColor"
                  >
                    <v-card outlined light>
                      <v-card-title>
                        <div class="d-flex align-center">
                          <v-avatar class="elevation-5" size="40">
                            <v-img src="@/assets/tamer3.jpg"></v-img>
                          </v-avatar>
                          <div class="d-flex flex-column ml-2 primary--text">
                            <span class="subtitle-2">Tamer Khraisha</span>
                            <span class="caption">{{ item.date }}</span>
                          </div>
                        </div>
                      </v-card-title>
                      <v-card-text>
                        <div class="d-flex flex-column">
                          <v-img
                            :aspect-ratio="item.aspectRatio"
                            class="mb-5"
                            v-if="item.image"
                            :src="item.image"
                          ></v-img>
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
                          <div class="my-3 subtitle-1">
                            <span
                              v-if="
                                item.allDescription === true ||
                                  item.description.length <= 350
                              "
                              >{{ item.description }}</span
                            >
                            <span v-else>{{
                              item.description.substring(0, 350)
                            }}</span>
                            <a
                              v-if="
                                item.allDescription === false &&
                                  item.description.length > 350
                              "
                              @click="items[index].allDescription = true"
                              class="cyan--text"
                              >...show all</a
                            >
                            <a
                              v-else-if="
                                item.allDescription === true &&
                                  item.description.length > 350
                              "
                              @click="items[index].allDescription = false"
                              class="cyan--text"
                            >
                              show less</a
                            >
                          </div>
                          <div
                            class="mt-3 d-flex flex-wrap justify-space-between align-center"
                          >
                            <div
                              class="d-flex align-center flex-wrap text-uppercase caption secondary--text"
                            >
                              <div v-for="(tag, idx) in item.tags" :key="idx">
                                <v-chip
                                  class="ml-1"
                                  color="black"
                                  small
                                  outlined
                                  >{{ tag }}</v-chip
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                    <template v-slot:opposite>
                      <span
                        :class="`title text-uppercase ${item.color}--text`"
                        style="font-family: Francois One !important;"
                      >
                        {{ item.category }}</span
                      >
                    </template>
                  </v-timeline-item>
                </v-timeline>
                <v-divider color="grey" />
              </div>
            </template>
          </v-data-iterator>
          <v-pagination
            circle
            class="mt-5"
            color="cyan"
            light
            v-model="page"
            :length="numberOfPages"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "BlogIterator",
  data() {
    return {
      itemsPerPageArray: [5, 8, 12],
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 5,
      sortBy: "name",
      keys: [
        "Name",
        "Calories",
        "Fat",
        "Carbs",
        "Protein",
        "Sodium",
        "Calcium",
        "Iron"
      ],
      items: [
        {
          title: "Swiss Research Data Day 2020",
          link: "https://www.dlcm.ch/swiss-research-data-day-2020/call",
          category: "conference",
          aspectRatio: 3.5,
          date: "October 22, 2020",
          image: require("@/assets/swiss_day.jpg"),
          tags: [
            "open source",
            "emerging approaches",
            "nuvolos",
            "switzerland"
          ],
          dotColor: "amber lighten-1",
          color: "amber",
          allDescription: false,
          description:
            "The 2020 edition of the Swiss Research Data day will focus on all aspects of Research Data Management(RDM).The event brings together an interdisciplinary community of researchers, librarians, funders, publishers and policy-makers, providing a critical look at the new developments in RDM practices, standards and technologies.\nIn this conference, I will by presenting Nuvolos, the knowledge creation cloud, an integrated and unified cloud framework designed and built for the needs of academics."
        },
        {
          title: "USPTO Patent Data Parser in Python",
          image: require("@/assets/uspto.jpg"),
          date: "September 7, 2020",
          aspectRatio: 2,
          category: "python project",
          tags: ["python", "uspto", "patents"],
          dotColor: "cyan lighten-1",
          color: "cyan",
          allDescription: false,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....."
        },
        {
          title:
            "A Holistic Approach to Financial Data Science: Data, Technology, and Analytics",
          category: "scientific publication",
          date: "March 17, 2020",
          aspectRatio: 3,
          image: require("@/assets/finance.jpg"),
          link:
            "https://jfds.pm-research.com/content/early/2020/03/17/jfds.2020.1.031#:~:text=In%20what%20follows%2C%20the%20author,%2C%20model%20development%2C%20and%20interpretation.",
          tags: ["science", "data", "switzerland"],
          allDescription: false,
          dotColor: "red lighten-1",
          color: "red",
          description:
            "The scientific analysis of financial data, both for practical and theoretical purposes, has continuously been an active and evolving area. Traditionally, financial modeling and analysis have primarily relied on financial econometrics, which applies statistical methods to the problems of finance. Recently, advances in analytical and algorithmic methods, powerful technological solutions, and the expansion of the financial data ecosystem have created new opportunities and provided novel and robust ways to solve existing and new problems in finance. To expand the scope of financial econometrics and incorporate these novelties, the field of financial data science (FDS) has emerged. Crucially, FDS adds more interdisciplinary, methodological variety and technological components to the analysis process, thus generating the need for a holistic view in the management of an FDS project. In this article, the author presents a holistic and structured approach to efficiently and effectively manage an FDS project. The main contribution of the article is to provide a comprehensive, financial domain–oriented approach to FDS management that can be used by researchers and practitioners to exploit the opportunities arising from the evolving finance landscape."
        },
        {
          title:
            "Industry Applications of Network Science and Graph Algorithms",
          category: "blog article",
          date: "August 22, 2020",
          link:
            "https://www.linkedin.com/pulse/industry-applications-network-science-graph-tamer-khraisha-phd/?trackingId=4xWVKbMhT6i%2FUxmgMS58WA%3D%3D",
          tags: ["network science", "industry", "applications"],
          image: require("@/assets/network-science.jpg"),
          allDescription: false,
          aspectRatio: 3,
          dotColor: "green lighten-1",
          color: "green",
          description:
            "Network science has emerged as an interdisciplinary field of research to leverage network data's increasing availability to investigate a wide range of complex phenomena such as collective social behavior, technological development, financial stability, biological interactions, and many more. Simply put, network data consists of entities known as nodes, and relations between them are known as links. Nodes can be persons, organizations, URLs, or proteins. Links can represent relations such as the friendship between persons, technological transfers between firms, hyperlinks between websites, and chemical interactions between proteins. Network science employs an extensive array of analytical methods and data science techniques borrowed from sociology, mathematics, physics, computer science, economics, and other fields.\nMost current research in network science has focused on measurements and the construction of theoretical and data-driven models. Although less has been done on the industry side, there are several cases and areas in which network science has either been successfully employed or could potentially be applied. In this article, I will illustrate some of these applications and provide examples and references for further investigations."
        },
        {
          title: "The Master Data Scientist",
          link:
            "https://medium.com/@tamer.khraisha2/the-master-data-scientist-5b9132d271c0",
          image: require("@/assets/data-scientist.jpeg"),
          category: "blog article",
          tags: ["data science", "practice"],
          dotColor: "grey lighten-1",
          aspectRatio: 3,
          color: "grey",
          allDescription: false,
          description:
            "Inthis blog post, I will try to give an overview of what data science is and discuss its use in industry and academia. The main reason for writing this blog is that I noticed that many discussions about data science are revolving around the skills that a data scientist need to have without actually understanding why do we need data science and where data science is actually being employed. Additionally, in this post I would like to point out to the fact that what is usually listed as skills to be possessed by a data scientist are rarely found in one person."
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  }
};
</script>
