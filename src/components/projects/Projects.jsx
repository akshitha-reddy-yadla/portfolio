import React from 'react';
import styles from './projects.module.css';
import { data } from './data';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className='projects'>
      <h1 className={styles.header}>PROJECTS</h1>

      <div className={styles.projects__container}>
        {
          data.map((item) => (
            <div key={item.id}>
              <div className={styles.projects__tile}>
                <p className={styles.projects__title}>{item.name}</p>
                <p className={styles.projects__description}>{item.description}</p>
                {item.link ?
                  <p className={styles.projects__icon__container}>
                    <a href={item.link} target="_blank" className={styles.projects__link}>
                      <FaGithub size={22} />
                    </a>
                  </p> : <span></span>}
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
