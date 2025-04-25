
const ActorCriticMethodsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Actor-Critic Methods</h1>
      <p className="text-lg mb-4">
       Actor-Critic methods are a type of reinforcement learning algorithm that combines the strengths of both value-based and policy-based methods. They consist of two main components:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Actor:</b> Represents the policy and decides which action to take in a given state.</li>
          <li><b>Critic:</b> Evaluates the action taken by the actor and provides feedback.</li>
          
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
         Actor-critic methods have several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can handle continuous action spaces.</li>
          <li>Can learn stochastic policies.</li>
          <li>Can be more sample efficient than policy gradient methods.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
         Actor-critic methods also have some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can be more complex to implement than value-based methods.</li>
          <li>Can be sensitive to hyperparameter tuning.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default ActorCriticMethodsPage;

