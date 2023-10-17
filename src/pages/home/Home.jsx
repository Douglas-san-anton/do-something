import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadRandomActivity } from '../../api/api';
import styles from '../../styles/home.module.scss'
import Navbar from '../../components/Navbar';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    name: localStorage.getItem('name'),
    age: localStorage.getItem('age'),
  });
  const [activity, setActivity] = useState({});
  const [activitiesList, setActivitiesList] = useState(getActivitiesListFromStorage());
  const [filterType, setFilterType] = useState('');
  const [filterParticipants, setFilterParticipants] = useState('');

  function getActivitiesListFromStorage() {
    const storedActivities = localStorage.getItem('activitiesList');
    return storedActivities ? JSON.parse(storedActivities) : [];
  }

  const loadActivity = async () => {
    const data = await loadRandomActivity();
    if (data) {
      setActivity(data);
    }
  };

  const addToActivitiesList = () => {
    const newActivitiesList = [...activitiesList, activity];
    setActivitiesList(newActivitiesList);
  };

  const filterActivities = (activities) => {
    let filteredActivities = [...activities];

    if (filterType) {
      filteredActivities = filteredActivities.filter((activity) => activity.type === filterType);
    }

    if (filterParticipants !== '') {
      const numParticipants = parseInt(filterParticipants);
      filteredActivities = filteredActivities.filter(
        (activity) => activity.participants === numParticipants
      );
    }

    return filteredActivities;
  };

  const filteredActivities = filterActivities(activitiesList);

  const typeOptions = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork"
  ];

  const participantOptions = Array.from({ length: 10 }, (_, i) => i);

  useEffect(() => {
    loadActivity();
  }, []);

  useEffect(() => {
    localStorage.setItem('activitiesList', JSON.stringify(activitiesList));
  }, [activitiesList]);

  return (
    <>
      <Navbar user={user} />

      <main className={styles.main__container_home}>

        <section className={styles.section__home}>
          <h3 className={styles.subtitle}>Random Activity</h3>
          <p><strong>Activity:</strong> {activity.activity}</p>
          <p><strong>Type:</strong> {activity.type}</p>
          <p><strong>Participants:</strong> {activity.participants}</p>
          <p><strong>Links:</strong> {activity.link}</p>

          <button className={styles.button} onClick={loadActivity}>Refresh</button>
          <button className={styles.button} onClick={addToActivitiesList}>Add to list</button>
        </section>

        <section className={styles.activities_section}>
          <h3 className={styles.subtitle}>Your Activities</h3>

          <section className={styles.section__filter}>
            <div>
              <label htmlFor="filterType">Filter by Type:</label>
              <select
                id="filterType"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">All Types</option>
                {typeOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filterParticipants">Filter by Participants:</label>
              <select
                id="filterParticipants"
                value={filterParticipants}
                onChange={(e) => setFilterParticipants(e.target.value)}
              >
                <option value="">All Participants</option>
                {participantOptions.map((participants, index) => (
                  <option key={index} value={participants}>
                    {participants}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <ul className={styles.ul__container}>
            {filteredActivities.map((activity, index) => (
              <li key={index}>{activity.activity} - {activity.type}</li>
            ))}
          </ul>
        <Link className={styles.link__button} to="/activities">Activities to do</Link>
        </section>
      </main>
    </>
  );
}

export default Home;