<template>
  <div class="signup">
      <div class="container">
          <div class="logo">
                <router-link to="/" class="logo"><h2><i class="fa fa-cubes"></i> VueFinance</h2></router-link>
          </div>
          <div class="row content">
              <div class="col-md-6">
                  <h1>Welcome Back,</h1>
                  <h2>Sign in to continue</h2>
              </div>
             <div class="col-md-6">
                  <div class="form__wrapper">
                  <form @submit.prevent="login()">
                      <div v-if="err" class="message err animated slideInRight">
                          {{ err }}
                      </div>
                     <div class="form-group">
                         <input type="email" class="form-control" placeholder="Email address" v-model="email">
                     </div>
                      <div class="form-group">
                         <input type="password" class="form-control" placeholder="Password" v-model="password">
                     </div>
                    <div class="pt-3">
                         <router-link to="reset-password">Forgot Password?</router-link>
                    </div>
                     <div class="button__holder pt-3 d-flex justify-content-between">
                         <p>New user <router-link to="/signup">Create account</router-link></p>
                         <button type="submit" class="signup__btn">Sign In</button>
                     </div>
                  </form>
              </div>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
data(){
    return{
        email:null,
        password:null,
        err:null
    }
},
methods:{
    login(){
        //Check if the form has been filled out
        if(!this.email || !this.password){
            this.err = 'Please provide your credentials'
        }else{
            //Sign in the user to his/her dahboard
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((cred) =>{
                   this.$router.push({name: 'dashboard'})
                   console.log('Successful')
               }).catch(err =>{
                   this.err = 'Your credentials did not match. Try again'
               })
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.signup{
    background: $primary-color;
    height: 100vh;
    .logo{
        text-decoration: none;
        h2{
            color: #fff;
            font-weight: bolder;
            font-size: 1.7rem;
            text-decoration: none;
            padding-top: 5rem;
        }
    }
    .content{
        padding-top: 6rem;
        h1{
            color: #fff;
            font-weight: bolder;
            font-size: 3.3rem;
        }
        h2{
            opacity: .5;
            color: #fff;
            font-size: 1.7rem;
            padding-top: .5rem;
            font-weight: 400;
        }
        p{
            color: #0A2E65;
            font-size: .95rem;
            font-weight: 400;
            opacity: .9;
        }
        a{
            color: #0A2E65;
            font-weight: bold;
            font-size: 1rem;
            opacity: .9;
        }
    }
    .form__wrapper{
        padding-top: 6rem;
        background: #fff;
        border-radius: 4px;
        padding: 3rem 2.5rem;
        form{
            .err{
                background: rgb(150, 43, 43);
                color: #fff;
                border-radius: 3px;
                padding:.9rem 1rem;
                margin-bottom: 1rem;
                font-size: .9rem;
            }
            input{
                height: 3.5rem;
                box-shadow: none;
                padding: 1rem 1rem;
                &::placeholder{
                     color: #0a2e65;
                     opacity: .6;
                }
            }
            .signup__btn{
                background: $primary-color;
                padding: .7rem 1.4rem;
                border: none;
                border-radius: 3px;
                color: #fff;
            }
        }
    }
}
</style>