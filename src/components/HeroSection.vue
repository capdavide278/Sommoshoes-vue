<template>
     <div class="hero">
            <div class="hero-testo">
                <h1 style="font-size: 40px;">Portici nuova capitale della moda indiscussa: <span style="font-size: 40px;color:#f9b226;">SommoShoes</span></h1>
                <p>I nostri prodotti fatti a mano da bambini cinesi, trasportati dalla cina fino a portici</p>
                <router-link to="/prodotti" class="btn-products">Prodotti</router-link>
            </div>
            <div>
                <img class="hero_img" src="../components/icons/sommo shoes.jpg" alt="scarpe">
            </div>
        </div>
        
        <div class="grid-2">
            <div class="col-33" >
                <a href="#" class="card">
                    <img class="img-scarpe" src="../components/icons/scarpa-1.jpg" alt="immagine scarpe rosse e bianche">
                    <div class="card-testo">
                        SommoShoes 3
                    </div>
                    <div class="card-prezzo">
                        <p>€56,00</p>
                    </div>
                </a>
            </div>
            <div class="col-33">
                <a href="#" class="card">
                    <img class="img-scarpe" src="../components/icons/scarpa-2.png" alt="immagine scarpe blu">
                    <div class="card-testo">
                        SommoShoes 2
                    </div>
                    <div class="card-prezzo">
                        <p>€56,00</p>
                    </div>
                </a>
            </div>
            <div class="col-33">
                <div>
                    <a href="#" class="card">
                        <img class="img-scarpe" src="../components/icons/scarpe-3(2).png" alt="immagine scarpe verdi">
                        <div class="card-testo">
                            SommoShoes 1
                        </div>
                        <div class="card-prezzo">
                            <p>€56,00</p>
                        </div>
                    </a>
                </div>       
            </div>
        </div>

        <div class="grid" style="margin: 200px 0 200px 0;">
            <div class="col-100" style="padding-left: 100px;">
                <h2 style="font-size: 65px; color: black;">Vieni a scoprire la nuova collezione SommoShoes</h2>
                <p style="font-size: 25px; color:black;margin-bottom: 30px;">Campione d'incassi nelle stagioni autunnali e invernali, record da Paura per queste fantastiche scarpe</p>
                <a href="#" class="btn-products" style="font-size: 30px;margin-top: 20px;margin-left: 30rem;">Scopri di più...</a>
            </div>
        </div>
        <div id="presentazione-cont">
            <div class="presentazione">
        </div>
            <div class="presentazione-testo">
                <p style="color: black; font-size: 35px;">Vieni a scoprire anche tu i nostri negozi:</p>
                <a class="btn-products" href="https://www.tuttocitta.it/mappa/marano-di-napoli/corso-europa" target="_blank">Marano</a>
                ,
                <a class="btn-products" href="https://www.google.it/maps/place/40%C2%B049'08.8%22N+14%C2%B020'33.2%22E/@40.819121,14.3399671,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.819117!4d14.342542?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"> Portici </a>
                e
                <a class="btn-products" href="https://www.google.com/maps/dir//41.0769748,14.3376878/@41.0768212,14.3381867,17z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"> Caserta</a>
            </div>
        </div>
</template>

<style>

#presentazione-cont{
    display: flex;
    margin-top: 120px;
    margin-bottom: 100px;
    justify-content: center;
    align-items: center;
}
.presentazione{
    height: 60vh;
    width: 100%;
    display: flex;
    background-image: url('../components/icons/img_sommopres2.jpg');
    background-repeat: no-repeat;
    background-position: center;
}

.presentazione-testo{
    text-align: center;
    padding: 10%;
    color: black;
}

.hero{
    display: flex;
    padding: 5% 10%;
    justify-content: center;
    background-color: white;
}

.hero-testo{
    width: 100%;
    padding-left: 100px;
}

.hero_img{
    width: 53%;
    margin-left: 250px;
}

.btn-products{
    padding: 0px 15px 0px 15px;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    background-color:#f9b226;
    border: 0px solid black;
    text-decoration: none;
}

@media  (max-width: 760px) {
    .hero{flex-wrap:wrap;}
    .hero-testo,
    .hero_img{width:50%;margin-top: 50px;}
}

/* card */
.img-scarpe{
    /* height: 350px; */
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.col-33:hover .img-scarpe{
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
}

@keyframes zoom {
    0% {
      scale: 100%;
    }
    50% {
      scale: 110%;
    }
    100% {
      scale: 100%;
    }
  }

.card{
    display: block;
    width: 100%;
    position: relative;
    /* z-index: -1; */
}

.card-testo{
    position: absolute;
    bottom: 10px;
    background-color: #f9b226;
    padding: 10px;
    color: #ffff;
}

.card-prezzo{
    position: absolute;
    bottom: 10px;
    left: 282px;
    padding: 10px;
    color: black;
    /* display: none; */
}

/* utilities */
.img-res{height: auto; width: 100%;}

.pt-1{padding-top: 10px;}
.pt-2{padding-top: 30px;}
.pt-3{padding-top: 60px;}

.pb-1{padding-bottom: 10px;}
.pb-2{padding-bottom: 30px;}
.pb-3{padding-bottom: 60px;}

.grid{
    display: flex;
    padding: 0 10%;
    flex-wrap: wrap;
}

.grid-2{
    display: flex;
    flex-direction: row-reverse;
    padding: 0px 17%;
}

.col-25{width: 25%;}
.col-50{width: 50%;padding: 10% 20%;}
.col-40{width: 40%;padding: 10% 20%;}
.col-60{width: 60%;padding: 10% 20%;}
.col-33{width: 33.33%; padding: 2%; 
    height: 450px;
    overflow: hidden; 
    position: relative;}
.col-100{width: 100%;}

@media (max-width:768px){
    .col-50,
    .col-40,
    .col-60,
    .col-33,
    .col-25,
    .col-100{width: 100%;}
}

/* parte della card */
.col-33 .card-prezzo{
    opacity: 0;
}

.col-33:hover .card-prezzo{
    opacity: 1;
}
</style>

<!-- <script>
export default{
    methods:{
    prodotti(){
        console.log("Navigazione verso /prodotti");
        this.$router.push('/prodotti').catch(err => console.warn(err));
    }
  }
}
</script> -->