import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { counter } from '@fortawesome/fontawesome-svg-core';

function FavoritePage() {
  const [user, loading] = useAuthState(auth);

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects([]);
    const fetchProjects = async () => {
      const q = query(
        collection(db, 'projects'),
        where('FavBy', 'array-contains', user.uid)
      );
      const querySnapshot = await getDocs(q);
      setProjects(querySnapshot.docs);
    };

    if (user) {
      fetchProjects();
    }
  }, [user]);

  console.log(id);
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {/* {projects ? JSON.stringify(projects) : 'loading....'} */}

        {projects?.map((obj) => {
          return <Card obj={obj.data()} key={obj.id} id={obj.id} />;
        })}
      </div>
    </div>
  );
}

export default FavoritePage;
