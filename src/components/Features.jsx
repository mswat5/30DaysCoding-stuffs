
const Features = () => {
  return (
    <div >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Features</h1>
    <div className=" grid grid-cols-1 place-items-center lg:grid-cols-4 gap-4">
                <FeatureCard title="React 18" description="Learn the core concepts, JSX syntax, component-based architecture, and how to build reusable UI components." url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                <FeatureCard title="TailwindCSS" description="Learn how to create visually appealing and responsive user interfaces using Tailwind CSS." url="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"/>
                <FeatureCard title="Appwrite" description="Learn Appwrite to leverage its features to build scalable and secure applications with ease." url="https://appwrite.io/images-ee/press/square-logo-pink.svg"/>
                <FeatureCard title="NextJs" description="Learn how to Use Zustan into your React projects for effective state management." url="https://i.imgur.com/6bZOi50.png"/>
            
    </div>
    </div>
  )
}

export default Features

const FeatureCard = (props) => {
  return (
  <div className="card bg-base-100 m-4 shadow-lg image-full hover:shadow-blue-400 cursor-pointer overflow-hidden">
  <figure className="w-full ar-1  mx-auto overflow-visible"><img src={props.url} alt={props.title} /></figure>
  <div className="card-body hover:hero-overlay items-center hover:bg-base-100 hover:bg-opacity-90  text-center text-info-content opacity-0 hover:opacity-100">
    <h2 className="card-title text-3xl font-semibold">{props.title}</h2>
    <p>{props.description}</p>
  </div>
</div>
  )
}