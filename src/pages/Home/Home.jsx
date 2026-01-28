import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Mikhail Tal</h1>
        <p className="hero-subtitle">체스의 마법사 (The Magician from Riga)</p>
        <div className="hero-description">
          <p>
            미하일 탈(1936-1992)은 라트비아 출신의 체스 그랜드마스터로,
            1960년 23세의 나이에 세계 챔피언이 되었습니다.
          </p>
          <p>
            그의 공격적이고 창의적인 플레이 스타일은 체스 역사상 가장 독특하고
            흥미진진한 것으로 평가받고 있습니다.
          </p>
        </div>
      </section>

      <section className="features">
        <h2>Tal의 세계를 탐험하세요</h2>
        <div className="feature-grid">
          <Link to="/games" className="feature-card">
            <div className="feature-icon">♔</div>
            <h3>명경기 모음</h3>
            <p>Tal의 가장 유명한 게임들을 직접 따라가며 학습하세요</p>
          </Link>

          <Link to="/puzzles" className="feature-card">
            <div className="feature-icon">🧩</div>
            <h3>전술 훈련</h3>
            <p>Tal의 게임에서 가져온 전술 문제로 실력을 향상시키세요</p>
          </Link>

          <Link to="/playstyle" className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>플레이 스타일</h3>
            <p>Tal의 독특한 공격 스타일과 전략을 깊이 있게 분석합니다</p>
          </Link>

          <Link to="/biography" className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>전기</h3>
            <p>Tal의 삶과 체스 경력에 대한 이야기를 읽어보세요</p>
          </Link>
        </div>
      </section>

      <section className="quotes">
        <h2>Tal의 명언</h2>
        <div className="quote-card">
          <blockquote>
            "당신은 항상 승리할 수는 없지만, 항상 아름답게 질 수는 있습니다."
          </blockquote>
          <cite>- Mikhail Tal</cite>
        </div>
        <div className="quote-card">
          <blockquote>
            "체스는 상상력의 게임입니다. 계산만으로는 충분하지 않습니다."
          </blockquote>
          <cite>- Mikhail Tal</cite>
        </div>
        <div className="quote-card">
          <blockquote>
            "나는 희생을 좋아합니다. 특히 사운드하지 않은 희생을요."
          </blockquote>
          <cite>- Mikhail Tal</cite>
        </div>
      </section>

      <section className="stats">
        <h2>주요 업적</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">23</div>
            <div className="stat-label">세계 챔피언이 된 나이</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8회</div>
            <div className="stat-label">소련 챔피언십 우승</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">65%</div>
            <div className="stat-label">평생 승률</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1960</div>
            <div className="stat-label">세계 챔피언 획득</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
