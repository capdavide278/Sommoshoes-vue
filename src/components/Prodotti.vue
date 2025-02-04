<template>
    <div class="logo-prodotti" style="margin-bottom: 80px;">
        <div id="logo-container">
            <div>
                <h1 style="color: white;">victoria è gay qua ci vanno le voci di menu</h1>
            </div>
            <img src="../components/icons/sommoshoes.png" alt="sfondo scarpe gialle" class="logo">
            <div>
                <h1 style="color: white;">qua ci va la barra cerca con il carrello</h1>
            </div>
        </div>
    </div>

    <div style="background-color: black;">
        <div>
            ciao
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
    height: 267px;
}


</style>