import { useState } from "react";
import './Sqaure.css'

export default function Game(){
    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const xIsNext = currentMove % 2 === 0;
    const currentSquare = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map( (squares, move) => {
        let description;
        if (move === 0) {
            description = 'Go to start';
        } else {
            description = 'Go to move #' + move;
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}


function Board({xIsNext, squares, onPlay}) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquare] = useState(Array(9).fill(null));

    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i) {
        const nextsquares = squares.slice();
        if (squares[i] || CalculateWinner(squares)) return ;
        xIsNext ? nextsquares[i] = "X" : nextsquares[i] = "O";
        onPlay(nextsquares);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
            </div>
        </>
    )
}




// // // // // // // // // // // // // // // // // // // //
//                  Square component                     //
// // // // // // // // // // // // // // // // // // // // 
function Square({value, onSquareClick}) {
    // const [value, setValue] = useState('');

    return (
        <>
            <button onClick={onSquareClick} className="sqaure">{value}</button>
        </>
        
    )
}


// // // // // // // // // // // // // // // // // // // //
//             Calculate Winner of the Game              //
// // // // // // // // // // // // // // // // // // // // 
function CalculateWinner(squares) {
    // const [value, setValue] = useState('');
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}