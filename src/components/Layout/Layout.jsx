import Navigation from '../Navigation/Navigation';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>Mikhail Tal (1936-1992) - 제8대 세계 체스 챔피언</p>
        <p>이 웹사이트는 Tal의 천재성을 기리기 위해 만들어졌습니다.</p>
      </footer>
    </div>
  );
}

export default Layout;
