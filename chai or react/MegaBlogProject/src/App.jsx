import './App.css'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import authService from './appwrite/auth';
import { login, logout } from "./store/authslice"
import Header from "./components/Header/Header"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userdata = await authService.getCurrentUser();
        if (userdata) {
          dispatch(login(userdata));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
