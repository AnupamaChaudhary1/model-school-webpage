
import React from 'react';
import { Card } from '@/components/ui/card';

export const Hero = () => {
  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Cover Photo - Using actual school building image */}
        <Card className="mb-8 relative overflow-hidden rounded-2xl shadow-2xl border-0 bg-gradient-to-r from-slate-900/20 to-blue-900/20 dark:from-slate-800/30 dark:to-blue-800/30">
          <div 
            className="h-80 md:h-96 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('/pic-uploads/db708974-9e3f-400b-9a39-5e24f5328f21.png')`,
              imageRendering: 'crisp-edges'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/60 to-slate-900/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
                  Model English Boarding School
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light drop-shadow-md text-blue-100">
                  Nurturing Future Leaders Since 2057 B.S.
                </p>
                <div className="mt-6 px-6 py-3 bg-gradient-to-r from-slate-600/80 to-blue-600/80 backdrop-blur-sm rounded-full inline-block border border-blue-300/30">
                  <p className="text-lg font-medium">"Nurturing Minds, Shaping Futures"</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Welcome Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-900/30 dark:to-slate-800/30">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to one of the finest educational institutions in Dang, where academic excellence meets holistic development. 
              Established in 2057 B.S., we are committed to providing quality education that prepares students for global success.
            </p>
          </div>
          
          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Established</h3>
              <p className="text-card-foreground font-medium">2057 B.S.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-700/50 dark:to-slate-800/50 border-l-4 border-slate-500">
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">Location</h3>
              <p className="text-card-foreground font-medium">Ghorahi-10, Narayanpur, Dang</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Approach</h3>
              <p className="text-card-foreground font-medium">Holistic Education</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
