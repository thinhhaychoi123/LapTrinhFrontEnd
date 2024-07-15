import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../component/Header";
import "../css/style.css";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const { token } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/resetpassword`, { email });
      toast.success('Password reset email sent successfully.');
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <div>
      <Header />
    <div className="bklogin">
      <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">Send Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
