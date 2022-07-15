import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faGithub, faLinkedinIn, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';
import style from './SocialLinks.module.css';

function SocialLinks() {
  return (
    <div className={style.social__links}>
      <a href="http://www.google.com/" className={style.fontawesome__icon}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="http://www.google.com/" className={style.fontawesome__icon}>
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0E76A8' }} />
      </a>
      <a href="http://www.google.com/" className={style.fontawesome__icon}>
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
      </a>
      <a href="http://www.google.com/" className={style.fontawesome__icon}>
        <FontAwesomeIcon icon={faTwitch} style={{ color: 'purple' }} />
      </a>
    </div>
  );
}

export default SocialLinks;
