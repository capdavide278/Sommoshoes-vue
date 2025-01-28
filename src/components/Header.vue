<template>
    <header class="header">
        <div id="menu-container">
            <img src="../components/icons/- Sommo_Shoes -.png" alt="sfondo scarpe gialle" class="logo">
            <button class="menu-attivo" @click="toggleMenu">
                <div>
                    <img src="../components/icons/comment-alt-solid.svg" alt="icona_menu" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </div>
            </button>
            <nav class="nav-menu" :class="{ active: isMenuOpen, off: !isMenuOpen }">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Prodotti</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contatti</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header{
    height: 200px;
    background-color: white;
    position: relative;
}

.header div{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
}

#menu-container{
    background-color: #1f4967;
    width: 100%;
    height: 60%;
}

.logo{
    margin-top: 100px;
    height: 317px;
}


.menu-attivo{
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    margin-left: 100px;
}

.nav-menu {
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    background-color: #1f4967;
    border-radius: 5px;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-menu ul li a {
    color: #f9b226;
    text-decoration: none;
    display: block;
    padding: 10px;
}

@media (min-width: 768px) {
    .menu-attivo {
        display: flex;
    }
    .nav-menu ul {
        display: flex;
    }
    .nav-menu ul li {
      margin-bottom: 0;
    }
    .nav-menu ul li a {
        margin-left: 20px;
    }
}


/* Classe per mostrare il menu */
.nav-menu.active {
    /* display: block; */
    opacity: 1;
    transform: rotateX(0deg);
}

.nav-menu.off {
    opacity: 0;
    transform: rotateX(-90deg);
}

</style>