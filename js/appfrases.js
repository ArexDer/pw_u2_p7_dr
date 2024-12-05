console.log(Vue);
const frases =[{frase:'Ojala no Llueva hoy', autor:'Pablo Paredes'},
    {frase:'Hoy no fio, mañana si', autor:'Nicky Nicole'},
    {frase:'Camaron que se duerme se lo lleva la corriente', autor:'Daniel Noboa'},
    {frase:'El cielo esta nublado', autor:'Alex Ponce'},
    {frase:'No mires en ojo ajeno', autor:'Luciana Gushmer'},
    {frase:'Error de capa 8', autor:'Lacario Pokedex'},
    {frase:'No olvides ser responsable', autor:'Jaimito Glass'},
    ]

const app = Vue.createApp({
    


    //OPTIONS API
   methods:{


   },
   data(){
  
    return{
        listaFrases:frases
       

    }
   }
})
app.mount('#myApp')