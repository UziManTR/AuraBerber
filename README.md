# AuraBerber

Responsive one-page hair studio website built with HTML, CSS and vanilla JavaScript.

## What's included

- Monochrome premium visual style with blue men's / pink women's split section
- Responsive mobile navigation and scroll-reveal animations
- Filterable gallery with 16 hairstyle examples
- Men's and women's price list placeholders
- Google Maps embed and click-to-call contact area
- Optional Supabase-backed public business settings
- Reduced-motion accessibility support

## Preview locally

Open `index.html` in a browser, or use VS Code Live Server.

## Before publishing for the business

1. Confirm the actual business name and get permission to use its branding and photos.
2. Replace the demo imagery with photos the owner has permission to use.
3. Update prices, services, address, phone and opening hours with owner-approved information.
4. Verify the Google Maps location points to the correct business.
5. Remove the “DEMO TASARIM” footer label only after approval.
6. Test mobile layout and every link.

## Optional Supabase setup

1. Create a Supabase project.
2. Run `supabase.sql` in the Supabase SQL Editor.
3. In `index.html`, fill `AURA_CONFIG.supabaseUrl` and `AURA_CONFIG.supabaseAnonKey` with the project's URL and **anon/public** key.
4. The frontend reads public rows from `site_settings`. RLS allows public SELECT only; manage values through the Supabase dashboard.
5. **Never place a Supabase service-role key in this static frontend.**

The Supabase settings integration is optional. The site works as a static demo without it.

## Note

This is a portfolio/demo template, not a verified live business listing. No real business contact details or prices are assumed.
