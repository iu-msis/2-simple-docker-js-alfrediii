var app = new Vue({
  el: '#commentTable',
  data: {
    commentList: [{
      id: "",
      name: "",
      commentText: ""
    }],
    newComment: {
      id: "",
      name: "",
      commentText: ""
    }
  },
  methods: {
    commentData() {
      return {
        id: "",
        name: "",
        commentText: ""
      }
    }
  },
  created() {
    fetch("api/comments/index.php")
    .then( response => response.json() )
    .then( json => {
      this.commentList = json;
      console.log(this.newComment)}
    );
  }
})

var app = new Vue({
  el: '#newCommentForm',
  data: {
    commentList: [{
      id: "",
      name: "",
      commentText: ""
    }],
    newComment: {
      id: "",
      name: "",
      commentText: ""
    }
  },
methods: {
  fetchComment(){
    fetch("api/comments/").then(response => response.json())
    .then(json => {
      this.commentList=json;
      console.log(this.commentList);
      });
    },
  creatingComments() {
    fetch('api/comments/create.php', {
      method:'POST',
      body: JSON.stringify(this.newComment),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(response => response.json()).then(json => {
      console.log("Post:", json);
      this.commentList.push(json[0]);
      this.newComment = this.newCommentData();
        });

    console.log("Create (POSTing)...!");
    console.log(this.newComment);
    },
  newCommentData(){
    return {
      id:"",
      name: "",
      commentText: ""
      };
    }
  },
  created() {
    this.fetchComment();
  }
}) 
