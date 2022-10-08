<script>
export default {
  name: "BmiCalculator",

  data() {
    return {
      mass: "",
      height: "",
      feet: "",
      inc: "",
      result: "",

      metric: {
        mass: "kg",
        height: "cm",
        select: true,
      },
    };
  },

  methods: {
    calculateBmi() {
      if (this.metric.select) {
        const bmi = +(this.mass / Math.pow(this.height / 100, 2)).toFixed(1);

        if (this.mass === "" || this.height === "") {
          alert("Inputs can not be empty");
        } else if (this.mass <= 0 || this.height <= 0) {
          alert("Inputs can not be negative");
        }

        if (bmi < 18.5 && bmi > 0) {
          this.result = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          this.result = "Normal";
        } else if (bmi >= 24.9 && bmi < 29.9) {
          this.result = "Overweight";
        } else if (bmi >= 29.9) {
          this.result = "Obesity";
        }
      } else {
        const cm = this.feet * 30.48 + this.inc * 2.54;
        const kg = this.mass * 0.4535923;
        const bmi = +(kg / Math.pow(cm / 100, 2)).toFixed(1);

        if (this.mass === "" || this.feet === "" || this.inc === "") {
          alert("Inputs can not be empty");
        } else if (this.mass <= 0 || this.feet <= 0 || this.inc <= 0) {
          alert("Inputs can not be negative");
        }

        if (bmi < 18.5 && bmi > 0) {
          this.result = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          this.result = "Normal";
        } else if (bmi >= 24.9 && bmi < 29.9) {
          this.result = "Overweight";
        } else if (bmi >= 29.9) {
          this.result = "Obesity";
        }
      }
    },

    selectMetric() {
      this.metric.select = !this.metric.select;
      // this.us.select = false;
      this.result = "";
      this.mass = "";
      this.height = "";
    },
  },
};
</script>

<template>
  <section class="container">
    <form v-if="metric.select">
      <label>Weight ( kg )</label>
      <input type="number" v-model="mass" :placeholder="metric.mass" />
      <label>Height ( cm )</label>
      <input type="number" v-model="height" :placeholder="metric.height" />
      <button class="calculate" @click.prevent="calculateBmi">Calculate</button>
    </form>

    <h1>{{ result }}</h1>
  </section>
</template>

<style scoped>
html,
* {
  font-size: x-large;
}

.container {
  display: flex;
  width: 60vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10vh;
  border-radius: 2vh;
  background-image: linear-gradient(to right, #8360c3, #2ebf91);
}

button {
  height: 8vh;
  width: 18vh;
  border-radius: 1vh;
  font-size: 3vh;
  font-weight: 600;
  background-color: whitesmoke;
  color: #2c3e50;
}

button:hover {
  color: whitesmoke;
  background-color: #2c3e509f;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
  color: rgb(255, 255, 255);
}

.calculate {
  margin-top: 2vh;
}
</style>
