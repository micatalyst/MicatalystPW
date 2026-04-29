import Image from 'next/image'
import Logo from '@/assets/logo_symbol.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'

import PortalButton from '@/components/PortalButton'

import HomeClient from './Home_Client'

export default function HomeView({}) {
  return (
    <main className="main">
      <div className="hero-container">
        <div className="hero-intro">
          <p className="overline"> {'//'} Hero </p>
          <div className="hero-message">
            <p>
              <span className="light-text">Hi, I&apos;m </span>
              <span className="name">Miguel Teixeira</span>
            </p>
            <p className="middle-space">
              <span className="light-text">Also known as </span> Micatalyst
            </p>
            <p>
              Frontend Developer <span className="light-text"> with a </span>
            </p>
            <p>
              UX-driven <span className="light-text"> mindset </span>
            </p>
          </div>
        </div>
        <div className="hero-sidebar">
          {/* <div className="Hero-profile">
            <Image src={Logo} alt="logotipo" className="logo" />
          </div> */}
          {/* <div className="hero-socials-container">
            <div className="social-links">
              <a href="https://github.com/micatalyst" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/micatalyst/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareLinkedin} />
              </a>
            </div>
          </div> */}
          {/* <PortalButton
            defaultLabel="View my work"
            hoverLabel="Let's explore"
            href="/projects"
            slideDirection="up"
          /> */}
          {/*  <div className="hero-supporting-text">
            <p className="primary-text">Frontend-focused developer </p>
            <p className="primary-text">with experience across the stack, </p>
            <p className="primary-text">building and delivering projects</p>
            <p className="primary-text">
              from concept <FontAwesomeIcon className="arrow-icon" icon={faArrowRightLong} />
              deployment
            </p>
          </div> */}
        </div>
        {/* <FontAwesomeIcon icon={faEarthEurope} /> */}
        {/* <Image src={Logo} alt="logotipo" className="logo" /> */}
      </div>
      <div className="about-container">
        <div className="about-intro">
          <p className="overline"> {'//'} Who am I </p>
          <div className="about-intro-paragraph primary-text">
            <p>
              I am a frontend-focused web developer with experience across the stack, based in
              Porto.
            </p>
            <p>
              My path into this field wasn&apos;t purely technical, and I strongly believe that
              shapes how I approach every project.
            </p>
          </div>
        </div>
        <div className="about-section">
          <p className="overline"> {'//'} Academic Background </p>
          <div className="about-section-paragraph primary-text">
            <p>
              I hold a Bachelor&apos;s in New Communication Technologies and a Master&apos;s in
              Communication and Web Technologies. What set both programmes apart was their
              human-centred approach. Alongside code, I was studying UX, digital accessibility,
              storytelling and creative narratives. That background is where my eye for interfaces
              comes from, not just building them, but thinking about the people using them.
            </p>
          </div>
        </div>
        <div className="about-section">
          <p className="overline"> {'//'} After the Master&apos;s </p>
          <div className="about-section-paragraph primary-text">
            <p>
              After my Master&apos;s, I spent a year doing freelance paid work, helping friends
              bring their projects to life while developing personal projects of my own. A valuable
              period of working independently, making real decisions and delivering results outside
              an academic context.
            </p>
          </div>
        </div>
        <div className="about-section">
          <p className="overline"> {'//'} Creative Pursuits </p>
          <div className="about-section-paragraph primary-text">
            <p>
              Beyond web development, I have a strong background in photography and videography like
              the making of music videos, documentaries for musical groups and animations, from
              narrative to execution. Alongside that, I&apos;ve worked with typography, layout,
              visual composition, logos and branding elements. These have been part of my life long
              enough to influence how I see and approach creative work in general.
            </p>
          </div>
        </div>
        <div className="about-section">
          <p className="overline"> {'//'} Outside Work </p>
          <div className="about-section-paragraph primary-text">
            <p>
              Beyond web development, I have a strong background in photography and videography like
              the making of music videos, documentaries for musical groups and animations, from
              narrative to execution. Alongside that, I&apos;ve worked with typography, layout,
              visual composition, logos and branding elements. These have been part of my life long
              enough to influence how I see and approach creative work in general.
            </p>
          </div>
        </div>
        <div className="about-section">
          <p className="overline"> {'//'} Volunteering </p>
          <div className="about-section-paragraph primary-text">
            <p>
              I&apos;ve also co-founded and volunteered with Green Mind, a student-led non-profit at
              the University of Aveiro focused on sustainability and environmental education. We
              built it from scratch, with no institutional backing and mostly our own resources, a
              good lesson in ownership, teamwork and doing things because they matter.
            </p>
          </div>
        </div>
      </div>

      <HomeClient />
    </main>
  )
}
