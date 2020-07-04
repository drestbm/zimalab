<template>
    <div id="main">
        <div class="main__panel">
            <Panel/>
        </div>
        <div class="main__list">
            <Card v-for="item in vacancies" :key="item.id" :card="item"/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'
import Panel from '../components/Panel'
import { mapState } from 'vuex'

export default {
    name: 'Main',
    components: {
        Card,
        Panel
    },
    computed: mapState({
        vacancies: state => state.vacancies.listOfVacancies
    }),
    created: function() {
        this.$store.dispatch('vacancies/getList')
    }
}
</script>

<style scoped lang="sass">
#main
    display: grid
    grid-template-rows: minmax(40px,60px) 1fr
    grid-gap: 10px
    width: 1280px
    margin: 90px auto
    margin-bottom: 10px

    @media only screen and (max-device-width : 1024px)
        width: calc(100% - 20px)

    @media only screen and (max-device-width : 670px)
        width: 100%

    // .main__panel
        

    .main__list
        display: grid
        grid-template-columns: repeat(auto-fill,minmax(320px, 1fr))
        grid-gap: 10px
        
</style>
