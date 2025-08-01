import React, { useContext, useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Storecontext } from '../../Context/StoreContext';

const Loginpopup = ({ setShowLogin }) => {
  const { login } = useContext(Storecontext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });

      if (res.data.token) {
        login(res.data.token); // ✅ update context + localStorage
        toast.success("Login successful");
        setShowLogin(false);
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="login-popup">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Loginpopup;
