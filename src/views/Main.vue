<template>
    <div id="main">
        <div class="main__panel">
            <Panel/>
        </div>
        <div class="main__list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'
import Panel from '../components/Panel'

export default {
    name: 'Main',
    components: {
        Card,
        Panel
    },
    mounted: function() {
        this.$store.commit('loadListOfVacancies')
    }
}
</script>

<style scoped lang="sass">
#main
    display: grid
    grid-template-columns: 320px 1fr
    grid-gap: 10px
    width: 1024px
    margin: 90px auto
    margin-bottom: 10px

    .main__panel
        

    .main__list
        display: grid
        grid-template-columns: repeat(auto-fill,minmax(320px, 1fr))
        grid-gap: 10px
        
</style>
