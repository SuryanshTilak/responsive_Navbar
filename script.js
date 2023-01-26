const mobile_nav_button = document.querySelector(".mobile-navbar-btn");
const header=document.querySelector(".header")

console.log(mobile_nav_button)

mobile_nav_button.addEventListener('click' ,()=> toggleNavbar() )

toggleNavbar =() =>{
    header.classList.toggle("active")
}
