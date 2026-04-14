import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Pricing data kept for future use
const ecoUvPricing = [
  { material: "Flex Black Back", rate: "25.00/-" },
  { material: "Vinyl Sticker (Glossy/Matt)", rate: "30.00/-" },
  { material: "Vinyl Sticker - 3 Layer", rate: "40.00/-" },
  { material: "Star Flex", rate: "30.00/-" },
  { material: "Star Flex Black Back", rate: "35.00/-" },
  { material: "Fabric", rate: "35.00/-" },
  { material: "Clear Vinyl", rate: "35.00/-" },
  { material: "Clear Vinyl - 3 Layer", rate: "45.00/-" },
  { material: "Grayback Vinyl", rate: "35.00/-" },
  { material: "Grayback Vinyl - 3 Layer", rate: "45.00/-" },
  { material: "Wallpaper Non Adhesive", rate: "40.00/-" },
  { material: "Star BackLite", rate: "45.00/-" },
  { material: "Star BackLite - 3 Layer", rate: "55.00/-" },
  { material: "One Way Vision", rate: "45.00/-" },
  { material: "Retro Vinyl", rate: "65.00/-" },
  { material: "Redium Vinyl", rate: "65.00/-" },
  { material: "Translite Film", rate: "60.00/-" },
  { material: "Translite Film - 3 Layer", rate: "70.00/-" },
  { material: "Lamination (Glossy/Matt)", rate: "10.00/-" },
];

const generalPricing = [
  { material: "Flex", rate: "08.00/-" },
  { material: "Flex Black Back", rate: "12.00/-" },
  { material: "Star Flex", rate: "17.00/-" },
  { material: "Star Flex Black Back", rate: "20.00/-" },
  { material: "Vinyl Sticker", rate: "18.00/-" },
  { material: "Star BackLite", rate: "35.00/-" },
  { material: "Fabric", rate: "25.00/-" },
  { material: "One Way Vision", rate: "35.00/-" },
  { material: "Vinyl + Foam Sheet 3mm", rate: "60.00/-" },
  { material: "Vinyl + Foam Sheet 5mm", rate: "70.00/-" },
  { material: 'Box Pipe Frame 1"', rate: "25.00/-" },
  { material: 'Box Pipe Heavy Frame 1"', rate: "32.00/-" },
  { material: 'Plastic Pipe 0.50" Up Down', rate: "15.00/-" },
  { material: "Glow Sign Board", rate: "300/350" },
  { material: "Standy 5 x 2", rate: "1,150/-" },
  { material: "Standy 6 x 3", rate: "1,250/-" },
  { material: "Canopy (4 x 4 x 7)", rate: "2,800/-" },
  { material: "Canopy (6 x 6 x 7)", rate: "3,200/-" },
];

const ecoUvMaterials = ecoUvPricing.map((item) => item.material);
const generalMaterials = generalPricing.map((item) => item.material);

const MaterialList = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/40 hover:bg-accent/10 transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <span className="text-foreground font-body text-sm">{item}</span>
      </div>
    ))}
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A wide range of printing materials and signage solutions to meet your needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary">
              <TabsTrigger
                value="general"
                className="font-heading font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                General Printing
              </TabsTrigger>
              <TabsTrigger
                value="ecouv"
                className="font-heading font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Eco UV Print
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <MaterialList items={generalMaterials} />
            </TabsContent>
            <TabsContent value="ecouv">
              <MaterialList items={ecoUvMaterials} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
