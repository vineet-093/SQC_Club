import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Activities } from '@/entities';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      const result = await BaseCrudService.getAll<Activities>('activities');
      setActivities(result.items);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Header />
      
      <section className="pt-32 pb-24 bg-primary border-b border-secondary/10">
        <div className="max-w-[120rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl text-secondary mb-6">
              <span className="text-accentcyan">EVENTS</span> & WORKSHOPS
            </h1>
            <p className="font-paragraph text-lg text-secondary/60 max-w-2xl">
              Collaborative experiences that advance quantitative thinking and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="min-h-[600px]">
            {isLoading ? null : activities.length > 0 ? (
              <div className="space-y-24">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    <div className={`group relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative h-96 bg-primary border border-secondary/10 overflow-hidden">
                        {activity.activityImage && (
                          <Image 
                            src={activity.activityImage}
                            alt={activity.activityTitle || 'Activity image'}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            width={800}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      {activity.eventType && (
                        <span className="inline-block border border-accentcyan text-accentcyan font-paragraph text-xs px-4 py-2 rounded-sm mb-6 uppercase tracking-wide">
                          {activity.eventType}
                        </span>
                      )}
                      <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6">
                        {activity.activityTitle}
                      </h2>
                      
                      <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-secondary/10">
                        {activity.activityDate && (
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-accentcyan" />
                            <span className="font-paragraph text-base text-secondary/70">
                              {formatDate(activity.activityDate)}
                            </span>
                          </div>
                        )}
                        {activity.location && (
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-accentcyan" />
                            <span className="font-paragraph text-base text-secondary/70">
                              {activity.location}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {activity.description && (
                        <p className="font-paragraph text-lg text-secondary/60 leading-relaxed mb-8">
                          {activity.description}
                        </p>
                      )}

                      <div className="flex items-center gap-2 text-accentcyan font-paragraph text-sm uppercase tracking-wide">
                        <span>Learn More</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-xl text-secondary/60">
                  No activities found.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
