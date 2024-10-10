// import Blog from "./Blog.js";

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        () => {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});



// new Blog()
// const blogs = document.getElementById("blogs");

// const post = `

//  <div class="blog-card">
//         <div class="blog-card-header">
//             <img src="assets/imgs/p05.jpeg" class="blog-card-img" alt="Blog Image" id="blogImg">
//         </div>
//         <div class="blog-card-body">
//             <h5 class="blog-card-title" id="blogTitle">Post 1</h6>

//             <p id="blogText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>
//         </div>
//     </div><!-- end of blog wrapper -->

//      <div class="blog-card">
//         <div class="blog-card-header">
//             <img src="assets/imgs/p5.jpeg" class="blog-card-img" alt="Blog Image" id="blogImg">
//         </div>
//         <div class="blog-card-body">
//             <h5 class="blog-card-title" id="blogTitle">Post 2</h6>

//             <p id="blogText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>
//         </div>
//     </div><!-- end of blog wrapper -->


// `;

// blogs.innerHTML += post;
