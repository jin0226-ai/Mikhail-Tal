// Mikhail Tal의 유명한 게임들
export const talGames = [
  {
    id: 1,
    title: "불멸의 희생 게임 - Tal vs Smyslov 1959",
    white: "Mikhail Tal",
    black: "Vasily Smyslov",
    event: "World Championship Candidates",
    date: "1959",
    category: "sacrifice",
    pgn: `[Event "Candidates Tournament"]
[Site "Yugoslavia"]
[Date "1959.??.??"]
[White "Tal, Mikhail"]
[Black "Smyslov, Vasily"]
[Result "1-0"]

1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6
8. O-O-O Bd7 9. f4 Be7 10. Nf3 b5 11. Bxf6 gxf6 12. Kb1 Qb6 13. f5 O-O-O
14. fxe6 fxe6 15. Ng5 Rhf8 16. Nxe6 Bxe6 17. Qe3 Kb8 18. Qxb6+ 1-0`,
    description: "Tal의 전형적인 공격 스타일을 보여주는 게임. 대담한 폰 희생으로 킹을 공격합니다.",
  },
  {
    id: 2,
    title: "마법사의 조합 - Tal vs Hecht 1962",
    white: "Mikhail Tal",
    black: "Hans-Joachim Hecht",
    event: "Varna Olympiad",
    date: "1962",
    category: "tactics",
    pgn: `[Event "Varna Olympiad"]
[Site "Varna"]
[Date "1962.??.??"]
[White "Tal, Mikhail"]
[Black "Hecht, Hans-Joachim"]
[Result "1-0"]

1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bh5 5. exd5 cxd5 6. Bb5+ Nc6 7. g4 Bg6
8. Ne5 Rc8 9. d4 e6 10. h4 Bb4 11. h5 Bxc3+ 12. bxc3 Be4 13. f3 Bg2
14. Rh4 Nf6 15. Bg5 Qa5 16. Nxc6 bxc6 17. Bxf6 gxf6 18. Qd2 Bxf3 19. Kf2 Bg2
20. Rg1 f5 21. Rxg2 fxg4 22. Rxg4 Qxb5 23. Qh6 Qe2+ 24. Kg3 Qe1+ 25. Kh2 1-0`,
    description: "복잡한 전술적 조합으로 상대를 압도하는 Tal의 능력을 보여줍니다.",
  },
  {
    id: 3,
    title: "세계 챔피언십 걸작 - Tal vs Botvinnik 1960",
    white: "Mikhail Tal",
    black: "Mikhail Botvinnik",
    event: "World Championship",
    date: "1960",
    category: "championship",
    pgn: `[Event "World Championship"]
[Site "Moscow"]
[Date "1960.??.??"]
[White "Tal, Mikhail"]
[Black "Botvinnik, Mikhail"]
[Result "1-0"]

1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 O-O
8. Bd3 Nbc6 9. Qh5 Ng6 10. Nf3 Qc7 11. Be3 c4 12. Bxg6 hxg6 13. Qg4 Qxe5
14. h4 f5 15. Qg3 Qxg3 16. fxg3 Bd7 17. h5 gxh5 18. Rxh5 Be8 19. Rh1 Bf7
20. Kf2 Rae8 21. Rah1 e5 22. dxe5 Nxe5 23. Nxe5 Rxe5 24. Bd4 Re2+ 25. Kf1 1-0`,
    description: "Tal이 Botvinnik을 꺾고 세계 챔피언이 된 중요한 게임 중 하나입니다.",
  },
  {
    id: 4,
    title: "공격의 교과서 - Tal vs Portisch 1965",
    white: "Mikhail Tal",
    black: "Lajos Portisch",
    event: "Bled",
    date: "1965",
    category: "attack",
    pgn: `[Event "Bled"]
[Site "Bled"]
[Date "1965.??.??"]
[White "Tal, Mikhail"]
[Black "Portisch, Lajos"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6
8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Bd7
14. Nf1 Rfe8 15. Ne3 g6 16. dxe5 dxe5 17. Nh2 Rad8 18. Qf3 Be6 19. Nhg4 Nxg4
20. hxg4 Nc4 21. Nxc4 bxc4 22. g5 Qc5 23. Be3 Qa5 24. Bb6 Qb5 25. Bxd8 1-0`,
    description: "킹사이드 공격의 정석을 보여주는 명품 게임입니다.",
  },
  {
    id: 5,
    title: "전설적인 퀸 희생 - Tal vs Najdorf 1961",
    white: "Mikhail Tal",
    black: "Miguel Najdorf",
    event: "Bled",
    date: "1961",
    category: "sacrifice",
    pgn: `[Event "Bled"]
[Site "Bled"]
[Date "1961.??.??"]
[White "Tal, Mikhail"]
[Black "Najdorf, Miguel"]
[Result "1-0"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7
8. Qf3 Qc7 9. O-O-O Nbd7 10. Bd3 b5 11. Rhe1 Bb7 12. Nd5 exd5 13. exd5 Qb6
14. Rxe7+ Kxe7 15. Re1+ Kd8 16. Qg3 Rc8 17. f5 Qxd4 18. f6 g6 19. Bxf6+ Nxf6
20. Qxd6+ Ke8 21. Qe7# 1-0`,
    description: "Tal의 상상력 넘치는 희생 공격이 빛나는 게임입니다.",
  },
];

// 카테고리별 분류
export const categories = {
  all: "모든 게임",
  sacrifice: "희생 공격",
  tactics: "전술 조합",
  championship: "챔피언십",
  attack: "킹사이드 공격",
};
