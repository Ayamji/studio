const DecisionTreesPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Decision Trees</h1>
      <p className="text-lg mb-4">
        Decision Trees are a non-parametric supervised learning method used for classification and regression.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Node: A test on an attribute.</li>
          <li>Branch: Represents an outcome of the test.</li>
          <li>Leaf: Represents a class label or a decision.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Decision trees are used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Medical Diagnosis: Diagnosing diseases based on symptoms.</li>
          <li>Credit Risk Assessment: Evaluating the creditworthiness of loan applicants.</li>
          <li>Customer Churn Prediction: Predicting which customers are likely to leave.</li>
        </ul>
      </section>
    </div>
  );
};

export default DecisionTreesPage;
