import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  console.log(usuario.token);
  console.log(usuario.name);
  console.log(usuario.username);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do Perfil"
        />

        <img
          className="rounded-full w-36 mx-auto -mt-32 border-8 border-white relative z-10"
          src={
            usuario.picture || "https://ik.imagekit.io/2zvbvzaqt/usuario.png"
          }
          onError={(e) =>
            (e.currentTarget.src =
              "https://ik.imagekit.io/2zvbvzaqt/usuario.png")
          }
          alt={`Foto de perfil`}
        />

        <div
          className="relative -mt-24 h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
        >
          <p>Nome: {usuario.name} </p>
          <p>Email: {usuario.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
