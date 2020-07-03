<template>
    <header id="header">
        <nav id="nav">
            <router-link id="logo" to="/">
                <img src="../assets/Logo.svg" alt="DrestX">
            </router-link>
            <ul>
                <li><router-link class="nav__item" to="/">Список вакансий</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style scoped lang="sass">
#header
    position: fixed
    top: 0 
    left: 0
    height: 70px
    width: 100vw
    background-color: #000

    #nav
        display: grid
        grid-template-columns: 70px auto
        width: 1024px
        margin: 0 auto
        align-items: center

        #logo
            height: 70px

            img
                height: 100%
                width: auto

        ul
            justify-self: end
            margin: 0
            padding: 0

            li
                list-style-type: none
                

                .nav__item
                    font-size: 18px
                    height: 20px
                    display: block
                    color: #fff
                    text-decoration: none
                    text-transform: uppercase
                    padding: 25px 10px
                    font-weight: 100

                &:hover
                    cursor: pointer
                    background-color: red
                    
</style>
