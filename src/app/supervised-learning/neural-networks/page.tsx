
const NeuralNetworksPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Neural Networks</h1>
      <p className="text-lg mb-4">
        Neural Networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Neurons: Basic units that perform computations.</li>
          <li>Layers: Collections of neurons organized in a hierarchical structure.</li>
          <li>Weights: Parameters that determine the strength of connections between neurons.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Neural networks are used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Image Recognition: Identifying objects in images.</li>
          <li>Natural Language Processing: Understanding and generating human language.</li>
          <li>Robotics: Controlling robots and enabling them to perform tasks autonomously.</li>
        </ul>
      </section>
    </div>
  );
};

export default NeuralNetworksPage;
