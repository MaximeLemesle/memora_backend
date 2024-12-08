import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://efouenhhyugvnlxzmxul.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || '';
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not defined');
}
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
