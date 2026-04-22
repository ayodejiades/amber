import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Amber Real-time Database Client
 * 
 * To enable real-time features:
 * 1. Create a Supabase project.
 * 2. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
 * 3. Enable Realtime on the 'hospitals' and 'emergencies' tables.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const TABLE_HOSPITALS = 'hospitals';
export const TABLE_EMERGENCIES = 'emergencies';
