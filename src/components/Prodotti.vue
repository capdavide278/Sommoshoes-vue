<template>
    <div class="logo-prodotti" style="margin-bottom: 80px;">
        <div id="logo-container">
            <nav>
                <ul>
                    <li>Novità</li>
                    <li>Uomo</li>
                    <li>Donne</li>
                </ul>
            </nav>
            <img src="../components/icons/sommoshoes.png" alt="sfondo scarpe gialle" class="logo">
            <div>
                <h1 style="color: white;">qua ci va la barra cerca con il carrello</h1>
            </div>
        </div>
    </div>

    <div id="scarpe-cont">
        <div style="height: 500px;">
            <ul>
                <li class="filter">Genere</li>
                <li class="filter">Colore</li>
                <li class="filter">Colore</li>
                <li class="filter">Brand</li>
                <li class="filter">Acquista per prezzo</li>
                <li class="filter">Scontate</li>
            </ul>
        </div>
        <div>
            <h1>Qui vanno inserite le foto</h1>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const search = computed({
    get(){
        return route.query.search ?? ''
    },
    set(search){
        router.replace({query: {search}})
    }
})
</script>

<style scoped>
.logo-prodotti{
    height: 150px;
    background-color: white;
    position: relative;
}

.logo-prodotti div{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
}

#logo-container{
    background-color: #1f4967;
    width: 100%;
    height: 55%;
}

.logo{
    margin-top: 150px;
    height: 257px;
}

#scarpe-cont{
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.filter {
    position: relative;
    padding-left: 60px;
}

.filter::after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    width: 220px;
    height: 1px; 
    background: black;
}

nav ul>li{
    list-style: none;
    display: inline;
    color: #f9b226;
    padding: 10px;
}
</style>