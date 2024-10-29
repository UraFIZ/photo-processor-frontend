import { Container } from "@/components/ui/Container";
import ImageInput from "@/components/image-processing/ImageInput";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-card py-12 border-b border-border">
          <Container>
            <div className="space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">
                GreenCard Photo Processor
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Remove background and prepare your photo according to official Green Card requirements
              </p>
            </div>
          </Container>
        </div>

        {/* Main Processing Section */}
        <section className="py-12">
          <Container>
            <div className="space-y-8 max-w-3xl mx-auto b-r-10">
              {/* Image Processing Component */}
              <ImageInput />
              
              {/* Requirements Card */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h2 className="text-lg font-semibold text-text-primary mb-4">
                  Photo Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <RequirementItem
                    title="Size Requirements"
                    description="2x2 inches (51x51 mm)"
                  />
                  <RequirementItem
                    title="Picture Quality"
                    description="Recent photo (taken within 6 months)"
                  />
                  <RequirementItem
                    title="Background"
                    description="Plain white or off-white"
                  />
                  <RequirementItem
                    title="Head Position"
                    description="Directly facing the camera"
                  />
                </div>
              </div>

              {/* Features Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text-primary text-center">
                  Why Choose Our Service?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard
                    title="Instant Processing"
                    description="Get your photo processed in seconds"
                    color="primary-light"
                  />
                  <FeatureCard
                    title="Meets Requirements"
                    description="Guaranteed to meet official standards"
                    color="primary-green"
                  />
                  <FeatureCard
                    title="Easy to Use"
                    description="Simple upload and download process"
                    color="primary-rose"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-card border-t border-border">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl font-bold text-text-primary text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <FaqItem
                  question="What size should my photo be?"
                  answer="Your photo must be 2x2 inches (51x51 mm) when printed. Our tool will help you achieve the correct size."
                />
                <FaqItem
                  question="What file formats are accepted?"
                  answer="We accept JPEG and PNG files. Maximum file size is 10MB."
                />
                <FaqItem
                  question="How recent should my photo be?"
                  answer="Your photo must be taken within the last 6 months to meet official requirements."
                />
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <Container>
          <div className="text-center text-text-secondary">
            <p>© 2024 GreenCard Photo Processor. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

// Helper Components
function RequirementItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 bg-background rounded-lg">
      <h3 className="font-medium text-text-primary mb-1">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}

function FeatureCard({ 
  title, 
  description
}: { 
  title: string; 
  description: string;
  color: string;
}) {
  return (
    <Card variant="problem" className="text-center">
      <h3 className="font-semibold text-text-primary">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-border last:border-0 pb-4">
      <h3 className="font-medium text-text-primary mb-2">{question}</h3>
      <p className="text-text-secondary text-sm">{answer}</p>
    </div>
  );
}