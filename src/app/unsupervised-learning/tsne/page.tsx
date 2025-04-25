
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
          <li>Dimensionality Reduction: Reducing the number of variables while preserving the structure of the data.</li>
          <li>Visualization: Representing high-dimensional data in a low-dimensional space for visualization purposes.</li>
          <li>Non-linear: Capturing non-linear relationships in the data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          t-SNE is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Bioinformatics: Visualizing gene expression data.</li>
          <li>Natural Language Processing: Visualizing word embeddings.</li>
          <li>Image Processing: Visualizing image features.</li>
        </ul>
      </section>
    </div>
  );
};

export default tSNEPage;
