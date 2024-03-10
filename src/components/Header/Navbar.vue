<template>
  <nav class="navbar" :class="{ 'fixed': isNavFixed }">
    <div class="container">
      <div class="logo">
        <img src="/src/assets/img/tran_logo.png" alt="Your Logo" style="width: 100px; height: 120px;margin-left: -30px;">
      </div>
      <!-- Menu Icon -->
      <div class="menu-icon" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </div>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/packages" class="nav-link">Packages</router-link></li>
        <li><router-link to="/about" class="nav-link">About Us</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
        <li><router-link to="/members" class="nav-link" style="background-color:#66cc33; height: 50px; border-radius: 30px;padding: 15px 10px;border: 1px solid white;">Members Entry</router-link></li>
        <li><router-link to="/buy-package" class="nav-link"  style="background-color:#66cc33; height: 50px; border-radius: 30px;padding: 15px 10px;border: 1px solid white;">Buy Package</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const isNavFixed = ref(false);
    const isMenuOpen = ref(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        isNavFixed.value = true;
      } else {
        isNavFixed.value = false;
      }
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isNavFixed,
      isMenuOpen,
      toggleMenu
    };
  }
})
</script>
   
   <style scoped>
   .navbar {
    width: 100%;
     height: 120px;
     display: flex;
     align-items: center;
     background-color: transparent; /* Default background color */
     border-bottom: 1px solid #ddd;
     transition: background-color 0.3s ease; /* Smooth transition */
   }
   
   .fixed {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     z-index: 1000;
   }
   
   .scroll-background {
     background-color: #66cc33 ; /* Background color when scrolling */
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }
   .container {
     max-width: 1200px;
     /* Adjust as needed */
     width: 100%;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   
   .nav-links {
     list-style: none;
     margin: 0;
     padding: 0;
     display: flex;
     align-items: center;
   }
   
   .nav-links li {
     margin-right: 50px;
   }
   
   .nav-links li:last-child {
     margin-right: 0;
   }
   
   .nav-link {
     text-decoration: none;
     color: #333333;
     font-size: 18px;
     font-weight: normal;
     line-height: normal;
     letter-spacing: 0;
     font-family: "Times New Roman";
   }
   
   
   .nav-link:hover {
     color: #666;
     /* You can change this color */
   }

   /* Media Query for Menu Icon */
/* Media Query for Menu Icon */
@media screen and (max-width: 999px) {
  .nav-links {
    display: none; /* Hide nav links by default */
  }
  .menu-icon {
    display: block; /* Show menu icon */
    position: absolute;
    top: 0;
    right: 10%;
    cursor: pointer;
  }
  .nav-links.active {
    display: flex; /* Show nav links when menu is open */
    flex-direction: column;
    position: absolute;
    top: 100px; /* Adjust as needed */
    left: 10%;
    background-color: #fff;
    width: 80%;
    border-top: 1px solid #ddd;
  }
  .nav-links.active li {
    margin: 10px 0;
    text-align: center;
  }
}
   </style>
   