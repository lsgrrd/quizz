<template>
  <v-layout justify-center align-center column fill-height>
    <div class="flx">
      <v-img src="/logo.png" alt="" width="290"></v-img>
    </div>
    <h2>Descubrelo</h2>
    <div class="login">
      <no-ssr>
        <firebase-ui />
      </no-ssr>
    </div>
  </v-layout>
</template>

<script>

import firebase from 'firebase/app'
import FirebaseUi from '~/components/FirebaseUi';

export default {
  components: {
    FirebaseUi
  }
}
</script>

<style lang="scss">
.firebaseui-tos{
  color: white;
}
.firebaseui-link{
  color: #C851FF;
}

h2{
  color: white;
  font-size: 2rem;
}

  body {
    --bg-hue: 270; /* rebeccapurple */
  }
  

  
  /* Create defaults that can be re-used via html */
  [data-bg~='oddbird'] {
    --bg-color: hsl(195, 52%, 31%);
    --bg-tint: hsla(24, 100%, 62%, 0.75);
    --bg-shade: hsla(330, 100%, 45%, 0.75);
  }
  
  
  /* We could also provide preset values to choose from */
  [style*='--bg-'] {
    --mia-hue: 330;
    --mia-color: hsl(330, 100%, 29%);
  }
  
  
  /* 
  The mixin logic
  ---------------
  - I've exposed more variables than you would need to.
    Each additional variable provides another "argument" to the API.
    For patterns that require less customization, use fewer variables.
  - Defining it on the * selector makes this globally available,
    but it could also be scoped to any selector you want.
    Scoping functions/mixins to the DOM is a feature that only CSS can provide.
  */
  * {
    /* Setting a valid hue (any unitless number) will auto-set all the other values */
    --bg-hue: initial;
    
    /* Adjust the base saturation and lightness as desired */
    --bg-saturation: 50%;
    --bg-lightness: 40%;
    
    /* set angles for the tint and shade gradients */
    --bg-tint-angle: -20deg;
    --bg-shade-angle: -110deg;
  
    /* set amounts for default tint & shade */
    --bg-tint-amount: 20%;
    --bg-shade-amount: 20%;
    
    /* set indiviidual hues for the tint and shade */
    /* defaults are set by higher-level arguments…
       which alows for both simpler & more customized uses*/
    --bg-tint-hue: var(--bg-hue);
    --bg-shade-hue: var(--bg-hue);
    
    /* set the gradient positions all at once */
    --bg-gradient-stops: 30%;
    
    /* override tint/shade gradients directly */
    --bg-tint-start: var(--bg-gradient-stops);
    --bg-tint-end: var(--bg-tint-start);
    --bg-shade-start: var(--bg-gradient-stops);
    --bg-shade-end: var(--bg-shade-start);
  
    /* override tint/shade saturation & lightness directly */
    --bg-tint-saturation: var(--bg-saturation);
    --bg-tint-lightness: calc(var(--bg-lightness) + var(--bg-tint-amount));
    --bg-shade-saturation: var(--bg-saturation);
    --bg-shade-lightness: calc(var(--bg-lightness) - var(--bg-shade-amount));
  
    /* or override any individual color directly */
    --bg-color: hsl(var(--bg-hue), var(--bg-saturation), var(--bg-lightness));
    --bg-tint: hsla(var(--bg-tint-hue), var(--bg-tint-saturation), var(--bg-tint-lightness), 0.25);
    --bg-shade: hsla(var(--bg-shade-hue), var(--bg-shade-saturation), var(--bg-shade-lightness), 0.25);
  
    
    /* this is the internal logic that creates your angled tint/shade background */
    --bg-image: 
      linear-gradient(
        var(--bg-tint-angle),
        var(--bg-tint) var(--bg-tint-start),
        transparent var(--bg-tint-end)
      ),
      linear-gradient(
        var(--bg-shade-angle),
        var(--bg-shade) var(--bg-shade-start),
        transparent var(--bg-shade-end)
      )
    ;
    
    /* Creating a final "output" variable acts like a function return */
    --bg: var(--bg-image) var(--bg-color);
    
    /* Applying that value to a property creates a mixin */
    /* Since the initial return is invalid, nothing happens unless we set a --bg-hue */
    background: var(--bg);
  }
  
  
  /* Just the layout */
  * { box-sizing: border-box; }


  body {
    
    height: 100vh;
    overflow: hidden;  
  
  }
  
 
</style>

