var app = new Vue ( {
    el: '#root',
    data: {
        discs: [],
        genres: [],
        selectedGenre: 'All Types'
    },
    mounted() {
        var self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(cd) {
            self.discs = cd.data.response;
            console.log(self.discs);

            self.discs.forEach((cd, i) => {
                if (!self.genres.includes(cd.genre)) {
                    self.genres.push(cd.genre);
                };
            });


        });

    }
});
