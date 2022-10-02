const btn = document.querySelector(".search")
const ipadd = document.querySelector(".ip-address");
const iloc = document.querySelector(".ip-location");

btn.addEventListener("click", () => {

    axios.get("https://ipapi.co/json").then((resp) => {
      ipadd.textContent = `IP : ${resp.data.ip}`;
      iloc.textContent = `Location : ${resp.data.city},${resp.data.region}`;
    });

});
