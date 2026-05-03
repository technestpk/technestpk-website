import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://etechsnnsjislqrtpcew.supabase.co'

const supabaseKey = 'sb_publishable_iS-jrKm6S7kIzEBh91wbFA_S131Xtqs'

export const supabase = createClient(supabaseUrl, supabaseKey)
