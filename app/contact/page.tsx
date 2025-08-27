import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'

export const metadata = {
  title: 'Contact - Connor Hardin',
  description: 'Get in touch with Connor Hardin for collaborations, opportunities, or just to say hello.',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-16 text-gradient">
            Get In Touch
          </h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just connecting with fellow developers and researchers. Feel free to reach out!
              </p>
              <SocialLinks />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
