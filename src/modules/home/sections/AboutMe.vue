<template>
  <section id="about-me">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-1 mb-3 primary--text text-uppercase">
        <span class="main-title">SHORT BIOGRAPHY</span>
      </h2>

      <v-responsive class="mx-auto" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row align="center" justify="center">
        <v-col md="6" sm="8" cols="8" xl="4" lg="6">
          <div class="text-justify d-flex flex-column align-center">
            <div class="mt-10">
              <div class="d-flex flex-column align-center">
                <v-avatar class="elevation-12" size="100">
                  <v-img src="@/assets/tamer3.jpg"></v-img>
                </v-avatar>
                <p class="primary--text main-sub-title text-center">
                  Hello, I'am
                  <span class="yellow-name">Tamer Khraisha</span>
                  <br />
                  Welcome to my webpage <br />
                </p>
                <span class="intro-bold mt-5">
                  My name is Tamer Khraisha and I am a software developer,
                  scientific researcher with a PhD, and a writer. Currently, I
                  am based in Luxembourg.
                </span>
                <span>
                  Currently, I am employed as a Quantitative Developer at
                  NextGateTech, where we are developing a cloud-based oversight
                  platform for the asset management industry.
                </span>
                <span>
                  and Data Science at the Central European University in
                  Budapest. Currently, I am employed as a Quantitative Developer
                  at NextGateTech, where we are developing a cloud-based
                  oversight platform for the asset management industry.</span
                >
                <div>
                  <v-row justify="center" align="center">
                    <v-col cols="6" md="6" sm="12">
                      <div class="d-flex justify-center">
                        <v-btn
                          href="https://www.linkedin.com/in/tamer-khraisha/"
                          target="_blank"
                          color="white"
                          outlined
                          x-large
                          class="mt-5"
                        >
                          <div class="v-flex flex-column align-center">
                            <p
                              class="grey--text text-center text--darken-1 my-0 font-weight-bold main-title"
                            >
                              Download My CV
                            </p>
                            <img
                              height="20"
                              width="200"
                              class="rescaled"
                              src="@/assets/yellow.jpg"
                            />
                          </div>
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      sm="12"
                      v-if="$vuetify.breakpoint.mdAndUp"
                    >
                      <div class="d-flex justify-center">
                        <v-btn
                          href="https://www.linkedin.com/in/tamer-khraisha/"
                          target="_blank"
                          color="white"
                          outlined
                          x-large
                          class="mt-5"
                        >
                          <div class="v-flex flex-column align-center">
                            <p
                              class="grey--text text-center text--darken-1 my-0 font-weight-bold main-title"
                            >
                              Linkedin
                            </p>
                            <img
                              height="20"
                              width="200"
                              class="rescaled"
                              src="@/assets/yellow.jpg"
                            />
                          </div>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="6" sm="8" cols="8" xl="4" lg="6">
          <div class="d-flex flex-column align-center">
            <div class="d-flex justify-center image-container">
              <v-img
                class="image-container"
                width="450"
                src="@/assets/book11.jpg"
              ></v-img>
            </div>

            <div v-if="false" class="big-title mt-10">
              <p class="primary--text py-0 subtitle main-title text-center">
                Hello, I'am <span class="yellow-name">Tamer Khraisha</span>
                <br />
                Welcome to my webpage <br />
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Petemoss&family=Rum+Raisin&display=swap");
.main-title {
  font-family: "Rum Raisin", sans-serif;
}
.main-sub-title {
  font-family: "Rum Raisin", sans-serif;
  font-size: 30px;
}
.about-text {
  font-family: "Rum Raisin", sans-serif;
  color: goldenrod;
  font-size: 20px;
}
.yellow-name {
  color: goldenrod;
}
.intro-bold {
  font-family: "Rum Raisin", sans-serif;
  font-family: Francois one;
}

.big-title {
  width: 80%;
  background: linear-gradient(lightgray, lightgray) 0 0,
    linear-gradient(lightgray, lightgray) 0 0,
    linear-gradient(lightgray, lightgray) 100% 100%,
    linear-gradient(lightgray, lightgray) 100% 100%, white;
  background-size: 50px 5px, 5px 50px;
  background-origin: content-box;
  background-repeat: no-repeat;
}
.image-container {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
