import image from "../truck.jpg";

const Home = () => {
  return (
    <main>
      <img src={image} alt="truck" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center items-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hey, I'm Big-Bob</h1>
      </section>
    </main>
  );
};

export default Home