import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 id="text-header"> Mark Yasher P. Santos </h1>
      <h2 id="text-header">BSIT 3A</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>CONTACT</h2>
      <p>yashersantos02@gmail.com
         <br></br> 09051634171 
          <br></br> San Fernando, Pampanga <br></br>
      </p>
      <h2> EDUCATION</h2>
      <p>Bachelor of Information <br></br> Technology,
        Computing and <br></br>Library Science <br></br><br></br> University of the Assumption<br></br> 2022 - Present <br></br> San Fernando, Pampanga </p>
      
      <h2>SKILLS</h2>
      <p>HTML<br />
        CSS <br />
        PYTHON <br />
        MySQL <br />
        JAVASCRIPT </p>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h2>LEARNING EXPERIENCE</h2>
      <h2> <li>First Year College</li></h2>
      <p><ul>- In my first year studying IT at the University of the Assumption, I built a strong foundation in programming and essential IT concepts.</ul></p>
      <h2> <li>Second Year College</li></h2>
      <p><ul>- In my second year at the University of the Assumption, I deepened my knowledge of advanced programming, data structures, and algorithms. Collaborative projects improved my teamwork and problem-solving skills, enhancing my overall IT learning experience.</ul></p>
      <h2> <li>Third Year College (Present)</li></h2>
      <p><ul>- Currently honing my skills in web development, using JavaScript and HTML to craft dynamic, user-centric websites. I also integrate cutting-edge technologies like Vercel, Node.js, and React.js to create highly interactive and seamless digital experiences, pushing the boundaries of responsiveness and performance</ul></p>
    </div>
  );
}
