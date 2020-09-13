<template>
  <v-app>
    <v-app-bar
      class="white--text"
      color="transparent"
      fixed
      flat
      prominent
      hide-on-scroll
    >
      <v-toolbar-items
        v-if="$vuetify.breakpoint.smAndUp"
        style="width:100%"
        class="hidden-sm-and-down px-10"
      >
        <div class="d-flex align-center justify-center" style="width:100%">
          <v-btn
            :to="{ name: 'home' }"
            class="subtitle-1 font-weight-bold"
            :color="buttonColor"
            text
            >Home</v-btn
          >
          <v-btn
            class="subtitle-1 font-weight-bold"
            :to="{ name: 'experience' }"
            :color="buttonColor"
            text
            >Experience</v-btn
          >
          <v-btn
            :to="{ name: 'skills' }"
            class="subtitle-1 font-weight-bold"
            :color="buttonColor"
            text
            >Skills</v-btn
          >
          <v-btn
            :to="{ name: 'academia' }"
            class="subtitle-1 font-weight-bold"
            :color="buttonColor"
            text
            >academia</v-btn
          >
          <v-btn
            :to="{ name: 'blog' }"
            class="subtitle-1 font-weight-bold"
            :color="buttonColor"
            text
            >Blog</v-btn
          >
        </div>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        large
        left
        color="white"
        @click="drawer = true"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <div class="d-flex justify-center my-5">
        <v-avatar size="100">
          <v-img src="@/assets/tamer3.jpg"></v-img>
        </v-avatar>
      </div>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <div v-for="(item, index) in drawerListItems" :key="index">
            <v-list-item :to="{ name: item.name }">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><span class="subtitle-2 text-uppercase">{{
                  item.name
                }}</span></v-list-item-title
              >
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <transition name="fadeonly" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      group: null,
      drawerListItems: [
        { name: "home", icon: "mdi-home" },
        { name: "experience", icon: "mdi-briefcase" },
        { name: "skills", icon: "mdi-code-tags" },
        { name: "academia", icon: "mdi-school" },
        { name: "blog", icon: "mdi-post" }
      ]
    };
  },
  computed: {
    buttonColor() {
      if (
        this.$route.name &&
        (this.$route.name.includes("post") || this.$route.name.includes("blog"))
      ) {
        return "grey";
      }
      return "white";
    }
  }
};
</script>
