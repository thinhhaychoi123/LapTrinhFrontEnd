import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from "../component/Header";
import "../css/style.css";

const ResetPassword = () => {
  const [Email, setEmail] = useState('');
  const { token } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3031/users');
      toast.success('Password has been reset successfully.');
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
            value={Email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Email</button>
      </form>
    </div>
  );
};

export default ResetPassword;
