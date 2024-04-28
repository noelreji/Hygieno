import React,{useState}from 'react'
import '../styles/signup.css'
import { Link ,useNavigate} from 'react-router-dom';


function SignUp() {
  let navigate = useNavigate();
      const [formData, setFormData] = useState({
        email:'' ,
        password:'',
        firstName:'',
        middleName:'',
        lastName:'',
        phoneNo:'3109857193'
    });

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
  };
    const checkPasswordStrength = (password) => {
        // Check for minimum length
        if (password.length < 8){
            alert("Password should have atleast 8 characters");
            return false;
        }
            
        
        // Check for presence of uppercase letter
        if (!/[A-Z]/.test(password)){
            alert("Password should have atleast one capital letter");
            return false;
        }
            
        
        // Check for presence of lowercase letter
        if (!/[a-z]/.test(password)){
            alert("Password should have atleast one small letter");
            return false;
        }
            
        
        // Check for presence of number
        if (!/\d/.test(password)){
            return false;
        }
            
        // Check for presence of special character
        if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)){
            alert("Password should have atleast one special character")
            return false;
        }
        return true;
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(!validatePassword())
        return false;

      const response = await fetch('http://localhost:5656/signup', {
          method: 'POST',
          body: JSON.stringify(formData), 
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data.status);
        if( data.status === 200 )
        {
          navigate("/login")
        }
        else
          alert("Error registering User");
    } 
    else {
        console.error('Error:', response.status, response.statusText);
    }    
};
    const validatePassword = () => {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        if (!checkPasswordStrength(password)){
            return false;
        }
            
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }
        return true;
    }

    
  
      

  return (
    <>
     <header className='headerHome'>
            <nav>
                <div class="containerHomeNav">
                    <h1>HYGIENO</h1>
                    <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    <div className="grid-container">
      <div className="container-signup">
        <h1>Sign Up</h1>
        <div>
        <form  method="post" className="input-container" onSubmit={handleSubmit}>
          
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />

    
          <input type="text" name="middleName" placeholder="Middle Name (optional)" onChange={handleChange}/>
        
        
          <input type="text" name="lastName" placeholder="Last Name (optional)" onChange={handleChange}/>

        
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}/>
        
        
          <input type="password" name="password" id="password" placeholder="Password" required onChange={handleChange}/>

     
          <input type="password" name="confirmpassword" id="confirm-password" placeholder="Confirm Password" required onChange={handleChange}/>
        
        <div classNameName="usertype">
          What do you like to be:<br />
          <input type="radio" name="userType" id="option1" value="Disposer" required onChange={handleChange}/><label htmlFor="option1">Disposer</label>
          <input type="radio" name="userType" id="option2" value="Collector" required onChange={handleChange}/><label htmlFor="option2">Collector</label>
        </div>
        <br />
        <div style={{ fontSize: '12px', fontStyle: 'italic' }}>
          By clicking Sign Up below, you agree to the Hygieno <a href="termsandconditions.html">terms and conditions</a> and <a href="../HTML/privacypolicy.html">privacy policy</a>.
        </div>
        <input type="submit" value="Sign Up" />
        <div style={{ fontSize: '15px', fontStyle: 'italic' }}>Already have an account? <a href="/login" classNameName="url">Log In</a></div>
      </form>
        </div>
        
      </div>
      
    </div>
  </>
  )
}

export default SignUp