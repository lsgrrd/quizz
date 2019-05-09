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
    <div style="--bg-hue: 260;" class="resultadoAreaZ" :class="{active: activez}">
      <div class="cont">
        <div class="flx">
          <img src="/logo.png" class="logo" />
        </div>
        <h2 >Registrate</h2>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
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
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
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
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>


   
  </v-form>
      </div>
    </div>
    <div style="--bg-hue: 260;" class="resultadoAreaY" :class="{activey: activey}">
      <div class="cont">
        <div class="flx">
          <img src="/logo.png" class="logo" />
        </div>
        <h2 >Resultados</h2>
        <div>
          <label for="" v-if=" abdalaBucaram > 0">
            Abdalá Bucaram
            <v-progress-linear
            :value="abdalaBucaram"
            height='40'
            >
            {{abdalaBucaram}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" leonFebresCordero > 0">
            León Febres Cordero
            <v-progress-linear
            :value="leonFebresCordero"
            height='40'
            >
            {{leonFebresCordero}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" jaimeNebot > 0">
            Jaime Nebot
            <v-progress-linear
            :value="jaimeNebot"
            height='40'
            >
            {{jaimeNebot}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" mauricioRodas > 0">
            Mauricio Rodas
            <v-progress-linear
            :value="mauricioRodas"
            height='40'
            >
            {{mauricioRodas}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" jorgeYunda > 0">
            Jorge Yunda
            <v-progress-linear
            :value="jorgeYunda"
            height='40'
            >
            {{jorgeYunda}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" ricardoPatino > 0">
            Ricardo Patiño
            <v-progress-linear
            :value="ricardoPatino"
            height='40'
            >
            {{ricardoPatino}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" lurdesTiban > 0">
            Lurdes Tibán
            <v-progress-linear
            :value="lurdesTiban"
            height='40'
            >
            {{lurdesTiban}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" cynthiaViteri > 0">
            Cynthia Viteri
            <v-progress-linear
            :value="cynthiaViteri"
            height='40'
            >
            {{cynthiaViteri}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" guillermoLasso > 0">
            Guillermo Lasso
            <v-progress-linear
            :value="guillermoLasso"
            height='40'
            >{{guillermoLasso}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" rafaelCorrea > 0">
            Rafael Correa
            <v-progress-linear
            :value="rafaelCorrea"
            height='40'
            >
            {{rafaelCorrea}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" delfinQuishpe > 0">
            Delfin Quishpe
            <v-progress-linear
            :value="delfinQuishpe"
            height='40'
            >
            {{delfinQuishpe}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" leninMoreno > 0">
            Lenin Moreno
            <v-progress-linear
            :value="leninMoreno"
            height='40'
            >
            {{leninMoreno}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" alvaritoNovoa > 0">
            Alvarito Novoa
            <v-progress-linear
            :value="alvaritoNovoa"
            height='40'
            >
            {{alvaritoNovoa}}%
            </v-progress-linear>
          </label>
          <label for="" v-if=" lucioGutierrez > 0">
            Lucio Gutierrez
            <v-progress-linear
            :value="lucioGutierrez"
            height='40'
            >
            {{lucioGutierrez}}%
            </v-progress-linear>
          </label>
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
        <div class="respuesta" style="--bg-hue: 0;" @click="respuesta(preguntaSeleccionada.uno)">
          <span>1</span> {{preguntaSeleccionada.uno.respuesta}}
        </div>
        <div class="respuesta" style="--bg-hue: 100;" @click="respuesta(preguntaSeleccionada.dos)">
          <span>2</span> {{preguntaSeleccionada.dos.respuesta}}
        </div>
        <div class="respuesta" style="--bg-hue: 200;" @click="respuesta(preguntaSeleccionada.tres)">
          <span>3</span> {{preguntaSeleccionada.tres.respuesta}}
        </div>
      </v-flex>
 
  </v-layout>
</v-container>
</template>

<script>
  export default {
    methods: {
      respuesta(x) {
        this.resultadox = x
        this.activex = true
        this.next = this.preguntaSeleccionada.num
        this.progresz = this.progresz + 12.5
        if (x.sumTo === 'abdalaBucaram'){ this.abdalaBucaram = Number(this.abdalaBucaram) + Number(x.val) }
        if (x.sumTo === 'leonFebresCordero'){ this.leonFebresCordero = Number(this.leonFebresCordero) + Number(x.val) }
        if (x.sumTo === 'jaimeNebot'){ this.jaimeNebot  = Number(this.jaimeNebot) + Number(x.val) }
        if (x.sumTo === 'mauricioRodas'){ this.mauricioRodas  = Number(this.mauricioRodas) + Number(x.val) }
        if (x.sumTo === 'jorgeYunda'){ this.jorgeYunda  = Number(this.jorgeYunda) + Number(x.val) }
        if (x.sumTo === 'ricardoPatino'){ this.ricardoPatino  = Number(this.ricardoPatino) + Number(x.val) }
        if (x.sumTo === 'lurdesTiban'){ this.lurdesTiban  = Number(this.lurdesTiban) + Number(x.val) }
        if (x.sumTo === 'cynthiaViteri'){ this.cynthiaViteri  = Number(this.cynthiaViteri) + Number(x.val) }
        if (x.sumTo === 'guillermoLasso'){ this.guillermoLasso  = Number(this.guillermoLasso) + Number(x.val) }
        if (x.sumTo === 'rafaelCorrea'){ this.rafaelCorrea  = Number(this.rafaelCorrea) + Number(x.val) }
        if (x.sumTo === 'delfinQuishpe'){ this.delfinQuishpe  = Number(this.delfinQuishpe) + Number(x.val) }
        if (x.sumTo === 'leninMoreno'){ this.leninMoreno  = Number(this.leninMoreno) + Number(x.val)  }
        if (x.sumTo === 'alvaritoNovoa') { this.alvaritoNovoa  = Number(this.alvaritoNovoa) + Number(x.val) }
        if (x.sumTo === 'lucioGutierrez') { this.lucioGutierrez  = Number(this.lucioGutierrez) + Number(x.val) }
        

      },
      netz(x) {
        if (x === 8) {
          // this.$router.push('/gracias')
          this.activey = true;
        } else {
          this.preguntaSeleccionada = this.preguntas[x];
        }
        this.activex = false;
      },
      playAgain() {
        this.preguntaSeleccionada = this.preguntas[0];
        this.activey = false;
        this.progresz = 0;
        this.abdalaBucaram = 0;
        this.leonFebresCordero = 0;
        this.jaimeNebot = 0;
        this.mauricioRodas = 0;
        this.jorgeYunda = 0;
        this.ricardoPatino = 0;
        this.lurdesTiban = 0;
        this.cynthiaViteri = 0;
        this.guillermoLasso = 0;
        this.rafaelCorrea = 0;
        this.delfinQuishpe = 0;
        this.leninMoreno = 0;
        this.alvaritoNovoa = 0;
        this.lucioGutierrez = 0;
      }
    },
    data() {
      return {
        next: 1,
        resultadox : "",
        activex: false,
        activey: false,
        activez: true,
        progresz: 0,
        abdalaBucaram: 0,
        leonFebresCordero: 0,
        jaimeNebot: 0,
        mauricioRodas: 0,
        jorgeYunda: 0,
        ricardoPatino: 0,
        lurdesTiban: 0,
        cynthiaViteri: 0,
        guillermoLasso: 0,
        rafaelCorrea: 0,
        delfinQuishpe: 0,
        leninMoreno: 0,
        alvaritoNovoa: 0,
        lucioGutierrez: 0,
        preguntaSeleccionada:  {
          num: 1,
          img: '/pelea.png',
          pregunta: 'En una puñetiza...',
          uno: {
            respuesta: 'Metes de puñetes hasta a los chapas.',
            resultado: 'Felicidades estás re-loco por los puñetes men como Abdalá Bucaram.',
            img: '/1-1.png',
            val: 25,
            sumTo: 'abdalaBucaram'
          },
          dos: {
            respuesta: 'Metes el primer quiño.',
            resultado: 'Felicidades eres todo un león Febres Cordero porque no te ahuevas.',
            img: '/1-2.png',
            val: 50,
            sumTo: 'leonFebresCordero'
          },
          tres: {
            respuesta: 'Solo te dedicas a putear.',
            resultado: 'Eres todo un Jaime Nebot, puro bla bla miau.',
            img: '/1-3.png',
            val: 33.3,
            sumTo: 'jaimeNebot'
          }
        },
        preguntas: [
          {
            num: 1,
            img: '/pelea.png',
            pregunta: 'En una puñetiza...',
            uno: {
              respuesta: 'Metes de puñetes hasta a los chapas.',
              resultado: 'Felicidades estás re-loco por los puñetes men como Abdalá Bucaram.',
              img: '/1-1.png',
              val: 25,
              sumTo: 'abdalaBucaram'
            },
            dos: {
              respuesta: 'Metes el primer quiño.',
              resultado: 'Felicidades eres todo un león Febres Cordero porque no te ahuevas.',
              img: '/1-2.png',
              val: 50,
              sumTo: 'leonFebresCordero'
            },
            tres: {
              respuesta: 'Solo te dedicas a putear.',
              resultado: 'Eres todo un Jaime Nebot, puro bla bla miau.',
              img: '/1-3.png',
              val: 33.3,
              sumTo: 'jaimeNebot'
            }
          }, {
            num: 2,
            img: '/after.png',
            pregunta: 'En un after',
            uno: {
              respuesta: 'Pides Rocio Dulcan.',
              resultado: 'Felicidades, por tus gustos musicales eres un Mauricio Rodas neto, hecho el aniñado y malísimo para un trago.',
              img: '/2-1.png',
              val: 50,
              sumTo: 'mauricioRodas'
            },
            dos: {
              respuesta: 'Pides Ángel Guaraca',
              resultado: 'Felicidades, Por tus gustos musicales eres un Jorge Yunda neto, buenísimo para un traguito y rosca para un puñete de chumadito.',
              img: '/2-2.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            },
            tres: {
              respuesta: 'Pides Juan Gabriel',
              resultado: 'Felicidades, por tus gustos musicales eres un Ricardo Patiño Neto, flojo para un trago, pero buenísimo para el chisme.',
              img: '/2-3.png',
              val: 100,
              sumTo: 'ricardoPatino'
            }
          }, {
            num: 3,
            img: '/bufet.png',
            pregunta: 'Para el bautizo de tus guaguas',
            uno: {
              respuesta: 'Cuysito asado con papas en salsa de maní.',
              resultado: 'Felicidades, tienes toda la sazón y gustos de Lurdes Tibán.  ',
              img: '/3-1.PNG',
              val: 33.3,
              sumTo: 'lurdesTiban'
            },
            dos: {
              respuesta: 'Caviar y langostinos.',
              resultado: 'En buena hora, tienes la sazón y gustos de la aniñada del guayas Cynthia Viteri.',
              img: '/3-2.PNG',
              val: 100,
              sumTo: 'cynthiaViteri'
            },
            tres: {
              respuesta: 'Caldo de manguera, cuy y una cervecita no ha de faltar.',
              resultado: 'Tienes los gustos y la sazón del rocoto Jorge Yunda',
              img: '/3-3.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            }
          }, {
            num: 4,
            img: '/transporte.png',
            pregunta: '¿Que medio de transporte utilizas más?',
            uno: {
              respuesta: 'Cadify',
              resultado: 'Te inclinas más a ser el pelucón como Guillermo Lasso',
              img: '/4-1.png',
              val: 50,
              sumTo: 'guillermoLasso'
            },
            dos: {
              respuesta: 'Bus nomás',
              resultado: 'Eres un digno ecuatorianaso como Jorge Yunda',
              img: '/4-2.png',
              val: 33.3,
              sumTo: 'jorgeYunda'
            },
            tres: {
              respuesta: 'A pata',
              resultado: 'Eres fiel a la marcha ovejuna de Rafael Correa ',
              img: '/4-3.png',
              val: 50,
              sumTo: 'rafaelCorrea'
            }
          }, {
            num: 5,
            img: '/sing.png',
            pregunta: 'Cuando cantas en la ducha',
            uno: {
              respuesta: 'Te pegas una de Los Iracundos',
              resultado: 'llevas al loco que ama, Abdala Bucaram, en tus venas.',
              img: '/5-1.png',
              val: 25,
              sumTo: 'abdalaBucaram'
            },
            dos: {
              respuesta: 'Te pegas una de Miguel Bosé',
              resultado: 'No puedes ocultar tus toques del Rafael Correa.',
              img: '/5-2.png',
              val: 50,
              sumTo: 'rafaelCorrea'
            },
            tres: {
              respuesta: 'Te pegas una de Delfin',
              resultado: 'No puede ser! Llevas al buen Delfin Quishpe en las venas.',
              img: '/5-3.png',
              val: 100,
              sumTo: 'delfinQuishpe'
            },
          }, {
            num: 6,
            img: '/botellas.png',
            pregunta: 'Para un chupe compras..',
            uno: {
              respuesta: 'Puntas ',
              resultado: 'Tomas como albañil a lo Lourdes Tibán.',
              img: '/6-1.png',
              val: 33.3,
              sumTo: 'lurdesTiban'
            },
            dos: {
              respuesta: 'Blue Johnnie Walker      ',
              resultado: 'Te gusta hacerte verga y derrochar la plata como Guillermo Lasso.',
              img: '/6-2.png',
              val: '50',
              sumTo: 'guillermoLasso'
            },
            tres: {
              respuesta: 'Bielita',
              resultado: 'Te gusta beber pero mantenerte al limite como Mauricio Rodas en las reuniones.',
              img: '/6-3.png',
              val: 50,
              sumTo: 'mauricioRodas'
            }
          }, {
            num: 7,
            img: '/vacation.png',
            pregunta: '¿A donde te vas de vacaciones?',
            uno: {
              respuesta: 'A las europas',
              resultado: 'Viajas como pelucón y te pegas tu langostita al estilo de Lenin Moreno.',
              img: '/7-1.png',
              val: 100,
              sumTo: 'leninMoreno'
            },
            dos: {
              respuesta: 'Todo playa',
              resultado: 'A falta de banano, sol , playa y arena al swing Alvarito Novoa.',
              img: '/7-2.png',
              val: 100,
              sumTo: 'alvaritoNovoa'
            },
            tres: {
              respuesta: 'Por aquisito nomás',
              resultado: 'No hay nada como volver a la llacta como Lourdes Tibán.',
              img: '/7-3.png',
              val: '33.33333',
              sumTo: 'lurdesTiban'
            }
          }, {
            num: 8,
            img: '/lupa.png',
            pregunta: 'Con cual de estas mañas te identificas más',
            uno: {
              respuesta: 'Comer con las manos',
              resultado: 'Comes con locura y amor como Abdalá Bucarám.',
              img: '/8-1.png',
              val: 25,
              sumTo: 'abdalaBucaram'
            },
            dos: {
              respuesta: 'Ir a chonguitos',
              resultado: 'Dejarás de ir al chongo o morirás en el intento como Lucio  Gutierrez ',
              img: '/8-2.png',
              val: 100,
              sumTo: 'lucioGutierrez'
            },
            tres: {
              respuesta: 'Putear',
              resultado: 'Como Jaime Nebot; Al mal tiempo, ven para mearte insecto hijueputa',
              img: '/8-3.png',
              val: 33.3,
              sumTo: 'jaimeNebot'
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
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  bottom: 100vh;
  transition: all .5s ease;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  align-items: center;
    
  padding: 4rem;
}
</style>

