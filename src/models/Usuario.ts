import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  name: string;
  username: string;
  password: string;
  picture: string;
  postagem?: Postagem[] | null;
}
