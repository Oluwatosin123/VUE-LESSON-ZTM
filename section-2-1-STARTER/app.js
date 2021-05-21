vm = Vue.createApp({
    data() {
        return {
            firstName: 'Ajose',
            lastName: 'Tosin',
            middleName: '',
            url: "https://google.com",
            raw_url: '<a href="url" target="_blank">Google</a>',
            age: 20,
        }
    },

    methods: {
        increment() {
            this.age++
        },

        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },

        updateMiddleName(event) {
            this.middleName = event.value.target
        }
    },

    computed: {
        fullName() {
            console.log('Full Name computed property was called!');
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },

    watch:{
           age(newVal, oldVal){
               setTimeout(() => {
                   this.age = 20;
               }, 3000)
           }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Lanre'
// }, 2000)

// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Ajose',
//             lastName: 'Tosin'
//         }
//     }
// }).mount('#myapp')