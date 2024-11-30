console.log(Vue);

const app = Vue.createApp({
    //USADO PARA DECLARAR ELEMENTOS HTML
    //Backtick una comilla inclinada a la izquierda
    template:`
    <h1>Hola Mundo<h2>
    <p> Con Vue.js <p>
    `
})
app.mount('#myApp')