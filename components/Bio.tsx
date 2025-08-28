import Image from 'next/image'

export default function Bio() {
  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
            <p>
              I'm Connor Hardin, a passionate software developer and researcher with a deep interest 
              in creating innovative solutions that solve real-world problems. My journey in technology 
              began with a curiosity about how computers work and has evolved into a career building 
              scalable applications and conducting cutting-edge research.
            </p>
            
            <p>
              With a Master's degree in Computer Science and several years of industry experience, 
              I've had the opportunity to work on diverse projects ranging from web applications to 
              machine learning systems. I believe in the power of technology to make a positive impact 
              and am always excited to take on new challenges.
            </p>
            
            <p>
              When I'm not coding or researching, you can find me contributing to open source projects, 
              mentoring aspiring developers, or exploring new technologies. I'm a firm believer in 
              continuous learning and collaboration within the tech community.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/Me.png"
              alt="Connor Hardin"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
