import { useState, useContext } from "react";
import "./style.css";
import BtnSubmit from "../Btn/BtnSubmit";
import { AuthContext } from "../../Contexts/Login";

export default function CompoLogin() {
  const { autenticado: authenticate, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container-login">
      <h1>Login</h1>
      <form className="form-login" onSubmit={handleSubmitLogin}>
        <div className="field">
          <label>Email</label>
          <input
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div className="field">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha"
          />
        </div>
        <BtnSubmit submit="Entrar" />
        <div className="card-esq-cad">
          <div className="esqueci-senha">Esqueci a senha</div>
          <div className="new-account">Criar conta</div>
        </div>
      </form>
      <div className="become-advertiser">
        Não é anunciante ? <span>Torne-se um anunciante agora!</span>
      </div>
    </div>
  );
}
