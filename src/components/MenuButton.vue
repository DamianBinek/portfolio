<template>
  <v-btn id="menu-button" dark text="true" @click="handleClick">{{
    buttonText
  }}</v-btn>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
#menu-button {
  background-color: transparent;
}
</style>
