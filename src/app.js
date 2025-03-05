import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generaterandomcard ()
  //write your code here
  document.querySelector("#newcardbtn").addEventListener("click", generaterandomcard )
  
};
const generaterandomcard = () => {
  const iconAr = document.querySelector(".top")
  const bottom1 = document.querySelector(".bottom")

  let icon = ["♦", "♥", "♠", "♣"]
  let number = ["7", "8", "9", "10", "J", "Q", "K"]
  
  let iconIndex = Math.floor(Math.random() * icon.length)
  let numberIndex = Math.floor(Math.random() * number.length)

  let randomIcon = icon[iconIndex]
  let randomNumber = number[numberIndex]

  if(randomIcon == "♥") {
    iconAr.style.color = "red"
  }
  else {
    iconAr.style.color = "black"
  }
  if (randomIcon == "♥") {
    bottom1.style.color = "red"
  }
  else {
    bottom1.style.color = "black"
  }


  iconAr.innerHTML = randomIcon
  document.querySelector(".number").innerHTML = randomNumber
  bottom1.innerHTML = randomIcon
} 