// src/utils/submitForm.ts

// Vite reads this from your .env file (see setup instructions).
// Must be prefixed with VITE_ or it won't be exposed to the browser.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitToWeb3Forms(
  data: Record<string, string>,
  subject: string
): Promise<SubmitResult> {
     
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      'Missing VITE_WEB3FORMS_ACCESS_KEY. Check your .env file and restart the dev server.'
    );
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: 'WELTWISSEN Website',
      ...data,
    }),
  });

  const json = (await response.json()) as SubmitResult;

  if (!response.ok || !json.success) {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }

  return json;
}