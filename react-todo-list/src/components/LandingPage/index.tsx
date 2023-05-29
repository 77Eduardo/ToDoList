import { Link } from "react-router-dom";
import capa from '../../assets/capa.svg';
import styles from './index.module.css';

export const LandingPage = () => {
  return (
    <section className={styles.section_container}>
      <article className={styles.title_container}>
        <h1 className={styles.title_capa}>ToDo List</h1>
      </article>
      <article>
        <Link to="/to-do-list">
          <img className={styles.img} src={capa} alt="Imagem de capa da landing page da to-do list" />
        </Link>
      </article>
    </section>
  );
}