import type { Car } from './supabase';

export const dummyCars: Car[] = [
  {
    id: '1',
    name: 'Toyota Camry',
    model: 'SE',
    year: 2023,
    price: 75,
    image: 'https://images.unsplash.com/photo-1727908147407-fa90e969c4dd?w=800&auto=format&fit=crop&q=60',
    available: true
  },
  {
    id: '2',
    name: 'Honda Civic',
    model: 'Sport',
    year: 2023,
    price: 65,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60',
    available: true
  },
  {
    id: '3',
    name: 'Tesla Model 3',
    model: 'Long Range',
    year: 2023,
    price: 120,
    image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&auto=format&fit=crop&q=60',
    available: false
  },
  {
    id: '4',
    name: 'BMW 3 Series',
    model: '330i',
    year: 2023,
    price: 95,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60',
    available: true
  },
  {
    id: '5',
    name: 'Mercedes-Benz C-Class',
    model: 'C300',
    year: 2023,
    price: 110,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60',
    available: true
  },
  {
    id: '6',
    name: 'Audi A4',
    model: 'Premium',
    year: 2023,
    price: 100,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60',
    available: false
  }
]; 