//! Tıklanacak bölümlerin hepsini bir değişkene atayalım
const buttons = document.querySelectorAll(".footer-ul");

//! Tıklanacak bölümlerin her birine tıklandığında çalıştıracağı fonksiyonu verelim
buttons.forEach((item) => {
  const header = item.querySelector(".footer-ul-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    //! Açılacak listeleri bir değişkene atayalım
    const footerList = item.querySelectorAll(".footer-up-ul");
    // ? Burada duruma göre forEach yerine Capturing kullanılabilirdi.

    if (item.classList.contains("open")) {
      footerList.forEach((list) => {
        list.style.height = `${list.scrollHeight}px`;
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(180deg)";
      });
    } else {
      footerList.forEach((list) => {
        list.style.height = "0px";
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(360deg)";
      });
    }
  });
});

const navBtn = document.querySelector(".hamburger");
const homeImg = document.querySelector(".grid1-img");
const navMobil = document.querySelector(".navbar-mobil");

navBtn.addEventListener("click", () => {
  navMobil.classList.toggle("mobil");
  if (navMobil.classList.contains("mobil")) {
    homeImg.style.filter = "blur(2px)";
    navMobil.style.display = "flex";
  } else {
    homeImg.style.filter = "blur(0)";
    navMobil.style.display = "none";
  }
});
