<template>
  <v-sheet id="contact" tag="section" tile >
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <div class="d-flex align-center justify-center">
          <div class="h-divider">
            <div class="shadow"></div>
            <div class="text2">
              <img src="@/assets/contact_icon.png" />
            </div>
          </div>
        </div>
        <div class="main-title white--text mb-3 mt-10 text-start">
          If you got a project, idea, or any opportunity in mind,<br />
          why not get in touch -- Let's work together!
        </div>

        <div class="d-flex justify-space-between align-center">
          <div class="title mb-2 mt-10 text-start">
            <a href="mailto:tamer.khraisha@gmail.com"
              ><span class="email">tamer.khraisha@gmail.com</span>
            </a>
            <br />
            <span class="tel">Tel: +325 123 123 456</span><br />
            <span class="address"> Luxembourg City - Luxembourg </span>
          </div>

          <div class="py-3"></div>
          <svg
          v-if="false"
            id="footer__hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="418"
            height="560"
            viewBox="0 0 418 560"
            enable-background="new 0 0 418 560"
          >
            <defs>
              <pattern
                id="overlay-footer-img"
                x="0"
                y="0"
                patternUnits="userSpaceOnUse"
                height="100"
                width="100"
              >
                <image
                  x="1"
                  y="1"
                  xlink:href="data:image/png;base64,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"
                ></image>
              </pattern>
              <linearGradient
                id="gradient-footer-large"
                gradientUnits="userSpaceOnUse"
                x1="264.9866"
                y1="333.6309"
                x2="341.8304"
                y2="518.0563"
              >
                <stop offset="0" stop-color="#27ccc1"></stop>
                <stop offset="1" stop-color="#1a77d1"></stop>
              </linearGradient>
              <linearGradient
                id="gradient-footer-medium"
                gradientUnits="userSpaceOnUse"
                x1="67.7938"
                y1="199.5592"
                x2="111.7475"
                y2="339.2899"
              >
                <stop offset="0" stop-color="#2ec9d7"></stop>
                <stop offset="1" stop-color="#1670c2"></stop>
              </linearGradient>
              <linearGradient
                id="gradient-footer-small"
                gradientUnits="userSpaceOnUse"
                x1="205.3203"
                y1="-3.4952"
                x2="214.7691"
                y2="77.1841"
              >
                <stop offset="0" stop-color="#27e7cb"></stop>
                <stop offset="1" stop-color="#1dafe4"></stop>
              </linearGradient>
            </defs>
            <g>
              <polygon
                class="hexagon-footer-general hexagon-footer-large"
                points="192,364.4 192,494.9 305,560.1 418,494.9 418,364.4 305,299.2"
              ></polygon>
              <polygon
                class="hexagon-footer-overlay"
                points="192,364.4 192,494.9 305,560.1 418,494.9 418,364.4 305,299.2"
              ></polygon>
            </g>
            <g>
              <polygon
                class="hexagon-footer-general hexagon-footer-medium"
                points="0,213 0,314.6 88,365.4 176,314.6 176,213 88,162.2"
              ></polygon>
              <polygon
                class="hexagon-footer-overlay"
                points="0,213 0,314.6 88,365.4 176,314.6 176,213 88,162.2"
              ></polygon>
            </g>
            <g>
              <polygon
                class="hexagon-footer-general hexagon-footer-small"
                points="166,26.5 166,79.6 211.9,106.1 257.9,79.6 257.9,26.5 211.9,0"
              ></polygon>
              <polygon
                class="hexagon-footer-overlay"
                points="166,26.5 166,79.6 211.9,106.1 257.9,79.6 257.9,26.5 211.9,0"
              ></polygon>
            </g>
          </svg>
          <div class="social-media">
            <div class="follow-me">Follow me on social media</div>

            <div class="d-flex justify-center">
              <v-btn
                href="https://www.facebook.com/people/Tamer-Khraisha/100014826257439"
                class="mr-1"
                target="_blank"
                color="white"
                icon
                text
                large
              >
                <v-icon x-large>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                href="https://twitter.com/Tamer_Khraisha"
                target="_blank"
                class="mr-1"
                color="white"
                large
                icon
                text
              >
                <v-icon x-large>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                href="https://www.linkedin.com/in/tamer-khraisha/"
                target="_blank"
                class="mr-1"
                color="white"
                large
                icon
                text
              >
                <v-icon x-large>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                href="https://github.com/TamerKhraisha"
                target="_blank"
                class="mr-1"
                color="white"
                large
                icon
                text
              >
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://codepen.io/TamerKhraisha"
                target="_blank"
                color="white"
                large
                icon
                text
              >
                <v-icon x-large>mdi-codepen</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <hr class="my-5" />
    <div class="d-flex justfiy-space-between">
      <div class="web-hosting"></div>
      <div class="web-developer">
        &copy; {{ new Date().getFullYear() }} — Handcrafted with
        <v-icon class="px-1" small color="white">mdi-heart</v-icon> by Tamer
        Khraisha using Vue and Vuetify - it's hosted on Firestore
      </div>
    </div>
  </v-sheet>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Petemoss&family=Rum+Raisin&display=swap");
#budapest-image {
  box-shadow: 40px 0px 70px 5px white inset, -10px -10px 10px 5px white inset;
}
#contact {
  background: url(../../../assets/overlay.png),
    linear-gradient(85deg, rgb(14, 58, 107), #262626);
  padding: 1.6em 5em 1em;
  color: #fff;
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(calc(var(--grid-cols-footer) - 1), 1fr) 270px;
}
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
}

.h-divider img {
  position: absolute;
  margin: 4px;
  max-width: 60px;
  border-radius: 100%;
  border: 1px dashed #aaa;
}

.main-title {
  font-family: "Rum Raisin", sans-serif;
  font-size: 40px;
}

.email {
  font-family: "Petemoss", cursive;
  font-size: 40px;
  color: white;
}

.get-in-touch {
  font-family: "Francois One", sans-serif;
  font-size: 20px;
  color: white;
}

a {
  text-decoration: none;
}

.follow-me {
  font-family: "Petemoss", cursive;
  font-size: 35px;
}

.web-developer {
  font-size: 13px;
}
.hexagon-footer-large {
  fill: url(#gradient-footer-large);
}
.hexagon-footer-medium {
  fill: url(#gradient-footer-medium);
}
.hexagon-footer-small {
  fill: url(#gradient-footer-small);
}
.hexagon-footer-general {
  opacity: 0.9;
}
.hexagon-footer-overlay {
  fill: url(#overlay-footer-img);
}

</style>
