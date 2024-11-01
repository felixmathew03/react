import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <div className="left">
          <h3>NVIDIA.com</h3>
        </div>
        
        
        <div className="right">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Docs</div>
        </div>
      </div>
      <h1 id='top' align="center">NVIDIA</h1>
      <div className="container">
        <div className="cleft">
          <h3>Contents</h3>
          <ul>
            <li><a href="#top">Main</a></li>
            <li><a href="#history">History</a></li>
            <li>Fabless manufacturing</li>
            <li>Corporate affairs</li>
            <li>GPU Technology Conference</li>
            <li>Product families</li>
            <li>Open-source software support</li>
            <li>Deep learning</li>
          </ul>
        </div>
        <div className="cright">
        
          <div className="content">
          Nvidia Corporation[a][b] (/ɛnˈvɪdiə/, en-VID-ee-ə) is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware.[5] It is a software and fabless company which designs and supplies graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing, as well as system on a chip units (SoCs) for the mobile computing and automotive market.
           Nvidia is also a dominant supplier of artificial intelligence (AI) hardware and software.
          </div>
          <div className="content">
          Nvidia's professional line of GPUs are used for edge-to-cloud computing and in supercomputers and workstations for applications in fields such as architecture, engineering and construction, media and entertainment, automotive, scientific research, and manufacturing design.[9] Its GeForce line of GPUs are aimed at the consumer market and are used in applications such as video editing, 3D rendering, and PC gaming. With a market share of 80.2% in the second quarter of 2023,[10] Nvidia leads the market for discrete desktop GPUs by a wide margin. The company expanded its presence in the gaming industry with the introduction of the Shield Portable (a handheld game console),
           Shield Tablet (a gaming tablet), and Shield TV (a digital media player), as well as its cloud gaming service GeForce Now.
          </div>
          <h1 id='history'>History</h1>
          <div className="content">
          Nvidia Corporation[a][b] (/ɛnˈvɪdiə/, en-VID-ee-ə) is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware.[5] It is a software and fabless company which designs and supplies graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing, as well as system on a chip units (SoCs) for the mobile computing and automotive market.
           Nvidia is also a dominant supplier of artificial intelligence (AI) hardware and software.
          </div>
          <div className="content">
          Nvidia's professional line of GPUs are used for edge-to-cloud computing and in supercomputers and workstations for applications in fields such as architecture, engineering and construction, media and entertainment, automotive, scientific research, and manufacturing design.[9] Its GeForce line of GPUs are aimed at the consumer market and are used in applications such as video editing, 3D rendering, and PC gaming. With a market share of 80.2% in the second quarter of 2023,[10] Nvidia leads the market for discrete desktop GPUs by a wide margin. The company expanded its presence in the gaming industry with the introduction of the Shield Portable (a handheld game console),
           Shield Tablet (a gaming tablet), and Shield TV (a digital media player), as well as its cloud gaming service GeForce Now.
          </div>
        </div>
        
         
      </div>
    </>
  )
}

export default App
