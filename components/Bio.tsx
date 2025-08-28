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
              My name is Connor Hardin, and I’m from Falmouth, MA. I’m currently pursuing a degree in Computer Science at 
              Roger Williams University, with minors in Cybersecurity and Mathematics. My passion for technology started at 
              a young age—from learning how to type and write code in class, to troubleshooting hardware problems—and has grown 
              into creating my own projects and continuously expanding my knowledge.
            </p>
            
            <p>
             When I’m not coding or researching, I enjoy fishing, golfing, playing video games, 
             and working on personal projects. These hobbies give me balance and perspective—fishing 
             and golfing help me stay patient and focused, while gaming keeps me curious about design, 
             problem-solving, and technology. Beyond hobbies, I’m always eager to take on new challenges, 
             solve interesting problems, and explore fresh ideas that push me to grow both personally and 
             professionally.
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
