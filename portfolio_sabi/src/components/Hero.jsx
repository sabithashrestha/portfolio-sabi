export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center py-20 px-6'
    >
      <div className='max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12'>
        <div className='flex-1'>
          <p className='text-xl mb-4 text-purple-400'>Hi, I am</p>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
            YourName
          </h1>
          <h2 className='text-2xl md:text-3xl mb-8'>Frontend Developer</h2>
          <p className='text-lg mb-8 max-w-lg'>
            I build responsive web apps using React, Tailwind CSS, and modern
            tools. Passionate about clean code and user experience.
          </p>
          <a
            href='#projects'
            className='bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-bold text-lg transition'
          >
            View My Projects
          </a>
        </div>
        <div className='flex-1 flex justify-center'>
          <div className='w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl'>
            <span className='text-3xl'>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
