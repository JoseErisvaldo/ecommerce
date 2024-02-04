import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
let supabase = 'https://kiexzvmtnrgrvlrjsbmp.supabase.co'
let supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZXh6dm10bnJncnZscmpzYm1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzAxNDExMywiZXhwIjoyMDIyNTkwMTEzfQ.1Elq3d5Ft9N-sDeQgHn5JdUnj45Eh5fVlAKlghTtYZ0'

export default supabase = createClient(supabase, supabaseAnonKey)
