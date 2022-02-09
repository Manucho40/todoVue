<template>
        <div class="cont">
            <ul>
                <li v-for="(tache, index) in  tabTache" :key="index">
                    <span 
                    :class="{done: tache.active}"
                    >{{tache.nom}}</span>
                    <div>
                        <span @click="changeActive(index)">&#9745;</span>
                        <span @click="deleteTache(index)">&#10006;</span>
                    </div>
                </li>
               
            </ul>
        </div>
</template>

<script>

export default {
    


    computed:{
        tabTache(){
            return  this.$store.state.tabTache
        } 
    },

    methods:{
        changeActive(index){
            this.$store.dispatch('changeActive', index)
        },
        deleteTache(index){
            this.$store.dispatch('deleteTache', index);
        }

    },
    updated() {
        localStorage.setItem("tabTache", JSON.stringify(this.tabTache));
    }
    
    
}
</script>

<style lang="scss" scoped>
.cont{
    text-align: center;
}
    ul{
        text-align: center;
        // max-width: 950px;
        padding: 10px;
        background: #2c3e50;
        list-style-type: none;

        li{
            margin: 10px;
            background: #7AC74F;
            display: flex;
            border-radius: 10px;
            color: #fff;
            justify-content: space-between;
            font-size: 1.8rem;

            span{
                cursor: pointer;
                color: white;
                margin: 10px;
            }
            

        }

        .done{
            color: greenyellow;
            text-decoration: line-through;
        }
    }
</style>