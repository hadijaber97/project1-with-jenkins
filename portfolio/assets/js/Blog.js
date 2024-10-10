// import { Blogs } from "./file.js";

// class Blog {
//   constructor() {
//     this.title = document.getElementById("titleBlog");
//     this.paragraph = document.getElementById("textBlog");
//     this.btnPublish = document.getElementById("publishBlog");

//     this.blogs = Blogs;
//     this.btnPublish.addEventListener("click", this.log);
//   }

//   data = () => {
//     this.blogs.id = this.blogs.length;
//     this.blogs.title = this.title.value;
//     this.blogs.paragraph = this.paragraph.value;
//   };

//   log = () => {
//    this.blogs.push(JSON.stringify(this.data))
//     console.log(this.blogs);
//   };
// }

// export default Blog;

import { Blogs } from "./file.js";

class Blog {
  constructor() {
    this.title = document.getElementById("titleBlog");
    this.paragraph = document.getElementById("textBlog");
    this.btnPublish = document.getElementById("publishBlog");

    this.blogs = [];
    this.btnPublish.addEventListener("click", this.handleClick);
  }

  getData = () => {
    return {
      id: this.blogs.length,
      title: this.title.value,
      paragraph: this.paragraph.value,
      date: new Date(),
    };
  };

  handleClick = () => {
    const newBlog = this.getData();
    if (this.title.value !== "" && this.paragraph.value != "") {
      this.blogs.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(newBlog));

      Blogs.filter((i)=>{
        i.push(newBlog)
      })
    //   console.log(this.blogs.reverse());
    } else {
      alert("please enter your data");
    }
  };
}

export default Blog;
