// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://upxxrhqnagklbzjsuwyv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweHhyaHFuYWdrbGJ6anN1d3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NTQsImV4cCI6MjA2MjExMTY1NH0.c0zDWNqZF81zN7f1oWC3dpNXiHYc84e0chO41jxvubU'
)