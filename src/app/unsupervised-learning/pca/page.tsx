
const PCAPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Principal Component Analysis (PCA)</h1>
      <p className="text-lg mb-4">
        Principal Component Analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Principal Components:</b> The new variables that are uncorrelated and capture the most variance in the data.</li>
          <li><b>Eigenvalues:</b> The amount of variance explained by each principal component.</li>
          <li><b>Eigenvectors:</b> The direction of each principal component.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          PCA is used because:
        </p>
        <ul className="list-disc list-inside">
          <li>It can reduce the dimensionality of data.</li>
          <li>It can identify the most important variables in a dataset.</li>
          <li>It can be used to improve the performance of machine learning algorithms.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          PCA also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It can be difficult to interpret the principal components.</li>
          <li>It can be sensitive to outliers.</li>
        </ul>
      </section>
    </div>
  );
};

export default PCAPage;

