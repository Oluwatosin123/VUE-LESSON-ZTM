let vm = Vue.createApp({
    data() {
        return{
            birds:['Pigeons', 'Eagle', 'Doves', 'Parrot'],
            people:[
                {name: 'John', age: 20},
                {name: 'Rick', age: 18},
                {name: 'Amy', age: 33},
            ]
        }
    }
}).mount('#app');
