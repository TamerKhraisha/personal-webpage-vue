<template>
  <section id="about-me">
    <div class="py-12"></div>

      <v-row align="center" justify="center">

        <v-col md="4" sm="4" cols="4" lg="3">
          <div class="text-justify d-flex flex-column align-center">
                <v-avatar  class="elevation-12" size="100">
      <v-img src="@/assets/tamer3.jpg"></v-img>
    </v-avatar>
            <p class="about-text mt-5 mb-0">SHORT BIOGRAPHY</p>
                        <img height="20" width="200" class="rescaled" src="@/assets/yellow.jpg" />


            <span class="intro-bold mt-5">
              My name is Tamer Khraisha and I am a software developer,
              scientific researcher with a PhD, and a writer. Currently, I am based in Luxembourg.
            </span>
            <span>
              Currently, I am employed as a Quantitative Developer at
              NextGateTech, where we are developing a cloud-based oversight
              platform for the asset management industry.
            </span>
            <span> and Data Science at the Central European University in Budapest.
              Currently, I am employed as a Quantitative Developer at
              NextGateTech, where we are developing a cloud-based oversight
              platform for the asset management industry.</span>
                        <div>
            <v-btn
              href="http://www.tamerkhraisha.com/files/curriculum_latest.pdf"
              target="_blank"
              color="grey"
              outlined
              small
              class="mt-5"
            >
              <span class="grey--text text--darken-1 font-weight-bold">
                Download My CV
              </span>
            </v-btn>
          </div>
          </div>
        </v-col>
                <v-col md="7" sm="8" cols="12" lg="5">
          <div class="d-flex flex-column align-center">
          <div class="d-flex justify-center">
            <v-img width="400" src="@/assets/earth4.jpeg"></v-img>
          </div>
          <div class="big-title mt-10">
            <p class="primary--text py-0 subtitle main-title text-center">
            Hello, I'am <span class="yellow-name">Tamer Khraisha</span> <br />
            Welcome to my webpage <br>
          </p>
          </div>
          </div>

        </v-col>
      </v-row>
    <div class="py-12"></div>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Petemoss&family=Rum+Raisin&display=swap");
.main-title {
  font-family: "Rum Raisin", sans-serif;
  font-size: 40px;
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

  width:80%;
  background:
   linear-gradient(lightgray,lightgray)   0 0,
   linear-gradient(lightgray,lightgray)   0 0,
   linear-gradient(lightgray,lightgray) 100% 100%,
   linear-gradient(lightgray,lightgray) 100% 100%,
  white;
 background-size:50px 5px,5px 50px;
 background-origin:content-box;
 background-repeat:no-repeat;
}
</style>