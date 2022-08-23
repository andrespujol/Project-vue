var app = new Vue({
    el: "#app",
    data: {
        message: 'Desafío contador',
        counter: 0,
        click: 0,
        login: true
    },
    methods: {
        increase(){        
            this.counter++      
            this.click++
        },
        decrease(){
            this.click++
            if(this.counter >0){
            --this.counter
            console.log(this.counter)
            }
        }
    },
})