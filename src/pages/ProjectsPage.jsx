import Card from '../components/Card';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import FilterSection from '../components/FilterSection';

function ProjectsPage() {
  // const [projects, setProjects] = useState(null);
  const [projects, loading, error] = useCollection(db.collection('projects'));
  const [user] = useAuthState(auth);

  return (
    <div className=" flex flex-col gap-6">
      <FilterSection />
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {projects?.docs.map((obj) => {
            {
              /* console.log(obj.data().FavBy.includes(user.uid)); */
            }
            return (
              <Card
                obj={obj.data()}
                key={obj.id}
                id={obj.id}
                isFav={obj.data().FavBy.includes(user?.uid)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
