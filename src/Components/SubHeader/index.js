import './style.css';

const SubHeader = () => {

    return (
      <nav className="barra-nav">
        <ul className="menu-lista">
            <li><a href="/">Todas as Categorias</a></li>
             <li><a href="/categoriabasico">Básicas</a></li>
            <li><a href="#/categoriatematico">Temáticas</a></li>
            <li><a href="/categoriafitness">Fitness</a></li>
        </ul>
            
        </nav>
  );
}

export default SubHeader;