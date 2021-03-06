import secrets from './secrets';

export default {
    caption: `
        <a href="https://help.track.guide">Help</a> |
        <a href="https://about.track.guide">About</a> |
        <a href="mailto:info@track.guide" target="_self">info@track.guide</a>`,
    defaultLocation: [-27.43882, 153.15731],
    defaultZoom: 10,
    googleApiUrl: `https://maps.googleapis.com/maps/api/js?v=3&key=${secrets.google}`,
    westraDataBaseUrl: 'https://nakarte.me/westraPasses/',
    CORSProxyUrl: 'https://proxy.nakarte.me/',
    elevationsServer: 'https://elevation.nakarte.me/',
    wikimediaCommonsCoverageUrl: 'https://tiles.nakarte.me/wikimedia_commons_images/{z}/{x}/{y}',
    geocachingSuUrl: 'https://nakarte.me/geocachingSu/geocaching_su2.json',
    tracksStorageServer: 'https://tracks.nakarte.me',
    ...secrets
};
