<template>
    <header class="container-fluid header">
        <div class="container">
            <div class="d-flex flex-row align-items-center">
                <router-link to="/">
                    <img class="animate__animated animate__rotateIn header__logo" src="@/assets/img/sajadidev-logo-white.svg" alt="SajadiDev Logo" width="48">
                </router-link>
                <router-link to="/project" class="ms-auto button--primary button--header">سفارش پروژه</router-link>
            </div>
        </div>
    </header>
</template>

<style>

.header {
    background-color: var(--primary);
    padding: 12px 0;
}

.header__logo {
    -webkit-user-drag: none;
    user-select: none;
}

.button--header {
    margin: 8px 0;
}

</style>