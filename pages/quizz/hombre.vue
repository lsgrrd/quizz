<template>
<v-container fluid ma-0 pa-0>
  <v-progress-linear
    color="secondary"
    height="10"
    :value="progresz"
    ma-0
    pa-0
  ></v-progress-linear>
  <v-layout row wrap justify-center align-center fill-height pa-4>
    <div class="resultadoAreaZ" :class="{active: activez}">
      <div class="cont">
        <v-card class="pa-4 card">

          <div class="flx logoAreax" style="--bg-hue: 260;">
            <img src="/logo.png" class="logo" />
          </div>
          <h2 >Registrate</h2>
          <p>Participa en el sorteo</p>
          <v-form  ref="form"   v-model="valid"   lazy-validation  >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="edades"
              :rules="[v => !!v || 'Item is required']"
              label="Edad"
              required
            ></v-select>

            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Teléfono"
              required
            ></v-text-field>

            <v-btn
              color="error"
              @click="activez = !activez"
            >
              Cerrar
            </v-btn>

            <v-btn
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              Enviar
            </v-btn>


          
          </v-form>
        </v-card>
      </div>
    </div>
    <div style="--bg-hue: 260;" class="resultadoAreaY" :class="{activey: activey}">
      <div class="cont">
        <div class="flx">
          <img src="/logo.png" class="logo" />
        </div>
        <h2 >Resultados</h2>
        <div>
          
          <img :src="imgGanador" alt="imagen del ganador" class="imgGanador">
        
        <h2>
          {{ganador}}
        </h2>      
          <div class="flx">
            <div class="btn" style="--bg-hue: 210;">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://aquepoliticotepareces.firebaseapp.com/" target="_blank">Compartir en Facebook</a>
            </div>
          </div>
          <div class="flx">
            <div class="btn" style="--bg-hue: 100;" @click="playAgain">
                <a href="#0"> Jugar de nuevo</a>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <div style="--bg-hue: 300;" class="resultadoArea" :class="{active: activex}">
      <div class="cont">
          <v-img :src="'/respuestas' + resultadox.img" alt="" class="imgResult" contain>
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        <h2 >{{resultadox.resultado}}</h2>
        <div class="btn" style="--bg-hue: 105;" @click="netz(preguntaSeleccionada.num)">siguiente <span><v-icon dark>chevron_right</v-icon></span> </div>
      </div>
    </div>  
      <v-flex xs12>
        <div class="flx">
          <img src="/logo.png" class="logo" />
        </div>
        <div class="flx">

        <v-img class="imgPregunta" :src="preguntaSeleccionada.img">
          <template v-slot:placeholder>
            <v-layout
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
          <div class="pregunta elevation-10">
            {{preguntaSeleccionada.pregunta}}
          </div>
        </v-img>
        </div>

      </v-flex>
      <v-flex mt-5 xs12 class="flxcol">
        
        <div class="respuesta" style="--bg-hue: 0;" @click="respuesta1(preguntaSeleccionada.uno)">
          <span>1</span> {{preguntaSeleccionada.uno.respuesta}}
        </div>
        <div class="respuesta" style="--bg-hue: 100;" @click="respuesta2(preguntaSeleccionada.dos)">
          <span>2</span> {{preguntaSeleccionada.dos.respuesta}}
        </div>
        <div class="respuesta" style="--bg-hue: 200;" @click="respuesta3(preguntaSeleccionada.tres)">
          <span>3</span> {{preguntaSeleccionada.tres.respuesta}}
        </div>
      </v-flex>
 
  </v-layout>
</v-container>
</template>

<script>
  export default {
    methods: {
      respuesta1(x) {
        this.resultadox = x
        //this.activex = true
        this.next = this.preguntaSeleccionada.num
        this.progresz = this.progresz + 20  ;
        if (this.next < 5) {
          this.uno++
          this.preguntaSeleccionada = this.preguntas[this.next];
        } else {
          this.activey = true;
          
          if(this.uno > this.dos && this.uno > this.tres ){
            this.ganador = 'Eres todo un Jorge Yunda' ;
            this.imgGanador = '/imgs/15.jpeg'
          }
          if(this.dos > this.uno && this.dos > this.tres ){
            this.ganador = 'Eres todo un Rafael Correa' ;
            this.imgGanador = '/imgs/8.jpeg';
          }
          if(this.tres > this.uno && this.tres > this.dos ){
            this.ganador = 'Eres todo un Abdalá Bucaram' ;
            this.imgGanador = '/imgs/14.jpeg';
          }
          setTimeout(() => { this.activez = true }, 5000)
        }
        
      },
      respuesta2(x) {
        this.resultadox = x
        //this.activex = true
        this.next = this.preguntaSeleccionada.num
        this.progresz = this.progresz + 20  ;
        if (this.next < 5) {
          this.dos++
          this.preguntaSeleccionada = this.preguntas[this.next];
        } else {
          this.activey = true;
          
          if(this.uno > this.dos && this.uno > this.tres ){
            this.ganador = 'Eres todo un Jorge Yunda' ;
            this.imgGanador = '/imgs/15.jpeg'
          }
          if(this.dos > this.uno && this.dos > this.tres ){
            this.ganador = 'Eres todo un Rafael Correa' ;
            this.imgGanador = '/imgs/8.jpeg';
          }
          if(this.tres > this.uno && this.tres > this.dos ){
            this.ganador = 'Eres todo un Abdalá Bucaram' ;
            this.imgGanador = '/imgs/14.jpeg';
          }
          setTimeout(() => { this.activez = true }, 5000)
        }
        
      },
      respuesta3(x) {
        this.resultadox = x
        //this.activex = true
        this.next = this.preguntaSeleccionada.num
        this.progresz = this.progresz + 20  ;
        if (this.next < 5) {
          this.tres++
          this.preguntaSeleccionada = this.preguntas[this.next];
        } else {
          this.activey = true;
          

          if(this.uno > this.dos && this.uno > this.tres ){
            this.ganador = 'Eres todo un Jorge Yunda' ;
            this.imgGanador = '/imgs/15.jpeg'
          }
          if(this.dos > this.uno && this.dos > this.tres ){
            this.ganador = 'Eres todo un Rafael Correa' ;
            this.imgGanador = '/imgs/8.jpeg';
          }
          if(this.tres > this.uno && this.tres > this.dos ){
            this.ganador = 'Eres todo un Abdalá Bucaram' ;
            this.imgGanador = '/imgs/14.jpeg';
          }

          setTimeout(() => { this.activez = true }, 5000)
        }
      },
      netz(x) {
        if (x === 4) {
          // this.$router.push('/gracias')
          this.activey = true;
          setTimeout(function(){    
            this.activez = true;
          }, 10000);

        } else {
          this.preguntaSeleccionada = this.preguntas[x];
        }
        this.activex = false;
      },
      playAgain() {
        this.preguntaSeleccionada = this.preguntas[0];
        this.activey = false;
        this.progresz = 0;

        this.uno = 0;
        this.dos = 0;
        this.tres = 0;

        this.abdalaBucaram = 0;
        this.jorgeYunda = 0;
        this.rafaelCorrea = 0;

        this.lurdesTiban = 0;
        this.cynthiaViteri = 0;
        this.elsaBucaram = 0;
      }
    },
    data() {
      return {
        next: 1,
        resultadox : "",
        activex: false,
        activey: false,
        activez: false,
        progresz: 0,

        ganador: '',
        imgGanador: '',

        uno: 0,
        dos: 0,
        tres: 0,

        edades: ['41 +', '36 - 40', '31 - 35', '26 - 30', '21 - 25', '16 - 20', '10 - 15'],

        abdalaBucaram: 0,
        rafaelCorrea: 0,
        jorgeYunda: 0,
        lurdesTiban: 0,
        cynthiaViteri: 0,
        elsaBucaram: 0,
        
        
        preguntaSeleccionada:  {
          num: 1,
          img: '/imgs/11.jpeg',
          pregunta: 'En una puñetiza...',
          uno: {
            respuesta: 'Me doy de puñetes y no me duele xq soy rosca',
            resultado: 'Felicidades estás re-loco por los puñetes men como Abdalá Bucaram.',
            img: '/1-1.png',
            val: 25,
            sumTo: 'abdalaBucaram'
          },
          dos: {
            respuesta: 'Llamo a mis gorilas xq a mi no me tocas!',
            resultado: 'Felicidades eres todo un león Febres Cordero porque no te ahuevas.',
            img: '/1-2.png',
            val: 50,
            sumTo: 'leonFebresCordero'
          },
          tres: {
            respuesta: 'Me doy de puñetes hasta con los chapas',
            resultado: 'Eres todo un Jaime Nebot, puro bla bla miau.',
            img: '/1-3.png',
            val: 33.3,
            sumTo: 'jaimeNebot'
          }
        },
        preguntas: [
          {
            num: 1,
            img: '/imgs/11.jpeg',
            pregunta: 'En una puñetiza...',
            uno: {
              respuesta: 'Me doy de puñetes y no me duele xq soy rosca',
              resultado: 'Felicidades estás re-loco por los puñetes men como Abdalá Bucaram.',
              img: '/1-1.png',
              val: 25,
              sumTo: 'abdalaBucaram'
            },
            dos: {
              respuesta: 'Llamo a mis gorilas xq a mi no me tocas!',
              resultado: 'Felicidades eres todo un león Febres Cordero porque no te ahuevas.',
              img: '/1-2.png',
              val: 50,
              sumTo: 'leonFebresCordero'
            },
            tres: {
              respuesta: 'Me doy de puñetes hasta con los chapas',
              resultado: 'Eres todo un Jaime Nebot, puro bla bla miau.',
              img: '/1-3.png',
              val: 33.3,
              sumTo: 'jaimeNebot'
            }
          }, {
            num: 2,
            img: '/imgs/13.jpeg',
            pregunta: 'En un after',
            uno: {
              respuesta: 'Pido al dj Angel Guaraca',
              resultado: 'Felicidades, por tus gustos musicales eres un Mauricio Rodas neto, hecho el aniñado y malísimo para un trago.',
              img: '/2-1.png',
              val: 50,
              sumTo: 'mauricioRodas'
            },
            dos: {
              respuesta: 'Pido al dj Miguel Bose ',
              resultado: 'Felicidades, Por tus gustos musicales eres un Jorge Yunda neto, buenísimo para un traguito y rosca para un puñete de chumadito.',
              img: '/2-2.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            },
            tres: {
              respuesta: 'pido al dj los iracundos',
              resultado: 'Felicidades, por tus gustos musicales eres un Ricardo Patiño Neto, flojo para un trago, pero buenísimo para el chisme.',
              img: '/2-3.png',
              val: 100,
              sumTo: 'ricardoPatino'
            }
          }, {
            num: 3,
            img: '/imgs/2.jpeg',
            pregunta: 'Como vas al camello?',
            uno: {
              respuesta: 'Bus, Ecovia, Metro, etc',
              resultado: 'Felicidades, tienes toda la sazón y gustos de Lurdes Tibán.  ',
              img: '/3-1.PNG',
              val: 33.3,
              sumTo: 'lurdesTiban'
            },
            dos: {
              respuesta: 'Tu auto propio',
              resultado: 'En buena hora, tienes la sazón y gustos de la aniñada del guayas Cynthia Viteri.',
              img: '/3-2.PNG',
              val: 100,
              sumTo: 'cynthiaViteri'
            },
            tres: {
              respuesta: 'A pata como varón',
              resultado: 'Tienes los gustos y la sazón del rocoto Jorge Yunda',
              img: '/3-3.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            }
          }, {
            num: 4,
            img: '/imgs/10.jpeg',
            pregunta: 'Para un chupe...',
            uno: {
              respuesta: 'Puntas y norteño',
              resultado: 'Te inclinas más a ser el pelucón como Guillermo Lasso',
              img: '/4-1.png',
              val: 50,
              sumTo: 'guillermoLasso'
            },
            dos: {
              respuesta: 'Wisky',
              resultado: 'Eres un digno ecuatorianaso como Jorge Yunda',
              img: '/4-2.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            },
            tres: {
              respuesta: 'Bielita',
              resultado: 'Eres fiel a la marcha ovejuna de Rafael Correa ',
              img: '/4-3.png',
              val: 50,
              sumTo: 'rafaelCorrea'
            }
          }, {
            num: 5,
            img: '/imgs/1.jpeg',
            pregunta: 'A donde vas en el feriado?',
            uno: {
              respuesta: 'Al Tingo',
              resultado: 'llevas al loco que ama, Abdala Bucaram, en tus venas.',
              img: '/5-1.png',
              val: 25,
              sumTo: 'abdalaBucaram'
            },
            dos: {
              respuesta: 'A las Europas',
              resultado: 'No puedes ocultar tus toques del Rafael Correa.',
              img: '/5-2.png',
              val: 50,
              sumTo: 'rafaelCorrea'
            },
            tres: {
              respuesta: 'Montañita beach',
              resultado: 'No puede ser! Llevas al buen Delfin Quishpe en las venas.',
              img: '/5-3.png',
              val: 100,
              sumTo: 'delfinQuishpe'
            }
          }
        ]        
      }
    }
  }
</script>

<style lang="scss">

$scrollbar-size : 5px;
$scrollbar-track : #862C86;
$scrollbar-thumb : #A640A6;

::-webkit-scrollbar { 
  width: $scrollbar-size; 
  height: $scrollbar-size;
  background: $scrollbar-track;  
}

::-webkit-scrollbar-thumb {
  background: $scrollbar-thumb; 
  border-radius: $scrollbar-size / 2; 

  &:hover {
    background: darken($scrollbar-thumb, 2%); 
  }
  
  &:active {
    background: darken($scrollbar-thumb, 5%); 
  }
  
}

::-webkit-scrollbar-corner { 
  background: $scrollbar-thumb;
}

::-webkit-resizer  { 
  background: $scrollbar-thumb;  
}

.imgPregunta{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  overflow: visible;
  border: 5px solid white;
  border-radius: 5px;
  max-width: 400px;

  @media only screen and (max-width : 650px) {
  max-width: 300px;
  }
  .pregunta{
    background: white;
    margin-bottom: -50px;
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.4rem;
  }
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
    overflow: auto;
  
  }

  html{
    overflow: hidden;
  }
  
  .respuesta{
    display: flex;
    margin: 0;
    align-items: center;
    padding: .7rem;
    border-radius: 4rem;
    color: white;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    max-width: 400px;
    cursor: pointer;

    span{
    font-size: 1rem;
      border-radius: 4rem;
      background: #fff;
      display: flex;
      justify-self:start;
      min-width: 35px;
      max-width: 35px;
      min-height: 35px;
      max-height: 35px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: black;
      margin-right: .7rem;
    }
  }
  .cont{
    
  max-width: 450px;
  }
 
.resultadoArea{
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  top: 100vh;
  transition: all .5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 2rem;

  .imgResult{
    max-width: 400px;
    
  }

  .cont{
    max-width: 400px;
    flex-grow: 2;
  }

  img{
    max-width: 400px;
  }
  .btn{
    color: white; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 4rem;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: capitalize;
    padding-left: 1.5rem;
    font-size: 1.3rem;
  }
}
  .active{
    top:0 !important;
  }

.activey{
    bottom:0 !important;
  }

.flx{
  display: flex;
  justify-content: center;
  & .v-responsive{
    overflow: visible;
  }
}

.flxcol{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div{
    width: 100%;
  }
}


.logo{
  width: auto;
  height: 70px;
  margin-top: -20px;
}

.v-progress-linear{
  margin: 0 !important;
  z-index: 200000;

}



.resultadoAreaY{
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  bottom: 100vh;
  transition: all .5s ease;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  align-items: center;
    z-index: 88888;
  padding: 4rem;

  .imgResult{
    max-width: 400px;
    
  }

  h2{
    text-align: center;
    margin-bottom: 2rem;
  }

  .v-progress-linear {
    margin-bottom: 1rem !important;
    border-radius: 4em;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
    color: rgba(white, .9)
  }

  label{
    color: white;
    font-weight: 400;
    font-size: 1.3rem;
  }
  .cont{
   max-width: 500px
  }

  img{
    max-width: 400px;
  }
  .btn{
    color: white; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 4rem;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: capitalize;
    padding-left: 1.5rem;
    font-size: 1rem;
    text-align: center;
    width: 220px;
    margin: 2rem 3rem 0rem;

    a{
      color: white;
    text-align: center;
    width: 100%;
      text-decoration: none;
    }
  }
}
.resultadoAreaZ{
  position: fixed;
  z-index: 99000;
  width: 100vw;
  height: 100vh;
  bottom: 100vh;
  transition: all .5s ease;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  align-items: center;
  background-color: rgba(black, .8);
  padding: 4rem;
  

  h2{
    color: black;
    text-align: center;
  }

  .card{
    overflow: hidden;
  }

  .logoAreax{
    margin: -1.7rem -1.8rem 0;
    padding: 1rem;
    .logo{
      margin: 0;
    }
  }
}

.imgGanador{
  border: 3px solid white;
  
}
</style>

