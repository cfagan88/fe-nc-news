import TopicCard from "./TopicCard";
import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Error from "./Error";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError({
          status: error.status,
          msg: `Topics ${error.response.data.msg}`,
        });
      });
  }, []);

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (error) {
    return <Error status={error.status} msg={error.msg} />;
  }

  return (
    <ul>
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
}

export default Topics;
