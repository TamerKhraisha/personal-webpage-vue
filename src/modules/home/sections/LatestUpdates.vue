<template>
  <section class="white lighten-5" id="features">
    <div class="popular-articles d-flex flex-column">
      <v-row no-gutters align="center" justify="center">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" md="2" sm="12">
          <div class="intro-border-wrap">
            <div class="intro">
              <p id="title" class="mb-5">Latest Activities</p>
              <p id="sub-title">
                I write about many things like software engineering, database
                desing, and machine learning.
              </p>
            </div>
          </div>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12">
          <h2 class="display-1 text-center mb-3 primary--text text-uppercase">
            <span class="bold-font">Latest Activities</span>
          </h2>

          <v-responsive class="mx-auto" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
        </v-col>
        <v-col cols="10" sm="12" md="10">
          <div class="mini-card-grid">
            <article
              class="mini-card module module-article article"
              id="mini-post-302186"
              v-for="n in content"
              :key="n.title"
            >
              <header class="mini-article-card-header">
                <div class="mini-article-card-title">
                  <div class="mini-article-subhead black--text">
                    <span
                      style="font-family: Francois One !important"
                      class="subtitle-2 warning--text"
                      >{{ n.category }}</span
                    >
                    <span class="white--text"> {{ n.date }}</span>
                  </div>
                  <h2>
                    <a
                      :href="n.link"
                      class="article-card-header read-article bold-font"
                      target="_blank"
                    >
                      {{ n.title }}
                    </a>
                  </h2>
                  <p
                    class="mt-3"
                    style="font-family: Francois One !important; color: grey"
                  >
                    {{ n.summary }}
                  </p>
                </div>
              </header>
              <div class="mini-article-meta">
                <div class="mini-article-byline">
                  <v-avatar class="elevation-12" size="40">
                    <v-img src="@/assets/tamer3.jpg"></v-img>
                  </v-avatar>
                  <div class="author-name-area">
                    <div class="author-name-prefix">Author</div>
                    <span class="white--text">Tamer Khraisha</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    align-center
                    flex-wrap
                    text-uppercase
                    caption
                    secondary--text
                  "
                >
                  <v-chip class="mt-3" color="white" x-small outlined>{{
                    n.tag
                  }}</v-chip>
                </div>
              </div>
            </article>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      content: [
        {
          title: "Commoditization of Artificial Intelligence: AI-as-a-Service",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/commoditization-artificial-intelligence-tamer-khraisha-ph-d-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9bt1cswnS5CjFRVmtpG0Rw%3D%3D",
          date: "May 9, 2023",
          summary: "Personal prediction of the future of AI in business",
          tag: "Artificial Intelligence"
        },
        {
          title: "Top Artificial Intelligence and Machine Learning Journals",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/top-artificial-intelligence-machine-learning-journals-tamer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "April 3, 2023",
          summary: "A list of the best scientific journals in AI and ML",
          tag: "Artificial Intelligence"
        },
        {
          title:
            "Redshift vs BigQuery vs Snowflake: Analysis of cloud data warehouses",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/redshift-vs-bigquery-snowflake-internals-features-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "March 11, 2023",
          summary:
            "An analysis of the main features and difference of cloud warehouses",
          tag: "Data Warehousing"
        },
        {
          title: "High-Performance PostgreSQL: A Dive Into the Internals",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/high-performance-postgresql-dive-internals-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "January 14, 2023",
          summary: "An analysis of the internals and features of Postgres",
          tag: "SQL Databases"
        },
        {
          title:
            "The Problem of Data Snooping in Financial Analysis and Machine Learning",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/problem-data-snooping-financial-analysis-machine-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "October 16, 2022",
          summary: "Analysis of the problem of false discoveries in finance",
          tag: "AI & Finance"
        },
        {
          title: "The Economics of Cloud Computing",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/economics-cloud-computing-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "October 8, 2022",
          summary: "Analysis of the economics of cloud computing",
          tag: "Cloud Economics"
        },
        {
          title: "How does Python work?",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/how-does-python-work-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "September 24, 2022",
          summary: "A dive into the internals of Python",
          tag: "Software Engineering"
        },
        {
          title: "SQL vs NoSQL: How to choose a database for your application?",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/sql-vs-nosql-how-choose-database-your-application-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "September 17, 2022",
          summary:
            "Analysis of the main differences and features of SQL and NoSQL",
          tag: "Database Design"
        },
        {
          title:
            "Are Best Practices Required Practices in Software and Machine Learning Engineering?",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/best-practices-required-software-machine-learning-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "September 3, 2022",
          summary: "Opinion piece on the importance of industry best practices",
          tag: "Software Engineering"
        },
        {
          title: "Workflow-Oriented Software Architectures",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/workflow-oriented-software-architectures-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "August 22, 2022",
          summary: "An analysis of the main workflow technologies",
          tag: "Software Engineering"
        },
        {
          title:
            "The Nexus Between Machine Learning and Business Value Creation",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/nexus-between-machine-learning-business-value-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "October 24, 2020",
          summary: "Economic analysis of Machine Learning",
          tag: "AI/ML"
        },
        {
          title: "Industry Applications of Network Science and Graph Theory",
          category: "Blog",
          link:
            "https://www.linkedin.com/pulse/industry-applications-network-science-graph-tamer-khraisha-phd/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BZYY%2B8yTXQjSu1JTso%2FH1bg%3D%3D",
          date: "August 22, 2020",
          summary: "Overview of the application of Network Science in industry",
          tag: "Network Science"
        }
      ]
    };
  }
};
</script>

<style scoped>
/*! CSS Used from: https://css-tricks.com/wp-content/themes/CSS-Tricks-17/style.css?cache_bust=1580767355603 */
@media screen and (prefers-reduced-motion: reduce) {
  * {
    -webkit-transition: 0s !important;
    transition: 0s !important;
  }
}
*,
:after,
:before {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}
@media (prefers-reduced-motion: reduce) {
  * {
    -webkit-animation-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a {
  color: #fff;
}
a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):focus,
a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):hover {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#e52e71)
  );
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
}
h2 {
  font-weight: 900;
  margin: 0 0 1.5rem;
  line-height: 1;
}
h2 a {
  color: whitesmoke;
  border: 0;
  display: inline-block;
}
h2 a:focus,
h2 a:hover {
  color: #03a9f4;
}
h2 {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-size: 2rem;
  letter-spacing: -0.03rem;
  font-weight: 400;
}
@media (max-width: 1200px) {
  h2 {
    font-size: 1.8rem;
  }
}
@media (max-width: 800px) {
  h2 {
    font-size: 1.7rem;
  }
}
.h4 {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 0.8rem;
}
@media (max-width: 1200px) {
  .h4 {
    font-size: 1.4rem;
  }
}
@media (max-width: 800px) {
  .h4 {
    font-size: 1.25rem;
  }
}
.h4 {
  line-height: 1.05;
}
time {
  color: #7a7a8c;
}
p {
  margin: 0 0 1.5rem;
}
.white-underline-links a {
  position: relative;
  font-weight: 700;
}
.white-underline-links a:after {
  content: "";
  height: 2px;
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  border-radius: 2px;
}
.white-underline-links a:focus,
.white-underline-links a:hover {
  color: inherit !important;
  -webkit-text-fill-color: inherit !important;
}
.white-underline-links a:focus:after,
.white-underline-links a:hover:after {
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
}
p:empty {
  display: none;
}
.module {
  clear: both;
  margin: 0 0 1rem;
  position: relative;
}
.module > :last-child,
.module > :last-child > :last-child {
  margin-bottom: 0;
}
img {
  height: auto !important;
}
img {
  max-width: 100%;
}
.author-avatar {
  grid-area: avatar;
  align-self: start;
  position: relative;
}
.author-avatar img {
  border-radius: 50%;
  width: 60px;
  height: 60px !important;
  display: block;
  overflow: hidden;
  margin: 16px 10px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.author-avatar .half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 56px;
  fill: none;
  stroke: url(https://css-tricks.com/wp-content/themes/CSS-Tricks-17/style.css?cache_bust=1580767355603#orange-to-pink);
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}
@media (max-width: 800px) {
  .author-avatar img {
    width: 35px;
    height: 35px !important;
  }
  .author-avatar .half-circle {
    width: 55px;
    height: 40px;
  }
}
.author-name-prefix {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
}
.author-name-area {
  grid-area: author;
}
.author-name,
time {
  font-family: Sentinel SSm A, Sentinel SSm B, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
.tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
}
@media (max-width: 800px) {
  .tags {
    margin: 0;
  }
}
.tags a {
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  white-space: nowrap;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
}
.tags a:focus,
.tags a:hover {
  color: #03a9f4;
  border-color: #fff;
  position: relative;
}
.header-card {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff8a00),
    to(#e52e71)
  );
  background-image: linear-gradient(0deg, #ff8a00, #e52e71);
  position: relative;
  border-radius: 16px;
  padding: 2rem;
  margin: 0 4rem 0 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 0;
  flex: 0 0 320px;
}
.header-card p {
  margin: 0;
  font-size: 0.8rem;
}
@media (max-width: 1200px) {
  .header-card {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-box-flex: 0;
    flex: 0;
    width: 110px;
    margin-right: 1rem;
  }
  .header-card a:after,
  .header-card br {
    display: none;
  }
}
.header-card-title {
  font-size: 1.6rem;
  margin: 0 0 0.5rem;
  color: white;
}
.popular-articles {
  box-sizing: content-box;
  display: -webkit-box;
  display: flex;

  padding: 2rem 0;
}

@media (max-width: 1200px) {
  .popular-articles {
    scrollbar-color: rgb(41, 28, 32);
    scrollbar-width: 10px;
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: 6rem;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-points-x: repeat(250px);
    scroll-snap-points-x: repeat(250px);
    -ms-scroll-snap-type: mandatory;
    scroll-snap-type: mandatory;
  }
  .popular-articles::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .popular-articles::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  .popular-articles .mini-card {
    scroll-snap-align: start;
  }
}
@media (max-width: 1200px) {
  .popular-articles {
    padding-left: 0;
  }
}
.popular-header {
  margin: 3rem 0;
}
.header-card-sponsor {
  color: #ffb4b4;
}
.mini-card-grid {
  scrollbar-width: 10px;
  scrollbar-gutter: always;
  padding: 1rem;
  display: -webkit-box;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
.mini-card-grid::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.mini-card-grid::-webkit-scrollbar-thumb {
  background: #4a4e55;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.mini-card-grid::-webkit-scrollbar-track {
  background: rgb(14, 93, 146);
}

.tags a {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
}
.mini-card {
  min-height: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background-image: -webkit-linear-gradient(to right, #fad02c, #000428);
  background: url(../../../assets/overlay.png),
    linear-gradient(85deg, rgb(14, 58, 107), #262626);
  box-shadow: -2rem 0 3rem -2rem #000;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  margin: 0;
}
.mini-card h2 {
  font-size: 20px;
  margin: 0.25rem 0 auto;
}
.mini-card:not(:first-child) {
  margin-left: -130px;
}
.mini-card:hover {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.mini-card:hover ~ .mini-card {
  -webkit-transform: translateX(130px);
  transform: translateX(130px);
}
@media (max-width: 1200px) {
  .mini-card {
    min-width: 220px;
  }
  .mini-card:not(:first-child) {
    margin-left: -30px;
  }
  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
  .mini-card:hover ~ .mini-card {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
}
@media (max-width: 800px) {
  .mini-card {
    min-width: 190px;
  }
  .mini-card:not(:first-child) {
    margin-left: -10px;
  }
  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
  .mini-card:hover ~ .mini-card {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}
.mini-article-subhead {
  font-size: 14px;
  margin: 0 0 1rem;
}
.mini-article-card-header {
  margin-bottom: auto;
}
.mini-article-meta {
  font-size: 14px;
}
.mini-article-meta .author-name {
  display: block;
  position: relative;
}
.mini-article-meta .author-avatar img {
  width: 40px;
  height: 40px !important;
}
.mini-article-meta .author-avatar .half-circle {
  width: 60px;
  height: 48px;
}
.mini-article-byline {
  margin: 3rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  -webkit-box-align: center;
  align-items: center;
}
.mini-article-byline .author-avatar,
.mini-article-byline .author-name-area {
  grid-area: auto;
}
@media print {
  .tags,
  svg {
    display: none !important;
  }
  a,
  time {
    background: 0 0 !important;
    color: #000 !important;
  }
}

.header-card-sponsor {
  margin-top: 4rem;
  flex: 0 0 250px;
  margin-right: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  transform: translateY(-10px);
}
.popular-header:before {
  content: "";
  background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  z-index: 1;
  border-radius: 12px;
}

.popular-header:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 2;
  border-radius: 8px;
}

.intro-border-wrap {
  padding: 1rem;
  position: relative;
  background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
  padding: 3px;
}

.intro {
  background: #222;
  color: white;
  padding: 2rem;
  height: 400px;
  font-family: "Rum Raisin", sans-serif;
}
.intro #title {
  font-size: 35px;
}
.intro #sub-title {
  font-size: 100%;
}
.bold-font {
  font-family: "Rum Raisin", sans-serif;
}
</style>
