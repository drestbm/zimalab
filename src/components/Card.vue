// Компонента карточки вакансии
// Входные:
<template>
    <div id="card">
        <h2> {{card.title}}</h2>
        <h3> {{card.location}}, {{card.company}}</h3>
        <h3> {{card.type}} </h3>
        <h3> {{generateDate(card.created_at)}} </h3>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: Object
    },
    methods: {
        generateDate: function(date) {
            return date.substr(4,6) + date.substr(-5)
            // Fri Jul 03 08:02:12 UTC 2020
        }
    }
}
</script>

<style scoped lang="sass">
#card
    display: grid
    grid-template-rows: auto repeat(4, auto)
    grid-gap: 5px
    width: calc(100% - 20px)
    padding: 10px
    border-radius: 5px
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8
    background-color: #fff

h2
    margin: 0
    font-size: 20px
    text-transform: uppercase
    font-weight: 100

h3
    margin: 0
    font-size: 16px
    color: #696969
    font-weight: 100
</style>
