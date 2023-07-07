//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const homeStartingContent = "In the hustle and bustle of daily life, we often find ourselves caught up in the whirlwind of responsibilities, tasks, and obligations. Reflections is here to offer you a sanctuary, a daily journaling space where you can pause, reflect, and nurture your inner world With Reflections, every day is an opportunity to embark on a meaningful exploration of your thoughts, emotions, and experiences. We believe in the power of self-reflection as a transformative tool for personal growth and understanding. Our journal prompts and exercises are thoughtfully crafted to guide you on this introspective journey, encouraging you to delve into the depths of your mind and heart.";
const aboutContent = "Our team of passionate individuals, including writers, researchers, and psychologists, collaboratively develop journal prompts, exercises, and resources that are carefully designed to spark introspection and encourage personal growth. We believe that by setting aside a few moments each day for intentional reflection, individuals can unlock their potential, gain clarity, and cultivate a greater sense of self-awareness.Reflections is more than just a platform for journaling; it's a community that supports and uplifts one another. We encourage engagement and interaction among our users, fostering a sense of connection and providing a space for individuals to share their experiences, insights, and wisdom. We believe that through collective sharing, we can learn from one another, expand our perspectives, and inspire personal growth in the process.";
const contactContent = "Reach Out and Connect with Reflections We value open communication and are here to assist you with any questions, feedback, or inquiries you may have regarding Reflections and your journaling journey. We encourage you to connect with us, and we'll do our best to provide you with the support you need.For general inquiries or information about our platform and services, please email us at sukalprathore@gmail.com. Our dedicated team of customer support representatives will promptly respond to your message and assist you with any concerns or queries.";

const app = express();
let posts = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home", {
    startingContent:homeStartingContent,
    posts:posts
  });
});
app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
});
app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
});
app.get("/compose",function(req,res){
  res.render("compose")
})

app.post("/compose",function(req,res){
  const post = {
    title:req.body.postTitle,
    content:req.body.postBody
  }
  posts.push(post);
  res.redirect("/");
})

app.get("/posts/:postName",function(req,res){
  const requestedTitle = _.lowerCase(req.params.postName) ;
  posts.forEach(function(post){
    const storedTitle  =_.lowerCase(post.title);
    if(storedTitle===requestedTitle){
      res.render("post",{
        title:post.title,
        content:post.content
      })
    }
  })
})











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
