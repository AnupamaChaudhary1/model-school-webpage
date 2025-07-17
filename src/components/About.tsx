
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Award, Heart, Target, Globe, GraduationCap, MapPin } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Complete Education',
      description: 'Comprehensive curriculum from Playgroup to Class 10 with modern teaching methodologies.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Well Qualified Faculty',
      description: 'Highly experienced and professionally trained teachers dedicated to student excellence.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Best in Dang',
      description: 'Recognized as one of the finest educational institutions in Dang district.',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Student Friendly',
      description: 'Nurturing and supportive environment that prioritizes student comfort and growth.',
      color: 'red'
    },
    {
      icon: Target,
      title: 'Excellent Facilities',
      description: 'Modern infrastructure with well-equipped classrooms, library, and recreational areas.',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Peaceful Environment',
      description: 'Serene location in Narayanpur providing an ideal atmosphere for focused learning.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-600 to-blue-700 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'from-green-600 to-green-700 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      orange: 'from-orange-600 to-orange-700 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      red: 'from-red-600 to-red-700 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      purple: 'from-purple-600 to-purple-700 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      indigo: 'from-indigo-600 to-indigo-700 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Our School</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-10 bg-gradient-to-r from-blue-50 via-card to-green-50 dark:from-blue-950/30 dark:via-card dark:to-green-950/30 border-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-green-600"></div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">The Best School in Dang</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-blue-600 dark:text-blue-400">Model English Boarding School</strong> stands as the premier educational institution in Dang, 
                offering comprehensive education from <strong className="text-green-600 dark:text-green-400">Playgroup to Class 10</strong>. 
                Established in <strong className="text-orange-600 dark:text-orange-400">2057 B.S.</strong> and located in the peaceful environment of 
                <strong className="text-purple-600 dark:text-purple-400"> Narayanpur, Dang</strong>, we have earned our reputation through excellence in education.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">600+</h4>
                  <p className="text-sm text-muted-foreground">Students Enrolled</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="text-2xl font-bold text-green-600 dark:text-green-400">Playgroup-10</h4>
                  <p className="text-sm text-muted-foreground">Class Range</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
                  <h4 className="text-2xl font-bold text-orange-600 dark:text-orange-400">#1</h4>
                  <p className="text-sm text-muted-foreground">School in Dang</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const [gradientClass, bgClass, textClass] = colorClasses.split(' ');
            
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-border shadow-lg bg-gradient-to-br from-card to-muted/30"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${gradientClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="p-10 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 dark:from-green-950/30 dark:via-blue-950/30 dark:to-green-950/30 border-border shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-600 to-blue-600"></div>
            <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide the finest quality education in Dang district, fostering academic excellence while nurturing character, 
              creativity, and critical thinking skills in our 600+ students. We are committed to creating a student-friendly environment 
              with excellent facilities and a peaceful atmosphere that enables every child to reach their full potential.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold shadow-lg">
                Nurturing Minds, Shaping Futures
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
