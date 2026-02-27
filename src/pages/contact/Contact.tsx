import Layout from "@/components/layout";
import ContactSection from "@/components/contact-section";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <Layout 
      title="Contact | Steve Nene" 
      description="Get in touch with Steve Nene for collaborations, job opportunities, or just to say hi"
    >
      <SEO
        title="Contact Steve Nene | Get in Touch"
        description="Contact Steve Nene for software development projects, collaborations, or job opportunities. Let's build something great together."
        keywords="contact, hire developer, software developer contact, collaboration"
        url="https://stevenene.top/contact"
      />
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Get in touch with me for collaborations, job opportunities, or just to say hi!
          </p>
          
          <ContactSection />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
