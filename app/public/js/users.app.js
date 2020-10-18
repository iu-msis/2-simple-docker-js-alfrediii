var app = new Vue({
  el: '#users',
  data: {
    randName:'',
    randOrigin:'',
    randDOB:''
  },

  created(){
    this.fetchRand();
  },
  methods:{
    fetchRand: function() {
      fetch("https://randomuser.me/api").then(response => response.json()).then(data =>
        {
        var randUser = data.results[0];
        console.log(randUser);
        this.randName = randUser.name.first + ' ' + randUser.name.last;
        this.randOrigin = randUser.location.city +', '+ randUser.location.country;
        this.randDOB = randUser.dob.date.substring(5,7)+'/'
        +randUser.dob.date.substring(8,10)+'/'
        +randUser.dob.date.substring(0,4);
        this.randAge = randUser.dob.age;
        this.randEmail = randUser.email.slice(0,-11) + 'iu.edu';
        this.randImg = randUser.picture.large;
        this.randImgThumb = randUser.picture.thumbnail;
      });
    },
  },
})
