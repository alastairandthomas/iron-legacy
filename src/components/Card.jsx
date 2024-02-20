import { Link } from 'react-router-dom';

function Card({ obj, id, isFav }) {
  return (
    <Link to={`/projectdetails/${id}`}>
      <div className="card w-96 h-104 bg-base-100 shadow-xl grid-cols-1 ">
        <figure>
          <img src={obj.image} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{obj.title}</h2>
          <p>{obj.description}</p>
        </div>

        {/* INFORMATION ABOUT THE AUTHOR OF THE PROJECT THAT WE'LL GET FROM USER AUTH WITH FIREBASE ========= */}
        <div className="flex items-center px-6 pt-4 pb-2">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={obj.userPhoto}
            alt="Profile Picture"
          />
          <div className="text-sm">
            <p className=" leading-none">{`@${obj.authorHandle}`}</p>
            {isFav && <p>Fav</p>}
          </div>
        </div>
        {/* END OF INFFORMATION ABOUT AUTHOR ======= */}

        {/* TAG AT THE BOTTOM OF THE CARD THAT'LL SHOW QUICK INFORMATION ABOUT THE PROJECT  ======================= */}
        <div class="px-6 pt-4 pb-2">
          {obj.tags
            ? obj.tags.map((tag) => {
                return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {`#${tag}`}
                  </span>
                );
              })
            : null}
        </div>
        {/* END THE THE TAGS ============ */}
      </div>
    </Link>
  );
}

export default Card;
