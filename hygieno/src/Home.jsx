import React from 'react'
import { Link } from 'react-router-dom';
import '../src/styles/home.css'
function Home() {
    
return (
    <div>
<header>
        <nav>
            <div class="container">
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
    <section class="hero">
        <div class="container-home">
            <h2>𝓨𝓸𝓾𝓻 𝓣𝓻𝓾𝓼𝓽𝓮𝓭 𝓦𝓪𝓼𝓽𝓮 𝓜𝓪𝓷𝓪𝓰𝓮𝓶𝓮𝓷𝓽 𝓟𝓪𝓻𝓽𝓷𝓮𝓻</h2>
            <p>ᴘʀᴏᴠɪᴅɪɴɢ ꜱᴜꜱᴛᴀɪɴᴀʙʟᴇ ᴡᴀꜱᴛᴇ ꜱᴏʟᴜᴛɪᴏɴꜱ ꜰᴏʀ ᴀ ᴄʟᴇᴀɴᴇʀ ᴇɴᴠɪʀᴏɴᴍᴇɴᴛ.</p>
            <a href="/login" class="btn">Get Started</a>
        </div>
    </section>

    <section class="features">
        <div class="container-home">
            <h2>𝓞𝓾𝓻 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h2>
            <div class="feature-box">
                <h3>Reduce</h3>
                <p>ᴡɪᴛʜ ᴇᴠᴇʀʏ ᴀᴄᴛ ᴏꜰ ᴡᴀꜱᴛᴇ ʀᴇᴅᴜᴄᴛɪᴏɴ, ᴡᴇ ᴘᴀᴠᴇ ᴛʜᴇ ᴡᴀʏ ꜰᴏʀ ᴀ ᴡᴏʀʟᴅ ᴡʜᴇʀᴇ ᴄᴏɴꜱᴇʀᴠᴀᴛɪᴏɴ ᴀɴᴅ ʜᴀʀᴍᴏɴʏ ʀᴇɪɢɴ ꜱᴜᴘʀᴇᴍᴇ.</p>
            </div>
            <div class="feature-box">
                <h3>Waste Collection</h3>
                <p>ʀᴇʟɪᴀʙʟᴇ ᴡᴀꜱᴛᴇ ᴄᴏʟʟᴇᴄᴛɪᴏɴ ꜱᴇʀᴠɪᴄᴇꜱ ꜰᴏʀ ʀᴇꜱɪᴅᴇɴᴛɪᴀʟ ᴀɴᴅ ᴄᴏᴍᴍᴇʀᴄɪᴀʟ ᴄʟɪᴇɴᴛꜱ.</p>
            </div>
            <div class="feature-box">
                <h3>Hazardous Waste Disposal</h3>
                <p>ꜱᴀꜰᴇ ᴀɴᴅ ᴄᴏᴍᴘʟɪᴀɴᴛ ᴅɪꜱᴘᴏꜱᴀʟ ᴏꜰ ʜᴀᴢᴀʀᴅᴏᴜꜱ ᴡᴀꜱᴛᴇ ᴍᴀᴛᴇʀɪᴀʟꜱ.</p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container-home">
            <p>&copy; 2024 Waste Management. All rights reserved.</p>
            <p><a href="termsandconditions.html">Terms and Conditions</a></p>
        </div>
    </footer>      
    </div>
  )
}

export default Home