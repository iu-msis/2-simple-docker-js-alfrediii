var app = new Vue({
  el: '#randomProfile',
  data: {
    randName:'',
    randEmail:'',
    randDOB:'',
    randAge:'',
    randCountry:'',
    randImg:'',
    randImgThumb:''
  },

  created(){
    this.fetchRand();
  },
  methods:{
    fetchRand: function() {
      fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(data =>
        {
        var randUser = data.results[0]
        console.log(randUser);
        this.randName = randUser.name.first + '' + randUser.name.last;
        this.randEmail = randUser.email;
        this.randDOB = randUser.dob.date.substring(5,10) + '-' + randUser.dob.date.substring(0,4);
        this.randAge = randUser.dob.age;
        this.randCountry = randUser.location.country;
        this.randImg = randUser.picture.large;
        this.randImgThumb = randUser.picture.thumbnail;
      });
    },
  },
})
