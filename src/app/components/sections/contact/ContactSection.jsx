import ContactForm from './form/ContactForm';

const ContactSection = () => (
    <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
            <div className="relative">
                <div className="absolute inset-0.5 custom-bg rounded-3xl blur-lg opacity-75"></div>
                <div className="relative bg-gray-900 rounded-3xl p-12">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="custom-bg bg-clip-text text-transparent">
                            Let's Create Together
                        </span>
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
