import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
  <>
      {/* <div className="w-96 h-32 m-7 px-5 py-12 border border-2 border-purple-600 rounded-full font-sans text-xl">
        <div className='text-9xl italic'>01:</div>
        <div className='font-extralight'>20 </div>
        <div className='font-black'>03</div>
        <p className='stacked-fractions'>3/4 5/6 7/8</p>
        <p className='tracking-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate omnis ab doloribus, ut aspernatur, architecto aliquid placeat asperiores commodi natus temporibus vitae corrupti sit animi fugiat expedita voluptatibus tempore excepturi.</p>
    </div> */}


    <h1 className='text-4xl text-center italic font-semibold text-amber-900 underline decoration-fuchsia-800 decoration-dotted underline-offset-4 capitalize align-middle after:content-["_:)"]'>Chicken Curry</h1>
    <h3>Ingredients</h3>
    <ul className='list-disc list-inside'>
        <li>500g chicken (cut into pieces)</li>
        <li>2 tablespoons vegetable oil or ghee</li>
    </ul>

    <div className='m-3 w-96 bg-fixed text-white' style={{backgroundImage:`url(images/bg2.avif)`}}>
    Ladies and gentlemen,

It is an honor to stand before you today, as we reflect on what it truly means to be a leader. Leadership isn’t about titles, positions, or power. It’s about the ability to inspire, guide, and empower those around us. A good leader is someone who knows that success is not an individual achievement, but a collective one.

Leadership begins with a vision—a vision that is not just about where we want to go, but why we want to go there. It’s about having the courage to make difficult decisions and the humility to listen to others. A good leader never forgets that their success is only possible through the hard work, dedication, and talent of their team.

True leadership is about building trust. Trust is earned through honesty, consistency, and transparency. When people trust their leader, they are not afraid to share ideas, take risks, and push beyond their limits. A leader does not impose their will upon others, but rather encourages collaboration and innovation, creating an environment where everyone feels valued and heard.

A good leader also understands the importance of resilience. We all face challenges. There will be setbacks, obstacles, and moments when failure seems imminent. But a leader does not retreat in the face of adversity. They face it with determination, learning from every setback, and emerging stronger, ready to guide their team through any storm.

But perhaps most importantly, a leader serves. Leadership is not about being served, but about serving others. A good leader prioritizes the well-being of their people, providing guidance, support, and opportunities for growth. They lead with compassion, empathy, and a genuine desire to see others succeed.

As we move forward, I urge all of us to embrace these principles of leadership in our own lives—whether in our families, workplaces, or communities. Remember, leadership is not a destination. It is a journey. And every day presents a new opportunity to inspire, uplift, and make a difference.

Thank you.
    </div>
  </>
  )
}

export default App
