export interface AlbumInfo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface AlbumContext {
    albumInfos: any;
    albumPage: number;
    isLoading: boolean;
    reorderAlbum: () => void;
    prevPage: () => void;
    nextPage: () => void;
}