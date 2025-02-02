/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}
/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  // Menggunakan window.scrollY atau cukup scrollY
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

// Pastikan nama fungsi yang dipanggil sesuai
window.addEventListener("scroll", shadowHeader);
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home_swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centerSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});
/*=============== FEATURED SWIPER ===============*/
let swiperFeatued = new Swiper(".featured_swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centerSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centerSlides: false,
    },
  },
});
/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new_swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

// Correct the event listener string and function name
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]"); // Mengambil semua elemen section yang memiliki atribut id

const scrollActive = () => {
  // Dapatkan posisi scroll saat ini
  const scrollY = window.pageYOffset;

  // Iterasi melalui setiap section
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // Tinggi section
    const sectionTop = current.offsetTop - 58; // Posisi top section (dikurangi header jika ada)
    const sectionId = current.getAttribute("id"); // Ambil id dari section
    const sectionClass = document.querySelector(
      ".nav_menu a[href*=" + sectionId + "]"
    ); // Mengambil link dari nav yang memiliki href sama dengan id section

    // Cek apakah posisi scroll berada dalam section tertentu
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link"); // Tambahkan class 'active-link' jika scroll berada dalam range
    } else {
      sectionClass.classList.remove("active-link"); // Hapus class 'active-link' jika scroll di luar range
    }
  });
};

// Tambahkan event listener untuk memonitor scroll
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";

  // Mendapatkan tema yang dipilih sebelumnya (jika pengguna memilih sebelumnya)
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  // Mendapatkan tema saat ini yang memiliki interface dengan validasi dark mode
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

  // Validasi jika user memilih sebelumnya dengan merubah tampilan saat ini
  if (selectedTheme) {
    // Jika validasi pemilihan user ditemukan, kita perlu tahu apakah menambah atau menghapus dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
      iconTheme
    );
  }

  // Aktifkan / nonaktifkan tema dengan klik tombol
  themeButton.addEventListener("click", () => {
    // Tambahkan atau hapus tema dark / icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Menyimpan tema dan ikon yang dipilih oleh pengguna
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  // Mengatur animasi untuk elemen dengan kelas tertentu
  sr.reveal(".home_data, .featured_container, .new_container");
  sr.reveal(".home_images", { delay: 600 });
  sr.reveal(".services_card", { interval: 100 });
  sr.reveal(".discount_data", { origin: "left" });
  sr.reveal(".discount_images", { origin: "right" });
});
