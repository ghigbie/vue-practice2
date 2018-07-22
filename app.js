new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Ragnar'
    },
    methods: {
        greet(time) {
            return `Hello there and good ${time} ${this.name}`;
        }
    }
})