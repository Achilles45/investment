<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/_reset';
@import './assets/styles/_colors';
</style>
