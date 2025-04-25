const GlossaryPage = () => {
  const terms = [
    { term: "Machine Learning", definition: "A field of AI that focuses on algorithms that learn from data." },
    { term: "Supervised Learning", definition: "Learning from labeled data." },
    { term: "Unsupervised Learning", definition: "Discovering patterns in unlabeled data." },
    { term: "Reinforcement Learning", definition: "Learning through interaction with an environment." },
    { term: "Neural Network", definition: "A set of algorithms modeled loosely after the human brain." },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Glossary of Machine Learning Terms</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {terms.map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            <h3 className="text-xl font-semibold mb-2">{item.term}</h3>
            <p className="text-sm text-muted-foreground">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryPage;
