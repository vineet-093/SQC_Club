/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: achievements
 * Interface for ClubAchievements
 */
export interface ClubAchievements {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  dateAchieved?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  achievementImage?: string;
  /** @wixFieldType text */
  awardingBody?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType url */
  externalLink?: string;
}


/**
 * Collection ID: activities
 * Interface for Activities
 */
export interface Activities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  activityTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  activityDate?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  activityImage?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  eventType?: string;
}


/**
 * Collection ID: members
 * Interface for Members
 */
export interface Members {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  memberName?: string;
  /** @wixFieldType text */
  rolePosition?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType text */
  skills?: string;
  /** @wixFieldType text */
  projects?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  profileImage?: string;
}
