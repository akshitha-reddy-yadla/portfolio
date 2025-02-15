import React from 'react';
import styles from './projects.module.css';
import { data } from './data';

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
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
