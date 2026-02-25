import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  let componente: ReactNode;

  if (usuario.token !== "") {
    componente = (
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="font-bold text-xl">
            Blog Pessoal João Henrique | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/joao-hrnk" target="_blank">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/hnrk_cav/" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100001909494915"
              target="_blank"
            >
              <FacebookLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <>{componente}</>;
}

export default Footer;
