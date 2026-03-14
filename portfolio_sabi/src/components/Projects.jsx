import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-6 bg-black/20'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16'>Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-black/30 backdrop-blur-md p-8 rounded-xl hover:scale-105 transition'
            >
              <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-6'>{project.description}</p>
              <div className='flex gap-4 mb-6 flex-wrap'>
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-purple-600 rounded-full text-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-4'>
                <a
                  href={project.github}
                  className='text-purple-400 hover:underline'
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className='text-blue-400 hover:underline'
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
