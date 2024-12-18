import { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import Loading from "./Loading";
import { fetchTopics } from "../api";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


useEffect(() => {
    setIsLoading(true);
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <p>Error Returning Data</p>;
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
