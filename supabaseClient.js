// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://gkysmeypjqaxjkdenkxg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreXNtZXlwanFheGprZGVua3hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzMyMTksImV4cCI6MjA2MjcwOTIxOX0.c_PqIFaCDUbj9gbA6Ig6kRhF28flqpnGFmaTq4450hY'
)

