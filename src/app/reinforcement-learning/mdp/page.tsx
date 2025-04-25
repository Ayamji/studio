
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
          <li><b>States:</b> The possible situations in which the agent can be.</li>
          <li><b>Actions:</b> The decisions that the agent can make.</li>
          <li><b>Rewards:</b> The feedback signal that the agent receives for its actions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          MDPs are very useful because they have some properties:
        </p>
        <ul className="list-disc list-inside">
          <li>They provide a formal framework for decision-making.</li>
          <li>They can be used to model a wide variety of problems.</li>
          <li>There are many algorithms available to solve MDPs.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          MDPs also have some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>They can be difficult to model complex problems.</li>
          <li>They can be computationally expensive to solve.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default MDPPage;

