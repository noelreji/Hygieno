import React from 'react';
import '../styles/about.css'
import ram from '../assets/ram.jpeg'
import aju from '../assets/aju.jpeg'
import noyal from '../assets/noyal.jpeg'
import philips from '../assets/philips.jpeg'

function About() {
  return (
    <div className="about-page">
      <header>
        <nav>
          <div className="container">
            <h1><a href="index.html">ʜʏɢɪᴇɴᴏ</a></h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Sign up</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="about-section">
        <h1 id="abbt">𝓐𝓑𝓞𝓤𝓣 𝓤𝓢</h1>
        <p><h3>𝙒𝙚 𝙖𝙧𝙚 𝙖 𝙩𝙚𝙖𝙢 𝙤𝙛 𝙛𝙤𝙪𝙧, 𝙥𝙧𝙤𝙪𝙙𝙡𝙮 𝙥𝙧𝙚𝙨𝙚𝙣𝙩𝙞𝙣𝙜 𝙮𝙤𝙪 𝙃𝙮𝙜𝙞𝙚𝙣𝙤. 𝙄𝙩 𝙬𝙖𝙨 𝙤𝙪𝙧 𝙤𝙣𝙚 𝙤𝙛 𝙩𝙝𝙚 𝙜𝙧𝙚𝙖𝙩𝙚𝙨𝙩 𝙥𝙧𝙤𝙟𝙚𝙘𝙩𝙨 𝙢𝙖𝙞𝙣𝙡𝙮 𝙖𝙞𝙢𝙞𝙣𝙜 𝙖𝙩 𝙀𝙢𝙥𝙤𝙬𝙚𝙧𝙞𝙣𝙜 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙞𝙚𝙨 𝙩𝙝𝙧𝙤𝙪𝙜𝙝 𝙚𝙛𝙛𝙚𝙘𝙩𝙞𝙫𝙚 𝙬𝙖𝙨𝙩𝙚 𝙢𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙥𝙧𝙖𝙘𝙩𝙞𝙘𝙚𝙨...
        </h3></p>
      </div>
      <h2 style={{ textAlign: 'center' }}>𝓛𝓮𝓽'𝓼 𝓶𝓮𝓮𝓽 𝓽𝓱𝓮 𝓹𝓮𝓽𝓪𝓵𝓼 𝓸𝓯 𝑜𝓊𝓇 𝓉𝑒𝒶𝓂</h2>
      <div className="container">
        <div className="column">
          <div className="card">
            <img src={ram} alt="Jane" style={{ width: '100%' }} />
            <div className="container1">
              <h2> ꜱᴀɴᴊᴀʏʀᴀᴍᴘʀᴀꜱᴀᴅ ᴠ ꜱ</h2>
              <p className="title"> Front-end dev</p>
              <p> <h8> CSE</h8></p>
              <h8> sanjayramprasad1234@gmail.com</h8>
              <p><h8> 89436 93607</h8></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src={noyal} alt="Jane" style={{ width: '100%' }} />
            <div className="container1">
              <h2> ɴᴏʏᴀʟ ʀᴇᴊɪ</h2>
              <p className="title"> Back-end dev</p>
              <p> <h8> CSE</h8></p>
              <h8> noyalreji10@gmail.com</h8>
              <p><h8> 81299 70103</h8></p>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img src={aju} alt="Jane" style={{ width: '100%' }} />
            <div className="container1">
              <h2> ᴀᴊᴜ ᴊᴏꜱᴇᴘʜ</h2>
              <p className="title"> Back-end dev</p>
              <p> <h8> CSE</h8></p>
              <h8> ajujoseph52@gmail.com</h8>
              <p><h8> 85906 63549</h8></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={philips} alt="Jane" style={{ width: '100%' }} />
            <div className="container1">
              <h2> ᴘʜɪʟɪᴘꜱ ᴊᴏꜱᴇ</h2>
              <p className="title"> Front-end dev</p>
              <p> <h8> CSE</h8></p>
              <h8> philips20@gmail.com</h8>
              <p><h8> 97784 41290</h8></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
