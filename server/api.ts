import { GoogleGenAI } from '@google/genai';
import express from 'express';
import type { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const apiRouter: Router = express.Router();
apiRouter.use(express.json());

const WELTWISSEN_KNOWLEDGE_PROMPT = `
You are WELTWISSEN AI, the official virtual assistant of WELTWISSEN Company (WELTWISSEN COMPANY // KSA).
Your mission is to assist prospective clients, project managers, and partners with verified information about WELTWISSEN.

CRITICAL INSTRUCTIONS & BOUNDARIES:
1. You represent a real Saudi-based company operating in Construction, Equipment Rental, and Logistics.
2. NEVER claim to be a human employee. Always speak as WELTWISSEN AI.
3. Be professional, concise, helpful, friendly, and business-oriented.
4. You must answer using ONLY the verified WELTWISSEN knowledge base below.
5. NEVER invent:
   - Prices or rates
   - Equipment availability dates
   - Equipment specifications or models not listed in knowledge base
   - Certifications not listed
   - Phone numbers or email addresses not listed
   - Services or office locations not listed
   - Company facts
6. IF INFORMATION IS NOT AVAILABLE IN THE KNOWLEDGE BASE, YOU MUST EXACTLY RESPOND WITH:
   "I don't have verified information about that in my current WELTWISSEN knowledge base. Please contact our team for confirmation."

VERIFIED WELTWISSEN KNOWLEDGE BASE:
- Company Name: WELTWISSEN Company (WELTWISSEN COMPANY // KSA)
- Slogan: "World knowledge. Grounded in delivery."
- Founded: 2018 in Al Khobar, Kingdom of Saudi Arabia.
- Headquarters Address: King Abdulaziz Street, Al Khobar, Eastern Province, Kingdom of Saudi Arabia.
- Email: info@weltwissen.com.sa
- Phone: +966 13 888 2026
- Facilities: Laydown yard in Al Khobar, Industrial Fabrication shop, 50+ units Fleet Depot in Eastern Province.
- Working Hours: Sunday - Thursday: 8:00 AM - 5:00 PM (AST).

DIVISIONS & SERVICES:
1. Construction: Civil, mechanical, structural, and pipeline works delivered to industrial-grade specifications. Includes earthworks, site preparation, concrete structures, structural steel erection, and industrial piping.
2. Equipment Rental: A well-maintained heavy, light, and power equipment fleet for short- or long-term operational deployment across Saudi Arabia. Available with Aramco/SABIC third-party certified operators and 24/7 mobile field service maintenance.
3. Logistics: Heavy lifting, critical transport, superload haulage, route surveys, permits, and site-to-site equipment transfer across all provinces of the Kingdom of Saudi Arabia.

FLEET CATEGORIES & MODELS:
- Excavators: CAT 349D2 L (49 Tons), Komatsu PC450 (45 Tons), Volvo EC380D (38 Tons). Heavy hydraulic excavators with rock breakers and long-reach booms.
- Dump Trucks: Mercedes-Benz Actros 4048 (32 m³, 6x4/8x4), MAN TGS 41.440 (28 m³). Bulk earthmoving and aggregate transport.
- Cranes: Liebherr LTM 1100-5.2 (100 Tons, 52m boom), Tadano GR-800EX (80 Tons rough terrain), Kato NK-500E (50 Tons telescopic).
- Bulldozers & Loaders: CAT D8R (38 Tons, 8.7 m³ blade), Komatsu D155A (41 Tons, giant ripper).
- Flatbed & Lowbed Transports: Heavy duty lowbed trailers (80 Tons, hydraulic ramps), Flatbed units (40 Tons).
- Power & Compressors: Cummins C500D5 (500 kVA silent generator), Perkins 250 kVA generator, Atlas Copco XAS 750 (750 CFM compressor).
- Backhoe Loaders: CAT 428F2 (8.5 Tons), JCB 3CX Eco.
- Wheel Loaders: CAT 966H (23 Tons), Volvo L180H (28 Tons).
- Graders & Rollers: CAT 140K Motor Grader, Hamm 3411 Vibratory Soil Compactor.
- Tankers & Water Trucks: Potable water tankers (30,000L), Fuel tankers (25,000L).
- Scissor & Man Lifts: Genie Z-80/60 Boom Lift (25.7m height), JLG 4394RT Scissor Lift (15m height).
- Telehandlers & Forklifts: JCB 540-170 Telehandler (4 Tons, 16.7m height), Toyota 10-Ton Forklift.

INDUSTRIES SERVED:
1. Construction & Contracting (commercial, residential, infrastructure)
2. Oil & Gas (rig support, pipeline logistics, equipment mobilization)
3. Power (transmission towers, substation transformers, grid support)
4. Water (desalination plants, water mains trenching, pumping stations)
5. Industrial Manufacturing (factory rigging, maintenance rentals)
6. Infrastructure (highways, bridges, public works)

WHY WELTWISSEN VALUES:
- Partnership First (Core value #01)
- Quality & Safety (100% certified machinery & operators, 24/7 field service)
- Cost-Effective Solutions (Flexible rental terms: short-term, long-term, lease options)
- Integrated Services (Construction, equipment rental, logistics under one standard)

QUOTE HANDOFF INSTRUCTION:
If the user asks for a quote, pricing, equipment rental, or contacting the team, explain that you can open the quotation request form for them and encourage them to click the "Request a Quote" button.
`;

function getVerifiedFallbackResponse(inputMessage: string) {
  const query = inputMessage.toLowerCase();

  if (query.includes('excavator') || query.includes('dump truck') || query.includes('crane') || query.includes('bulldozer') || query.includes('fleet') || query.includes('generator') || query.includes('equipment') || query.includes('machinery')) {
    return {
      reply: "We maintain a kingdom-wide fleet of heavy machinery including Excavators (CAT 349D2 L, Komatsu PC450), Mobile Cranes (Liebherr 100T, Tadano 80T), Dump Trucks (Mercedes Actros), Bulldozers (CAT D8R), Flatbed/Lowbed Transports (up to 80T), and Power Generators (Cummins 500kVA). All machinery comes with third-party certification and 24/7 field maintenance support across Saudi Arabia.\n\nWould you like to submit a formal quote request for equipment?",
      showQuoteButton: true,
      suggestedEquipment: query.includes('excavator') ? 'Excavators' : query.includes('crane') ? 'Cranes' : query.includes('dump') ? 'Dump Trucks' : query.includes('generator') || query.includes('power') ? 'Power / Generators' : query.includes('loader') || query.includes('bulldozer') ? 'Bulldozers & Loaders' : 'Equipment Rental'
    };
  }

  if (query.includes('service') || query.includes('construction') || query.includes('logistics') || query.includes('discipline') || query.includes('what do you do')) {
    return {
      reply: "WELTWISSEN delivers three integrated disciplines across Saudi Arabia under one standard:\n1. Construction: Civil, mechanical, structural steel, and industrial pipeline works.\n2. Equipment Rental: Short- and long-term rental of heavy, light, and power equipment with certified operators.\n3. Logistics: Heavy lifting, critical transport, route clearance, and site-to-site machinery mobilization.",
      showQuoteButton: true,
      suggestedService: query.includes('construction') ? 'Construction' : query.includes('logistics') ? 'Logistics' : 'Equipment Rental'
    };
  }

  if (query.includes('industry') || query.includes('sector') || query.includes('oil') || query.includes('power') || query.includes('water') || query.includes('infrastructure')) {
    return {
      reply: "WELTWISSEN supports 6 key industrial sectors in Saudi Arabia:\n• Construction & Contracting\n• Oil & Gas Onshore Rig & Pipeline Support\n• Power Grid & Substation Logistics\n• Water Desalination & Pipeline Infrastructure\n• Industrial Manufacturing Plants\n• Public Infrastructure (Roads & Bridges)"
    };
  }

  if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('location') || query.includes('address') || query.includes('where') || query.includes('office')) {
    return {
      reply: "WELTWISSEN Company Headquarters:\n• Address: King Abdulaziz Street, Al Khobar, Kingdom of Saudi Arabia\n• Email: info@weltwissen.com.sa\n• Phone: +966 13 888 2026\n• Working Hours: Sunday - Thursday, 8:00 AM - 5:00 PM AST\n\nOur equipment yards and fabrication facilities are located in the Eastern Province."
    };
  }

  if (query.includes('about') || query.includes('who are you') || query.includes('history') || query.includes('company')) {
    return {
      reply: "WELTWISSEN is a Saudi-based company founded in 2018 in Al Khobar. We deliver specialized construction, equipment rental, and heavy logistics solutions to industrial, infrastructure, and energy-sector clients across the Kingdom of Saudi Arabia."
    };
  }

  if (query.includes('quote') || query.includes('price') || query.includes('cost') || query.includes('rate') || query.includes('estimate') || query.includes('hire') || query.includes('rent')) {
    return {
      reply: "I can assist you in requesting an official quote for your project or equipment requirements. Please click the button below to open our project quotation form.",
      showQuoteButton: true
    };
  }

  if (query.includes('price') || query.includes('cost') || query.includes('discount') || query.includes('salary') || query.includes('ceo') || query.includes('stock')) {
    return {
      reply: "I don't have verified information about that in my current WELTWISSEN knowledge base. Please contact our team for confirmation."
    };
  }

  return {
    reply: "WELTWISSEN provides integrated Construction, Equipment Rental, and Heavy Logistics solutions across Saudi Arabia. I can help answer questions about our fleet, services, industrial sectors, or guide you through requesting a quote.",
    showQuoteButton: true
  };
}

// POST /api/chat
apiRouter.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const contents = [
          { role: 'user', parts: [{ text: `System Instruction:\n${WELTWISSEN_KNOWLEDGE_PROMPT}` }] },
          ...conversationHistory.map((item: { role: string; content: string }) => ({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.content }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ];

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents
        });

        const replyText = response.text || "I'm ready to assist with your WELTWISSEN enquiry.";
        const isQuoteIntent = /quote|price|rent|excavator|crane|equipment|dump truck|generator/i.test(message);

        return res.json({
          reply: replyText,
          showQuoteButton: isQuoteIntent
        });
      } catch (geminiError) {
        console.warn('Gemini API call failed, falling back to internal verified engine:', geminiError);
        const fallback = getVerifiedFallbackResponse(message);
        return res.json(fallback);
      }
    }

    const fallback = getVerifiedFallbackResponse(message);
    return res.json(fallback);

  } catch (err) {
    console.error('Error handling /api/chat:', err);
    res.status(500).json({
      reply: "I experienced a temporary communication issue. Please try again or contact our Al Khobar team directly at info@weltwissen.com.sa."
    });
  }
});

// POST /api/enquiries
apiRouter.post('/enquiries', (req: Request, res: Response) => {
  try {
    const { name, company, email, phone, service, equipment, location, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        error: 'Validation failed. Name, email, phone, service, and requirement fields are required.'
      });
    }

    const refNumber = `WW-2026-${Math.floor(100 + Math.random() * 900)}`;

    console.log(`[ENQUIRY RECEIVED] Ref: ${refNumber}`, {
      name,
      company,
      email,
      phone,
      service,
      equipment,
      location,
      message,
      receivedAt: new Date().toISOString()
    });

    return res.json({
      success: true,
      refCode: refNumber,
      message: 'Thank you. Your enquiry has been received.'
    });

  } catch (err) {
    console.error('Error handling /api/enquiries:', err);
    res.status(500).json({ error: 'Failed to record enquiry. Please try again.' });
  }
});
