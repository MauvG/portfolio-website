import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 text-center m-20">
        About Me
      </h1>

      {/* Dekstop */}
      <div className="md:flex hidden justify-center m-5 items-center">
        <div className="flex-1 m-5 object-right">
          <Image
            src="/College.jpeg"
            alt="Trinity College"
            width={500}
            height={500}
            priority
            className="rounded-2xl shadow-lg shadow-gray-500 ml-auto mr-auto "
          />
        </div>
        <div className="flex-1 m-10">
          <h1 className="text-lg">
            My name is <span className="font-bold">Muavia Ghazi</span>
          </h1>
          <br />
          <p>
            I am a third year student in{" "}
            <span className="font-bold">Trinity College (TCD) </span>
            pursuing a bachelor's degree in Computer Science and ideally, a
            master's degree after that.
          </p>
          <br />
          <p>
            I'm passionate about web development, software engineering and game
            development. I'm eager to expand my knowledge. I enjoy working in
            teams and I'm constantly seeking for intriguing chances to put my
            abilities to the test.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col justify-center m-5 items-center text-center text-sm">
        <div className="flex-1 m-5 resize-none">
          <Image
            src="/College.jpeg"
            alt="Trinity College"
            width={500}
            height={500}
            priority
            className="rounded-2xl shadow-lg shadow-gray-500"
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
            master's degree after that.
          </p>
          <br />
          <p>
            I'm passionate about web development, software engineering and game
            development. I'm eager to expand my knowledge. I enjoy working in
            teams and I'm constantly seeking for intriguing chances to put my
            abilities to the test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
