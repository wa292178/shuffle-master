'use strict';
var chai = require('chai');

var ShuffleMaster = require('../lib');

describe('shuffle master', function (){
    var stacks = Math.floor(Math.random() * 100 + 1);
    var handler = new ShuffleMaster(stacks);

    it('must return a object', function(){
        chai.assert.isObject(handler);
        chai.assert.instanceOf(handler, ShuffleMaster);
        chai.expect(handler).to.contain.keys('stacks', 'cards');
    });

    it('handler aruguments', function(){
        chai.assert.isNumber(handler.stacks);
        chai.expect(handler.stacks).to.be.gte(1);
        chai.assert.isArray(handler.cards);
        chai.assert.strictEqual(handler.cards.length, 52 * stacks);
    });

    describe('shuffle handler', function(){
        var shuffleHandler = handler.shuffle;
        console.log(shuffleHandler.length)
        it('shuffle handle should return a function', function(){
            chai.assert.isFunction(shuffleHandler);
            chai.assert.strictEqual(shuffleHandler.length, 0);
        });
    });

    describe('deal handler', function(){
        var dealHandler = handler.deal;
        it('deal hander should return a function', function(){
            chai.assert.isFunction(dealHandler);
            chai.assert.strictEqual(dealHandler.length, 1);
        });
    });
    
});