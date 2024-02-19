import { Link } from 'react-router-dom';

function Card({ obj, id }) {
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
            src="https://lh3.googleusercontent.com/a/ACg8ocI6BtPyAQdDuUYo80CdhruxxohG3kcoZrJtv5wM_oSVpg=s576-c-no"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className=" leading-none">{obj.author}</p>
            {/* We will have to generate the date of creation of a project  */}
            <p className="">Aug 18</p>
          </div>
        </div>
        {/* END OF INFFORMATION ABOUT AUTHOR ======= */}

        {/* TAG AT THE BOTTOM OF THE CARD THAT'LL SHOW QUICK INFORMATION ABOUT THE PROJECT  ======================= */}
        <div class="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
        {/* END THE THE TAGS ============ */}
      </div>
    </Link>
  );
}

export default Card;
