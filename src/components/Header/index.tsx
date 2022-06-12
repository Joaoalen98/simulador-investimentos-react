import './Header.scss';

function Header () {
    return (
        <header className="header">
            <h1 className="header__titulo">Simulador de investimentos</h1>
            <nav className="navegacao">
                <ul className="navegacao__lista">
                    <li className="navegacao__lista--item">
                        <a href="#" className="navegacao__lista--link">Histórico de simulações</a>
                    </li>
                </ul>
            </nav>
      </header>
    );
}

export default Header