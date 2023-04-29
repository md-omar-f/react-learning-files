const Post = require("../models/posts");

exports.getPosts = (req, res) => {
  const posts = Post.find().select("_id title body")
  .then(posts => {
    res.status(200).json({posts: posts});
  })
  .catch((err) => console.log(err));
}

exports.createPosts = (req, res) => {
  const post = new Post(req.body);
  // //console.log("CREATING POST", req.body);
  // post.save((result) => {
  //   res.status(200).json({
  //     post: result
  //   });
  // })
  post.save().then((result) => {
    res.status(200).json({
      post: result
    }); 
  });
}