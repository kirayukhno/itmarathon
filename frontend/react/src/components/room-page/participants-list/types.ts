import type { GetParticipantsResponse } from "@types/api.ts";

export interface ParticipantsListProps {
  participants: GetParticipantsResponse;
  onParticipantUpdate?: () => void;
}

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  deliveryInfo: string;
  link?: string;
}
