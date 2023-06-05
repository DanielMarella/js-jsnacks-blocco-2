const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'V-For!!',
            items: [{ items: 1}, { items: 2}, { items: 3}, { items: 4}],

        }
    },




    

}).mount('#app');





// Genero due cicli for con vue, uno che cicla in un array di quattro elementi e li stampa su schermo, l'altro che stampa su schermo i primi 10 numeri.