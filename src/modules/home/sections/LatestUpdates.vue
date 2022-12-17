<template>
  <section class="white lighten-5" id="features">

    <div class="popular-articles d-flex flex-column">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="2">
          <div
            style="font-family: Francois One !important"
            class="intro-border-wrap"
          >
            <div class="intro">
              <p id="title" class="mb-5">Latest Activities</p>
              <p id="sub-title">
                I write about many things like software engineering, database desing, and machine learning.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="10">
          <div class="mini-card-grid">
            <article
              class="mini-card module module-article article"
              id="mini-post-302186"
              v-for="n in 10"
              :key="n"
            >
              <header class="mini-article-card-header">
                <div class="mini-article-card-title">
                  <div class="mini-article-subhead black--text">
                    <span
                      style="font-family: Francois One !important"
                      class="subtitle-2 warning--text"
                      >Article</span
                    >
                    <time datetime="2020-01-28"> Jan 28, 2020 </time>
                  </div>
                  <h2 class="">
                    <a
                      href="https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/"
                      class="article-card-header read-article"
                      style="font-family: Francois One !important"
                    >
                      Use and Reuse Everything in SVG Even Animations!
                    </a>
                  </h2>
                  <p
                    class="mt-5"
                    style="font-family: Francois One !important; color: grey"
                  >
                    This is a short suummary of the article
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
                    <a
                      class="author-name"
                      href="https://css-tricks.com/author/marianabeldi/"
                    >
                      Tamer Khraisha
                    </a>
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
                  <v-chip class="mt-3" color="white" x-small outlined
                    >switzerland</v-chip
                  >
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
      articles: [
        {
          src: require("@/assets/swiss_day.jpg"),
          title: "Swiss Research Data Day 2020",
          category: "conference",
          link: "https://www.dlcm.ch/swiss-research-data-day-2020/call",
          text: "The 2020 edition of the Swiss Research Data day will focus on all aspects of Research Data Management(RDM).The event brings together an interdisciplinary community of researchers, librarians, funders, publishers and policy-makers, providing a critical look at the new developments in RDM practices, standards and technologies.\nIn this conference, I will by presenting Nuvolos, the knowledge creation cloud, an integrated and unified cloud framework designed and built for the needs of academics.",
        },
        {
          src: require("@/assets/network-science.jpg"),
          category: "blog article",
          title:
            "Industry Applications of Network Science and Graph Algorithms",
          text: "Network science has emerged as an interdisciplinary field of research to leverage network data's increasing availability to investigate a wide range of complex phenomena such as collective social behavior, technological development, financial stability, biological interactions, and many more. Simply put, network data consists of entities known as nodes, and relations between them are known as links. Nodes can be persons, organizations, URLs, or proteins. Links can represent relations such as the friendship between persons, technological transfers between firms, hyperlinks between websites, and chemical interactions between proteins. Network science employs an extensive array of analytical methods and data science techniques borrowed from sociology, mathematics, physics, computer science, economics, and other fields.\nMost current research in network science has focused on measurements and the construction of theoretical and data-driven models. Although less has been done on the industry side, there are several cases and areas in which network science has either been successfully employed or could potentially be applied. In this article, I will illustrate some of these applications and provide examples and references for further investigations.",
        },
        {
          src: require("@/assets/finance.jpg"),
          category: "scientific publication",
          title: "A Holistic Approach to Financial Data Science",
          text: "The scientific analysis of financial data, both for practical and theoretical purposes, has continuously been an active and evolving area. Traditionally, financial modeling and analysis have primarily relied on financial econometrics, which applies statistical methods to the problems of finance. Recently, advances in analytical and algorithmic methods, powerful technological solutions, and the expansion of the financial data ecosystem have created new opportunities and provided novel and robust ways to solve existing and new problems in finance. To expand the scope of financial econometrics and incorporate these novelties, the field of financial data science (FDS) has emerged. Crucially, FDS adds more interdisciplinary, methodological variety and technological components to the analysis process, thus generating the need for a holistic view in the management of an FDS project. In this article, the author presents a holistic and structured approach to efficiently and effectively manage an FDS project. The main contribution of the article is to provide a comprehensive, financial domain–oriented approach to FDS management that can be used by researchers and practitioners to exploit the opportunities arising from the evolving finance landscape.",
        },
      ],
    };
  },
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
  .popular-articles::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
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
  background: url(../../../assets/overlay.png),linear-gradient(85deg, rgb(14, 58, 107), #262626);
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
}
.intro #title {
  font-size: 35px;
}
.intro #sub-title {
  font-size: 100%;
}
</style>
