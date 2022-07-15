import style from './Home.module.css';

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
    </main>
  );
}

export default Home;
