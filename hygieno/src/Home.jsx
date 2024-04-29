import React from 'react'
import { Link } from 'react-router-dom';
import '../src/styles/home.css'
import image from "./assets/1000_F_101682732_OejrMC8RzUdpxMVmSQLhgsnTW2HQloO0.jpg"
function Home() {
    
return (
    <div>
        <header className='headerHome'>
            <nav>
                <div className="containerHomeNav">
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
        <section className="hero">
            <div className="container-home">
                <h2>Your Trusted Waste Management Partner</h2>
                <p>Providing Sustainable Waste Solutions For A Cleaner Environment</p>
                <Link className='btn' to="/signup">Get Started</Link>
            </div>
        </section>

        <section className='ourAim'>
            <div className="ourAimContainer">
                <img src={image} alt="" />
                <section className='aimText'>
                    <h3>Our Aim</h3>
                    <p>
                        We provide a platform that enables people to dispose their wastes which then will be collected responsibly
                    </p>
                </section>
            </div>
        </section>

        <section className="features">
            <div className="container-home">
                <h2>Our Services</h2>
                <div className="feature-box">
                    <h3>Reduce</h3>
                    <p>ᴡɪᴛʜ ᴇᴠᴇʀʏ ᴀᴄᴛ ᴏꜰ ᴡᴀꜱᴛᴇ ʀᴇᴅᴜᴄᴛɪᴏɴ, ᴡᴇ ᴘᴀᴠᴇ ᴛʜᴇ ᴡᴀʏ ꜰᴏʀ ᴀ ᴡᴏʀʟᴅ ᴡʜᴇʀᴇ ᴄᴏɴꜱᴇʀᴠᴀᴛɪᴏɴ ᴀɴᴅ ʜᴀʀᴍᴏɴʏ ʀᴇɪɢɴ ꜱᴜᴘʀᴇᴍᴇ.</p>
                </div>
                <div className="feature-box">
                    <h3>Waste Collection</h3>
                    <p>ʀᴇʟɪᴀʙʟᴇ ᴡᴀꜱᴛᴇ ᴄᴏʟʟᴇᴄᴛɪᴏɴ ꜱᴇʀᴠɪᴄᴇꜱ ꜰᴏʀ ʀᴇꜱɪᴅᴇɴᴛɪᴀʟ ᴀɴᴅ ᴄᴏᴍᴍᴇʀᴄɪᴀʟ ᴄʟɪᴇɴᴛꜱ.</p>
                </div>
                <div className="feature-box">
                    <h3>Hazardous Waste Disposal</h3>
                    <p>ꜱᴀꜰᴇ ᴀɴᴅ ᴄᴏᴍᴘʟɪᴀɴᴛ ᴅɪꜱᴘᴏꜱᴀʟ ᴏꜰ ʜᴀᴢᴀʀᴅᴏᴜꜱ ᴡᴀꜱᴛᴇ ᴍᴀᴛᴇʀɪᴀʟꜱ.</p>
                </div>
            </div>
        </section>

        <footer>
            <div className="container-home">
                <p>&copy; 2024 Waste Management. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Home