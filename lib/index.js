'use strict';

var _ = require('lodash');

/**
 * shuffle cards
 */
function shuffle() {
    this.cards = _.shuffle(this.cards)
}

/**
 * @param {number} num quantity of dealing cards
 */
function deal(num) {
    if (!num) {
        throw new Error('card num required')
    }

    if (_.isNumber(num) === false) {
        throw new Error('deal(params), typeof params is number required ')
    }

    if (num > this.cards.length) {
        throw new Error('the quantity of dealing cards are more than base cards')
    }

    var cards = [];

    for (var i = 0; i < num; i++) {
        cards.push(this.cards[0]);
        this.cards.splice(0, 1);
    }

    return cards;
}

/**
 * @constructor
 */
function ShuffleMaster(stacks) {
    this.stacks = stacks || 1;

    if (_.isNumber(stacks) === false) {
        throw new Error('typeof params is number required ')
    }

    var _base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //方片A-K
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, //梅花A-K
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, //红桃A-K
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, //黑桃A-K
    ];

    var cards = []

    for (var i = 1; i <= stacks; i++) {
        cards = cards.concat(_base)
    }

    this.cards = cards;
}

ShuffleMaster.prototype.shuffle = shuffle;
ShuffleMaster.prototype.deal = deal;

module.exports = ShuffleMaster;
