
const AutoencodersPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Autoencoders</h1>
      <p className="text-lg mb-4">
        Autoencoders are a type of artificial neural network used to learn efficient codings of unlabeled data.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Encoder: Compresses the input data into a lower-dimensional representation.</li>
          <li>Decoder: Reconstructs the original input data from the compressed representation.</li>
          <li>Bottleneck: The layer with the lowest dimensionality, which forces the network to learn the most important features of the data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <p className="text-lg mb-4">
          Autoencoders are used in various fields, such as:
        </p>
        <ul className="list-disc list-inside">
          <li>Dimensionality Reduction: Reducing the number of variables while preserving the structure of the data.</li>
          <li>Anomaly Detection: Identifying outliers in data.</li>
          <li>Image Denoising: Removing noise from images.</li>
        </ul>
      </section>
    </div>
  );
};

export default AutoencodersPage;
