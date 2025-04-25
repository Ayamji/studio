
const SARSAPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">State-Action-Reward-State-Action (SARSA)</h1>
      <p className="text-lg mb-4">
        SARSA (State-Action-Reward-State-Action) is a algorithm to learn a Q-function.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Q-table: A table that stores the Q-values for each state-action pair.</li>
          <li>Q-value: An estimate of the expected reward for taking a given action in a given state.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          SARSA is used in various fields.
        </p>
        <ul className="list-disc list-inside">
          <li>Robotics</li>
          <li>Game AI</li>
        </ul>
      </section>
    </div>
  );
};

export default SARSAPage;
