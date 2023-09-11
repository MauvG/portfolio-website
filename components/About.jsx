import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 text-center m-10">
        About Me
      </h1>

      {/* Dekstop */}
      <div className="md:flex hidden justify-center m-5 items-center">
        <div className="flex-1 m-5 object-right">
          <Image
            src="/College.jpeg"
            alt="Trinity College"
            width={1000}
            height={1000}
            priority
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="flex-1 m-5">
          <h1 className="text-xl">
            My name is <span className="font-bold">Muavia Ghazi</span>
          </h1>
          <br />
          <p>
            I am currently a third year student in{" "}
            <span className="font-bold">Trinity College (TCD) </span>
            pursuing a bachelor's degree in Computer Science and ideally, a
            master's degree after that. I find software engineering and web
            development to be incredibly interesting.
          </p>
          <br />
          <p>
            I have a strong interest in computer science and I'm eager to learn
            more. I want to take on fresh tasks and work through difficult
            issues. I enjoy working in teams and I'm constantly seeking for
            intriguing chances to put my abilities to the test.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col justify-center m-5 items-center text-center">
        <div className="flex-1 m-5 resize-none">
          <Image
            src="/College.jpeg"
            alt="Trinity College"
            width={500}
            height={500}
            priority
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="flex-1 m-5">
          <h1 className="text-xl">
            My name is <span className="font-bold">Muavia Ghazi</span>
          </h1>
          <br />
          <p>
            I am currently a third year student in{" "}
            <span className="font-bold">Trinity College (TCD) </span>
            pursuing a bachelor's degree in Computer Science and ideally, a
            master's degree after that. I find software engineering and web
            development to be incredibly interesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
