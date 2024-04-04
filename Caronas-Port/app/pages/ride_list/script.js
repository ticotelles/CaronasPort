document
  .querySelector(".content-button button")
  .addEventListener("click", function () {
    navigate("ride_create");
  });

const url = "http://localhost:3333/ride";

const customNavigate = (id) => {
  const path = window.location.href.split("app");

  window.location.href = `${path[0]}app/pages/ride_details/?${id}`;
};

function getRideList() {
  axios
    .get(url)
    .then((response) => {
      const target = document.querySelector(".list_ride");
      target.innerHTML = response.data.dataRes
        .map((item, key) => {
          return `<div class="item_ride_available" onclick="customNavigate(${item.id})">
                      <div class="item_ride_columm_picture">
                          <img src="../images/foto_condut.png" alt="foto_condutor" />
                      </div>
                
                      <div class="item_ride_columm_details">
                          <div class="ajust_text" id="rideList">
                              <img src="../images/icon_car.png" alt="image_car" />
                              <span id="rideList">${item.name}</span>
                          </div>
                
                          <div class="details_hours_value">
                              <div class="ajust_text">
                                  <img src="../images/icon_clock.png" alt="image_clock" />
                                  <span>${item.time}</span>
                              </div>
                              <div class="ajust_text">
                                  <!-- <img src="../images/icon_dollar.png" alt="currency_icon" /> -->
                                  <span>${item.date}</span>
                              </div>
                          </div>
                      </div>
                
                      <div class="item_ride_columm_arrow">
                          <img src="../images/icon_arrow_right.png" alt="image_arrow_right" />
                      </div>
                
                      <div class="item_ride_columm_show_hover">
                          <div></div>
                      </div>
                  </div>`;
        })
        .join("");
    })
    .catch((error) => console.log(error));
}
getRideList();
