
var tableApp = new Vue({
  el: '#commentTable',
  data: {
    commentList: []
  },
  created() {
    fetch("api/comments/index.php")
    .then( response => response.json())
    .then( json => {
      this.commentList = json;
      console.log(this.newComment)}
    );
  }
})

var formApp = new Vue({
  el: '#newCommentForm',
  data: {
    newComment: {
      id: "",
      name: "",
      commentText: ""
    }
  },
methods: {
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
      tableApp.commentList.push(json[0]);
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
  }
})
