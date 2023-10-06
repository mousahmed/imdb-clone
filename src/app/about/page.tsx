import React from "react";

interface Props {}

function About({}: Props) {
  return (
    <div className="max-w-6xl mx-auto space-y-4 ">
      <h1 className="text-2xl font-medium text-amber-600 ">About IMDb Clone</h1>
      <section id="introduction">
        <h2 className="text-1xl font-medium text-amber-600">
          A New Era in Movie & TV Information
        </h2>
        <p>
          Welcome to IMDb Clone, your comprehensive source for movie,
          television, and celebrity information! At IMDb Clone, we&apos;ve
          embarked on a mission to be the premier platform for all things
          entertainment. Inspired by the iconic IMDb, IMDb Clone is built using
          Next.js, marrying the essence of the classic with the dynamism of
          modern web technologies.
        </p>
      </section>

      <section id="why-choose">
        <h2 className="text-1xl font-medium text-amber-600">
          Why Choose IMDb Clone?
        </h2>
        <ol>
          <li>
            <strong>Modern Design</strong>: Harnessing the power of Next.js,
            IMDb Clone guarantees rapid page loads, SEO optimization, and a
            fluid design that&apos;s visually appealing on every device.
          </li>
          <li>
            <strong>Extensive Database</strong>: Delve into our vast collection
            of films, TV shows, and celebrities, meticulously updated to ensure
            you&apos;re always in the know.
          </li>
          <li>
            <strong>User-Centric Features</strong>: From tailor-made watchlists
            and user reviews to in-depth statistics, IMDb Clone is crafted with
            the user in mind. Dive deep into trivia, behind-the-scenes tidbits,
            and more!
          </li>
          <li>
            <strong>Community Engagement</strong>: Connect with a fervent
            community of movie aficionados. Pen your reviews, initiate
            discussions, and immerse yourself in a global network of film
            lovers.
          </li>
        </ol>
      </section>

      <section id="technology-stack">
        <h2 className="text-1xl font-medium text-amber-600">
          Our Technology Stack
        </h2>
        <p>
          At its core, IMDb Clone runs on the Next.js framework. This
          server-side rendering solution ensures ultra-fast page loads,
          providing our users with an unmatched browsing experience. Our backend
          infrastructure is resilient and scalable, guaranteeing real-time
          updates and pinpoint accuracy.
        </p>
      </section>

      <section id="mission">
        <h2 className="text-1xl font-medium text-amber-600">Our Mission</h2>
        <p>
          In a digital era with ever-evolving content consumption, we recognize
          the demand for a platform that offers more than just data. IMDb Clone
          aspires to be more than a mere database; we envision a thriving hub
          where enthusiasts, creators, and aficionados converge in their shared
          passion for cinema.
        </p>
      </section>

      <section id="future-prospects">
        <h2 className="text-1xl font-medium text-amber-600">
          Future Prospects
        </h2>
        <p>
          IMDb Clone has its sights set on the future. Here&apos;s a glimpse at
          our upcoming features:
        </p>
        <ul>
          <li>
            <strong>VR Integration</strong>: Step into the realms of your
            cherished movies and series with our captivating VR experiences.
          </li>
          <li>
            <strong>Film Festivals</strong>: Advocate for indie artists by
            gaining exclusive access to showcases, interviews, and
            behind-the-scenes action!
          </li>
          <li>
            <strong>Educational Content</strong>: Broaden your cinematic
            horizons with workshops, masterclasses, and insightful articles.
          </li>
        </ul>
      </section>

      <section id="join-us">
        <h2 className="text-1xl font-medium text-amber-600">Join Us</h2>
        <p>
          IMDb Clone is more than just a platform—it&apos;s a vision. We invite
          you on this exciting journey to reshape how the world engages with
          entertainment. Whether you&apos;re an occasional viewer, a cineaste,
          or an industry stalwart, there&apos;s a niche for you here.
        </p>
        <p>
          Thank you for being a part of IMDb Clone. Dive deep, explore, and
          together, let&apos;s amplify the allure of cinema!
        </p>
      </section>
    </div>
  );
}

export default About;
