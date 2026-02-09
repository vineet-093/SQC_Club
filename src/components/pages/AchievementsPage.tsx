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
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 bg-primary">
        <div className="max-w-[120rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-primaryForeground mb-6">
              Our <span className="text-accentcyan">Achievements</span>
            </h1>
            <p className="font-paragraph text-xl text-primaryForeground/90 max-w-3xl">
              Celebrating our milestones, awards, and recognition in the world of quantitative finance and technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : achievements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-secondary rounded-lg overflow-hidden border border-primary/10 hover:border-accentcyan transition-colors"
                  >
                    <div className="relative h-64 bg-primary">
                      {achievement.achievementImage && (
                        <Image 
                          src={achievement.achievementImage}
                          alt={achievement.title || 'Achievement image'}
                          className="w-full h-full object-cover"
                          width={600}
                        />
                      )}
                      {achievement.category && (
                        <div className="absolute top-4 right-4 bg-accentcyan text-primary font-paragraph text-sm px-4 py-2 rounded-full">
                          {achievement.category}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <h3 className="font-heading text-3xl text-secondaryForeground mb-4">
                        {achievement.title}
                      </h3>
                      
                      {achievement.awardingBody && (
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-5 h-5 text-accentcyan" />
                          <span className="font-paragraph text-base text-secondaryForeground/80">
                            {achievement.awardingBody}
                          </span>
                        </div>
                      )}
                      
                      {achievement.dateAchieved && (
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className="w-5 h-5 text-accentcyan" />
                          <span className="font-paragraph text-base text-secondaryForeground/80">
                            {formatDate(achievement.dateAchieved)}
                          </span>
                        </div>
                      )}
                      
                      {achievement.description && (
                        <p className="font-paragraph text-base text-secondaryForeground/80 mb-6">
                          {achievement.description}
                        </p>
                      )}
                      
                      {achievement.externalLink && (
                        <a 
                          href={achievement.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accentcyan font-paragraph text-base hover:underline"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-xl text-secondaryForeground/60">
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
