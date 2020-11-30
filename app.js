Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
        clearGoal() {
            this.goals.splice(this.enteredValue);
        },
    }
}).mount(app);