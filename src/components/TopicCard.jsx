function TopicCard({ topic }) {
  return (
    <section className="topic-card">
      <p>{topic.slug}</p>
      <p>{topic.description}</p>
    </section>
  );

  // Format
  // make links
  // links need to filter articles on topic
}

export default TopicCard;
