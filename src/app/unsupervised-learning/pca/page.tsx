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
          <li>Principal Components: The new variables that are uncorrelated and capture the most variance in the data.</li>
          <li>Eigenvalues: The amount of variance explained by each principal component.</li>
          <li>Eigenvectors: The direction of each principal component.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          PCA is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Image Processing: Reducing the dimensionality of images.</li>
          <li>Finance: Analyzing stock market data.</li>
          <li>Genetics: Identifying genes that are associated with diseases.</li>
        </ul>
      </section>
    </div>
  );
};

export default PCAPage;
