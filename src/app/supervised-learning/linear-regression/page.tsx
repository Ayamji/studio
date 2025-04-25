const LinearRegressionPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Linear Regression</h1>
      <p className="text-lg mb-4">
        Linear Regression is a linear approach for modelling the relationship between a scalar response and one or more explanatory variables (also known as dependent and independent variables).
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Dependent Variable: The variable we want to predict.</li>
          <li>Independent Variables: The variables we use to make predictions.</li>
          <li>Regression Line: The line that best fits the data, minimizing the distance between actual and predicted values.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Linear regression is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Economics: Predicting consumer spending based on income.</li>
          <li>Finance: Analyzing stock prices and making investment decisions.</li>
          <li>Healthcare: Examining the relationship between risk factors and disease outcomes.</li>
        </ul>
      </section>
    </div>
  );
};

export default LinearRegressionPage;
