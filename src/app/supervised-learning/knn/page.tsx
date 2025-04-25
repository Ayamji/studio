const KNNPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">k-Nearest Neighbors (k-NN)</h1>
      <p className="text-lg mb-4">
        k-Nearest Neighbors (k-NN) is a simple algorithm that stores all available cases and classifies new cases based on a similarity measure (e.g., distance functions).
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>k: The number of neighbors to consider.</li>
          <li>Distance Metric: The function used to measure the distance between data points.</li>
          <li>Majority Voting: The class assigned to a new data point is the most frequent class among its k nearest neighbors.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          k-NN is used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Recommender Systems: Recommending products or movies based on user preferences.</li>
          <li>Pattern Recognition: Identifying patterns in data.</li>
          <li>Bioinformatics: Classifying genes and proteins based on their characteristics.</li>
        </ul>
      </section>
    </div>
  );
};

export default KNNPage;
