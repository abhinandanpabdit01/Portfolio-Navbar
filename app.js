const nav_items = document.querySelector(".nav-items")
function menuToggle() {
    nav_items.classList.toggle("active")
  }
const darkMoodBtn = document.getElementById("darkMoodBtn")

darkMoodBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})