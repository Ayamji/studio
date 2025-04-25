const LogisticRegressionPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Logistic Regression</h1>
      <p className="text-lg mb-4">
        Logistic Regression is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Dependent Variable: The variable we want to predict (binary outcome).</li>
          <li>Independent Variables: The variables we use to make predictions.</li>
          <li>Sigmoid Function: The function used to map predicted values to probabilities.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Logistic regression is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Marketing: Predicting whether a customer will purchase a product.</li>
          <li>Healthcare: Determining the likelihood of a patient developing a disease.</li>
          <li>Finance: Assessing the risk of loan default.</li>
        </ul>
      </section>
    </div>
  );
};

export default LogisticRegressionPage;
