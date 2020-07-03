// Компонента карточки вакансии
// Входные:
<template>
    <div id="card">
        <h2> title</h2>
        <h3> location </h3>
        <h3> type </h3>
        <h3> company </h3>
        <h3> created_at </h3>
    </div>
</template>

<script>
export default {
    name: 'Card',

}
</script>

<style scoped lang="sass">
#card
    display: grid
    grid-template-rows: 23px repeat(4, 21px)
    height: 107px
    width: calc(100% - 20px)
    padding: 10px
    border-radius: 10px
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8

h2
    margin: 0
    font-size: 20px
    text-transform: uppercase
    font-weight: 100

h3
    margin: 0
    font-size: 18px
    color: #696969
    font-weight: 100
</style>
