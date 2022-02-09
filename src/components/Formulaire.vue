<template>
    <form class="formu" @submit.prevent="addTache(this.word)">
        <input v-model="word.nom" type="text" placeholder="Nouvelle Tâche">
    </form>
    <Liste />
</template>

<script>
import Liste from "./Liste.vue";

export default {

    name: "Formulaire",
    data(){
        return {
            word: {
                active: false
            }
        }
    },
    computed: {
        tabTache(){
            return  this.$store.state.tabTache
        } 

    },
    methods:{
        addTache(){
                this.$store.dispatch('addTache', this.word);
            this.word = {
                active: false
            }
        

        }
    },
     
    components:{
        Liste
    },

}
</script>

<style lang="scss" scoped>
    .formu{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        input{
            margin-bottom: 20px;
            width: 300px;
            height: 30px;
            font-size: 2rem;
        }
        button{
            font-size: 1.2rem;
            cursor: pointer;
            width: 150px;
            height: 30px;

        }
    }
</style>