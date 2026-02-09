import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Members } from '@/entities';

export default function MembersPage() {
  const [members, setMembers] = useState<Members[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const result = await BaseCrudService.getAll<Members>('members');
      setMembers(result.items);
    } catch (error) {
      console.error('Error loading members:', error);
    } finally {
      setIsLoading(false);
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
              Our <span className="text-accentcyan">Team</span>
            </h1>
            <p className="font-paragraph text-xl text-primaryForeground/90 max-w-3xl">
              Meet the brilliant minds driving innovation in quantitative finance and algorithmic trading.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : members.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {members.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-secondary rounded-lg overflow-hidden border border-primary/10 hover:border-accentcyan transition-colors"
                  >
                    <div className="relative h-80 bg-primary">
                      {member.profileImage && (
                        <Image 
                          src={member.profileImage}
                          alt={member.memberName || 'Member photo'}
                          className="w-full h-full object-cover"
                          width={400}
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl text-secondaryForeground mb-2">
                        {member.memberName}
                      </h3>
                      {member.rolePosition && (
                        <p className="font-paragraph text-base text-accentcyan mb-4">
                          {member.rolePosition}
                        </p>
                      )}
                      {member.bio && (
                        <p className="font-paragraph text-base text-secondaryForeground/80 mb-4">
                          {member.bio}
                        </p>
                      )}
                      {member.skills && (
                        <div className="mb-4">
                          <h4 className="font-heading text-sm text-secondaryForeground mb-2">Skills</h4>
                          <p className="font-paragraph text-sm text-secondaryForeground/70">
                            {member.skills}
                          </p>
                        </div>
                      )}
                      {member.projects && (
                        <div>
                          <h4 className="font-heading text-sm text-secondaryForeground mb-2">Projects</h4>
                          <p className="font-paragraph text-sm text-secondaryForeground/70">
                            {member.projects}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-xl text-secondaryForeground/60">
                  No members found.
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
