import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export type Car = {
    id: string,
    name: string, 
    model: string, 
    year: number, 
    price: number, 
    image: string,
    available: boolean
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);