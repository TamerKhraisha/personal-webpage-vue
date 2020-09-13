<template>
  <section id="academia">
    <v-container>
      <v-card flat>
        <v-card-text>
          <div class="d-flex flex-column align-start">
            <div>
              <div class="d-flex flex-column mb-10">
                <div class="d-flex flex-column">
                  <span
                    style="padding-top:100px"
                    class="title text-uppercase black--text mb-3"
                    >Publications</span
                  >
                  <span class="mb-3 subtitle-1">
                    My research interests are focused on two areas:
                    <span class="font-weight-bold"
                      >(1) technological innovation</span
                    >, where the aim is to understand how and why innovations
                    are initially developed, how and why do they diffuse and
                    gain popularity while others do not, and how to understand
                    their evolutionary dynamics;<span class="font-weight-bold"
                      >(2) Financial data science</span
                    >, where the goal is to understand how novelties from
                    machine learning and alternative datasets can help to
                    improve financial modeling and practices.
                  </span>
                </div>
              </div>
              <div
                v-for="(item, index) in publications"
                :key="item.title"
                class="mb-3"
              >
                <div class="d-flex align-start">
                  <span s class="font-weight-bold subtitle-1 mr-8">{{
                    item.year
                  }}</span>
                  <div class="d-flex flex-column">
                    <span
                      class="title"
                      style="font-family: Francois One !important"
                      >{{ item.title }}</span
                    >
                    <span
                      style="font-family: Francois One !important"
                      class="subtitle-1"
                      >{{ item.authors }}</span
                    >
                    <span style="font-family: Francois One !important">{{
                      item.journal
                    }}</span>
                    <div class="my-3 subtitle-1">
                      <span v-if="item.allAbstract === true">{{
                        item.abstract
                      }}</span>
                      <span v-else>{{ item.abstract.substring(0, 350) }}</span>
                      <a
                        v-if="item.allAbstract === false"
                        @click="publications[index].allAbstract = true"
                        class="cyan--text"
                        >...show all</a
                      >
                      <a
                        v-else-if="item.allAbstract === true"
                        @click="publications[index].allAbstract = false"
                        class="cyan--text"
                      >
                        show less</a
                      >
                    </div>

                    <div>
                      <v-btn
                        class="px-0"
                        :href="item.link"
                        target="_blank"
                        text
                        color="error"
                      >
                        <div class="d-flex align-center">
                          <v-icon class="mr-1" small>mdi-file</v-icon
                          ><span class="caption"
                            >Download paper from the publisher</span
                          >
                        </div>
                      </v-btn>
                    </div>
                    <v-divider
                      v-if="index + 1 !== publications.length"
                      class="my-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style="width:100%">
              <div class="d-flex flex-column mb-10">
                <span
                  style="padding-top:100px"
                  class="title text-uppercase black--text mb-3"
                  >university degrees</span
                >
              </div>
              <div
                v-for="(item, index) in universityDegrees"
                :key="item.title"
                class="mb-3"
              >
                <div class="d-flex align-start">
                  <span s class="font-weight-bold subtitle-1 mr-8">{{
                    item.year
                  }}</span>
                  <div class="d-flex flex-column">
                    <span
                      style="font-family: Francois One !important"
                      class="title"
                      >{{ item.title }}</span
                    >
                    <span class="subtitle-1">{{ item.university }}</span>
                    <span>{{ item.department }}</span>
                    <span> {{ item.date }}</span>
                  </div>
                </div>
                <v-divider
                  v-if="index + 1 !== universityDegrees.length"
                  class="my-5"
                />
              </div>
            </div>

            <div style="width:100%">
              <div class="d-flex flex-column mb-10">
                <span
                  style="padding-top:100px"
                  class="title text-uppercase black--text mb-3"
                  >visiting fellowships</span
                >
              </div>
              <div v-for="(item, index) in visitingFellowShips" :key="index">
                <div class="d-flex align-start">
                  <span s class="font-weight-bold subtitle-1 mr-8">{{
                    item.year
                  }}</span>
                  <div class="d-flex flex-column">
                    <span
                      style="font-family: Francois One !important"
                      class="title"
                      >{{ item.place }}</span
                    >
                    <span class="subtitle-1">{{ item.title }}</span>
                    <span> {{ item.date }}</span>
                  </div>
                </div>
                <v-divider
                  v-if="index + 1 !== universityDegrees.length"
                  class="my-5"
                />
              </div>
            </div>

            <div style="width:100%">
              <div class="d-flex flex-column mb-10">
                <span
                  style="padding-top:100px"
                  class="title text-uppercase black--text mb-3"
                  >conferences & schools</span
                >
              </div>
              <div v-for="(item, index) in conferencesAndSchools" :key="index">
                <div class="d-flex align-start">
                  <span s class="font-weight-bold subtitle-1 mr-8">{{
                    item.year
                  }}</span>
                  <div class="d-flex flex-column">
                    <span
                      style="font-family: Francois One !important"
                      class="title"
                      >{{ item.event }}</span
                    >
                    <span class="subtitle-1">{{ item.place }}</span>
                    <span> {{ item.date }}</span>
                  </div>
                </div>
                <v-divider
                  v-if="index + 1 !== conferencesAndSchools.length"
                  class="my-5"
                />
              </div>
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
      publications: [
        {
          title:
            "A Holistic Approach to Financial Data Science: Data, Technology, and Analytics",
          authors: "Khraisha, T",
          abstract:
            "The scientific analysis of financial data, both for practical and theoretical purposes, has continuously been an active and evolving area. Traditionally, financial modeling and analysis have primarily relied on financial econometrics, which applies statistical methods to the problems of finance. Recently, advances in analytical and algorithmic methods, powerful technological solutions, and the expansion of the financial data ecosystem have created new opportunities and provided novel and robust ways to solve existing and new problems in finance. To expand the scope of financial econometrics and incorporate these novelties, the field of financial data science (FDS) has emerged. Crucially, FDS adds more interdisciplinary, methodological variety and technological components to the analysis process, thus generating the need for a holistic view in the management of an FDS project. In this article, the author presents a holistic and structured approach to efficiently and effectively manage an FDS project. The main contribution of the article is to provide a comprehensive, financial-domain–oriented approach to FDS management that can be used by researchers and practitioners to exploit the opportunities arising from the evolving finance landscape.",
          allAbstract: false,
          journal: "The Journal of Financial Data Science 2 (2), 2020, 64-84",
          year: 2020,
          link: "https://jfds.pm-research.com/content/2/2/64"
        },
        {
          title: "Network structure and optimal technological innovation",
          authors: "Khraisha, T and Mantegna, RN",
          abstract:
            "The role of networks in the emergence, diffusion and evolution of technological innovations has attracted much theoretical and empirical attention. Yet, much of the work has explored the role of undirected and homogeneous networks. In real cases, many networks are directed. The flow of information, benefits or observations is directed from one node towards another node. Real networks are also heterogeneous, for example, few nodes have a high degree while many others have a low degree. In this article, we report on the results of an evolutionary agent-based model in which a group of agents, in our case firms, collectively search a complex (rugged) technological landscape and observe each other’s solutions with different frequencies through different observation networks. Two sets of networks are considered in the analysis. The first set comprises undirected networks that vary in terms of efficiency while the second set comprises directed networks that vary in terms of homogeneity of node degree. We find that collective innovation (described as an exploration of a technology landscape) improves average fitness over independent search because information about better innovations can diffuse faster through the network at an early stage. Moreover, we find that efficient networks outperform inefficient ones in the first stages of the search, but, given their slower rate of information diffusion, some of the inefficient networks require additional independent search which can guarantee a marginally better performance at later stages. We also find that degree homogeneous and undirected networks achieve better fitness on average than heterogeneous and directed ones. Finally, we apply our model to a simplified scenario of innovation diffusion in a financial system by using an empirical network obtained from the Thomson Reuters DealScan database. For this illustrative case study, our results are presented and discussed from the perspective of system-level technological innovation. We conclude by discussing implications for technological innovation and possible extensions.",
          allAbstract: false,
          journal: "Journal of Complex Networks 8 (1), 2020, cnz020",
          year: 2020,
          link:
            "https://academic.oup.com/comnet/article-abstract/8/1/cnz020/5512541"
        },
        {
          title:
            "Complex economic problems and fitness landscapes: assessment and methodological perspectives",
          authors: "Khraisha, T",
          abstract:
            "Recently, a new line of interdisciplinary research in economics, coined complexity economics, has emerged premised on the assumption that the economy should be treated as a complex system. Complexity economists borrow concepts and theories from evolutionary biology such as emergent-phenomena, positive-feedback, self-organization, and diversity. The stated goal of this new subfield is to create more realistic and detailed models of the economy. One popular approach to modeling involves the use of “fitness landscapes” to generate solutions spaces in the search for optima and to model adaptive behavior. Here, in place of production or utility functions, a fitness function provides a simplified, Darwinian evaluation of performance. But recently, there has been a turn toward self-reflection and criticality in the literature; specifically, a debate has surfaced over the limitations of the fitness landscape approach. Par example is the 2014 article titled “Economic Opportunity and Evolution: Beyond Landscapes and Bounded Rationality” appearing in Strategic Entrepreneurship Journal. The authors contest that existing fitness landscapes neglect the emergence of novelty – implicating an ever-changing solution space. However, novelty is not the only limitation of modeling economic phenomena using the fitness landscape. In this paper, I present a methodological assessment of the extant literature in an effort to redraw our attention to the limitations of the fitness landscape in achieving the goal of more realistic and detailed models. Are fitness landscapes serving this goal? If no, what are the limitations? And most importantly, how do we face the challenges head on?",
          allAbstract: false,
          year: 2020,
          journal:
            "Structural Change and Economic Dynamics, Volume 52, 2020, Pages 390-407",
          link:
            "https://www.sciencedirect.com/science/article/pii/S0954349X18303485"
        },
        {
          title:
            "Can we have a general theory of financial innovation processes? A conceptual review",
          authors: "Khraisha, T and Arthur, K",
          allAbstract: false,
          year: 2008,
          abstract:
            "Since the financial crisis of 2008, the theory of financial innovation has been a focus at a time of re-evaluation and re-conceptualization. However, little has been done to evaluate the current state of research considering the increasing complexity of financial innovation. This paper examines the hypothesis of a general theory that encompasses increasing complexities in the financial innovation process.",
          journal: "Financial Innovation 4 (1), 4",
          link:
            "https://www.biomedcentral.com/openurl?doi=10.1186/s40854-018-0088-y"
        }
      ],
      universityDegrees: [
        {
          title: "Ph.D in Network Science",
          university: "Central European University, Budapest (Hungary)",
          department: "Department of Network and Data Science",
          year: 2019,
          date: "September 2015 - May 2019"
        },
        {
          title: "Masters in Economics and Economic Policy",
          university: "University of Bologna, Bologna (Italy)",
          department: "School of Economics, Management and Statistics",
          year: 2014,
          date: "September 2012 - November 2014"
        },
        {
          title: "Bachelor of Science in Financial Economics",
          university: "University of Bologna, Bologna (Italy)",
          department: "School of Economics, Management and Statistics",
          year: 2012,
          date: "September 2008 - March 2012"
        }
      ],
      visitingFellowShips: [
        {
          place: "University of Oxford, Oxford (UK)",
          year: 2017,
          title:
            "Recognized Student at the Institute for New Economic Thinking at the Oxford Martin School",
          date: "January 2017 - April 2017"
        },
        {
          place: "Complexity Science Hub, Vienna (Austria)",
          title: "Visiting researcher in complex systems",
          year: 2017,
          date: "September 2017 - October 2017"
        },
        {
          place: "Observatory of Complex Systems, Palermo (Italy)",
          title: "Visiting researcher in complex systems",
          year: 2017,
          date: "June 2017 - July 2017"
        }
      ],
      conferencesAndSchools: [
        {
          event:
            "European Association of Evolutionary Political Economy Conference",
          place: "Corvinus University of Budapest, Budapest(Hungary)",
          date: "January 2017 - April 2017",
          year: 2017
        },
        {
          event:
            "Young Scholars Conference by the Institute for New Economic Thinking",
          place: "Central European University, Budapest(Hungary)",
          date: "October 19, 2016 - October 22, 2016",
          year: 2016
        },
        {
          event: "Conference on Complex Systems (CCS)",
          place: "Beurs Van Berlage, Amsterdam (Netherlands)",
          date: "September 19, 2016 - September 22, 2016",
          year: 2016
        },
        {
          event: "Lake Como School of Complex Networks",
          place: "Villa del Grumello, Como (Italy)",
          date: "May 15, 2017 - May 19, 2017",
          year: 2017
        }
      ]
    };
  }
};
</script>
