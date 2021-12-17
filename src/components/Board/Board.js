import react, {useState} from 'react'
import './Board.css';


const Board = (props) => {
    const [board,setBoard] = useState(['_','_','_','_','_','_','_','_','_'])

    const buttonClicked = (index) =>{
        var boardCopy = [...board]
        if(board[index] === '_'){
            boardCopy[index] = 'X'

            computerTurn(boardCopy)

            setBoard(boardCopy)
        } else {
            return
        }
    }

    const computerTurn = (boardCopy) =>{
        var newBoard = winTurn(boardCopy)
        if(newBoard !== null){
            for(let i = 0; i < newBoard.length;i++){
                if(newBoard[i] === '_'){
                    newBoard[i] = '-'
                }
            }
            props.setDisplayMessage('You Lost')
            const lossValue = props.losses + 1
            props.setLosses(lossValue)
            return newBoard
        }
        newBoard = defend(boardCopy)
        if(newBoard !== null){
            return newBoard
        }

        for(let i = 0; i < board.length; i++){
            if(boardCopy[i] === '_'){
                boardCopy[i] = 'O'
                return boardCopy
            }
        }
        return boardCopy
    }

    const winTurn = (boardCopy) =>{
        const winCheck = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let j = 0; j < winCheck.length;j++){
            const str = boardCopy[winCheck[j][0]] + boardCopy[winCheck[j][1]] + boardCopy[winCheck[j][2]] 
            if(str === '_OO'){
                 boardCopy[winCheck[j][0]] = 'O'
                 return boardCopy
                 
            } else if(str === 'O_O'){
                boardCopy[winCheck[j][1]] = 'O'
                return boardCopy
                 
            } else if(str === 'OO_'){
             boardCopy[winCheck[j][2]] = 'O'
             return boardCopy
             
            }
            
         }
         return null
    }

    const defend = (boardCopy) =>{
        const winCheck = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let j = 0; j < winCheck.length;j++){
            const str = boardCopy[winCheck[j][0]] + boardCopy[winCheck[j][1]] + boardCopy[winCheck[j][2]] 
            if(str === '_XX'){
                 boardCopy[winCheck[j][0]] = 'O'
                 return boardCopy
                 
            } else if(str === 'X_X'){
                boardCopy[winCheck[j][1]] = 'O'
                return boardCopy
                 
            } else if(str === 'XX_'){
             boardCopy[winCheck[j][2]] = 'O'
             return boardCopy
             
            }
            
         }
         return null
    }

    return (
        <div className="board">
         <button className="boardbtn" onClick={() => buttonClicked(0)}>{board[0]}</button> <button className="boardbtn" onClick={() => buttonClicked(1)}>{board[1]}</button> <button className="boardbtn" onClick={() => buttonClicked(2)}>{board[2]}</button> <br/>
         <button className="boardbtn" onClick={() => buttonClicked(3)}>{board[3]}</button> <button className="boardbtn" onClick={() => buttonClicked(4)}>{board[4]}</button> <button className="boardbtn" onClick={() => buttonClicked(5)}>{board[5]}</button> <br/>
         <button className="boardbtn" onClick={() => buttonClicked(6)}>{board[6]}</button> <button className="boardbtn" onClick={() => buttonClicked(7)}>{board[7]}</button> <button className="boardbtn" onClick={() => buttonClicked(8)}>{board[8]}</button> <br/>

        </div>
      );
}




export default Board