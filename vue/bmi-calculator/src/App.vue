<script>
import BmiCalculator from "@/components/BmiCalculator";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    BmiCalculator,
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header></Header>
    <bmi-calculator></bmi-calculator>
  </div>
</template>

<style>
body {
  background: url(https://media.istockphoto.com/photos/healthy-fresh-vegetables-frame-copy-space-picture-id1249223936?b=1&k=20&m=1249223936&s=170667a&w=0&h=hxKD4SC8LPwZoIDkyMo894U2qxZl7WAVbJm3Zcme-8M=)
    no-repeat center fixed;
  background-size: cover;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

html,
* {
  margin: 0 0;
}
</style>
