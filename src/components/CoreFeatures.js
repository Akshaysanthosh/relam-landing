import React from 'react';
 import { CheckCircleIcon } from '@heroicons/react/24/solid';
 
 const featuresData = {
   title: 'Revenue signals on autopilot',
   subtitle: 'Stop tab hopping—get every trigger in Slack.',
   features: [
     {
       id: 'real-time-signals',
       label: 'Real‑Time Signals',
       one_liner:
         'Agents scrape 30 sources hourly to surface launches, funding, and hiring signals—no manual searches.',
       micro_bullets: ['Monitors 30 sources hourly', 'Dedupes and ranks relevance'],
     },
     {
       id: 'workflow-integrations',
       label: 'Workflow Integrations',
       one_liner:
         'Push insights to Slack, HubSpot, and Notion so reps react inside the tools they already use.',
       micro_bullets: ['OAuth connects in minutes', 'No code or scripts'],
     },
     {
       id: 'auto-battlecards',
       label: 'Auto‑Updated Battlecards',
       one_liner:
         'Positioning docs refresh nightly with new wins, losses, and competitor moves—never email for slides again.',
       micro_bullets: ['Exports PDF and Markdown', 'Syncs to Google Drive'],
     },
     {
       id: 'just-in-time-alerts',
       label: 'Just‑In‑Time Alerts',
       one_liner:
         'SignalLake pings reps before calls with concise, role‑specific digests that boost win rates.',
       micro_bullets: ['Arrives 1 hour pre‑call', 'Sent to email or Slack'],
     },
   ],
 };
 
 /* ──────────────────────────────────────────────────────────── */
 
 export default function CoreFeatures() {
   return (
     <section id="core-features" className="bg-[#0B0E1C] py-28 md:py-32">
       <div className="max-w-[1200px] mx-auto px-6 text-center">
         {/* Heading */}
         <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-tight bg-gradient-to-r from-[#7B5FFF] via-[#6B65FF] to-[#A855F7] bg-clip-text text-transparent mb-4">
           {featuresData.title}
         </h2>
         <p className="text-lg text-[#B5B8D3] mb-16">{featuresData.subtitle}</p>
 
         {/* Feature Grid */}
         <div className="grid gap-8 md:grid-cols-2 [&>*]:h-full">
           {featuresData.features.map(
             ({ id, label, one_liner, micro_bullets }) => (
               <div
                 key={id}
                 className="flex flex-col gap-6 bg-[#141827] rounded-2xl p-8 border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-lg transition"
               >
                 <h3 className="text-lg font-semibold text-white tracking-tight">
                   {label}
                 </h3>
                 <p className="text-sm leading-relaxed text-[#C4C6D8]">
                   {one_liner}
                 </p>
 
                 {/* Bullets */}
                 <ul className="mt-auto space-y-3">
                   {micro_bullets.map((item) => (
                     <li key={item} className="flex items-start gap-2">
                       <CheckCircleIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                       <span className="text-sm text-[#E6E7F1]">{item}</span>
                     </li>
                   ))}
                 </ul>
 
               </div>
             ),
           )}
         </div>
       </div>
     </section>
   );
 }