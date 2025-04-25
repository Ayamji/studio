import Link from 'next/link';

const UnsupervisedLearningPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Unsupervised Learning</h1>
      <p className="text-lg mb-4">
        Unsupervised learning involves training a model on an unlabeled dataset to discover patterns and structures.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Goals</h2>
        <ul className="list-disc list-inside">
          <li>Clustering: Grouping similar data points.</li>
          <li>Dimensionality Reduction: Reducing the number of variables.</li>
          <li>Anomaly Detection: Identifying unusual data points.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add cards for each model here */}
          <ModelCard title="K-means Clustering" description="Partitions data into k clusters." href="/unsupervised-learning/kmeans" />
          <ModelCard title="Hierarchical Clustering" description="Builds a hierarchy of clusters." href="/unsupervised-learning/hierarchical-clustering" />
          <ModelCard title="Principal Component Analysis (PCA)" description="Reduces dimensionality by finding principal components." href="/unsupervised-learning/pca" />
          <ModelCard title="t-SNE" description="Reduces dimensionality for visualization." href="/unsupervised-learning/tsne" />
          <ModelCard title="DBSCAN" description="Finds density-based clusters." href="/unsupervised-learning/dbscan" />
          <ModelCard title="Autoencoders" description="Learns compressed data representations." href="/unsupervised-learning/autoencoders" />
        </div>
      </section>
    </div>
  );
};

const ModelCard = ({ title, description, href }: { title: string; description: string; href: string }) => {
  return (
    <div className="border rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default UnsupervisedLearningPage;
