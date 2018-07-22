new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Ragnar',
        click: 'This takes you where you need to go!',
        url: 'http://youtube.com',
        classes: ['one', 'two'],
        wage: 300
    },
    methods: {
        greet(time) {
            return `Hello there and good ${time} ${this.name}`;
        },
        increase(amount) {
            this.wage += amount;
        },
        decrease(amount) {
            this.wage -= amount;
        },
        logEvent(event) {
            console.log(event);
        },
        logCoords(event) {
            console.log(`The x coordinate is: ${event.offsetX}`);
            console.log(`The y coordinate is: ${event.offsetY}`);
        }
    }
})