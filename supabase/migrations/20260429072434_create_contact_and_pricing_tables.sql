/*
  # Create contact submissions and pricing tables

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `prenom` (text, first name)
      - `nom` (text, last name)
      - `email` (text)
      - `telephone` (text)
      - `created_at` (timestamptz)
    
    - `pricing_plans`
      - `id` (uuid, primary key)
      - `name` (text)
      - `price` (numeric)
      - `duration_days` (integer)
      - `features` (text array)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Allow public read access to pricing_plans
    - Allow public insert to contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prenom text NOT NULL,
  nom text NOT NULL,
  email text NOT NULL,
  telephone text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pricing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  duration_days integer NOT NULL,
  features text[] DEFAULT ARRAY[]::text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to contacts"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public read pricing plans"
  ON pricing_plans FOR SELECT
  TO anon
  USING (true);

INSERT INTO pricing_plans (name, price, duration_days, features) VALUES
  ('7 Jours d''essai', 0, 7, ARRAY['7 jours gratuit', 'Accès complet', 'Support email']),
  ('1 an d''abonnement', 40, 365, ARRAY['Accès illimité', 'Support prioritaire', 'Mises à jour incluses']);
