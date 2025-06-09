
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency across all devices and platforms."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine functionality with beautiful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in full-stack web development, with expertise in modern frameworks 
              like React, Node.js, and Python. My journey began with a curiosity about how 
              things work on the web, and it has evolved into a career dedicated to creating 
              meaningful digital experiences.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge through blog posts and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                <p className="text-muted-foreground">50+ Completed</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-200">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
