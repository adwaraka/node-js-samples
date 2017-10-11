const suit = ["Clubs", "Diamonds", "Hearts", "Spades"],
    rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

let cardPrototype = {
    suit: "",
    rank: ""
}

let deckPrototype = {
    cards: [],
    count: 0,

    swapCards: function(val1, val2) {
        let temp = this.cards[val1];
        this.cards[val1] = this.cards[val2];
        this.cards[val2] = temp;
    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },

    createDeck: function(){
        suit.forEach((suitVal) => {
            rank.forEach((rankVal) => {
                let card = {};
                Object.assign(card, cardPrototype);
                card.suit = suitVal;
                card.rank = rankVal;
                this.cards.push(card);
                this.count+=1;
            });
        });
    },

    showDeck: function(){
        this.cards.forEach((value) => {console.log(value)});
    },

    shuffleDeck: function(count){
        let val1, val2;
        while (count > 0) {
            val1 = this.getRandomInt(0, 52);
            val2 = this.getRandomInt(0, 52);
            //console.log("swapping", val1, val2);
            this.swapCards(val1, val2);
            count-=1
        }
    }
}

deck = Object.create(deckPrototype);
deck.createDeck();
//deck.showDeck();
//console.log(deck.count);
deck.shuffleDeck(100);
deck.showDeck();