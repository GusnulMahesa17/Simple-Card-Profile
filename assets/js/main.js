/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=====DOM PROFILE MODEL====*/
function hideProfile() {
  let contentSection = document.querySelector(".content-sec");

  contentSection.classList.add("hidden");
}

function hideSection1() {
  let profileSection = document.querySelector(".container");
  let titleContent = document.querySelector(".title-content");
  let bodyElement = document.body;
  profileSection.classList.add("hidden");
  titleContent.classList.add("hidden");
  const html = `<div class="content-sec"> <div id="content">
  <div><button class="back-button" id="backButton">⬅Back</button></div>
  <article>
    <div class="container-content">
      <div class="left-content">
        <div>
          <img src="assets/images/hadi-1.jpeg" alt="" />
        </div>
        <br />
        <div>
          <ul>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-blogger"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm
          <span
            >Hadi Setiawan
            <br />
          </span>
          Undergraduated <br /> Informatic Engineering
        </h1>
      </div>
    </div>
  </article>

  <aside>
    <article class="profile-card">
      <img src="assets/images/hadi-1.jpeg" alt="" />
      <h2>Biodata</h2>
      <section>
        <table>
          <tr>
            <th>Nama</th>
            <td>Hadi Setiawan</td>
          </tr>
          <tr>
            <th>Asal Daerah</th>
            <td>Tanggerang, Banten</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>hadisetiawan585@gmail.com</td>
          </tr>
        </table>
      </section>
    </article>
  </aside>
</div></div>`;
  bodyElement.insertAdjacentHTML("afterbegin", html);
  document.getElementById("backButton").addEventListener("click", function () {
    let profileSection = document.querySelector(".container");
    let titleContent = document.querySelector(".title-content");
    profileSection.classList.remove("hidden");
    titleContent.classList.remove("hidden");
    hideProfile();
  });
}

function hideSection2() {
  let profileSection = document.querySelector(".container");
  let titleContent = document.querySelector(".title-content");
  let bodyElement = document.body;
  profileSection.classList.add("hidden");
  titleContent.classList.add("hidden");
  const html = `<div class="content-sec"> <div id="content">
  <div><button class="back-button" id="backButton">⬅Back</button></div>
  <article>
    <div class="container-content">
      <div class="left-content">
        <div>
          <img src="assets/images/royhan-2.jpeg" alt="" />
        </div>
        <br />
        <div>
          <ul>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-blogger"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm
          <span
            >Royhan Falaha
            <br />
          </span>
          Undergraduated <br /> Informatic Engineering
        </h1>
      </div>
    </div>
  </article>

  <aside>
    <article class="profile-card">
      <img src="assets/images/royhan-2.jpeg" alt="" />
      <h2>Biodata</h2>
      <section>
        <table>
          <tr>
            <th>Nama</th>
            <td>Royhan Falaha</td>
          </tr>
          <tr>
            <th>Asal Daerah</th>
            <td>Jakarta Selatan, Jakarta</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>royhanfalaha2@gmail.com</td>
          </tr>
        </table>
      </section>
    </article>
  </aside>
</div></div>`;
  bodyElement.insertAdjacentHTML("afterbegin", html);
  document.getElementById("backButton").addEventListener("click", function () {
    let profileSection = document.querySelector(".container");
    let titleContent = document.querySelector(".title-content");
    profileSection.classList.remove("hidden");
    titleContent.classList.remove("hidden");
    hideProfile();
  });
}
function hideSection3() {
  let profileSection = document.querySelector(".container");
  let titleContent = document.querySelector(".title-content");
  let bodyElement = document.body;
  profileSection.classList.add("hidden");
  titleContent.classList.add("hidden");
  const html = `<div class="content-sec"><div id="content">
  <div><button class="back-button" id="backButton">⬅Back</button></div>
  <article>
    <div class="container-content">
      <div class="left-content">
        <div>
          <img src="assets/images/guznul-3.jpeg" alt="" />
        </div>
        <br />
        <div>
          <ul>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-blogger"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm
          <span
            >Gusnul Mahesa
            <br />
          </span>
          Undergraduated <br /> Informatic Engineering
        </h1>
      </div>
    </div>
  </article>

  <aside>
    <article class="profile-card">
      <img src="assets/images/guznul-3.jpeg" alt="" />
      <h2>Biodata</h2>
      <section>
        <table>
          <tr>
            <th>Nama</th>
            <td>Gusnul Mahesa</td>
          </tr>
          <tr>
            <th>Asal Daerah</th>
            <td>Depok, Jawa Barat</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>gusnulmahesa17@gmail.com</td>
          </tr>
        </table>
      </section>
    </article>
  </aside>
</div></div>`;
  bodyElement.insertAdjacentHTML("afterbegin", html);
  document.getElementById("backButton").addEventListener("click", function () {
    let profileSection = document.querySelector(".container");
    let titleContent = document.querySelector(".title-content");
    profileSection.classList.remove("hidden");
    titleContent.classList.remove("hidden");
    hideProfile();
  });
}
function hideSection4() {
  let profileSection = document.querySelector(".container");
  let titleContent = document.querySelector(".title-content");
  let bodyElement = document.body;
  profileSection.classList.add("hidden");
  titleContent.classList.add("hidden");
  const html = `<div class="content-sec"><div id="content">
  <div><button class="back-button" id="backButton">⬅Back</button></div>
  <article>
    <div class="container-content">
      <div class="left-content">
        <div>
          <img src="assets/images/nurhalimah-4.jpg" alt="" />
        </div>
        <br />
        <div>
          <ul>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-blogger"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm
          <span
            >Siti Nurhalimah
            <br />
          </span>
          Undergraduated <br /> Informatic Engineering
        </h1>
      </div>
    </div>
  </article>

  <aside>
    <article class="profile-card">
      <img src="assets/images/nurhalimah-4.jpg" alt="" />
      <h2>Biodata</h2>
      <section>
        <table>
          <tr>
            <th>Nama</th>
            <td>Siti Nurhalimah</td>
          </tr>
          <tr>
            <th>Asal Daerah</th>
            <td>Kepulauan Seribu</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>citynoorhalemah15@gmail.com</td>
          </tr>
        </table>
      </section>
    </article>
  </aside>
</div></div>`;
  bodyElement.insertAdjacentHTML("afterbegin", html);
  document.getElementById("backButton").addEventListener("click", function () {
    let profileSection = document.querySelector(".container");
    let titleContent = document.querySelector(".title-content");
    profileSection.classList.remove("hidden");
    titleContent.classList.remove("hidden");
    hideProfile();
  });
}
function hideSection5() {
  let profileSection = document.querySelector(".container");
  let titleContent = document.querySelector(".title-content");
  let bodyElement = document.body;
  profileSection.classList.add("hidden");
  titleContent.classList.add("hidden");
  const html = `<div class="content-sec"><div id="content">
  <div><button class="back-button" id="backButton">⬅Back</button></div>
  <article>
    <div class="container-content">
      <div class="left-content">
        <div>
          <img src="assets/images/farhan-5.jpg" alt="" />
        </div>
        <br />
        <div>
          <ul>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-blogger"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm
          <span
            >Muhammad Farhan
            <br />
          </span>
          Undergraduated <br /> Informatic Engineering
        </h1>
      </div>
    </div>
  </article>

  <aside>
    <article class="profile-card">
      <img src="assets/images/farhan-5.jpg" alt="" />
      <h2>Biodata</h2>
      <section>
        <table>
          <tr>
            <th>Nama</th>
            <td>Muhammad Farhan</td>
          </tr>
          <tr>
            <th>Asal Daerah</th>
            <td>Jakarta Timur, Jakarta</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>2203015150@gmail.com</td>
          </tr>
        </table>
      </section>
    </article>
  </aside>
</div></div>`;
  bodyElement.insertAdjacentHTML("afterbegin", html);
  document.getElementById("backButton").addEventListener("click", function () {
    let profileSection = document.querySelector(".container");
    let titleContent = document.querySelector(".title-content");
    profileSection.classList.remove("hidden");
    titleContent.classList.remove("hidden");
    hideProfile();
  });
}
