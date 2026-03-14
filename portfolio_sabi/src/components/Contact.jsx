export default function Contact() {
  return (
    <section id='contact' className='py-20 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>Get In Touch</h2>
        <p className='text-xl mb-12 text-gray-300 max-w-2xl mx-auto'>
          Interested in working together? Send me an email or connect on
          LinkedIn.
        </p>
        <div className='flex flex-col md:flex-row gap-8 justify-center'>
          <a
            href='mailto:your.email@example.com'
            className='bg-purple-600 hover:bg-purple-700 px-12 py-6 rounded-full font-bold text-xl transition'
          >
            📧 Email Me
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            className='border-2 border-purple-600 hover:bg-purple-600 px-12 py-6 rounded-full font-bold text-xl transition'
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
