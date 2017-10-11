const suit = ["Clubs", "Diamonds", "Hearts", "Spades"],
    rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

let cardPrototype = {
    suit: "",
    rank: ""
}

let deckPrototype = {
    cards: [],
    count: 0,

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
    }
}

deck = Object.create(deckPrototype);
deck.createDeck();
deck.showDeck();
console.log(deck.count);