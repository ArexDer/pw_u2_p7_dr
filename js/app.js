console.log(Vue);

const app = Vue.createApp({
    //USADO PARA DECLARAR ELEMENTOS HTML
    //Backtick una comilla inclinada a la izquierda
    /*
    template:`
    <p>Hola Mundo</p>
    <p>{{1+2}}</p>
    <p>{{[1,2,3,4,5,6,7,8,9]}}</p>
     <p>{{ {nombre: 'Diego',apellido:'Rivas'} }}</p>
     <p>{{5<1? 'Activo':'Inactivo'}}</p>
     <p>{{1===1? 'Activo':'Inactivo'}}</p>
     <p>{{1===1}}>/p>
    `
    */

    //OPTIONS API
   methods:{
    cambiarMensaje(){
        //cada ves que voy hacer referencia a una propiedad reactiva debo poner "this"
        this.mensaje='Mensaje Cambiado';
        this.edad=27;

    }


   },
   data(){
    //Destinada para crear propiedades dentro de VUE
    /* Son el nexo de comunicacion entre la pagina html y el app.js
     DECLARACION DE PROPIEDADES REACTIVAS
     */
    return{
        mensaje: 'Hola mundo con data en Pw',
        edad: 30

    }
   }
})
app.mount('#myApp')