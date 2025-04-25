const ReinforcementLearningPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Reinforcement Learning</h1>
      <p className="text-lg mb-4">
        Reinforcement learning involves training an agent to make decisions in an environment to maximize a reward.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Terms</h2>
        <ul className="list-disc list-inside">
          <li>Agent: The learner that makes decisions.</li>
          <li>Environment: The world the agent interacts with.</li>
          <li>Reward: Feedback signal for the agent's actions.</li>
          <li>Policy: The agent's strategy for making decisions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Concepts/Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add cards for each model here */}
          <ModelCard title="Markov Decision Process (MDP)" description="A mathematical framework for decision-making." />
          <ModelCard title="Q-learning" description="An algorithm to learn a Q-function." />
          <ModelCard title="SARSA" description="Another algorithm to learn a Q-function." />
          <ModelCard title="Deep Q-Networks (DQN)" description="Q-learning with neural networks." />
          <ModelCard title="Policy Gradient Methods" description="Optimizes the policy directly." />
          <ModelCard title="Actor-Critic Methods" description="Combines policy gradient and value-based methods." />
        </div>
      </section>
    </div>
  );
};

const ModelCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ReinforcementLearningPage;
