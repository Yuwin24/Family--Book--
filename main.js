
var reasons = [
  "C.P.Rajesh(Dad)",
  "R.L.Yuwin(Me)",
  "P.Latha(Mom)",
  "R.L.Adhwin(Bro)",

];
var images = [
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWJW9f2df8ibmWPwTui-rpByNkBffoOJ80g&usqp=CAU",
  "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LcEVcyZ-Ien9ulvh-WBZrOTa6lm8gNnk6A&usqp=CAU",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F842%2F1*38QD8tbJ8z7Q4WyI9VC6QA.png&imgrefurl=https%3A%2F%2Fmedium.com%2Fluwd-media%2Fcorporatism-for-kids-boss-baby-is-so-much-more-than-a-one-joke-project-3c637c3e2467&tbnid=S_iSVYguGtNKUM&vet=12ahUKEwi9p8fM277vAhV4yXMBHXdqBOwQMygBegUIARDJAQ..i&docid=MoLMDLa1WA4RNM&w=842&h=1250&q=boss%20baby%20images&ved=2ahUKEwi9p8fM277vAhV4yXMBHXdqBOwQMygBegUIARDJAQ"

];

var i = 0;
function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
                      document.getElementById("audio").play();

}
