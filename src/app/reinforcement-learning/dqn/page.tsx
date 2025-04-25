
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
          <li><b>Experience Replay:</b> Stores the agent's experiences in a replay buffer and samples them randomly during training.</li>
          <li><b>Target Network:</b> Uses a separate target network to calculate the target Q-values, which helps to stabilize training.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          Deep Q-Networks have several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can handle high-dimensional state spaces.</li>
          <li>Can learn complex policies.</li>
          
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          Deep Q-Networks also have some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can be computationally expensive to train.</li>
          <li>Can be sensitive to hyperparameter tuning.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default DQNPage;

