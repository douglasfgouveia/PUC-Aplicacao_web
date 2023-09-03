// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   const users = {
//     'douglas@testpuc.com.br': 'password1',
//     'user2': 'password2',
//   };

//   const handleLogin = () => {
//     if (users.hasOwnProperty(username) && users[username] === password) {
//       setLoggedIn(true);
//     } else if (username === '' || password === '') {
//       alert('Preencha ambos os campos.');
//     } else {
//       alert('Credenciais inválidas. Tente novamente.');
//     }
//   };
  

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setUsername('');
//     setPassword('');
//   };

//   if (loggedIn) {
//     return (
//       <div className="App">
//         <h1>Bem-vindo, {username}!</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <h1>Login</h1>
//         <div>
//         <input
//             type="text"
//             placeholder="Usuário"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//         <input
//           type="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
               
//         <button onClick={handleLogin}>Acessar</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const users = {
    'douglas@testpuc.com.br': 'password1',
    'user2': 'password2',
  };

  const handleLogin = () => {
    if (users.hasOwnProperty(username) && users[username] === password) {
      setLoggedIn(true);
    } else if (username === '' || password === '') {
      alert('Preencha ambos os campos.');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Bem-vindo, {username}!</h1>
          <p>Acesso com sucesso</p> {/* Label de acesso com sucesso */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Acessar</button>
        </div>
      )}
    </div>
  );
}

export default App;
