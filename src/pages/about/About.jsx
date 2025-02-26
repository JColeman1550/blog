import './about.css';
import Header from "../../components/header/Header";

export default function About() {
  return (
    <>
      <Header />
      
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="intro">Hey, I’m Julian—Columbus, OH born and raised. I graduated from Bexley High School in 2009, 
            where I spent most of my time playing sports—football, basketball, 
            baseball, and even track. Sports have always been a huge part of my life, 
            and that carried over into college.</p>

        <p className="college">I played linebacker at USC from 2012 to 2014 (Fight On!) 
            while earning my degree in political science. After college, 
            I took a different path and became an educator, teaching 3rd and 5th grade 
            ELA in Watts, CA, and later in Boston, MA. From 2014 to 2021, I was in the classroom, 
            helping kids build skills and confidence, which was one of the most rewarding experiences of my life.</p>

        <p className="career-change">In 2024, I decided to make a career shift and joined Resilient Coders, 
            diving into software development. I’ve always loved problem-solving, working with data, 
            and creating things that are both functional and meaningful. 
            Tech felt like the perfect way to blend my love for learning, building, and helping others.</p>

        <p className="hobbies">Outside of coding, I’m a huge sports fan. 
            You’ll find me at baseball games whenever 
            I get the chance—Fenway Park and Great American Ballpark are my happy places. 
            I’m a die-hard Bengals fan (Joe Burrow is HIM), and I love hooping with friends and playing 
            MLB The Show. When I’m not at a game or coding, 
            I’m probably either watching horror movies, or Dragonball.</p>

        <p className="closing">This blog is where I document my journey in tech, 
            share projects I’m working on, and connect with others
             who are passionate about building cool things. 
             If you're into tech, or just good conversation, stick around!</p>
      </div>
    </>
  );
}
