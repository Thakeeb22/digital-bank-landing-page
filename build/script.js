const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  const toggleMenu = () => {
    const isOpen = navMenu.classList.contains("opacity-100");
    if(isOpen){
        navMenu.classList.remove("opacity-100","translate-y-0", "pointer-events-auto");
        navMenu.classList.add("opacity-0","-translate-y-4","pointer-events-none")

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }else{
        navMenu.classList.remove("opacity-0","-translate-y-4","pointer-events-none")
        navMenu.classList.add("opacity-100","-translate-y-4","pointer-events-auto");

        hamburgerIcon.classList.add("hidden")
        closeIcon.classList.remove("hidden")
    }
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
