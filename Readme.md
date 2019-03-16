# shuffle-master

Simple node.js poker random shuffle.

## Installation

```sh
npm install shuffle-master
```

## How to use

```js
const ShuffleMaster = require('shuffle-master')
const stacks = 5
// Initialize poker pool, default is one stack
const CardControl = new ShuffleMaster([, stacks])
// Shuffle poker
CardControl.shuffle()
// Deal three cards
CardControl.deal(3)
// Get Current Cards pool
CardControl.cards
```

## Card Explanation

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //Diamond From A To K
17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, //Club From A To K
33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, //Heart From A To K
49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, //Spade From A To K
];
```


## Release History

* 1.0.0
    * FIRST COMMIT: 
* 1.0.1
    * BUGS AND README UDPDATE: Fix initialize bug 

## Information

wa292178@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/wa292178/shuffle-master/blob/master/LICENSE](https://github.com/wa292178/shuffle-master/blob/master/LICENSE)

