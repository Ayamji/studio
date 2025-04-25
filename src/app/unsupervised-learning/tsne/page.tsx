

const tSNEPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">t-distributed Stochastic Neighbor Embedding (t-SNE)</h1>
      <p className="text-lg mb-4">
        t-distributed Stochastic Neighbor Embedding (t-SNE) is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Dimensionality Reduction:</b> Reducing the number of variables while preserving the structure of the data.</li>
          <li><b>Visualization:</b> Representing high-dimensional data in a low-dimensional space for visualization purposes.</li>
          <li><b>Non-linear:</b> Capturing non-linear relationships in the data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
         t-SNE is used because
        </p>
        <ul className="list-disc list-inside">
          <li>It can be used to visualize high-dimensional data in a low-dimensional space.</li>
          <li>It can capture non-linear relationships in the data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          t-SNE also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It can be computationally expensive to run.</li>
          <li>It can be sensitive to the choice of parameters.</li>
        </ul>
      </section>
    </div>
  );
};

export default tSNEPage;

