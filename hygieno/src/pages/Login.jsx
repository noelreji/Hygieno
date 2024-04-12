import React,{useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import '../styles/login.css'

export var isLogin = false;

function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    usertype:''
});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5656/login', {
        method: 'POST',
        body: JSON.stringify(formData), 
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Success:', data.status);
        if( data[0].status === 200 )
        {
          isLogin = true;
          if (data[0].usertype === 'Disposer') {
            navigate('/pages/disposerHome' , {state : data[1]});
          } 
          else {
            navigate('/pages/collectorHome', {state : data[1]});
          }
        }
        else{
          alert(data[0].message);
        }
    } 
    else {
        console.error('Error:', response.status, response.statusText);
    }    
};

const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};

  return (
    <div>
      <header>
        <nav>
          <div className="container-login">
            <h1>ʜʏɢɪᴇɴᴏ</h1>
            <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="tray">
        <div className="container-login">
          <h1>Log In</h1>
          <form onSubmit={handleSubmit} method="post" className="input-container">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Password"  required />
            <div className="usertype">
              <div>What are you?</div>
              <input type="radio" name="usertype" id="option1" value="Disposer" onChange={handleChange} required /><label htmlFor="option1">Disposer</label>
              <input type="radio" name="usertype" id="option2" value="Collector" onChange={handleChange} required /><label htmlFor="option2">Collector</label>
            </div>
            <br />
            <input type="submit" value="Log In" />
            <div style={{ fontSize: '15px', fontStyle: 'italic' }}>Don't have an account? <a href="/signup" className="url">Create one</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
