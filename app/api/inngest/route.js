import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
  createUserOrder,
} from "@/config/inngest";

export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder,
  ],
});
