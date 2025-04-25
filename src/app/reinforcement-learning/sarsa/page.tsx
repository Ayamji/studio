
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
          <li><b>Q-table:</b> A table that stores the Q-values for each state-action pair.</li>
          <li><b>Q-value:</b> An estimate of the expected reward for taking a given action in a given state.</li>
        </ul>
      </section>

      <section>
       <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          SARSA has some advantages
        </p>
        <ul className="list-disc list-inside">
          <li>SARSA is guaranteed to converge to the optimal policy.</li>
          <li>SARSA is more conservative than Q-learning.</li>
          
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          SARSA also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>SARSA can be slower to converge than Q-learning.</li>
          <li>SARSA can be more sensitive to the choice of learning rate and discount factor.</li>
        </ul>
      </section>
    </div>
  );
};

export default SARSAPage;

