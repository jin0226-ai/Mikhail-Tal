import { useState } from 'react';
import InteractiveChessBoard from '../../components/ChessBoard/InteractiveChessBoard';
import { talGames, categories } from '../../data/games';
import './GamesGallery.css';

function GamesGallery() {
  const [selectedGame, setSelectedGame] = useState(talGames[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentMoveInfo, setCurrentMoveInfo] = useState(null);

  const filteredGames = selectedCategory === 'all'
    ? talGames
    : talGames.filter(game => game.category === selectedCategory);

  const handleMoveChange = (move, moveNumber) => {
    setCurrentMoveInfo({ move, moveNumber });
  };

  return (
    <div className="games-gallery">
      <header className="page-header">
        <h1>Mikhail Tal의 명경기 모음</h1>
        <p>마법사의 가장 아름답고 인상적인 게임들을 감상하세요</p>
      </header>

      <div className="category-filter">
        <label>카테고리:</label>
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            className={selectedCategory === key ? 'active' : ''}
            onClick={() => setSelectedCategory(key)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="games-layout">
        <aside className="games-list">
          <h3>게임 선택</h3>
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className={`game-item ${selectedGame.id === game.id ? 'active' : ''}`}
              onClick={() => setSelectedGame(game)}
            >
              <h4>{game.title}</h4>
              <p className="game-meta">
                {game.white} vs {game.black}
              </p>
              <p className="game-event">{game.event} ({game.date})</p>
            </div>
          ))}
        </aside>

        <main className="game-display">
          <InteractiveChessBoard
            key={selectedGame.id}
            pgn={selectedGame.pgn}
            gameInfo={{
              title: selectedGame.title,
              white: selectedGame.white,
              black: selectedGame.black,
              event: selectedGame.event,
              date: selectedGame.date,
            }}
            onMoveChange={handleMoveChange}
          />

          <div className="game-analysis">
            <h3>게임 분석</h3>
            <p className="game-description">{selectedGame.description}</p>

            {currentMoveInfo && (
              <div className="current-move-info">
                <h4>현재 수</h4>
                <p>
                  <strong>이동:</strong> {currentMoveInfo.move.san} <br />
                  <strong>위치:</strong> {currentMoveInfo.move.from} → {currentMoveInfo.move.to}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default GamesGallery;
