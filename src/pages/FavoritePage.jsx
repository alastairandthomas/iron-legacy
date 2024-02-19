import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Card from '../components/Card';
import { useEffect } from 'react';

function FavoritePage({ id }) {
  const [user] = useAuthState(auth);
  const [projects, loading, error] = useCollection(
    db.collection('projects').where('FavBy', 'array-contains', id)
  );

  // const containeUserId = (favArr) => {
  //   if (favArr) {
  //     favArr.forEach((el) =>
  //       el === 'tbetXkUo2ZRQHwT4f0Od9IoKZpn2' ? true : ''
  //     );
  //   }
  // };

  // const filteredProjects = projects?.where(
  //   'favBy',
  //   'array-contains',
  //   'tbetXkUo2ZRQHwT4f0Od9IoKZpn2'
  // );
  // console.log(user);
  // console.log(user.uid);
  // console.log(projects?.docs.map((el) => el.data()));
  console.log(id);
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {projects?.docs.map((obj) => {
          return <Card obj={obj.data()} key={obj.id} id={obj.id} />;
        })}
      </div>
    </div>
  );
}

export default FavoritePage;
