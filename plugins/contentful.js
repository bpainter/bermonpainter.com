// plugins/contentful.js
import { createClient } from 'contentful';

export default defineNuxtPlugin((nuxtApp) => {
  const { public: publicConfig } = useRuntimeConfig();

  const config = {
    space: publicConfig.contentfulSpaceId,
    accessToken: publicConfig.contentfulAccessToken
  };

  console.log("contentful.js -----------------------------------");
  console.log("space", config.space);
  console.log("token", config.accessToken);

  if (!config.accessToken || !config.space) {
    console.error('Contentful configuration error: Missing space ID or access token');
    return;
  }

  const client = createClient(config);

  // Make Contentful available in the context
  nuxtApp.provide('contentful', client);
});
