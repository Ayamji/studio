
const PolicyGradientMethodsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Policy Gradient Methods</h1>
      <p className="text-lg mb-4">
       Policy Gradient Methods optimizes the policy directly
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Policy:</b> A function that maps states to actions.</li>
          <li><b>REINFORCE:</b> A Monte Carlo policy gradient algorithm.</li>
          
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          Policy gradient methods have several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can handle continuous action spaces.</li>
          <li>Can learn stochastic policies.</li>
          <li>Can be more sample efficient than value-based methods.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          Policy gradient methods also have some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>Can be more complex to implement than value-based methods.</li>
          <li>Can be sensitive to hyperparameter tuning.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default PolicyGradientMethodsPage;

