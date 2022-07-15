import SocialLinks from '../components/SocialLinks';
import style from './Home.module.css';
import GridCard from '../components/GridCard';

function Home() {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>Hey, I&apos;m Lorem Ipsum</h1>
      <p className={style.intro}>
        A passionate developer based out of Lucknow, India. I create pixel perfect full stack web
        &amp; mobile applications. I also have a passion for trying out new technologies and
        building things that people love.
        <br />
        <br />
        Come watch me fiddle around with Flutter, TypeScript, &amp; Go on Twitch.
      </p>
      <SocialLinks />
      <section className={style.projects}>
        <h2 className={style.subheading}>Projects</h2>
        <p>Some of the projects I&apos;ve recently worked on.</p>
        <div className={style.grid}>
          {/* Temporary:
              Array is only used to generate dummy <GridCard /> component.
              It will be replaced with real data later.
           */}
          {[1, 2, 3, 4].map((i) => (
            <GridCard key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
