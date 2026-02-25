import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const { handleLogout, usuario } = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    ToastAlerta("Você saiu do sistema!", "info");
    handleLogout();
    navigate("/");
  }

  let componente: ReactNode;

  if (usuario.token !== "") {
    componente = (
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/login" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens">Postagens</Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastrarTema" className="hover:underline">
              Cadastrar Tema
            </Link>
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{componente}</>;
}

export default Navbar;
