import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
let supabase = 'https://kiexzvmtnrgrvlrjsbmp.supabase.co'
let supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZXh6dm10bnJncnZscmpzYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwMTQxMTMsImV4cCI6MjAyMjU5MDExM30.bmIhbVPJtZgpZ5-KFJ_kGAC62hFzqBMzfKGLzE5PJdc'

export default supabase = createClient(supabase, supabaseAnonKey)
