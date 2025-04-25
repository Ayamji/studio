
const HierarchicalClusteringPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Hierarchical Clustering</h1>
      <p className="text-lg mb-4">
        Hierarchical clustering (also called hierarchical cluster analysis or HCA) is a cluster analysis method that seeks to build a hierarchy of clusters.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Dendrogram:</b> A tree-like diagram that shows the hierarchy of clusters.</li>
          <li><b>Agglomerative:</b> A bottom-up approach that starts with each data point as a separate cluster and merges them until a single cluster is formed.</li>
          <li><b>Divisive:</b> A top-down approach that starts with all data points in a single cluster and splits them until each data point is a separate cluster.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          Hierarchical clustering is used because:
        </p>
        <ul className="list-disc list-inside">
          <li>It does not require the number of clusters to be specified in advance.</li>
          <li>It provides a hierarchy of clusters, which can be useful for understanding the structure of the data.</li>
          
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          Hierarchical clustering also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It can be computationally expensive to cluster large datasets.</li>
          <li>It can be sensitive to noise and outliers.</li>
        </ul>
      </section>
    </div>
  );
};

export default HierarchicalClusteringPage;

