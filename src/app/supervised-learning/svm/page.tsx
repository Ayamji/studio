const SVMPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Support Vector Machines (SVM)</h1>
      <p className="text-lg mb-4">
        Support Vector Machines (SVM) are a set of supervised learning methods used for classification, regression and outliers detection.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Hyperplane: The decision boundary that separates data points.</li>
          <li>Support Vectors: The data points closest to the hyperplane.</li>
          <li>Kernel: A function that maps data to a higher-dimensional space where it can be easily separated.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          SVMs are used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Image Recognition: Classifying images based on their content.</li>
          <li>Text Categorization: Categorizing text documents into different topics.</li>
          <li>Bioinformatics: Identifying genes and proteins associated with diseases.</li>
        </ul>
      </section>
    </div>
  );
};

export default SVMPage;
