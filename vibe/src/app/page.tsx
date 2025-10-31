import { getQueryClient, trpc } from '@/trpc/server'; 
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Client } from './client'; 
import { Suspense } from 'react';
const Page = async () => {
   const queryClient = getQueryClient();
   void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "Amey"}));
   return (
   <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
      <Client />
      </Suspense>
   </HydrationBoundary>
   );
}
export default Page;
