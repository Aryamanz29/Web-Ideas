class Weather {
  constructor(city, state) {
    this.apiKey = "c353e4a79161451d98082146212905";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    this.location = document.getElementById("w-location");
    this.location.textContent = `${this.city} , ${this.state}`;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city},
      region=${this.state}`,
    );

    const responseData = await response.json();

    return responseData.current;
  }

  //Change weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
