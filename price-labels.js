// Shows per-person price under "Adults" and "Children" in the booking modal.
// Prices come from attractions[].price (adult) and attractions[].childPrice.

(function () {

  var style = document.createElement("style");
  style.textContent =
    ".unit-price{font-size:22px;font-weight:700;color:#333;margin:6px 0 12px;}";
  document.head.appendChild(style);

  function addPriceLine(labelEl, id) {
    var box = document.createElement("div");
    box.className = "unit-price";
    box.innerHTML = 'AED <span id="' + id + '">0</span>';
    labelEl.insertAdjacentElement("afterend", box);
  }

  var adultLabel = document.querySelector("#quantityGrid > div:first-child > label");
  var childLabel = document.querySelector("#childQtyGroup > label");

  if (adultLabel) addPriceLine(adultLabel, "adultUnitPrice");
  if (childLabel) addPriceLine(childLabel, "childUnitPrice");

  var originalOpenBooking = window.openBooking;

  window.openBooking = function (id) {
    originalOpenBooking(id);

    if (!selectedAttraction) return;

    var a = document.getElementById("adultUnitPrice");
    var c = document.getElementById("childUnitPrice");

    if (a) a.textContent = selectedAttraction.price;
    if (c) c.textContent = selectedAttraction.childPrice;
  };

})();
