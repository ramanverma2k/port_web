import Project from '../types/project';
import style from './GridCard.module.css';

export default function ProjectCard({ props }: { props: Project }) {
  return (
    <div className={style.card} style={{ border: '2px solid black' }}>
      {props.Name}
    </div>
  );
}

ProjectCard.defaultProps = {
  Name: '',
};

ProjectCard.propTypes = {
  Name: String,
};
