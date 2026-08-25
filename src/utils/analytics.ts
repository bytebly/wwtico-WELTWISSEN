export type EventName = 
  | 'chatbot_opened'
  | 'chatbot_message_sent'
  | 'quote_popup_opened'
  | 'quote_popup_closed'
  | 'quote_form_started'
  | 'quote_form_submitted'
  | 'whatsapp_button_clicked';

export interface AnalyticsEvent {
  event: EventName;
  timestamp: string;
  data?: Record<string, unknown>;
}

export const trackEvent = (event: EventName, data?: Record<string, unknown>) => {
  const newEvent: AnalyticsEvent = {
    event,
    timestamp: new Date().toISOString(),
    data
  };

  try {
    const existingLogsRaw = localStorage.getItem('weltwissen_analytics');
    const existingLogs: AnalyticsEvent[] = existingLogsRaw ? JSON.parse(existingLogsRaw) : [];
    existingLogs.push(newEvent);
    // Keep last 100 events
    if (existingLogs.length > 100) {
      existingLogs.shift();
    }
    localStorage.setItem('weltwissen_analytics', JSON.stringify(existingLogs));
    console.log(`[Analytics Tracked] ${event}`, data || '');
  } catch (err) {
    console.error('Analytics tracking failed:', err);
  }
};
