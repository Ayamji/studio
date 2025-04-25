import Link from 'next/link';

const SupervisedLearningPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Supervised Learning</h1>
      <p className="text-lg mb-4">
        Supervised learning involves training a model on a labeled dataset, where the desired output is known.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types</h2>
        <ul className="list-disc list-inside">
          <li>Classification: Predicting a category.</li>
          <li>Regression: Predicting a continuous value.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add cards for each model here */}
          <ModelCard title="Linear Regression" description="For regression tasks." href="/supervised-learning/linear-regression" />
          <ModelCard title="Logistic Regression" description="For classification tasks." href="/supervised-learning/logistic-regression" />
          <ModelCard title="Support Vector Machines" description="Effective for classification." href="/supervised-learning/svm" />
          <ModelCard title="Decision Trees" description="Versatile for both types." href="/supervised-learning/decision-trees" />
          <ModelCard title="k-Nearest Neighbors" description="Simple classification algorithm." href="/supervised-learning/knn" />
          <ModelCard title="Neural Networks" description="Complex models for various tasks." href="/supervised-learning/neural-networks" />
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

export default SupervisedLearningPage;
