<script setup></script>
<template>

    <header class="header">
        <router-link to="/">
            <h1 class="title">Notes App</h1>
        </router-link>
        <nav>
            <!--          <ul>
                <li>
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/notes">
                        Notes
                    </router-link>
                </li>
            </ul> -->
        </nav>
    </header>
</template>

<style>
.header {
    display: flex;
    flex-direction: column;
    /*     background-color:#366CD0; */
    background-color: #303F9F;
    padding: 1rem .5rem;
    color: white;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    ul {
        display: flex;
        gap: 1rem;

        a {
            text-decoration: none;
            color: white;
        }
    }

}
</style>