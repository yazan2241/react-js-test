import React from 'react'
import bishop from '../../../assets/svg/bishop.jpeg'

import rook from '../../../assets/svg/rook.png'
import king from '../../../assets/svg/king1.png'

import queen from '../../../assets/svg/queen.jpeg'

const peices = [
    {
        key : 'Bishop',
        name : 'Bishop' , 
        image : bishop,
        x : 0,
        y : 0
    },
    {
        key : 'Rook',
        name : 'Rook' , 
        image : rook,
        x : 0,
        y : 60
    },
    {
        key : 'Queen',
        name : 'Queen' , 
        image : queen,
        x : 0,
        y : 120
    },
    {
        key : 'King',
        name : 'King' , 
        image : king,
        x : 0,
        y : 180
    }
];

const chessPieces = [
    ...peices
];

  export default chessPieces;