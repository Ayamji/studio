
const QLearningPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Q-learning</h1>
      <p className="text-lg mb-4">
        Q-learning is a model-free reinforcement learning algorithm to learn a policy telling an agent what action to take under what circumstances.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Q-table: A table that stores the Q-values for each state-action pair.</li>
          <li>Q-value: An estimate of the expected reward for taking a given action in a given state.</li>
          <li>Exploration vs. Exploitation: The trade-off between exploring new actions and exploiting known actions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Q-learning is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Robotics: Training robots to perform tasks.</li>
          <li>Game Playing: Developing AI agents to play games.</li>
          <li>Resource Management: Optimizing the allocation of resources.</li>
        </ul>
      </section>
    </div>
  );
};

export default QLearningPage;
