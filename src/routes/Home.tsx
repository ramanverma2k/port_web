import { useQuery } from '@tanstack/react-query';
import SocialLinks from '../components/SocialLinks';
import style from './Home.module.css';
import GridCard from '../components/GridCard';
import getProject from '../lib/notion';
import Project from '../types/project';

function Home() {
  const query = useQuery<Project[]>(['projects'], getProject, {
    select: (data) => data.filter((project) => project.Publish === true),
  });

  return (
    <main className={style.main}>
      <h1 className={style.heading}>Hey, I&apos;m Lorem Ipsum</h1>
      <p className={style.intro}>
        A passionate developer based out of Lucknow, India. I create pixel
        perfect full stack web &amp; mobile applications. I also have a passion
        for trying out new technologies and building things that people love.
        <br />
        <br />
        Come watch me fiddle around with Flutter, TypeScript, &amp; Go on
        Twitch.
      </p>
      <SocialLinks />
      <section className={style.projects}>
        <h2 className={style.subheading}>Projects</h2>
        <p>Some of the projects I&apos;ve recently worked on.</p>
        <div className={style.grid}>
          {query.isSuccess
            ? query.data!.map((i: Project) => (
              <GridCard key={i.id.toString()} props={i} />
            ))
            : null}
        </div>
      </section>
    </main>
  );
}

export default Home;
