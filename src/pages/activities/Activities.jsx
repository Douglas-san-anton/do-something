import { useEffect, useState } from 'react';
import { loadRandomActivity } from '../../api/api';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import styles from '../../styles/global.module.scss';

const ActivitiesList = () => {
  const [user, setActivity] = useState({});
  const [activitiesList, setActivitiesList] = useState(getActivitiesListFromStorage());

  function getActivitiesListFromStorage() {
    const storedActivities = localStorage.getItem('activitiesList');
    return storedActivities ? JSON.parse(storedActivities) : [];
  }

  const updateLocalStorage = (newActivitiesList) => {
    localStorage.setItem('activitiesList', JSON.stringify(newActivitiesList));
  };

  const loadActivity = async () => {
    const data = await loadRandomActivity();
    if (data) {
      setActivity(data);
    }
  };

  const deleteActivity = (index) => {
    const newActivitiesList = [...activitiesList];
    newActivitiesList.splice(index, 1);
    setActivitiesList(newActivitiesList);
    updateLocalStorage(newActivitiesList);
  };

  useEffect(() => {
    loadActivity();
  }, []);

  return (
    <>
      <Navbar user={user} />

      <main className={styles.main__container}>
        <ul className={styles.ul__container_activities}>
        <h2 className={styles.form__title}>Your Activities</h2>
          {activitiesList.length > 0 ? (
            activitiesList.map((activity, index) => (
              <li key={index}>
                {activity.activity} - {activity.type}
                <button className={styles.delete__button} onClick={() => deleteActivity(index)}>Delete</button>
              </li>
            ))
          ) : (
            <p>No activities to display.</p>
          )}
        </ul>

        <Link className={styles.link} to="/home">Go to Home</Link>
      </main>
    </>

  );
};

export default ActivitiesList;
