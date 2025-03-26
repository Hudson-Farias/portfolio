export interface SocialNetworkI {
    id: number
    url: string
    icon: 'linkedin' | 'github' | 'gitlab' | 'twitter' | 'instagram'
}


export interface SocialNetworksI {
    social_networks_header: SocialNetworkI[]
    social_networks_footer: SocialNetworkI[]
}
