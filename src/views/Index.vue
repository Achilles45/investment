<template>
  <div class="home">
    <Navbar />
   <Banner />
   <Intro />
   <Features />
   <Products />
   <Pricing />
   <Hero />
   <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Intro from '@/components/Intro.vue';
import Features from '@/components/Features.vue';
import Products from '@/components/Products.vue';
import Pricing from '@/components/Pricing.vue';
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'Home',
  components:{
    Navbar,
    Banner,
    Intro,
    Features,
    Products,
    Pricing,
    Hero,
    Footer
  }
}
</script>
