import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Construct the fully-qualified model name.
const getModel = () => 'googleai/gemini-2.5-flash';

export const ai = genkit({
  plugins: [googleAI()],
  model: getModel(),
});
