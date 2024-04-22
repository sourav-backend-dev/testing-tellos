// webhooks/app-uninstall.js
import { DeliveryMethod } from "@shopify/shopify-api";
import shopify from "../shopify.js";
import fetch from 'node-fetch';

async function addUninstallWebhookHandler() {
  return await shopify.api.webhooks.addHandlers({
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/api/webhooks/app-uninstall",
      callback: async (topic, shop) => {
        console.log("hello world"); // Add this line to print "hello world"
        // Make HTTP request to the specified API endpoint
        try {
            const response = await fetch(`https://tellos-xyz.link/shopify/uninstall?shop=${shop}`);
            if (!response.ok) {
              throw new Error('Failed to hit the API endpoint');
            }
            console.log("API endpoint hit successfully");
          } catch (error) {
            console.error("Error hitting API endpoint:", error);
          }
      },
    },
  });
}

export default addUninstallWebhookHandler;
