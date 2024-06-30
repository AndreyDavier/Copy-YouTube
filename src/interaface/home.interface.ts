export interface HomeInterface {
    etag: string,
    items: string
    kind: string
    snippet: {
        channelId: string
        channelTitle: string
        description: string
        playlistId: string
        publishedAt: string
        resourceId: {
            kind: string
            videoId: string
        }
        thumbnails: {
            default: {
                height: number
                url: string
                width: number
            }
            high: {
                height: number
                url: string
                width: number
            }
            maxres: {
                height: number
                url: string
                width: number
            }
            medium: {
                height: number
                url: string
                width: number
            }
            standard: {
                height: number
                url: string
                width: number
            }
        }
        title: string
        videoOwnerChannelId: string
        videoOwnerChannelTitle: string
    }

}


export interface Snippet {
    snippet: {
        channelId: string
        channelTitle: string
        description: string
        playlistId: string
        publishedAt: string
        resourceId: {
            kind: string
            videoId: string
        }
        thumbnails: {
            default: {
                height: number
                url: string
                width: number
            }
            high: {
                height: number
                url: string
                width: number
            }
            maxres: {
                height: number
                url: string
                width: number
            }
            medium: {
                height: number
                url: string
                width: number
            }
            standard: {
                height: number
                url: string
                width: number
            }
        }
        title: string
        videoOwnerChannelId: string
        videoOwnerChannelTitle: string
    }
}
export interface Statistics {
    statistics: {
        commentCount: string
        favoriteCount: string
        likeCount: string
        viewCount: string
    }

}