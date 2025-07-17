
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Quote, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  relationship: string;
}

export const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Rajesh Sharma',
      rating: 5,
      comment: 'Excellent school with dedicated teachers. My child has shown remarkable improvement in both academics and character development.',
      date: '2024-01-15',
      relationship: 'Parent'
    },
    {
      id: '2',
      name: 'Sita Paudel',
      rating: 5,
      comment: 'The holistic approach to education here is truly commendable. The teachers are caring and professional.',
      date: '2024-01-10',
      relationship: 'Parent'
    },
    {
      id: '3',
      name: 'Krishna Thapa',
      rating: 4,
      comment: 'Good infrastructure and learning environment. The school focuses on overall personality development.',
      date: '2024-01-05',
      relationship: 'Guardian'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    relationship: 'Parent'
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '', relationship: 'Parent' });
    setShowForm(false);
    toast({
      title: "Review Submitted!",
      description: "Thank you for your valuable feedback."
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reviews & Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">What our school community says about us</p>
        </div>

        {/* Rating Summary */}
        <Card className="p-8 mb-12 max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-50 to-green-50">
          <div className="flex items-center justify-center mb-4">
            {renderStars(Math.round(averageRating))}
            <span className="ml-3 text-2xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-600">Based on {reviews.length} reviews</p>
        </Card>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.relationship}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {review.comment}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Add Review Button/Form */}
        <div className="text-center">
          {!showForm ? (
            <Button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Write a Review
            </Button>
          ) : (
            <Card className="p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship
                    </label>
                    <select
                      value={newReview.relationship}
                      onChange={(e) => setNewReview({...newReview, relationship: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Parent">Parent</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Student">Student</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          } hover:text-yellow-400 transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review *
                  </label>
                  <Textarea
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    placeholder="Share your thoughts about the school..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
