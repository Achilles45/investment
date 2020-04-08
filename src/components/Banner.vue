<template>
  <div class="hero__section" id="banner">
      <div class="hero__contents container">
          <div class="row">
              <div class="col-md-6 text">
                  <h1>Invest. Learn. Grow</h1>
                  <p>Investax helps you access different safe and high yielding investment vehicles through crowdfunding, make better investment decisions and grow your finances from ny device</p>
                  <router-link to="/signup" class="hero__btn">Get Started  <i class="fas fa-long-arrow-alt-right 7x"></i></router-link>
              </div>
              <div class="col-md-6">
                  <img src="../assets/images/img1.png" class="img-fluid" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.hero__section{
    padding: 10rem 0;
    .text{
        h1{
            font-weight: 900;
            color:$primary-color;
            padding-bottom: 1rem;
            font-size: 2.9rem;
        }
        p{
            color: #00093a;
            font-weight: 400;
            line-height: 1.6;
            font-size: 1.03rem;
            opacity: .7;
            padding-bottom: 2rem;
        }
        .hero__btn{
            background: $primary-color;
            color:#fff;
            text-decoration: none;
            padding: 1.2rem 3.9rem;
            border-radius: 4px;
            transition: all ease-in-out .5s;
            &:hover{
                padding: 1.2rem 4rem;
                background: $tertiary-color;
            }
            .fa-long-arrow-alt-right{
                animation-name: animate;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
        }
    }
}

//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(30px);
        opacity: 1;
    }
}

//Media Queries
@media only screen and (max-width: 600px){
   .hero__section{
       padding: 7rem 0;
       .text{
           padding-bottom: 3rem;
           h1{
               font-size: 2rem;
           }
       }
   } 
}
</style>