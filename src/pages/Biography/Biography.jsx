import './Biography.css';

function Biography() {
  return (
    <div className="biography">
      <header className="page-header">
        <h1>Mikhail Tal의 생애</h1>
        <p>체스의 마법사, 그의 삶과 유산</p>
      </header>

      <section className="timeline">
        <h2>연대기</h2>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-marker">1936</div>
            <div className="timeline-content">
              <h3>출생</h3>
              <p>
                11월 9일, 라트비아 리가에서 유대인 가정에 태어남.
                어린 시절부터 건강이 좋지 않았지만, 뛰어난 지적 능력을 보임.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1949</div>
            <div className="timeline-content">
              <h3>체스와의 만남</h3>
              <p>
                13세에 체스를 배우기 시작. 대부분의 그랜드마스터들보다 늦은 시작이었지만,
                급속도로 발전하여 곧 라트비아 최고의 주니어 플레이어가 됨.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1953</div>
            <div className="timeline-content">
              <h3>라트비아 챔피언</h3>
              <p>
                17세에 라트비아 체스 챔피언십에서 우승. 이후 3년 연속 우승을 거둠.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1957</div>
            <div className="timeline-content">
              <h3>소련 챔피언</h3>
              <p>
                21세의 나이에 소련 체스 챔피언십에서 우승. 이는 그의 재능이
                전 세계적으로 알려지는 계기가 됨. 같은 해 그랜드마스터 타이틀 획득.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1959</div>
            <div className="timeline-content">
              <h3>세계 챔피언십 도전자</h3>
              <p>
                Candidates Tournament에서 1위를 차지하며 세계 챔피언십 도전자 자격을 획득.
                Paul Keres, Tigran Petrosian 등 당대 최고의 선수들을 제치고 우승.
              </p>
            </div>
          </div>

          <div className="timeline-item highlight">
            <div className="timeline-marker">1960</div>
            <div className="timeline-content">
              <h3>세계 챔피언</h3>
              <p>
                23세의 나이에 Mikhail Botvinnik을 꺾고 제8대 세계 체스 챔피언이 됨.
                최종 스코어 12.5-8.5. 역대 최연소 세계 챔피언 중 한 명이 되었으며,
                그의 공격적인 스타일은 체스계에 혁명을 일으킴.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1961</div>
            <div className="timeline-content">
              <h3>챔피언 타이틀 상실</h3>
              <p>
                건강 악화로 인해 Botvinnik과의 리매치에서 패배하여 타이틀을 잃음.
                그러나 이후에도 세계 최정상급 선수로 활약.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1960-1970년대</div>
            <div className="timeline-content">
              <h3>황금기</h3>
              <p>
                소련 챔피언십을 총 8회 우승 (1957, 1958, 1967, 1972, 1974, 1978, 1982).
                수많은 국제 토너먼트에서 우승하며 '마법사'라는 별명을 확고히 함.
                체스 올림피아드에서 소련 대표팀의 핵심 멤버로 활약.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1980년대</div>
            <div className="timeline-content">
              <h3>건강 문제</h3>
              <p>
                만성 신장 질환으로 인해 고통받음. 1988년 신장 이식 수술을 받았으나
                건강은 계속 악화됨. 그럼에도 불구하고 체스에 대한 열정은 식지 않음.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">1992</div>
            <div className="timeline-content">
              <h3>영면</h3>
              <p>
                6월 28일, 모스크바에서 55세의 나이로 사망. 체스계는 가장 창의적이고
                흥미진진한 플레이어 중 한 명을 잃었지만, 그의 게임들은 영원히 기억될 것임.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="personality">
        <h2>인물됨과 성격</h2>
        <div className="personality-grid">
          <div className="personality-card">
            <h3>🎭 카리스마</h3>
            <p>
              Tal은 보드 밖에서도 매력적인 성격으로 유명했습니다. 유머 감각이 뛰어났고,
              훌륭한 이야기꾼이었으며, 사람들과 쉽게 친해졌습니다.
            </p>
          </div>

          <div className="personality-card">
            <h3>📚 지성</h3>
            <p>
              체스뿐만 아니라 문학, 역사, 예술에도 깊은 관심이 있었습니다.
              리가 대학에서 러시아 문학을 전공했으며, 여러 체스 책을 저술했습니다.
            </p>
          </div>

          <div className="personality-card">
            <h3>💪 의지력</h3>
            <p>
              평생 신장 질환으로 고통받았지만, 이를 핑계로 삼지 않았습니다.
              병원에서 퇴원한 직후 토너먼트에 참가하는 일도 흔했습니다.
            </p>
          </div>

          <div className="personality-card">
            <h3>🤝 관대함</h3>
            <p>
              승리에 집착하기보다는 아름다운 게임을 만드는 것을 더 중요하게 여겼습니다.
              젊은 선수들에게 조언을 아끼지 않았으며, 체스의 대중화에 기여했습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="achievements">
        <h2>주요 업적</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">👑</div>
            <h3>세계 챔피언</h3>
            <p>1960년 (23세)</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>소련 챔피언</h3>
            <p>8회 우승</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🥇</div>
            <h3>체스 올림피아드</h3>
            <p>소련 팀의 금메달 6회</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <h3>개인 금메달</h3>
            <p>올림피아드 개인전 7회</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📈</div>
            <h3>최고 레이팅</h3>
            <p>2705 (1980년)</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🎖️</div>
            <h3>명예</h3>
            <p>체스 명예의 전당 헌액</p>
          </div>
        </div>
      </section>

      <section className="legacy">
        <h2>유산</h2>
        <div className="legacy-content">
          <p>
            Mikhail Tal은 체스 역사상 가장 영향력 있는 선수 중 한 명입니다.
            그의 대담하고 창의적인 플레이 스타일은 수많은 선수들에게 영감을 주었으며,
            체스가 단순한 계산 게임이 아니라 예술이 될 수 있음을 보여주었습니다.
          </p>

          <div className="legacy-quotes">
            <div className="legacy-quote">
              <blockquote>
                "Tal은 체스의 진정한 마법사였습니다. 그는 우리에게 상상력의 중요성을 가르쳐주었습니다."
              </blockquote>
              <cite>- Garry Kasparov</cite>
            </div>

            <div className="legacy-quote">
              <blockquote>
                "Tal과 대국하는 것은 마치 숲 속에서 호랑이와 마주하는 것과 같았습니다."
              </blockquote>
              <cite>- David Bronstein</cite>
            </div>

            <div className="legacy-quote">
              <blockquote>
                "나는 Tal의 게임을 공부하면서 체스의 아름다움을 발견했습니다."
              </blockquote>
              <cite>- Magnus Carlsen</cite>
            </div>
          </div>

          <div className="legacy-impact">
            <h3>현대 체스에 미친 영향</h3>
            <ul>
              <li>공격적 체스 스타일의 부활과 대중화</li>
              <li>심리전과 실용적 플레이의 중요성 강조</li>
              <li>창의성과 계산의 균형에 대한 새로운 관점 제시</li>
              <li>체스를 예술로서 감상하는 문화 확산</li>
              <li>수많은 현대 그랜드마스터들에게 영감 제공</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="books">
        <h2>저서</h2>
        <div className="books-grid">
          <div className="book-card">
            <h3>The Life and Games of Mikhail Tal</h3>
            <p className="book-year">1976</p>
            <p>
              Tal 자신의 최고 게임들을 분석한 자서전. 그의 사고 과정과 창의적인
              접근 방식을 엿볼 수 있는 고전적인 체스 문헌.
            </p>
          </div>

          <div className="book-card">
            <h3>Tal-Botvinnik 1960</h3>
            <p className="book-year">1960</p>
            <p>
              세계 챔피언십 매치에 대한 상세한 분석. 각 게임마다 자신의 생각과
              계획을 솔직하게 설명.
            </p>
          </div>

          <div className="book-card">
            <h3>Attack with Mikhail Tal</h3>
            <p className="book-year">1994 (사후 출판)</p>
            <p>
              공격적 체스의 원리와 Tal의 전술적 아이디어를 담은 교육적인 책.
            </p>
          </div>
        </div>
      </section>

      <section className="memorial">
        <blockquote className="memorial-quote">
          "체스는 내 인생이었다. 체스판 위에서 나는 진정으로 살아있었다."
        </blockquote>
        <cite>- Mikhail Tal</cite>
        <div className="memorial-text">
          <p>
            Mikhail Tal (1936-1992)<br />
            영원한 체스의 마법사<br />
            그의 게임들은 영원히 우리와 함께 할 것입니다.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Biography;
