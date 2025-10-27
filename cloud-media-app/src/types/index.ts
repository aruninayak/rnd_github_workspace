export interface User {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface MediaItem {
    id: string;
    userId: string;
    type: 'photo' | 'video';
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Folder {
    id: string;
    userId: string;
    name: string;
    mediaItems: MediaItem[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Subscription {
    id: string;
    userId: string;
    tier: 'free' | 'pro';
    startDate: Date;
    endDate: Date;
}

export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    signup: (email: string, password: string, name: string) => Promise<void>;
}

export interface MediaContextType {
    mediaItems: MediaItem[];
    addMediaItem: (item: MediaItem) => void;
    removeMediaItem: (id: string) => void;
    syncMedia: () => Promise<void>;
}