
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://efouenhhyugvnlxzmxul.supabase.co';
// TODO: Add key in .env file
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmb3VlbmhoeXVndm5seHpteHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMTY2MzksImV4cCI6MjA0Njg5MjYzOX0.R-WpEK9goom7sao-kd-Z2jSQtNWjoEvZEAI-DGY_8-g';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };