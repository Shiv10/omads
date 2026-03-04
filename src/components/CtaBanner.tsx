const CtaBanner = () => {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-background mb-4">
          Need us to help you on your project?
        </h2>
        <p className="text-background/70 font-body mb-8 max-w-lg mx-auto">
          Request a quote describing your project requirements now to get
          estimates.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-md font-heading font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
