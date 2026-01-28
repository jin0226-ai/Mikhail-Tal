import './PlayStyle.css';

function PlayStyle() {
  return (
    <div className="playstyle">
      <header className="page-header">
        <h1>Mikhail Tal의 플레이 스타일</h1>
        <p>체스의 마법사가 보드를 지배하는 방법</p>
      </header>

      <section className="overview">
        <h2>개요</h2>
        <p>
          Mikhail Tal은 체스 역사상 가장 창의적이고 공격적인 플레이어 중 한 명입니다.
          그의 스타일은 대담한 희생, 복잡한 조합, 그리고 상대에게 끊임없는 압박을 가하는
          것으로 유명합니다.
        </p>
      </section>

      <section className="style-aspects">
        <h2>핵심 특징</h2>

        <div className="aspect-grid">
          <div className="aspect-card">
            <div className="aspect-icon">⚔️</div>
            <h3>공격적 희생</h3>
            <p>
              Tal은 물질적 우위를 포기하고 공격의 이니셔티브를 잡는 것을 두려워하지 않았습니다.
              그의 희생은 종종 컴퓨터로도 완전히 검증하기 어려울 정도로 복잡했지만,
              실전에서는 상대에게 엄청난 압박을 주었습니다.
            </p>
            <div className="key-points">
              <h4>주요 포인트:</h4>
              <ul>
                <li>비숍과 나이트의 대담한 희생</li>
                <li>불확실성 속에서도 공격 지속</li>
                <li>심리적 압박을 통한 승리</li>
              </ul>
            </div>
          </div>

          <div className="aspect-card">
            <div className="aspect-icon">👁️</div>
            <h3>전술적 시야</h3>
            <p>
              Tal의 전술적 시야는 경이로웠습니다. 그는 여러 수 앞을 내다보며
              복잡한 조합을 계산할 수 있었고, 보드 전체의 가능성을 한눈에 파악했습니다.
            </p>
            <div className="key-points">
              <h4>강점:</h4>
              <ul>
                <li>복잡한 포지션에서의 계산력</li>
                <li>숨겨진 전술적 모티프 발견</li>
                <li>여러 조합의 동시 고려</li>
                <li>직관과 계산의 완벽한 조화</li>
              </ul>
            </div>
          </div>

          <div className="aspect-card">
            <div className="aspect-icon">🎯</div>
            <h3>킹 공격</h3>
            <p>
              Tal의 게임에서 가장 두드러진 특징은 상대 킹에 대한 집요한 공격입니다.
              그는 종종 자신의 킹 안전을 희생하면서까지 상대 킹을 공격했습니다.
            </p>
            <div className="key-points">
              <h4>전략:</h4>
              <ul>
                <li>캐슬링 전후의 즉각적인 공격</li>
                <li>폰 스톰을 통한 킹 노출</li>
                <li>메이팅 넷 구축</li>
                <li>오픈 파일과 대각선 활용</li>
              </ul>
            </div>
          </div>

          <div className="aspect-card">
            <div className="aspect-icon">🎨</div>
            <h3>창의성과 직관</h3>
            <p>
              Tal은 교과서적인 원칙을 뛰어넘어 창의적인 해결책을 찾아냈습니다.
              그의 직관은 종종 객관적 평가보다 앞서갔고, 이것이 그를 '마법사'로 만들었습니다.
            </p>
            <div className="key-points">
              <h4>특징:</h4>
              <ul>
                <li>비정통적인 오프닝 선택</li>
                <li>예상치 못한 수 선택</li>
                <li>복잡성을 통한 승리 추구</li>
                <li>상대의 심리 활용</li>
              </ul>
            </div>
          </div>

          <div className="aspect-card">
            <div className="aspect-icon">⚡</div>
            <h3>이니셔티브 유지</h3>
            <p>
              Tal은 항상 게임의 주도권을 잡으려 했습니다. 그는 수비보다는 공격을,
              반응보다는 행동을 선호했습니다.
            </p>
            <div className="key-points">
              <h4>방법론:</h4>
              <ul>
                <li>끊임없는 위협 생성</li>
                <li>상대의 계획 방해</li>
                <li>템포 우위 확보</li>
                <li>복잡성 증대</li>
              </ul>
            </div>
          </div>

          <div className="aspect-card">
            <div className="aspect-icon">🎭</div>
            <h3>심리전</h3>
            <p>
              Tal은 체스가 단순히 보드 위의 게임이 아니라 두 사람 간의 싸움이라고 믿었습니다.
              그는 상대의 심리를 공략하여 실수를 유도했습니다.
            </p>
            <div className="key-points">
              <h4>기법:</h4>
              <ul>
                <li>복잡한 포지션 창출</li>
                <li>시간 압박 활용</li>
                <li>심리적 불안감 조성</li>
                <li>상대의 컴포트 존 탈출 유도</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="openings">
        <h2>선호하는 오프닝</h2>
        <div className="opening-list">
          <div className="opening-item">
            <h3>백으로서</h3>
            <ul>
              <li><strong>킹스 인디안 어택:</strong> 유연하고 공격적인 셋업</li>
              <li><strong>스페니쉬 오프닝 (루이 로페즈):</strong> 중앙 지배와 킹사이드 공격</li>
              <li><strong>시실리안에 대한 오픈 바리에이션:</strong> 날카로운 전술적 전투</li>
            </ul>
          </div>

          <div className="opening-item">
            <h3>흑으로서</h3>
            <ul>
              <li><strong>시실리안 디펜스:</strong> 카운터 플레이와 불균형 추구</li>
              <li><strong>킹스 인디안 디펜스:</strong> 킹사이드 공격 기회</li>
              <li><strong>프렌치 디펜스 윈저 바리에이션:</strong> 날카로운 전술적 복잡성</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="middlegame">
        <h2>중반전 원칙</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <h3>1. 활동성 &gt; 물질</h3>
            <p>
              Tal은 물질적 손실을 감수하더라도 말들의 활동성과 공격 기회를 우선시했습니다.
              "죽은 폰은 살아있는 나이트만 못하다"는 그의 철학이었습니다.
            </p>
          </div>

          <div className="principle-card">
            <h3>2. 이니셔티브 추구</h3>
            <p>
              항상 주도권을 잡으려 노력했으며, 상대방이 자신의 계획을 실행하기 전에
              위협을 만들어냈습니다.
            </p>
          </div>

          <div className="principle-card">
            <h3>3. 복잡성 선호</h3>
            <p>
              Tal은 단순한 포지션보다 복잡한 포지션을 선호했습니다. 복잡성 속에서
              그의 계산력과 직관이 빛을 발했습니다.
            </p>
          </div>

          <div className="principle-card">
            <h3>4. 공격 지속</h3>
            <p>
              한 번 공격을 시작하면 끝까지 밀고 나갔습니다. 방어로 전환하기보다는
              더 많은 말을 공격에 투입했습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="endgame">
        <h2>엔드게임</h2>
        <p>
          Tal의 엔드게임은 그의 오프닝이나 중반전만큼 화려하지는 않았지만,
          충분히 능숙했습니다. 그는 종종 중반전에서 결정적인 우위를 확보했기 때문에
          엔드게임까지 가는 경우가 적었습니다.
        </p>
        <div className="endgame-note">
          <h3>엔드게임 특징</h3>
          <ul>
            <li>기술적 정확성보다는 실용적 접근</li>
            <li>액티브한 킹 플레이</li>
            <li>엔드게임에서도 전술적 기회 포착</li>
            <li>시간 압박 상황에서의 강점</li>
          </ul>
        </div>
      </section>

      <section className="lessons">
        <h2>Tal에게 배우는 교훈</h2>
        <div className="lessons-grid">
          <div className="lesson-card">
            <h3>🔥 두려움 없이 플레이하라</h3>
            <p>
              Tal은 실패를 두려워하지 않았습니다. 대담한 희생과 공격을 시도하면서
              많은 것을 배웠고, 그의 창의성이 발전했습니다.
            </p>
          </div>

          <div className="lesson-card">
            <h3>🧠 계산과 직관의 균형</h3>
            <p>
              구체적인 계산도 중요하지만, 직관과 포지션 이해도 똑같이 중요합니다.
              Tal은 이 둘을 완벽하게 조화시켰습니다.
            </p>
          </div>

          <div className="lesson-card">
            <h3>🎯 공격적 사고방식</h3>
            <p>
              상대의 약점을 찾고 공격하는 것에 집중하세요. 수비적인 자세보다는
              적극적으로 기회를 만들어내는 것이 중요합니다.
            </p>
          </div>

          <div className="lesson-card">
            <h3>💡 창의성 발휘</h3>
            <p>
              항상 표준적인 수만 두지 말고, 포지션의 독특한 특성을 활용한
              창의적인 해결책을 찾아보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="famous-quote">
        <blockquote>
          "당신은 상대방이 당신의 희생을 받아들일 의무가 있다고 믿어야 합니다.
          그것이 그의 가장 나쁜 선택이라 하더라도요."
        </blockquote>
        <cite>- Mikhail Tal</cite>
      </section>
    </div>
  );
}

export default PlayStyle;
