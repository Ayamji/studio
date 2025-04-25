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
          <li>Centroids: The center of each cluster.</li>
          <li>Clusters: Groups of data points that are similar to each other.</li>
          <li>Iterations: The process of assigning data points to clusters and updating the centroids until convergence.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          K-means clustering is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Customer Segmentation: Grouping customers based on their purchasing behavior.</li>
          <li>Image Compression: Reducing the size of images by grouping similar colors.</li>
          <li>Document Clustering: Grouping documents based on their content.</li>
        </ul>
      </section>
    </div>
  );
};

export default KMeansPage;
