

const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            slideAttiva: "0",
            timer: null,
        }
    },
    methods: {
        fistActiveItem(indice) {
            if (indice == this.slideAttiva) {
                this.slideAttiva = indice;
                return "item active-item";
            } else {
                return "item";
            }
        },
        fistActiveThumbs(indice) {
            if (indice == this.slideAttiva) {
                this.slideAttiva = indice;
                return "thumb active";
            } else {
                return "thumb";
            }
        },
        next() {
            if (this.slideAttiva > 3) {
                this.slideAttiva = 0;
            } else {
                this.slideAttiva += 1;
            }
        },
        prev() {
            if (this.slideAttiva < 1) {
                this.slideAttiva = 4;
            } else {
                this.slideAttiva -= 1;
            }
        },
        cliccato(indice) {
            this.slideAttiva = indice;
        },
        pausaAutoplay(indice) {
            clearInterval(this.timer);
            this.slideAttiva = indice;
        },
        riprendiAutoplay() {
            this.timer = setInterval(() => {
                if (this.slideAttiva > 3) {
                    this.slideAttiva = 0;
                } else {
                    this.slideAttiva += 1;
                }
            }, 1000)
        },
    },
    mounted() {
        // this.timer = setInterval(() => {
        //     if (this.slideAttiva > 3) {
        //         this.slideAttiva = 0;
        //     } else {
        //         this.slideAttiva += 1;
        //     }
        // }, 1000)
    }
}).mount('#app')