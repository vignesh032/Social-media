import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xs:gap-8">
      
      {/* stories and posts */}
      <div>
        <StoriesBar/>
        <div className="p-4 space-y-6">
          List of posts
        </div>
      </div>

      {/* right side recent msgs */}
      <div>
        <div>
          <h1>Sponsered</h1>
        </div>
        <h1>Recent Messages</h1>
      </div>

    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
