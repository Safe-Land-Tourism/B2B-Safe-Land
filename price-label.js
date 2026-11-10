// Shows per-person price under "Adults" and "Children" in the booking modal,
// and loads prices + settings from data.json (made by the Excel sheet).
// If data.json is missing, the site keeps using the built-in data in script.js.

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
    var child = selectedAttraction.childPrice != null
      ? selectedAttraction.childPrice
      : selectedAttraction.price;

    if (a) a.textContent = selectedAttraction.price;
    if (c) c.textContent = child;
  };

  // ---- Load data.json (prices, WhatsApp, links) ----
  fetch("data.json?v=" + Date.now(), { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("data.json not found");
      return r.json();
    })
    .then(function (data) {
      if (data.whatsapp) {
        WHATSAPP_NUMBER = String(data.whatsapp).replace(/\D/g, "");
      }
      if (data.company) {
        Object.assign(COMPANY_INFO, data.company);
      }
      if (Array.isArray(data.attractions) && data.attractions.length) {
        attractions.length = 0;
        data.attractions.forEach(function (a) { attractions.push(a); });
      }
      displayAttractions();
      setupWhatsAppLinks();
      renderCart();
    })
    .catch(function (err) {
      console.warn("Using built-in data:", err.message);
    });

})();
