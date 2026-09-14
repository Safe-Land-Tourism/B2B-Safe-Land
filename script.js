// =====================================================
// YOUR WHATSAPP NUMBER
// =====================================================
//
// Example:
// UAE number: +971 50 491 5900
//
// Write it like this:
// 971504915900
//
// NO +
// NO spaces
// NO -
// =====================================================

const WHATSAPP_NUMBER = "971504915900";


// =====================================================
// COMPANY INFO
// =====================================================

const COMPANY_INFO = {

  name: "Safe Land Tourism LLC",

  email: "smrasel15@yahoo.com",

  facebook: "https://www.facebook.com/share/19UsNYTzxk/",

  instagram: "https://www.instagram.com/safelandtourism?stkn=a2NpMXB2ZnE1OTFp",

  youtube: "https://www.youtube.com/@Safeland123",

  tiktok: "https://vm.tiktok.com/ZS9SNMjVVBP92-HotAH/"

};


// =====================================================
// ATTRACTIONS
// =====================================================
//
// এখান থেকেই attraction add/edit করবেন.
//
// price = Adult price
// childPrice = Child price
//
// image = ছবি
// =====================================================

const attractions = [

  {
    id: 1,

    name: "Burj Khalifa",

    category: "landmark",

    categoryName: "Landmark",

    location: "Downtown Dubai",

    price: 165,

    childPrice: 135,

    image:
      "images/burj-khalifa-1.jpg",

    description:
      "Enjoy breathtaking views from one of Dubai's most iconic landmarks."
  },


  {
    id: 2,

    name: "Dubai Aquarium & Underwater Zoo",

    category: "aquarium",

    categoryName: "Aquarium",

    location: "Dubai Mall",

    price: 135,

    childPrice: 135,

    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=80",

    description:
      "Discover amazing marine life at Dubai Aquarium and Underwater Zoo."
  },


  {
    id: 3,

    name: "Museum of the Future",

    category: "museum",

    categoryName: "Museum",

    location: "Sheikh Zayed Road",

    price: 149,

    childPrice: 149,

    image:
      "images/museum-of-future.jpg",

    description:
      "Explore the future of technology, innovation and human possibility."
  },


  {
    id: 4,

    name: "Dubai Frame",

    category: "landmark",

    categoryName: "Landmark",

    location: "Zabeel Park",

    price: 48,

    childPrice: 28,

    image:
      "images/dubai-frame.jpg",

    description:
      "Enjoy spectacular views connecting old and modern Dubai."
  },


  {
    id: 5,

    name: "Dubai Parks & Resorts",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Dubai Parks & Resorts",

    price: 295,

    childPrice: 245,

    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1000&q=80",

    description:
      "Enjoy exciting rides and entertainment for the whole family."
  },


  {
    id: 6,

    name: "Lotus Megayacht Dinner Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 250,

    childPrice: 210,

    image:
      "images/dubai-marina-cruise.jpg",

    description:
      "Enjoy Dubai Marina's skyline from a relaxing cruise."
  },


  {
    id: 7,

    name: "Desert Safari",

    category: "adventure",

    categoryName: "Adventure",

    location: "Dubai Desert",

    price: 149,

    childPrice: 99,

    image:
      "images/desert-safari.jpg",

    description:
      "Experience dune bashing, desert views and traditional Arabian entertainment."
  },


  {
    id: 8,

    name: "Dubai Dolphinarium",

    category: "show",

    categoryName: "Show",

    location: "Creek Park, Bur Dubai",

    price: 70,

    childPrice: 40,

    image:
      "images/dubai-dolphinarium.webp",

    description:
      "Watch dolphins and seals perform in the Middle East's first indoor, air-conditioned dolphinarium."
  },


  {
    id: 9,

    name: "Ferrari World",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Yas Island, Abu Dhabi",

    price: 290,

    childPrice: 290,

    image:
      "images/ferrari-world.jpg",

    description:
      "Ride the world's fastest roller coaster inside the largest indoor theme park on the planet."
  },


  {
    id: 10,

    name: "Dubai Miracle Garden",

    category: "garden",

    categoryName: "Garden",

    location: "Al Barsha South, Dubailand",

    price: 85,

    childPrice: 85,

    image:
      "images/dubai-miracle-garden.jpg",

    description:
      "Walk through the world's largest natural flower garden, with over 150 million blooms."
  },


  {
    id: 11,

    name: "Atlantis Aquaventure Waterpark",

    category: "waterpark",

    categoryName: "Water Park",

    location: "Palm Jumeirah",

    price: 190,

    childPrice: 175,

    image:
      "images/atlantis-aquaventure.jpg",

    description:
      "Slide, splash and swim through record-breaking water rides at one of the region's biggest waterparks."
  },


  {
    id: 16,

    name: "IMG Worlds of Adventure",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Sheikh Mohammed Bin Zayed Road, Dubai",

    price: 165,

    childPrice: 165,

    image:
      "images/img-world-dubai.jpg",

    description:
      "Explore the world's largest indoor theme park, with Marvel, Cartoon Network and Lost Valley dinosaur zones. Children under 105cm enter free."
  },


  {
    id: 17,

    name: "Aya Universe",

    category: "experience",

    categoryName: "Experience",

    location: "Wafi Mall, Oud Metha, Dubai",

    price: 100,

    childPrice: 100,

    image:
      "images/aya-universe.jpg",

    description:
      "Walk through 12 immersive light, sound and mirror-filled zones in this digital art experience."
  },


  {
    id: 18,

    name: "Dubai Safari Park",

    category: "zoo",

    categoryName: "Zoo & Safari",

    location: "Al Warqa, Dubai",

    price: 50,

    childPrice: 20,

    image:
      "images/dubai-safari-park.jpg",

    description:
      "See around 3,000 animals across African, Asian and Arabian themed villages, with a desert safari ride included."
  },


  {
    id: 19,

    name: "Dubai Butterfly Garden",

    category: "garden",

    categoryName: "Garden",

    location: "Al Barsha South, Dubailand",

    price: 30,

    childPrice: 30,

    image:
      "images/dubai-butterfly-garden.jpg",

    description:
      "Walk through climate-controlled domes home to over 15,000 butterflies from around 45 species."
  },


  {
    id: 20,

    name: "Ocean Empress Dhow Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 130,

    childPrice: 115,

    image:
      "images/dhow-cruise.webp",

    description:
      "Sail Dubai Marina at night on a traditional wooden dhow with a buffet dinner and live entertainment."
  },


  {
    id: 12,

    name: "The Palm View",

    category: "landmark",

    categoryName: "Landmark",

    location: "Palm Tower, Palm Jumeirah",

    price: 90,

    childPrice: 65,

    image:
      "images/the-palm-view.jpg",

    description:
      "See the Palm Jumeirah's iconic shape from an open-air observation deck 240 metres up."
  },


  {
    id: 13,

    name: "Sky Views Dubai",

    category: "landmark",

    categoryName: "Landmark",

    location: "Address Sky View, Downtown Dubai",

    price: 85,

    childPrice: 70,

    image:
      "images/sky-views-dubai.webp",

    description:
      "Cross a glass sky bridge and glass slide with Burj Khalifa views from Downtown Dubai."
  },


  {
    id: 14,

    name: "Ski Dubai",

    category: "adventure",

    categoryName: "Adventure",

    location: "Mall of the Emirates",

    price: 225,

    childPrice: 225,

    image:
      "images/ski-dubai.jpg",

    description:
      "Ski, snowboard and play in real snow at the Middle East's first indoor ski resort."
  },


  {
    id: 15,

    name: "Global Village",

    category: "entertainment",

    categoryName: "Entertainment",

    location: "Sheikh Mohammed Bin Zayed Road",

    price: 22,

    childPrice: 22,

    noChildTicket: true,

    image:
      "images/global-village.png",

    description:
      "Explore pavilions from over 75 countries, with rides, shows and street food, open seasonally."
  },


  {
    id: 21,

    name: "Al Wasl Dhow Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 80,

    childPrice: 70,

    image:
      "images/al-wasl-dhow-cruise.jpg",

    description:
      "Enjoy a relaxing evening sail through Dubai Marina aboard a traditional wooden dhow."
  },


  {
    id: 22,

    name: "Al Mansour Dhow Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 90,

    childPrice: 80,

    image:
      "images/al-mansour-dhow-cruise.jpg",

    description:
      "Cruise Dubai Marina's skyline aboard the Al Mansour dhow with dinner and entertainment."
  },


  {
    id: 23,

    name: "Catamaran Dhow Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 90,

    childPrice: 80,

    image:
      "images/catamaran-dhow-cruise.jpg",

    description:
      "Sail Dubai Marina in style aboard a modern catamaran with stunning skyline views."
  },


  {
    id: 24,

    name: "The Green Planet",

    category: "experience",

    categoryName: "Experience",

    location: "City Walk, Dubai",

    price: 120,

    childPrice: 105,

    image:
      "images/green-planet.jpg",

    description:
      "Step inside a bio-dome rainforest home to over 3,000 plants and animals."
  },


  // ================= NEWLY ADDED ATTRACTIONS =================

  {
    id: 25,

    name: "Louvre Museum Abu Dhabi",

    category: "museum",

    categoryName: "Museum",

    location: "Saadiyat Island, Abu Dhabi",

    price: 60,

    childPrice: 60,

    image:
      "images/louvre-museum-abu-dhabi.png",

    description:
      "Explore a world-class art and civilisation museum beneath a stunning floating dome."
  },


  {
    id: 26,

    name: "Helicopter Tour - Falcon Atlantis",

    category: "helicopter",

    categoryName: "Helicopter Tour",

    location: "Palm Jumeirah, Dubai",

    price: 750,

    childPrice: 750,

    image:
      "images/helicopter-falcon-atlantis.jpg",

    description:
      "Soar above Palm Jumeirah and the Dubai skyline on a thrilling helicopter tour departing from Atlantis."
  },


  {
    id: 27,

    name: "Helicopter Tour - Heli Dubai",

    category: "helicopter",

    categoryName: "Helicopter Tour",

    location: "Dubai",

    price: 650,

    childPrice: 650,

    image:
      "images/helicopter-heli-dubai.jpg",

    description:
      "Take in breathtaking aerial views of Dubai's most iconic landmarks on a scenic helicopter flight."
  },


  {
    id: 28,

    name: "Ski Dubai Classic",

    category: "adventure",

    categoryName: "Adventure",

    location: "Mall of the Emirates",

    price: 205,

    childPrice: 205,

    image:
      "images/ski-dubai-classic.jpg",

    description:
      "Enjoy snow tubing, sledging and play areas at the Middle East's first indoor ski resort."
  },


  {
    id: 29,

    name: "KidZania Dubai",

    category: "experience",

    categoryName: "Experience",

    location: "Dubai Mall, Downtown Dubai",

    price: 85,

    childPrice: 170,

    image:
      "images/kidzania-dubai.jpg",

    description:
      "Let kids role-play real-life professions in this interactive edutainment city for children."
  },


  {
    id: 30,

    name: "Alexandra Dinner Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 130,

    childPrice: 85,

    image:
      "images/alexandra-dinner-cruise.jpg",

    description:
      "Sail Dubai Marina's glittering skyline aboard the Alexandra with a buffet dinner and live entertainment."
  },


  {
    id: 31,

    name: "Rustar Dhow Cruise - Creek",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Creek",

    price: 50,

    childPrice: 50,

    image:
      "images/rustar-dhow-creek.jpg",

    description:
      "Cruise Dubai Creek aboard the traditional Rustar dhow with dinner and views of Old Dubai."
  },


  {
    id: 32,

    name: "Skydive Gyrocopter",

    category: "adventure",

    categoryName: "Adventure",

    location: "Skydive Dubai, Palm Jumeirah",

    price: 1050,

    childPrice: 1050,

    image:
      "images/skydive-gyrocopter.jpg",

    description:
      "Fly over Palm Jumeirah and the Dubai coastline in an open-air gyrocopter for a unique bird's-eye adventure."
  },


  {
    id: 33,

    name: "Skydive Tandem Over the Palm",

    category: "adventure",

    categoryName: "Adventure",

    location: "Skydive Dubai, Palm Jumeirah",

    price: 2700,

    childPrice: 2700,

    image:
      "images/skydive-tandem-palm.jpg",

    description:
      "Free-fall from 13,000 feet with a tandem jump above the iconic Palm Jumeirah."
  },


  {
    id: 34,

    name: "SeaWorld Abu Dhabi",

    category: "aquarium",

    categoryName: "Aquarium",

    location: "Yas Island, Abu Dhabi",

    price: 315,

    childPrice: 315,

    image:
      "images/sea-world-abu-dhabi.jpg",

    description:
      "Dive into an immersive marine world with thousands of sea creatures across themed ocean zones."
  },


  {
    id: 35,

    name: "House of Hype",

    category: "entertainment",

    categoryName: "Entertainment",

    location: "Dubai Mall, Downtown Dubai",

    price: 105,

    childPrice: 105,

    image:
      "images/house-of-hype.jpg",

    description:
      "Discover Dubai Mall's vibrant hub of pop-up shops, art and interactive entertainment experiences."
  },


  {
    id: 36,

    name: "Yas Waterworld Abu Dhabi",

    category: "waterpark",

    categoryName: "Water Park",

    location: "Yas Island, Abu Dhabi",

    price: 190,

    childPrice: 190,

    image:
      "images/yas-waterworld-abu-dhabi.jpg",

    description:
      "Splash through thrilling slides and rides at Abu Dhabi's award-winning water park on Yas Island."
  },


  {
    id: 37,

    name: "Warner Bros. World",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Yas Island, Abu Dhabi",

    price: 290,

    childPrice: 290,

    image:
      "images/warner-bros-world.webp",

    description:
      "Step into the world's first indoor Warner Bros theme park with rides based on DC and Looney Tunes."
  },


  {
    id: 38,

    name: "Big Bus Dubai - 24 Hours",

    category: "experience",

    categoryName: "Experience",

    location: "Dubai",

    price: 130,

    childPrice: 100,

    image:
      "images/big-bus-24hrs.jpg",

    description:
      "Hop on and off at Dubai's top landmarks with 24 hours of unlimited sightseeing bus access."
  },


  {
    id: 39,

    name: "Bird Show - Creek Park",

    category: "show",

    categoryName: "Show",

    location: "Creek Park, Dubai",

    price: 45,

    childPrice: 30,

    image:
      "images/bird-show-creek-park.jpg",

    description:
      "Watch colourful parrots and birds perform amazing tricks at Creek Park's live bird show."
  },


  {
    id: 40,

    name: "VR Park Dubai Mall",

    category: "entertainment",

    categoryName: "Entertainment",

    location: "Dubai Mall, Downtown Dubai",

    price: 185,

    childPrice: 185,

    image:
      "images/vr-park-dubai-mall.jpg",

    description:
      "Experience thrilling virtual reality rides and games at one of the world's largest VR parks."
  },


  {
    id: 41,

    name: "La Perle by Dragone",

    category: "show",

    categoryName: "Show",

    location: "Al Habtoor City, Dubai",

    price: 240,

    childPrice: 240,

    image:
      "images/la-perle-by-dragone.jpg",

    description:
      "Watch a spectacular live water, acrobatics and stunt show at Al Habtoor City."
  },


  {
    id: 42,

    name: "X-Line Dubai Marina",

    category: "adventure",

    categoryName: "Adventure",

    location: "Dubai Marina",

    price: 650,

    childPrice: 480,

    image:
      "images/xline-dubai-marina.jpg",

    description:
      "Zip-line across Dubai Marina's skyline on one of the world's longest urban ziplines."
  },


  {
    id: 43,

    name: "Private Yacht",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    pricingType: "hourly",

    price: 500,

    childPrice: 500,

    image:
      "images/private-yacht.jpg",

    description:
      "Cruise Dubai's coastline in style aboard a private yacht — AED 500 per hour, perfect for groups and celebrations."
  }

];


// =====================================================
// ELEMENTS
// =====================================================

const attractionGrid =
  document.getElementById("attractionGrid");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const emptyMessage =
  document.getElementById("emptyMessage");

const bookingModal =
  document.getElementById("bookingModal");

const closeModal =
  document.getElementById("closeModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalLocation =
  document.getElementById("modalLocation");

const bookingDate =
  document.getElementById("bookingDate");

const adultQty =
  document.getElementById("adultQty");

const childQty =
  document.getElementById("childQty");

const quantityGrid =
  document.getElementById("quantityGrid");

const childQtyGroup =
  document.getElementById("childQtyGroup");

const hoursGroup =
  document.getElementById("hoursGroup");

const hoursSelect =
  document.getElementById("hoursSelect");

const totalPrice =
  document.getElementById("totalPrice");

const addToCartBtn =
  document.getElementById("addToCartBtn");


// ---- CART ELEMENTS ----

const cartEmpty =
  document.getElementById("cartEmpty");

const cartLines =
  document.getElementById("cartLines");

const cartCheckout =
  document.getElementById("cartCheckout");

const grandTotalText =
  document.getElementById("grandTotalText");

const customerName =
  document.getElementById("customerName");

const customerPhone =
  document.getElementById("customerPhone");

const customerNote =
  document.getElementById("customerNote");

const sendCartBtn =
  document.getElementById("sendCartBtn");

const floatCartBtn =
  document.getElementById("floatCartBtn");

const floatCount =
  document.getElementById("floatCount");

const floatTotal =
  document.getElementById("floatTotal");


let selectedAttraction = null;

let cart = [];

let lineCounter = 1;


// =====================================================
// TODAY'S DATE
// =====================================================

const today = new Date();

const year = today.getFullYear();

const month =
  String(today.getMonth() + 1).padStart(2, "0");

const day =
  String(today.getDate()).padStart(2, "0");

const todayString =
  `${year}-${month}-${day}`;

bookingDate.min = todayString;

bookingDate.value = todayString;


// =====================================================
// DISPLAY ATTRACTIONS
// =====================================================

function displayAttractions() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();

  const category =
    categoryFilter.value;


  const filtered =
    attractions.filter(function (attraction) {

      const matchesSearch =
        attraction.name
          .toLowerCase()
          .includes(search)

        ||

        attraction.location
          .toLowerCase()
          .includes(search)

        ||

        attraction.categoryName
          .toLowerCase()
          .includes(search);


      const matchesCategory =
        category === "all"

        ||

        attraction.category === category;


      return matchesSearch && matchesCategory;

    });


  attractionGrid.innerHTML = "";


  filtered.forEach(function (attraction) {

    const card =
      document.createElement("article");

    card.className = "card";


    card.innerHTML = `

      <div
        class="card-image"
        style="background-image:url('${attraction.image}')"
      ></div>


      <div class="card-body">

        <span class="badge">
          ${attraction.categoryName}
        </span>


        <h3>
          ${attraction.name}
        </h3>


        <p class="location">
          📍 ${attraction.location}
        </p>


        <p class="description">
          ${attraction.description}
        </p>


        <div class="card-bottom">

          <div class="price">

            <small>
              From
            </small>

            <strong>
              AED ${attraction.price}
            </strong>

          </div>


          <button
            class="book-btn"
            onclick="openBooking(${attraction.id})"
          >
            Order now
          </button>

        </div>

      </div>

    `;


    attractionGrid.appendChild(card);

  });


  if (filtered.length === 0) {

    emptyMessage.style.display = "block";

  } else {

    emptyMessage.style.display = "none";

  }

}


// =====================================================
// OPEN BOOKING
// =====================================================

function openBooking(id) {

  selectedAttraction =
    attractions.find(function (item) {

      return item.id === id;

    });


  if (!selectedAttraction) {
    return;
  }


  modalTitle.textContent =
    selectedAttraction.name;


  modalLocation.textContent =
    "📍 " + selectedAttraction.location;


  adultQty.value = 1;

  childQty.value = 0;

  hoursSelect.value = "1";

  bookingDate.value = todayString;


  if (selectedAttraction.pricingType === "hourly") {

    hoursGroup.style.display = "block";

    quantityGrid.style.display = "none";

  } else {

    hoursGroup.style.display = "none";

    quantityGrid.style.display = "grid";


    if (selectedAttraction.noChildTicket) {

      childQtyGroup.style.display = "none";

      quantityGrid.style.gridTemplateColumns = "1fr";

      childQty.value = 0;

    } else {

      childQtyGroup.style.display = "block";

      quantityGrid.style.gridTemplateColumns = "1fr 1fr";

    }

  }


  updateTotal();


  bookingModal.classList.add("show");

  document.body.style.overflow = "hidden";

}


// =====================================================
// CLOSE BOOKING
// =====================================================

function closeBookingModal() {

  bookingModal.classList.remove("show");

  document.body.style.overflow = "";

}


closeModal.addEventListener(
  "click",
  closeBookingModal
);


bookingModal.addEventListener(
  "click",
  function (event) {

    if (event.target === bookingModal) {

      closeBookingModal();

    }

  }
);


document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeBookingModal();

    }

  }
);


// =====================================================
// QUANTITY BUTTONS
// =====================================================

document
  .querySelectorAll(".qty-btn")
  .forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const target =
          document.getElementById(
            button.dataset.target
          );


        let value =
          Number(target.value) || 0;


        if (
          button.dataset.action === "plus"
        ) {

          value++;

        }


        if (
          button.dataset.action === "minus"
        ) {

          value--;

        }


        if (
          target.id === "adultQty"
        ) {

          value =
            Math.max(1, value);

        }


        if (
          target.id === "childQty"
        ) {

          value =
            Math.max(0, value);

        }


        target.value = value;


        updateTotal();

      }
    );

  });


// =====================================================
// UPDATE TOTAL
// =====================================================

function updateTotal() {

  if (!selectedAttraction) {
    return;
  }


  let total = 0;


  if (selectedAttraction.pricingType === "hourly") {

    const hours =
      Math.max(
        1,
        Number(hoursSelect.value) || 1
      );


    total =
      hours *
      selectedAttraction.price;

  } else {

    const adults =
      Math.max(
        1,
        Number(adultQty.value) || 1
      );


    const children =
      Math.max(
        0,
        Number(childQty.value) || 0
      );


    total =
      (
        adults *
        selectedAttraction.price
      )

      +

      (
        children *
        selectedAttraction.childPrice
      );

  }


  totalPrice.textContent =
    "AED " + total;

}


adultQty.addEventListener(
  "input",
  updateTotal
);


childQty.addEventListener(
  "input",
  updateTotal
);


hoursSelect.addEventListener(
  "change",
  updateTotal
);


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
  "input",
  displayAttractions
);


categoryFilter.addEventListener(
  "change",
  displayAttractions
);


// =====================================================
// ADD TO CART
// =====================================================

addToCartBtn.addEventListener(
  "click",
  function () {

    if (!selectedAttraction) {
      return;
    }


    if (!bookingDate.value) {
      alert("Please select a date.");
      return;
    }


    if (selectedAttraction.pricingType === "hourly") {

      const hours =
        Math.max(
          1,
          Number(hoursSelect.value) || 1
        );


      const total =
        hours *
        selectedAttraction.price;


      cart.push({

        lineId: lineCounter++,

        attractionId: selectedAttraction.id,

        name: selectedAttraction.name,

        location: selectedAttraction.location,

        date: bookingDate.value,

        pricingType: "hourly",

        hours: hours,

        hourlyRate: selectedAttraction.price,

        total: total

      });

    } else {

      const adults =
        Math.max(
          1,
          Number(adultQty.value) || 1
        );


      const children =
        Math.max(
          0,
          Number(childQty.value) || 0
        );


      const total =
        (
          adults *
          selectedAttraction.price
        )

        +

        (
          children *
          selectedAttraction.childPrice
        );


      cart.push({

        lineId: lineCounter++,

        attractionId: selectedAttraction.id,

        name: selectedAttraction.name,

        location: selectedAttraction.location,

        date: bookingDate.value,

        adults: adults,

        children: children,

        adultPrice: selectedAttraction.price,

        childPrice: selectedAttraction.childPrice,

        total: total

      });

    }


    renderCart();

    closeBookingModal();

  }
);


// =====================================================
// RENDER CART
// =====================================================

function renderCart() {

  cartLines.innerHTML = "";


  if (cart.length === 0) {

    cartEmpty.style.display = "block";

    cartCheckout.style.display = "none";

    floatCartBtn.classList.remove("show");

    return;

  }


  cartEmpty.style.display = "none";

  cartCheckout.style.display = "block";

  floatCartBtn.classList.add("show");


  let grand = 0;


  cart.forEach(function (line) {

    grand += line.total;


    const row =
      document.createElement("div");

    row.className = "cart-line";


    const childText =
      line.children > 0
        ? " + " + line.children + " Child" + (line.children > 1 ? "ren" : "")
        : "";


    const lineDetails =
      line.pricingType === "hourly"
        ? line.hours + " Hour" + (line.hours > 1 ? "s" : "")
        : line.adults + " Adult" + (line.adults > 1 ? "s" : "") + childText;


    row.innerHTML = `

      <div class="cart-line-info">

        <b>${line.name}</b>

        <span>📅 ${line.date} · ${lineDetails}</span>

      </div>


      <div class="cart-line-price">

        <strong>AED ${line.total}</strong>

        <button class="remove-line-btn" data-id="${line.lineId}">✕</button>

      </div>

    `;


    cartLines.appendChild(row);

  });


  grandTotalText.textContent =
    "AED " + grand;

  floatTotal.textContent =
    "AED " + grand;

  floatCount.textContent =
    cart.length;


  document
    .querySelectorAll(".remove-line-btn")
    .forEach(function (btn) {

      btn.addEventListener(
        "click",
        function () {

          const id =
            Number(btn.dataset.id);

          cart =
            cart.filter(function (line) {

              return line.lineId !== id;

            });

          renderCart();

        }
      );

    });

}


// =====================================================
// FLOATING CART BUTTON → SCROLL TO CART
// =====================================================

floatCartBtn.addEventListener(
  "click",
  function () {

    document
      .getElementById("cart")
      .scrollIntoView({ behavior: "smooth" });

  }
);


// =====================================================
// SEND CART → WHATSAPP
// =====================================================

sendCartBtn.addEventListener(
  "click",
  function () {

    if (cart.length === 0) {
      return;
    }


    const name =
      customerName.value.trim();


    const phone =
      customerPhone.value.trim();


    if (!name || !phone) {

      alert("Please enter your name and phone number.");

      return;

    }


    const note =
      customerNote.value.trim();


    let grand = 0;

    let itemsText = "";


    cart.forEach(function (line, index) {

      grand += line.total;


      itemsText += `
${index + 1}) ${line.name}
📍 ${line.location}
📅 Date: ${line.date}`;


      if (line.pricingType === "hourly") {

        itemsText += `
⏱ Duration: ${line.hours} Hour${line.hours > 1 ? "s" : ""} × AED ${line.hourlyRate}`;

      } else {

        itemsText += `
👨 Adults: ${line.adults} × AED ${line.adultPrice}`;


        if (line.children > 0) {

          itemsText += `
👧 Children: ${line.children} × AED ${line.childPrice}`;

        }

      }


      itemsText += `
Subtotal: AED ${line.total}
`;

    });


    const message =

`Hello Safe Land Tourism 👋

I would like to book the following:
${itemsText}
💰 Grand Total:
AED ${grand}

👤 Customer Name:
${name}

📱 Customer Phone:
${phone}

📝 Special Request:
${note || "None"}

Please confirm availability and booking details.

Thank you!`;


    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);


// =====================================================
// HEADER / CONTACT WHATSAPP
// =====================================================

function setupWhatsAppLinks() {

  const message =
    encodeURIComponent(
      "Hello Safe Land Tourism 👋 I would like to know more about attraction tickets."
    );


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    message;


  document.getElementById(
    "headerWhatsApp"
  ).href = url;


  document.getElementById(
    "contactWhatsApp"
  ).href = url;


  const emailLink =
    document.getElementById("contactEmail");

  if (emailLink) {

    emailLink.href =
      "mailto:" + COMPANY_INFO.email;

    emailLink.textContent =
      COMPANY_INFO.email;

  }


  const socialIds = {

    facebookLink: COMPANY_INFO.facebook,

    instagramLink: COMPANY_INFO.instagram,

    youtubeLink: COMPANY_INFO.youtube,

    tiktokLink: COMPANY_INFO.tiktok

  };


  Object.keys(socialIds).forEach(function (id) {

    const link =
      document.getElementById(id);

    if (link) {

      link.href = socialIds[id];

    }

  });

}


// =====================================================
// START WEBSITE
// =====================================================

displayAttractions();

setupWhatsAppLinks();

renderCart();
