
const DBSCANPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Density-Based Spatial Clustering of Applications with Noise (DBSCAN)</h1>
      <p className="text-lg mb-4">
        Density-Based Spatial Clustering of Applications with Noise (DBSCAN) is a data clustering algorithm. It is a density-based clustering non-parametric algorithm: given a set of points in some space, it groups together points that are closely packed together (points with many nearby neighbors), marking as outliers points that lie alone in low-density regions.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Core Points: Points with a minimum number of neighbors within a given radius.</li>
          <li>Border Points: Points that are within the radius of a core point but do not have enough neighbors to be core points themselves.</li>
          <li>Noise Points: Points that are neither core points nor border points.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          DBSCAN is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Anomaly Detection: Identifying outliers in data.</li>
          <li>Spatial Data Analysis: Clustering geographic data.</li>
          <li>Image Segmentation: Segmenting images based on pixel density.</li>
        </ul>
      </section>
    </div>
  );
};

export default DBSCANPage;
