import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { tacticalPuzzles, difficultyLevels, themes } from '../../data/puzzles';
import './TacticalPuzzles.css';

function TacticalPuzzles() {
  const [currentPuzzle, setCurrentPuzzle] = useState(tacticalPuzzles[0]);
  const [position, setPosition] = useState(tacticalPuzzles[0].fen);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [userAttempt, setUserAttempt] = useState('');
  const [feedback, setFeedback] = useState(null);

  // currentPuzzle이 변경될 때마다 position 상태를 업데이트
  useEffect(() => {
    setPosition(currentPuzzle.fen);
  }, [currentPuzzle]);

  const filteredPuzzles = tacticalPuzzles.filter(puzzle => {
    const matchesDifficulty = selectedDifficulty === 'all' ||
      puzzle.difficulty === difficultyLevels[selectedDifficulty];
    const matchesTheme = selectedTheme === 'all' ||
      puzzle.theme.toLowerCase().includes(selectedTheme);
    return matchesDifficulty && matchesTheme;
  });

  const loadPuzzle = (puzzle) => {
    setCurrentPuzzle(puzzle);
    setPosition(puzzle.fen);
    setShowSolution(false);
    setUserAttempt('');
    setFeedback(null);
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setFeedback({
      type: 'solution',
      message: currentPuzzle.explanation
    });
  };

  const handleCheckSolution = () => {
    const userMove = userAttempt.trim().toLowerCase();
    const correctMove = currentPuzzle.solution.toLowerCase();

    if (userMove === correctMove) {
      setFeedback({
        type: 'success',
        message: '정답입니다! 🎉 ' + currentPuzzle.explanation
      });
      setShowSolution(true);
    } else {
      setFeedback({
        type: 'error',
        message: '틀렸습니다. 다시 시도해보세요!'
      });
    }
  };

  const nextPuzzle = () => {
    const currentIndex = filteredPuzzles.findIndex(p => p.id === currentPuzzle.id);
    const nextIndex = (currentIndex + 1) % filteredPuzzles.length;
    loadPuzzle(filteredPuzzles[nextIndex]);
  };

  const prevPuzzle = () => {
    const currentIndex = filteredPuzzles.findIndex(p => p.id === currentPuzzle.id);
    const prevIndex = currentIndex === 0 ? filteredPuzzles.length - 1 : currentIndex - 1;
    loadPuzzle(filteredPuzzles[prevIndex]);
  };

  return (
    <div className="tactical-puzzles">
      <header className="page-header">
        <h1>전술 훈련 문제</h1>
        <p>Tal의 게임에서 가져온 전술 문제로 실력을 향상시키세요</p>
      </header>

      <div className="filters">
        <div className="filter-group">
          <label>난이도:</label>
          {Object.entries(difficultyLevels).map(([key, value]) => (
            <button
              key={key}
              className={selectedDifficulty === key ? 'active' : ''}
              onClick={() => {
                setSelectedDifficulty(key);
                const filtered = tacticalPuzzles.filter(puzzle =>
                  key === 'all' || puzzle.difficulty === value
                );
                if (filtered.length > 0) loadPuzzle(filtered[0]);
              }}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <label>테마:</label>
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              className={selectedTheme === key ? 'active' : ''}
              onClick={() => {
                setSelectedTheme(key);
                const filtered = tacticalPuzzles.filter(puzzle =>
                  key === 'all' || puzzle.theme.toLowerCase().includes(key)
                );
                if (filtered.length > 0) loadPuzzle(filtered[0]);
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="puzzle-layout">
        <aside className="puzzle-list">
          <h3>문제 목록</h3>
          {filteredPuzzles.map((puzzle) => (
            <div
              key={puzzle.id}
              className={`puzzle-item ${currentPuzzle.id === puzzle.id ? 'active' : ''}`}
              onClick={() => loadPuzzle(puzzle)}
            >
              <h4>{puzzle.title}</h4>
              <div className="puzzle-meta">
                <span className={`difficulty ${puzzle.difficulty}`}>
                  {puzzle.difficulty}
                </span>
                <span className="theme">{puzzle.theme}</span>
              </div>
            </div>
          ))}
        </aside>

        <main className="puzzle-display">
          <div className="puzzle-info">
            <h2>{currentPuzzle.title}</h2>
            <div className="puzzle-details">
              <span className={`difficulty-badge ${currentPuzzle.difficulty}`}>
                {currentPuzzle.difficulty}
              </span>
              <span className="theme-badge">{currentPuzzle.theme}</span>
            </div>
          </div>

          <div className="board-wrapper">
            <Chessboard
              key={position}
              position={position}
              boardWidth={500}
              customBoardStyle={{
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>

          <div className="puzzle-controls">
            <div className="solution-input">
              <input
                type="text"
                placeholder="정답을 입력하세요 (예: Nxe5)"
                value={userAttempt}
                onChange={(e) => setUserAttempt(e.target.value)}
                disabled={showSolution}
              />
              <button
                onClick={handleCheckSolution}
                disabled={showSolution || !userAttempt}
                className="check-btn"
              >
                확인
              </button>
            </div>

            {feedback && (
              <div className={`feedback ${feedback.type}`}>
                {feedback.message}
              </div>
            )}

            {!showSolution && (
              <button onClick={handleShowSolution} className="hint-btn">
                💡 정답 보기
              </button>
            )}

            {showSolution && (
              <div className="solution-display">
                <h4>정답</h4>
                <p className="solution">{currentPuzzle.solution}</p>
                <p className="explanation">{currentPuzzle.explanation}</p>
              </div>
            )}

            <div className="navigation-buttons">
              <button onClick={prevPuzzle}>⬅ 이전 문제</button>
              <button onClick={nextPuzzle}>다음 문제 ➡</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TacticalPuzzles;
