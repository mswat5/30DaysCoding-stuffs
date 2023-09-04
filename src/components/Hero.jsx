
const Hero = () => {
  return (
    <div className="hero min-h-screen flex-1 bg-base-300 overflow-x-hidden">
  <div className="hero-content p-0 flex-col lg:flex-row-reverse w-full ">
    <img src="./src/assets/Screenshot 2023-08-23 at 8.43.23 PM.png" className="max-w-md w-full rounded-lg shadow-2xl" />
    <div className="text-center lg:text-left mx-8 p-4 md:max-w-md ">
      <h1 className="text-3xl font-bold lg:text-5xl">Welcome to <span className="text-primary">CoDEtheCoDE</span></h1>
      <p className="py-6 max-w-md mx-auto lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima, blanditiis eligendi aliquid illo mollitia. Incidunt veniam maiores quia exercitationem quibusdam deserunt tempore, nobis suscipit?</p>
      <button className="btn btn-primary"><a href="30dayscoding.com">Get Started</a></button>
    </div>
  </div>
</div>
  )
}

export default Hero;