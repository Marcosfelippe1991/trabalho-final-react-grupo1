import { Rodape } from "./style";
import './style.css';


function Footer() {
  return (
    <Rodape>
      <span className="direitos-de-uso">
        <span>@2022 Todos os direitos reservados |</span> <span>Desenvolvido por Grupo1</span>
      </span>
      <div className="logo-footer">
        <img 
          src="./img/LogoUNO.jpg" 
          id="logo-footer"
          alt="Logo uNo camisetas"
        />
      </div>
    </Rodape>
  );
}

export default Footer;

// import { Rodape } from "./style";


// function Footer() {
//   return (
//     <Rodape>
//       <span className="direitos-de-uso">
//         <span>@2022 Todos os direitos reservados |</span> <span>Desenvolvido por Grupo1</span>
//       </span>
//       <div className="logo-footer">
//       <a href="/">
//           <img
//             src="./img/LogoUNO.jpg"
//             id="logo-imagem"
//           />
//         </a>
//       </div>
//     </Rodape>
//   );
// }

// export default Footer;