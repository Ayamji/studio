
const KMeansPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">K-means Clustering</h1>
      <p className="text-lg mb-4">
        K-means Clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid), serving as a prototype of the cluster.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li><b>Centroids:</b> The center of each cluster.</li>
          <li><b>Clusters:</b> Groups of data points that are similar to each other.</li>
          <li><b>Iterations:</b> The process of assigning data points to clusters and updating the centroids until convergence.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          K-means clustering is used because of the following reasons:
        </p>
        <ul className="list-disc list-inside">
          <li>It is a simple algorithm to implement.</li>
          <li>It is relatively efficient for clustering large datasets.</li>
          <li>It is guaranteed to converge to a local optimum.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          K-means clustering also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It requires the number of clusters to be specified in advance.</li>
          <li>It can be sensitive to the initial placement of the centroids.</li>
          <li>It can be difficult to cluster data with non-convex shapes.</li>
        </ul>
      </section>
    </div>
  );
};

export default KMeansPage;

