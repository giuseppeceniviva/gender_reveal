export interface Message {
  id: number;
  text: string;
  description?: string;
  backgroundColor: string;
  textColor: string;
  fontFamily?: 'Quicksand' | 'Poppins' | 'Nunito' | 'Dancing Script' | 'Parisienne' | 'Great Vibes' | 'system';
  fontWeight?: 400 | 500 | 600 | 700 | 800;
}
