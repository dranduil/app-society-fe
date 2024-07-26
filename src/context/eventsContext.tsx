import { createContext, useState, useContext, ReactNode } from 'react';

interface Event {
  id: string;
  name: string;
  // altri campi dell'evento
}

interface EventContextProps {
  events: Event[];
  addEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
  filterEvents: (criteria: any) => void; // Definisci il tipo per criteria
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const removeEvent = (eventId: string) => {
    setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
  };

  const filterEvents = (criteria: any) => {
    // Implementa la logica di filtro qui
    return criteria
  };

  return (
    <EventContext.Provider value={{ events, addEvent, removeEvent, filterEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = (): EventContextProps => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};
