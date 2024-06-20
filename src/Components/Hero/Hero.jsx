const Hero = () => {
  return (
   <div>
    <br /><br />
     <div
      id="#hero"
      className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[75%] mt-10"
    >
      <div className="mx-auto">
        <p className="font-bold text-xl">Hello sir,</p>
        <h1 className="font-bold text-2xl"> It’s Monzurul Islam</h1>
        <br />
        <h2 className="font-bold text-2xl -mt-4">MERN Stack Developer</h2>
        <p className="text-xl mt-4 text-justify">
          I am passionate about building dynamic and user-friendly web
          applications. I am excited to contribute to innovative projects and
          continue honing my skills in the MERN stack environment.
        </p>
        <button className="btn btn-outline btn-primary mt-3">Resume</button>
        <div className="flex mt-4 w-32 gap-2">
          <a href="https://github.com/Monzurulislampro">
            <img src="/assets/icons8-github-48.png" alt="github-icons" />
          </a>
          <a href="https://www.linkedin.com/in/monzurul-islam-pro/">
            <img src="/assets/icons8-linkedin (1).svg" alt="linkedln-icons" />
          </a>
          <a href="https://wa.me/qr/EPABDYLFR5VCM1">
            <img src="/assets/icons8-whatsapp.svg" alt="github-icons" />
          </a>
        </div>
      </div>
      <img
        className="mx-auto avatar w-52 rounded-full"
        src="/assets/monzurul-portfolio.png"
        alt="Monzurul-portfolio"
      />
    </div>
   </div>
  );
};

export default Hero;
