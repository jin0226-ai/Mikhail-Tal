import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/games', label: '명경기 모음' },
    { path: '/puzzles', label: '전술 훈련' },
    { path: '/playstyle', label: '플레이 스타일' },
    { path: '/biography', label: '전기' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>Mikhail Tal</h1>
        <p className="subtitle">마법사의 체스</p>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
