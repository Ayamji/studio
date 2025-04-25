

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
          <li><b>Encoder:</b> Compresses the input data into a lower-dimensional representation.</li>
          <li><b>Decoder:</b> Reconstructs the original input data from the compressed representation.</li>
          <li><b>Bottleneck:</b> The layer with the lowest dimensionality, which forces the network to learn the most important features of the data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <p className="text-lg mb-4">
         Autoencoders are used because they have some advantages:
        </p>
        <ul className="list-disc list-inside">
          <li>They can be used for dimensionality reduction.</li>
          <li>They can be used for anomaly detection.</li>
          <li>They can be used for image denoising.</li>
        </ul>
      </section>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
        <p className="text-lg mb-4">
         Autoencoders also have some disadvantages:
        </p>
        <ul className="list-disc list-inside">
          <li>They can be computationally expensive to train.</li>
          <li>They can be sensitive to hyperparameter tuning.</li>
          
        </ul>
      </section>
    </div>
  );
};

export default AutoencodersPage;

