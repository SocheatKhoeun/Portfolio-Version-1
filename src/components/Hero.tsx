import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 animate-fade-in">
          
          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Kyoichiro</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Full Stack Developer & UI/UX Designer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-4">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="images/zoro.jpg"
              alt="Profile"
              className="w-full h-80 object-cover border-4 border-primary/30 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
