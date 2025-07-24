import { serve } from "inngest/next";
import { createUserOrder, inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero fun
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder
  ],
});