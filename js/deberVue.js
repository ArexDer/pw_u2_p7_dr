const app = Vue.createApp({
    data() {
        return {
            listadoEntrada: [], 
            nombre: null,       
            apellido: null,    
            hobby: null,     
            lugarNacimiento: null,

            mensaje:null
        };
    },
    methods: {
        guardarEntrada() {
            if (this.nombre && this.apellido && this.hobby && this.lugarNacimiento) {
               
                const nuevaEntrada = this.nombre+" - "+ this.apellido+" - "+ this.hobby+" - "+ this.lugarNacimiento
               console.log(nuevaEntrada);
               
                this.listadoEntrada.unshift(nuevaEntrada);
               
                this.nombre = null;
                this.apellido = null;
                this.hobby = null;
                this.lugarNacimiento = null;
                this.mensaje = null;
            } else if (this.nombre===null || this.apellido===null || this.hobby===null || this.lugarNacimiento===null) {
                this.mensaje = "Revise los campos, existen algunos sin completar";
            }
            
        }
    }
});

app.mount("#myapp");
