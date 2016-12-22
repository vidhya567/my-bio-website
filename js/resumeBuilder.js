/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("vidhyasagar")
 // var awesomethoughts="I am vidhya and I am awesome";
 // console.log(awesomethoughts);
 // var funthoughts=awesomethoughts.replace("awesome","fun");
 // console.log(funthoughts);
 // $("#main").append(funthoughts);
 // var name="VIDHYASAGAR";
 // var formattedname=HTMLheaderName.replace("%data%",name);
 // $("#header").append(formattedname);
 // var role=" Seeking 2017 Summer Intership in Software Engineering ";
 // var formattedrole=HTMLheaderRole.replace("%data%",role);
 // $("#header").append(formattedrole);
 var bio={
  "name" :"VIDHYASAGAR thirumaraiselvan",
  "role" :" Seeking 2017 Summer Intership in Software Engineering ",
  "contacts" :{
  	"email":"thirumav@uci.edu",
  	"personal email":"vidhyasagar1994@gmail.com",
  	"phone":"9497715985",
  	"address":"Apt No:28A,3901 parkview Lane,Irvine-92612"
  },
  "pictureurl"  :"/Users/vidhyasagar/Downloads/frontend-nanodegree-resume-master/images/me.jpg",
  "LinkedInProfile":"https://www.linkedin.com/in/vidhyasagar-thirumaraiselvan-13028010a",
  "githubprofile":"https://github.com/vidhya567",
  "skills":["C", "C++", "Python", "SQL", "Java(beginner)", "HTML", "CSS", "Java Script"]

 }
bio.display=function(){
 var formattedname=HTMLheaderName.replace("%data%",bio.name);
 $("#header").append(formattedname);
 var formattedrole=HTMLheaderRole.replace("%data%",bio.role);
 $("#header").append(formattedrole);
 //var image=HTMLbioPic.replace("%data%",bio.pictureurl);
 //$("#header").append(image);
 var email=HTMLemail.replace("%data%",bio.contacts.email);
 //$("#header").append(email);
 var mobile=HTMLmobile.replace("%data%",bio.contacts.phone);
 //$("#header").append(mobile);
 var github=HTMLgithub.replace("%data%",bio.githubprofile);
 //$("#header").append(github);
 var linkedin=HTMLlinkedin.replace("%data%",bio.LinkedInProfile);
 //$("#header").append(linkedin);
  var headertag=email+"  "+mobile+"  "+github+"  "+linkedin;
  //$("#header").append(headertag);
  $("#footerContacts").append(email,mobile,github,linkedin);

     if(bio.skills.length>0){

       $("#header").append(HTMLskillsStart);
       length=bio.skills.length;
       //for(var i=0;i<length;i++)
       for(skill in bio.skills)
        {
           var formattedskill=HTMLskills.replace("%data%",bio.skills[skill]);
          $("#skills").append(formattedskill);
         };
                          }
}
var education ={

	"schools":[
	{
       "degree":"Master of Science",
       "schoolname":"University of California,Irvine",
       "major":"Computer Engineering",
       "GPA":4.43
	},

	{
      "degree":"Bachelor of Engineering",
      "schoolname":"Anna University",
      "major":"Electronics and Communication Engineering",
      "GPA":8.02

	}

	       ]

 }

 education.display=function(){
    var len=education.schools.length;

    for(var i=0;i<len;i++)
    {
     $("#education").append(HTMLschoolStart);//namedegreedatemajor 
     var name=HTMLschoolName.replace("%data%",education.schools[i].schoolname);
     var degree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
     var major=HTMLschoolMajor.replace("%data%",education.schools[i].major);
     $(".education-entry:last").append(name,degree,major);


    }
 }
var projects={
	"projectsurl": [{
			"name": "Movie Website using Python",
			"description": "Built a website using python that lists a set a movies and their trailers.",
			"period": " Oct-2017",
			//"url": "https://github.com/vidhya567/Movie-Trailer-Website"
		}, 
		{
			"name": "Tournament Results using Python DBI",
			"description": "Built a python module that uses PostgreSQL database to keep track of players and matches in a Game tournament.",
			"period": "Nov-2017",
			//"url": "https://github.com/vidhya567/swiss-tournament-database"

		},

        {
			"name": " Item Catalog ",
			"description": "Create a web application that queries a database for items on restaurant menu and then dynamically generates complete menu in the form of web pages and API endpoints using Object-Relational mapping and CRUD operations.",
			"period": "Dec2017"
		}, 
		{
			"name": "Implementation of a Database Management System in C++",
			"description": "Building a query engine that processes relational operations. A record based file manager, index manger (B+ tree indexing) and a relational manger is built underneath to support the whole database.",
			"period": "Sep2017-Dec2017"
		},

		{
			"name": " Optimal Band Pass Filter",
			"description": "Built and designed a Mixed technology resonator based band pass filter using TEM coaxial resonators and Micro strip lines for air collision avoidance application. ",
			"period": "Jan 2016-April 2016 "
		},

		{
			"name": "Neighborhood Map using AJAX",
			"description": "Building a web application using jQuery’s AJAX that will a give our location by querying google street view  and Wikipedia API.",
			"period": "Dec2017"
		}
	]

}
projects.display=function(){
    length=projects.projectsurl.length;
    console.log(length);
    for(var i=0;i<length;i++)
    {
      $("#projects").append(HTMLprojectStart);
      var name=HTMLprojectTitle.replace("%data%",projects.projectsurl[i].name);
      var period=HTMLprojectDates.replace("%data%",projects.projectsurl[i].period);
      var desc=HTMLprojectDescription.replace("%data%",projects.projectsurl[i].description);
      $(".project-entry:last").append(name);
      $(".project-entry:last").append(period);
      $(".project-entry:last").append(desc);

    }
    
	
}
var work={

   "works":[

          	{

          		"job":"Summer Intern",
          		"company":"EMBKA PVT LTD",
          		"period":".     April 2015-July 2015",
          		"description":"A product based Startup Company that manufactures sensors, assembles microcontroller based projects. "
          	},
          	{
          		"job":"Final Year Intern",
          		"company":"URJITHA ELECTRONICS(MINI CIRCUITS,CHENNAI,INDIA)",
          		"period":"Jan 2016-April 2016",
          		"description":"RF/Micro Wave components and systems manufacturer "

          	}

   ]

}



work.display=function (){
if(work.works.length>0)
{

    for(jobid in work.works)
    {
 	$("#workExperience").append(HTMLworkStart);
    var title=HTMLworkTitle.replace("%data%",work.works[jobid].job);
    var employer=HTMLworkEmployer.replace("%data%",work.works[jobid].company);
    var dates=HTMLworkDates.replace("%data%",work.works[jobid].period);
    var desc=HTMLworkDescription.replace("%data%",work.works[jobid].description);
    var emp=employer+title;
    $(".work-entry:last").append(emp);
    //$("#work-entry").append(employer);
    $(".work-entry:last").append(dates);
    $(".work-entry:last").append(desc);
    }

}

}


//displaywork();



// $(document).click(function(loc)){
// var x=loc.pageX;
// var y=loc.pageY;
// logclicks(x,y);

// });

$("#main").append(internationalizeButton);

function inName(name){
	space=' ';
  var intname=name.split(space);

  var firstname=intname[0];
   console.log(firstname);
  var secondname=intname[1];
   console.log(secondname);
  var finalname=firstname[0].toUpperCase()+firstname.slice(1).toLowerCase()+" "+secondname.toUpperCase();
  console.log(finalname);
  return finalname;

}


//inName(bio.name);
bio.display();
education.display();
work.display();
projects.display();
