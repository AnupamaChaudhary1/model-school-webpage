
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, Image, Upload, Lock } from 'lucide-react';

export const Gallery = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const schoolPhotos = [
    {
      src: '/pic-uploads/db708974-9e3f-400b-9a39-5e24f5328f21.png',
      title: 'School Building',
      description: 'Our beautiful three-story school building'
    },
    {
      src: '/pic-uploads/d8d72e5c-48ed-4886-87ab-1165f07c8579.png',
      title: 'School Building Front View',
      description: 'Students gathering at the school entrance'
    },
    {
      src: '/pic-uploads/40a0c33b-1d96-466a-9540-69d81e6846c1.png',
      title: 'Classroom',
      description: 'Interactive learning environment'
    },
    {
      src: '/pic-uploads/28d6b3f7-dedb-402d-a9b7-a4637badc2b8.png',
      title: 'Sports Activities',
      description: 'Karate training and physical education'
    },
    {
      src: '/pic-uploads/8c133eb0-99eb-4026-ae59-6e354781f72c.png',
      title: 'School Events',
      description: 'Students participating in school activities'
    },
    {
      src: '/pic-uploads/45b3ce20-369e-400d-8713-b3ad07cc2b2c.png',
      title: 'Library',
      description: 'Students reading and studying in our library'
    }
  ];

  const AdminUploadCard = ({ type }: { type: 'photo' | 'video' }) => (
    <Card className="p-8 border-2 border-dashed border-border hover:border-primary transition-colors duration-300 cursor-pointer group bg-gradient-to-br from-muted/50 to-card">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800/30 transition-colors duration-300">
          <Lock className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h3 className="text-lg font-medium text-card-foreground mb-2">Admin Only</h3>
        <p className="text-muted-foreground mb-4">Only administrators can upload {type}s</p>
        {isAdmin ? (
          <Button className="bg-primary hover:bg-primary/90">
            <Upload className="w-4 h-4 mr-2" />
            Upload {type === 'photo' ? 'Photos' : 'Videos'}
          </Button>
        ) : (
          <Button disabled className="bg-muted">
            <Lock className="w-4 h-4 mr-2" />
            Admin Access Required
          </Button>
        )}
      </div>
    </Card>
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">School Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">Explore our school through photos and videos</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => {
              setShowPhotos(!showPhotos);
              setShowVideos(false);
            }}
            variant={showPhotos ? "default" : "outline"}
            size="lg"
            className="flex items-center gap-2"
          >
            <Image className="w-5 h-5" />
            {showPhotos ? 'Hide Photos' : 'View Photos'}
          </Button>
          <Button
            onClick={() => {
              setShowVideos(!showVideos);
              setShowPhotos(false);
            }}
            variant={showVideos ? "default" : "outline"}
            size="lg"
            className="flex items-center gap-2"
          >
            <Video className="w-5 h-5" />
            {showVideos ? 'Hide Videos' : 'View Videos'}
          </Button>
        </div>

        {/* Photos Section */}
        {showPhotos && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">School Photos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AdminUploadCard type="photo" />
              {schoolPhotos.map((photo, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{ imageRendering: 'crisp-edges' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-card-foreground mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {showVideos && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">School Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AdminUploadCard type="video" />
              <Card className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-card rounded-lg flex items-center justify-center mb-3 shadow-inner">
                  <Video className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">School Virtual Tour</h3>
                <p className="text-sm text-muted-foreground">Complete walkthrough of our facilities</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-700 dark:to-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-card rounded-lg flex items-center justify-center mb-3 shadow-inner">
                  <Video className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Student Performances</h3>
                <p className="text-sm text-muted-foreground">Annual cultural programs and events</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-card rounded-lg flex items-center justify-center mb-3 shadow-inner">
                  <Video className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Sports Activities</h3>
                <p className="text-sm text-muted-foreground">Physical education and sports events</p>
              </Card>
            </div>
          </div>
        )}

        {/* Admin Toggle for Demo */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => setIsAdmin(!isAdmin)}
            variant={isAdmin ? "destructive" : "secondary"}
            size="sm"
          >
            {isAdmin ? "Exit Admin Mode" : "Demo: Enable Admin Mode"}
          </Button>
        </div>
      </div>
    </section>
  );
};
