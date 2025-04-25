
const DQNPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Deep Q-Networks (DQN)</h1>
      <p className="text-lg mb-4">
        Deep Q-Networks (DQN) is the algorithm where we use a neural network to approximate the Q-function.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Replay Buffer</li>
          <li>Target Network</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Used in various fields
        </p>
        <ul className="list-disc list-inside">
          <li>Robotics</li>
          <li>Game AI</li>
        </ul>
      </section>
    </div>
  );
};

export default DQNPage;
