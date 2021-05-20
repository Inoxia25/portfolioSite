import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-site';
  project={
    name:"Travel Diaries",
    img: "assets/TravelDiaries.png",
    description:"A webapp that lets you share your travel experiences, with a feature to leave a comment on someone's post. It recommends you some travel music, and suggests songs based on your travel mood!",
    tech:[{name:"NodeJs"},
    {name:"MongoDB"},
    {name:"Bootstrap"}, 
    {name:"Spotify API"},
    {name:"Passport.js"},
  ],
    site_link: "https://travel-diariess.herokuapp.com/",
    repo_link:"https://github.com/Inoxia25/TravelDiaries"
  }
  projects=[this.project];
  ngOnInit(){
    this.project={
      name: "Frontleads",
      img:"assets/FrontLeadsLogo.png",
      description:"A project created during TO Hacks, this web app lets you enter resources for covid supplies, oxyden beds, ventilators,etc in the database.It lets you filter by the type of resource, its authenticity or location and shows exactly what you need!",
    tech:[{name:"Angular"},
    {name:"AngularMaterial"},
    {name:"Cassandra"}, 
    {name:"NodeJs"}],
    site_link:"",
    repo_link:"https://github.com/Inoxia25/frontLeads"
    };
    this.projects.push(this.project);
    this.project={
      name: "SongBud",
      img:"assets/SongBud.png",
      description:"A chat App created for practice. It lets users to listen to different songs in different rooms.",
    tech:[{name:"NodeJs"},
    {name:"Socket.io"}],
    site_link:"",
    repo_link:"https://github.com/Swatilekha-Roy/Song-Bud"
    };

    this.projects.push(this.project);
    this.project={
      name: "Acender",
      img:"assets/Acender.png",
      description:" A website created for HueHacks, under the theme inclusivity.Its a place where asexual individuals can interact and be themselves in a safe online space.",
    tech:[{name:"NodeJs"},
    {name:"Socket.io"},
  {name:"Bootstrap"}],
    site_link:"https://acender.herokuapp.com/",
    repo_link:"https://github.com/Swatilekha-Roy/Acender"
    };
    this.projects.push(this.project);
    this.project={
      name: "rhythMind",
      img:"assets/rhythMind.png",
      description:"A web app that plays music according to your emotional needs and helps you recharge your mental health with an altogether new and different listening experience.This project was the winner of AthenaHacks'21 under the Social Good Category.",
    tech:[{name:"Bootstrap"},
    {name:"NodeJs"},
    {name:"Azure"},
    {name:"PexelsAPI"},
    {name:"Express.js"},
    {name:"Spotify Api"}],
    site_link:"https://rhythmind.herokuapp.com",
    repo_link:"https://github.com/Swatilekha-Roy/rhythMind"
    };
    this.projects.push(this.project);
    this.project={
      name: "Blogg-It",
      img:"assets/BlogSite.png",
      description:"A blog page allowing users to create,edit and delete blogs!",
    tech:[{name:"CSS"},
    {name:"Semantic UI"},
  {name:"NodeJs"},
  {name:"Express.js"},
  {name:"MongoDB"},
],
    site_link:"https://blogg-it.herokuapp.com/",
    repo_link:"https://github.com/Inoxia25/Blog-Page"
    };
    this.projects.push(this.project);
    this.project={
      name: "PortfolioSite",
      img:"assets/portfolioSite.png",
      description:"A portfolio site created to showcase my interests and projects!",
    tech:[{name:"Angular"},
    {name:"AngularMaterial"},
  {name:"CSS"}],
    site_link:"https://inoxia25.github.io/portfolioSite/",
    repo_link:"https://github.com/Inoxia25/portfolioSite"
    };
    this.projects.push(this.project);
    
  }

}
