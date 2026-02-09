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
              THE <span className="text-accentcyan">COLLECTIVE</span>
            </h1>
            <p className="font-paragraph text-lg text-secondary/60 max-w-2xl">
              Meet the minds reshaping quantitative research and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="min-h-[600px]">
            {isLoading ? null : members.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-secondary/5 border border-secondary/10 overflow-hidden hover:border-accentcyan/50 transition-all duration-300"
                  >
                    <div className="relative h-96 bg-primary overflow-hidden">
                      {member.profileImage && (
                        <Image 
                          src={member.profileImage}
                          alt={member.memberName || 'Member photo'}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          width={400}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-2xl text-secondary mb-2">
                        {member.memberName}
                      </h3>
                      {member.rolePosition && (
                        <p className="font-paragraph text-sm text-accentcyan mb-4 uppercase tracking-wide">
                          {member.rolePosition}
                        </p>
                      )}
                      {member.bio && (
                        <p className="font-paragraph text-base text-secondary/60 mb-6 leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                      {member.skills && (
                        <div className="mb-4 pb-4 border-b border-secondary/10">
                          <p className="font-paragraph text-xs text-secondary/50 uppercase tracking-wide mb-2">Skills</p>
                          <p className="font-paragraph text-sm text-secondary/70">
                            {member.skills}
                          </p>
                        </div>
                      )}
                      {member.projects && (
                        <div>
                          <p className="font-paragraph text-xs text-secondary/50 uppercase tracking-wide mb-2">Projects</p>
                          <p className="font-paragraph text-sm text-secondary/70">
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
                <p className="font-paragraph text-xl text-secondary/60">
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
