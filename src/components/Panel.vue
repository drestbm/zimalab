<template>
    <div id="panel">
        <div id="description">
            <h3>Description:</h3>
            <input type="text" placeholder="python">
        </div>
        <div id="locations">
            <h3>Locations:</h3>
            <input type="text">
        </div>
        
        <div id="full_time">
            <h3>Full time:</h3>
            <div id="panel__radio_group">
                <input type="radio" name="full_time" id="undefined">
                <label for="undefined" class="radio-label">no matter</label>
                <input type="radio" name="full_time" id="true">
                <label for="true" class="radio-label">yes</label>
                <input type="radio" name="full_time" id="false">
                <label for="false" class="radio-label">no</label>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Panel',

}
</script>

<style scoped lang="sass">
#panel
    position: fixed
    display: grid
    grid-template-columns: repeat(2, 1fr) auto
    grid-gap: 30px
    width: 1220px
    padding: 10px 30px
    border-radius: 5px
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8
    background-color: #ffffffaa
    align-items: center

    #description,
    #locations,
    #full_time
        display: grid
        grid-template-columns: auto 1fr
        grid-gap: 10px
        align-items: center

    h3
        margin: 0
        font-weight: 100

    input[type=text]
        box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8
        border-radius: 2px
        border: none
        padding: 5px

    input[type=radio]
        position: absolute
        display: none

    label
        display: inline-block
        cursor: pointer
        font-weight: 100
        padding: 5px 10px

    label + input[type=radio] + label
        border-left: solid 1px #d7d8db
        // box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8
        
    #panel__radio_group
        justify-self: start
        // border: solid 1px #000
        box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8
        display: inline-block
        border-radius: 5px
        overflow: hidden
</style>
