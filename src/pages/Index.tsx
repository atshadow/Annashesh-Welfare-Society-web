import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Utensils,
  GraduationCap,
  Stethoscope,
  TreePine,
  Briefcase,
  BarChart,
  Menu,
  X
} from "lucide-react";
import annasheshLogo from "@/assets/annashesh-logo.jpg";
import heroImage from "@/assets/hero-image.jpg";
import foodDistributionImage from "@/assets/food-distribution.jpg";
import educationProgramImage from "@/assets/education-program.jpg";
import healthCampaignImage from "@/assets/health-campaign.jpg";
import plantationDriveImage from "@/assets/plantation-drive.jpg";
import skillTrainingImage from "@/assets/skill-training.jpg";
import communityImpactImage from "@/assets/community-impact.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you soon to discuss how you can help.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const programs = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Surplus Food Rescue",
      description: "Collecting edible leftover food from weddings, parties, and events to distribute to those in need.",
      image: foodDistributionImage
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & After-School Programs",
      description: "Providing quality education and after-school support to underprivileged children.",
      image: educationProgramImage
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Health & Awareness Campaigns",
      description: "Organizing health check-ups and awareness programs for community well-being.",
      image: healthCampaignImage
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Plantation Drives",
      description: "Environmental conservation through community tree plantation and green initiatives.",
      image: plantationDriveImage
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Vocational Skill Training",
      description: "Empowering youth and adults with practical skills for better employment opportunities.",
      image: skillTrainingImage
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Research & Impact Reports",
      description: "Documenting our impact and sharing insights to improve community development.",
      image: communityImpactImage
    }
  ];

  const impactStats = [
    { number: "10,000+", label: "Meals Served", icon: <Utensils className="h-6 w-6" /> },
    { number: "500+", label: "Children Educated", icon: <BookOpen className="h-6 w-6" /> },
    { number: "1,200+", label: "Trees Planted", icon: <Leaf className="h-6 w-6" /> },
    { number: "2,000+", label: "Lives Touched", icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={annasheshLogo} alt="Annashesh Welfare Society Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Annashesh Welfare Society</h1>
                <p className="text-sm text-muted-foreground">Reg. No. 01/01/01/38167/21</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-foreground hover:text-primary transition-colors">
                Impact
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-primary hover:bg-primary-dark">
                Donate
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary">
                  About
                </button>
                <button onClick={() => scrollToSection('programs')} className="text-left text-foreground hover:text-primary">
                  Programs
                </button>
                <button onClick={() => scrollToSection('impact')} className="text-left text-foreground hover:text-primary">
                  Impact
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary">
                  Contact
                </button>
                <Button onClick={() => scrollToSection('contact')} variant="default" className="w-fit bg-primary hover:bg-primary-dark">
                  Donate
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--accent) / 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Turning leftover food into 
              <span className="text-hope"> nourishment</span> and 
              <span className="text-hope"> opportunity</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              From rescuing surplus food to empowering communities through education, health awareness, 
              and sustainable development across Madhya Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg"
                className="bg-hope text-hope-foreground hover:bg-hope/90 px-8 py-4 text-lg font-semibold"
              >
                <Users className="mr-2 h-5 w-5" />
                Volunteer with Us
              </Button>
              <Button 
                onClick={() => scrollToSection('programs')} 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                See Our Programs
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-2 text-hope">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Programs
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work holistically across multiple areas to create lasting positive change in communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-slide-up border-border/50 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                      {program.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that tell the story of hope, transformation, and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-8 border-border/50 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4 text-primary">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Impact Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-warm/10 border-warm/20 overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={foodDistributionImage} 
                  alt="Community Feeding Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm/80 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-hope mr-2" />
                  <h4 className="font-semibold text-foreground">Community Feeding</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Regular distribution of nutritious meals to underprivileged families and children across our service areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-success/10 border-success/20 overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={educationProgramImage} 
                  alt="Education Support Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-success/80 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-primary mr-2" />
                  <h4 className="font-semibold text-foreground">Education Support</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  After-school programs, educational materials, and scholarship support for deserving students.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-earth/10 border-earth/20 overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={plantationDriveImage} 
                  alt="Environmental Action Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/80 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-accent mr-2" />
                  <h4 className="font-semibold text-foreground">Environmental Action</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tree plantation drives and environmental awareness campaigns for a sustainable future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Involved
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in making a difference. Whether you want to volunteer, donate food, or support our cause, we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="How would you like to get involved? Tell us about your availability, skills, or any questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        Rewa, Madhya Pradesh<br />
                        With branches in Bhopal, Jabalpur, Indore
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href="mailto:contact@annashesh.org" className="text-primary hover:text-primary-dark">
                        contact@annashesh.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Follow Us</h4>
                      <a 
                        href="https://www.instagram.com/annashesh_welfare_society" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark"
                      >
                        @annashesh_welfare_society
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Registration Details</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Registered NGO</strong> under Societies Registration Act
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Registration No.:</strong> 01/01/01/38167/21<br />
                    <strong>Government of India</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={annasheshLogo} alt="Annashesh Welfare Society Logo" className="h-10 w-10 bg-white rounded-full p-1" />
                <h3 className="text-xl font-bold">Annashesh Welfare Society</h3>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Transforming surplus food into hope through community development, education, and sustainable programs.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Reg. No. 01/01/01/38167/21 | Government of India
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Food Rescue & Distribution</li>
                <li>Education Support</li>
                <li>Health Awareness</li>
                <li>Environmental Conservation</li>
                <li>Skill Development</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="mailto:contact@annashesh.org" className="hover:text-hope transition-colors">
                    Volunteer Opportunities
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@annashesh.org" className="hover:text-hope transition-colors">
                    Food Donations
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@annashesh.org" className="hover:text-hope transition-colors">
                    Partnership Inquiries
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/annashesh_welfare_society" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-hope transition-colors"
                  >
                    Follow on Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Annashesh Welfare Society. All rights reserved. | 
              <span className="italic"> "अन्न शेष" - Surplus Food, Endless Hope</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;