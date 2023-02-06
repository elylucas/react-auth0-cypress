import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {user ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            data-cy="avatar"
            style={{ borderRadius: '100%' }}
            src={user.picture}
            alt="Profile"
          />
          <span>
            <h2 data-cy="name">{user.name}</h2>
            <p data-cy="email">{user.email}</p>
          </span>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </div>
  );
}

export default App;
