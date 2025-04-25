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
          <li>Dendrogram: A tree-like diagram that shows the hierarchy of clusters.</li>
          <li>Agglomerative: A bottom-up approach that starts with each data point as a separate cluster and merges them until a single cluster is formed.</li>
          <li>Divisive: A top-down approach that starts with all data points in a single cluster and splits them until each data point is a separate cluster.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Hierarchical clustering is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Bioinformatics: Grouping genes and proteins based on their expression patterns.</li>
          <li>Market Research: Identifying market segments based on customer characteristics.</li>
          <li>Social Network Analysis: Discovering communities in social networks.</li>
        </ul>
      </section>
    </div>
  );
};

export default HierarchicalClusteringPage;
