var app = new Vue ( {
    el: '#root',
    data: {
        discs: []
    },
    mounted() {
        var self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(cd) {
            self.discs = cd.data.response;
            console.log(self.discs);
        })
    }
})
