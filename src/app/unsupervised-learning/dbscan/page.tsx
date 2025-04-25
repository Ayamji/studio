

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
          <li><b>Core Points:</b> Points with a minimum number of neighbors within a given radius.</li>
          <li><b>Border Points:</b> Points that are within the radius of a core point but do not have enough neighbors to be core points themselves.</li>
          <li><b>Noise Points:</b> Points that are neither core points nor border points.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
          DBSCAN is used because:
        </p>
        <ul className="list-disc list-inside">
          <li>It does not require the number of clusters to be specified in advance.</li>
          <li>It can find clusters of arbitrary shape.</li>
          <li>It is robust to outliers.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
          DBSCAN also has some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>It can be sensitive to the choice of parameters.</li>
          <li>It can be difficult to cluster data with varying densities.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default DBSCANPage;

