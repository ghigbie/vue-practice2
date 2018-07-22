new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Ragnar',
        click: 'This takes you where you need to go!',
        url: 'http://youtube.com'
    },
    methods: {
        greet(time) {
            return `Hello there and good ${time} ${this.name}`;
        }
    }
})