-- AuraBerber: optional public read-only settings for the static site.
-- Run this in Supabase SQL Editor. Never expose service_role keys in frontend code.
create table if not exists public.site_settings (
  key text primary key,
  value text not null default ''
);

alter table public.site_settings enable row level security;

drop policy if exists "Public can read site settings" on public.site_settings;
create policy "Public can read site settings"
  on public.site_settings for select
  to anon, authenticated
  using (true);

-- Seed editable business details. Replace placeholders with owner-approved information.
insert into public.site_settings (key, value) values
  ('business_name', 'AURA'),
  ('address', ''),
  ('phone', ''),
  ('hours', '')
on conflict (key) do nothing;

-- No anonymous insert/update/delete policies are intentionally created.
-- Manage values from the Supabase dashboard as the project owner.
