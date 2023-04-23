
import { createContext, useContext, useEffect, useRef, useState, useImperativeHandle } from "react";

const playerContext = createContext();

function TicTacToe(){

    const [player, setPlayer] = useState("O")
    const [moves, setMoves] = useState([{}]);
    const[status, setStatus] = useState("");

    const togglePlayer = (ticBoxId) => {
        let boxId = 'box'+ticBoxId;
        setMoves(values=>({...values, [boxId]:player}))
        setPlayer(player === "O" || player === "" ? "X" : "O");
        moves[ticBoxId-1] = player;
        checkWinCombination();
    } 

    useEffect(()=>{
        checkWinCombination();
    },[moves])


    const winCombination = [
        [1,2,3],[4,5,6],[7,8,9], //horizontal combination
        [1,4,7],[2,5,8],[3,6,9], //vetical combination
        [1,5,9],[3,5,7], //x combination
    ];

    const checkWinCombination = () => {
       winCombination.forEach((item) => {

        let combination1 = moves['box' + item[0]] === undefined ? 0 : moves['box' + item[0]] === "O" ? 1 : -1;
        let combination2 = moves['box' + item[1]] === undefined ? 0 : moves['box' + item[1]] === "O" ? 1 : -1;
        let combination3 = moves['box' + item[2]] === undefined ? 0 : moves['box' + item[2]] === "O" ? 1 : -1;
      
        let total = combination1 + combination2 + combination3;
        if (total === 3){
           setStatus("Player O win");
        }else if(total === -3){
            setStatus("Player X win");
        }

        })
    }

    const childref = useRef();

    const doRestartGame = () => {
        setMoves([{}]);
        setPlayer("O"); 
        setStatus("");
        childref.current.resetBox();
    }
   

    return(
        <>
            <playerContext.Provider value={{player, togglePlayer,status}}>
            <div>
                <TicBox boxId={1} ref={childref}/>
                <TicBox boxId={2} ref={childref}/>
                <TicBox boxId={3} ref={childref}/>
            </div>
            <div>
                <TicBox boxId={4} ref={childref}/>
                <TicBox boxId={5} ref={childref}/>
                <TicBox boxId={6} ref={childref}/>
            </div>
            <div>
                <TicBox boxId={7} ref={childref}/>
                <TicBox boxId={8} ref={childref}/>
                <TicBox boxId={9} ref={childref}/>
            </div>
            </playerContext.Provider>
            <div className="game-status">{status}</div>
            <button className="btn btn-success" onClick={doRestartGame}>Restart</button>
        </>
    );
}
function TicBox({boxId, ref}){

    const {player, togglePlayer, status} = useContext(playerContext);
    const[playerChar, setPlayerChar] = useState();
    const [withMove, setWithMove] = useState('');

    const onClickHandler = () => {
        if(playerChar === undefined && status === ''){
            setPlayerChar(player);
            togglePlayer(boxId);
            setWithMove('withMove');
            
        }
      
    }

    useImperativeHandle(ref, () => ({

        resetBox(){
            setPlayerChar('');
            setWithMove('');
        }

    }))

   

    return (
        <div className={"tic-box " + withMove} onClick={onClickHandler}>{playerChar}</div>
    );
}
export default TicTacToe;