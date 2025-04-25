
const MDPPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Markov Decision Process (MDP)</h1>
      <p className="text-lg mb-4">
        A Markov Decision Process (MDP) is a mathematical framework for modeling decision-making in situations where outcomes are partly random and partly under the control of a decision maker.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>States: The possible situations in which the agent can be.</li>
          <li>Actions: The decisions that the agent can make.</li>
          <li>Rewards: The feedback signal that the agent receives for its actions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          MDPs are used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Robotics: Controlling robots and enabling them to perform tasks autonomously.</li>
          <li>Game Playing: Developing AI agents that can play games.</li>
          <li>Resource Management: Optimizing the allocation of resources.</li>
        </ul>
      </section>
    </div>
  );
};

export default MDPPage;
