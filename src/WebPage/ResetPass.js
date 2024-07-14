import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(u => u.email === email && u.username === username);

      if (user) {
        // Update the user's password
        const updatedUser = { ...user, password: newPassword };
        await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser);
        toast.success('Password has been reset successfully.');
      } else {
        toast.error('Email or Username is incorrect.');
      }
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="form-group">
          <label>Your Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
