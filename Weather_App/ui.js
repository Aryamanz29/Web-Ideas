class UI {
  constructor() {
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.visibility = document.getElementById("w-visibility");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.desc.textContent = weather.condition.text;
    this.string.textContent = `${weather.temp_c} C ( ${weather.temp_f} F)`;
    this.icon.setAttribute("src", weather.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`;
    this.visibility.textContent = `Visibility: ${weather.vis_km} km`;
    this.feelsLike.textContent = `FeelsLike: ${weather.feelslike_c} C ( ${weather.feelslike_f} F)`;
    this.wind.textContent = `Wind: From the ${weather.wind_dir} at ${weather.wind_kph} KPH Gusting to ${weather.gust_kph} KPH`;
  }
}
