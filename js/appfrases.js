console.log(Vue);
const frases = [
  { frase: "Ojala no Llueva hoy", autor: "Pablo Paredes" },
  { frase: "Hoy no fio, mañana si", autor: "Nicky Nicole" },
  {
    frase: "Camaron que se duerme se lo lleva la corriente",
    autor: "Daniel Noboa",
  },
  { frase: "El cielo esta nublado", autor: "Alex Ponce" },
  { frase: "No mires en ojo ajeno", autor: "Luciana Gushmer" },
  { frase: "Error de capa 8", autor: "Lacario Pokedex" },
  { frase: "No olvides ser responsable", autor: "Jaimito Glass" },
];

const app = Vue.createApp({
  data() {
    return {
      listasFrases: frases,
      frase: null,
      //  autor:'sin autor',
      autor: null,
    };
  },
  methods: {
    agregarFrase() {
      console.log(this.frase);
      console.log(this.autor);

      const nuevaFrase = {
        frase: this.frase,
        autor: this.autor,
      };

      this.listasFrases.unshift(nuevaFrase);
    },
    agregarFraseFinal() {
      console.log(this.frase);
      console.log(this.autor);

      const nuevaFrase = {
        frase: this.frase,
        autor: this.autor,
      };

      this.listasFrases.push(nuevaFrase);
    },
    /* DESESTRUCTURACION

    */
    eventoKeyPress({charCode,cancelable,key,keyCode, target}) {
      if (key ==="Enter") {
        console.log(charCode);
        console.log(cancelable);
        console.log(key);
        console.log(keyCode);
        console.log(target.baseURI);

        this.agregarFraseFinal();

      }
      
    },
    eventoKeyPressModificador() {
        //Modidicadores de Eventos.
        if (key ==="Enter") {
            /*
          console.log(charCode);
          console.log(cancelable);
          console.log(key);
          console.log(keyCode);
          console.log(target.baseURI);
          */
  
          this.agregarFraseFinal();
  
        }
        
      }
  },
});

app.mount("#myapp");
