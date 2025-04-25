
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
          <li><b>Q-table:</b> A table that stores the Q-values for each state-action pair.</li>
          <li><b>Q-value:</b> An estimate of the expected reward for taking a given action in a given state.</li>
          <li><b>Exploration vs. Exploitation:</b> The trade-off between exploring new actions and exploiting known actions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          Q-learning is used because of the following reasons:
        </p>
        <ul className="list-disc list-inside">
          <li>It is a simple algorithm to implement.</li>
          <li>It is guaranteed to converge to the optimal policy.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          Q-learning also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It can be slow to converge.</li>
          <li>It can be sensitive to the choice of learning rate and discount factor.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default QLearningPage;

