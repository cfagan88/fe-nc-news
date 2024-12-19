import { Link } from "react-router";
import capitaliseWord from "../utils/capitaliseWord";

function TopicCard({ topic }) {
  return (
    <section className="topic-card">
      <Link to={`/articles?topic=${topic.slug}`}>
        <h4>{capitaliseWord(topic.slug)}</h4>
      </Link>
        <p>{topic.description}</p>
    </section>
  );
}

export default TopicCard;
