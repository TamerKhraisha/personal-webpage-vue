<template>
  <section id="about-me">
    <div class="py-12"></div>

      <v-row align="center" justify="center">
        <v-col md="7" sm="8" cols="12" lg="5">
          <div class="big-title mt-10">
            <p class="primary--text py-0 subtitle main-title text-center">
            Hello, I'am Tamer Khraisha <br />
            Welcome to my webpage <br>
          </p>
          </div>
          <div class="d-flex justify-center">
            <v-img src="@/assets/Amsterdam.jpeg"></v-img>
          </div>


        </v-col>
        <v-col md="4" sm="4" cols="4" lg="3">
          <div class="text-justify d-flex flex-column align-center">

            <p class="about-text my-0">SHORT BIOGRAPHY</p>
                        <img height="20" width="200" class="rescaled" src="@/assets/yellow.jpg" />


            <span class="intro-bold mt-10">
              My name is Tamer Khraisha and I am a software developer,
              scientific researcher, and a writer. I have been living in Europe
              for the past 13 years, and currently, I am based in Luxembourg.
            </span>
            <span>
              I did my undergraduate studies in finance and economics, which
              constitute my primary domain of knowledge. After that, I earned a
              Ph.D. cum laude in Network Science from the Department of Network
              and Data Science at the Central European University in Budapest.
              Currently, I am employed as a Quantitative Developer at
              NextGateTech, where we are developing a cloud-based oversight
              platform for the asset management industry.
            </span>
            <span>              and Data Science at the Central European University in Budapest.
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
      </v-row>
    <v-avatar v-if="false" class="elevation-12" size="128">
      <v-img src="@/assets/tamer3.jpg"></v-img>
    </v-avatar>
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
.intro-bold {
  font-family: "Rum Raisin", sans-serif;
  font-family: Francois one;
}

.big-title {
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