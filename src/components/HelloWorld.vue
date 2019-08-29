<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <p>DAMIAN.IO</p>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-flex>

      <v-flex xs12>
        <img src="../assets/placeholder-man.png" width="150px" height="150px" />
      </v-flex>

      <v-flex xs12>
        <v-layout justify-center>
          <v-divider class="divider" dark></v-divider>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            class="subheading mx-3"
          >
            <menu-button
              :handleClick="handleThisClick"
              :buttonText="link.text"
            ></menu-button>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MenuButton from "./MenuButton";

export default {
  components: { MenuButton },
  data: () => ({
    importantLinks: [
      {
        text: "Home",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Skills",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "My Projects",
        href: "/my-projects"
      },
      {
        text: "Contact Me",
        href: "https://twitter.com/vuetifyjs"
      }
    ]
  }),
  methods: {
    handleThisClick: function() {
      console.log("Dziala");
    }
  }
};
</script>

<style>
.divider {
  margin-top: 50px;
}
</style>
