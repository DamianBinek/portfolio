<template>
  <v-app class="app-background" dark>
    <v-toolbar color="transparent elevation-0">
      
       <!-- <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn fab flat href="https://github.com/DamianBinek" target="_blank">
      <font-awesome-icon :icon="['fab', 'github-square']" size="2x"/>
      </v-btn>
      <v-btn fab flat href="https://www.linkedin.com/in/damian-binek-7368a0116/" target="blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
      </v-btn>
      <!-- <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
      </v-btn> -->
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>  -->
    </v-toolbar>
    <v-content dark >
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

.theme--dark.app-background {
  background-image: url('./assets/background-clouds.png');
  height: '100vh';
}

</style>
