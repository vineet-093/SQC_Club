import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { ClubAchievements } from '@/entities';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<ClubAchievements[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAchievements();
  }, []);

  const loadAchievements = async () => {
    try {
      const result = await BaseCrudService.getAll<ClubAchievements>('achievements');
      setAchievements(result.items);
    } catch (error) {
      console.error('Error loading achievements:', error);
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
              <span className="text-accentcyan">RECOGNITION</span>
            </h1>
            <p className="font-paragraph text-lg text-secondary/60 max-w-2xl">
              Milestones and accolades that define our journey of intellectual excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="min-h-[600px]">
            {isLoading ? null : achievements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-secondary/5 border border-secondary/10 overflow-hidden hover:border-accentcyan/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 bg-primary overflow-hidden">
                      {achievement.achievementImage && (
                        <Image 
                          src={achievement.achievementImage}
                          alt={achievement.title || 'Achievement image'}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          width={600}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {achievement.category && (
                        <div className="absolute top-4 right-4 border border-accentcyan text-accentcyan font-paragraph text-xs px-3 py-1 rounded-sm uppercase tracking-wide">
                          {achievement.category}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-heading text-2xl text-secondary mb-4">
                        {achievement.title}
                      </h3>
                      
                      {achievement.awardingBody && (
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-accentcyan flex-shrink-0" />
                          <span className="font-paragraph text-sm text-secondary/70">
                            {achievement.awardingBody}
                          </span>
                        </div>
                      )}
                      
                      {achievement.dateAchieved && (
                        <div className="flex items-center gap-2 mb-6 pb-6 border-b border-secondary/10">
                          <Calendar className="w-4 h-4 text-accentcyan flex-shrink-0" />
                          <span className="font-paragraph text-sm text-secondary/70">
                            {formatDate(achievement.dateAchieved)}
                          </span>
                        </div>
                      )}
                      
                      {achievement.description && (
                        <p className="font-paragraph text-sm text-secondary/60 mb-6 flex-grow leading-relaxed">
                          {achievement.description}
                        </p>
                      )}
                      
                      {achievement.externalLink && (
                        <a 
                          href={achievement.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accentcyan font-paragraph text-xs uppercase tracking-wide hover:text-white transition-colors"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-xl text-secondary/60">
                  No achievements found.
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
