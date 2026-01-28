import { useState, useEffect, useRef } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import './InteractiveChessBoard.css';

function InteractiveChessBoard({ pgn, gameInfo, onMoveChange }) {
  const [fen, setFen] = useState('start');
  const [currentMove, setCurrentMove] = useState(0);
  const [moves, setMoves] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1000);
  const intervalRef = useRef(null);
  const onMoveChangeRef = useRef(onMoveChange);

  // onMoveChange ref를 최신 상태로 유지
  useEffect(() => {
    onMoveChangeRef.current = onMoveChange;
  }, [onMoveChange]);

  // PGN이 변경될 때 게임을 초기화
  useEffect(() => {
    try {
      const newGame = new Chess();
      newGame.loadPgn(pgn);
      const history = newGame.history({ verbose: true });

      setMoves(history);
      setCurrentMove(0);
      setFen('start');
    } catch (error) {
      console.error('PGN 로드 실패:', error);
    }
  }, [pgn]);

  // currentMove가 변경될 때 position 업데이트
  useEffect(() => {
    console.log('=== Position Update ===');
    console.log('currentMove:', currentMove);
    console.log('moves.length:', moves.length);

    // 새 게임 인스턴스 생성하고 현재 수까지 재생
    const newGame = new Chess();
    for (let i = 0; i < currentMove; i++) {
      try {
        if (typeof moves[i] === 'string') {
          newGame.move(moves[i]);
        } else if (moves[i] && moves[i].san) {
          newGame.move(moves[i].san);
        }
      } catch (error) {
        console.error(`Move ${i} 실행 실패:`, error);
      }
    }

    const newFen = newGame.fen();
    console.log('Calculated FEN:', newFen);

    setFen(newFen);

    if (onMoveChangeRef.current && moves[currentMove - 1]) {
      onMoveChangeRef.current(moves[currentMove - 1], currentMove);
    }
  }, [currentMove, moves]);

  // 자동 재생 기능
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentMove((prev) => {
          if (prev >= moves.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playSpeed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, playSpeed, moves.length]);

  const goToMove = (moveIndex) => {
    setIsPlaying(false);
    setCurrentMove(moveIndex);
  };

  const nextMove = () => {
    if (currentMove < moves.length) {
      setCurrentMove(currentMove + 1);
    }
  };

  const prevMove = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  };

  const togglePlay = () => {
    if (currentMove >= moves.length) {
      setCurrentMove(0);
    }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setIsPlaying(false);
    setCurrentMove(0);
  };

  const goToEnd = () => {
    setIsPlaying(false);
    setCurrentMove(moves.length);
  };

  return (
    <div className="interactive-chessboard">
      {gameInfo && (
        <div className="game-info">
          <h3>{gameInfo.title}</h3>
          {gameInfo.white && <p><strong>백:</strong> {gameInfo.white}</p>}
          {gameInfo.black && <p><strong>흑:</strong> {gameInfo.black}</p>}
          {gameInfo.event && <p><strong>이벤트:</strong> {gameInfo.event}</p>}
          {gameInfo.date && <p><strong>날짜:</strong> {gameInfo.date}</p>}
        </div>
      )}

      <div className="board-container">
        <Chessboard
          position={fen}
          width={500}
          draggable={false}
          boardStyle={{
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>

      <div className="controls">
        <div className="control-buttons">
          <button onClick={reset} disabled={currentMove === 0}>
            ⏮ 처음
          </button>
          <button onClick={prevMove} disabled={currentMove === 0}>
            ⏪ 이전
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? '⏸ 일시정지' : '▶ 재생'}
          </button>
          <button onClick={nextMove} disabled={currentMove >= moves.length}>
            ⏩ 다음
          </button>
          <button onClick={goToEnd} disabled={currentMove >= moves.length}>
            ⏭ 마지막
          </button>
        </div>

        <div className="speed-control">
          <label>재생 속도:</label>
          <select value={playSpeed} onChange={(e) => setPlaySpeed(Number(e.target.value))}>
            <option value={2000}>느림 (2초)</option>
            <option value={1000}>보통 (1초)</option>
            <option value={500}>빠름 (0.5초)</option>
          </select>
        </div>

        <div className="move-counter">
          수: {Math.floor(currentMove / 2) + 1} / {Math.ceil(moves.length / 2)}
        </div>
      </div>

      <div className="moves-list">
        <h4>기보</h4>
        <div className="moves-grid">
          {moves.map((move, index) => {
            const moveNumber = Math.floor(index / 2) + 1;
            const isWhite = index % 2 === 0;

            return (
              <div
                key={index}
                className={`move-item ${currentMove === index + 1 ? 'current' : ''}`}
                onClick={() => goToMove(index + 1)}
              >
                {isWhite && <span className="move-number">{moveNumber}.</span>}
                <span className="move-san">{move.san}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InteractiveChessBoard;
