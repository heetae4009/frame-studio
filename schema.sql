-- Run this in your Supabase SQL editor

create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  category text,
  tags text[],
  published boolean default false,
  cover_image text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table posts enable row level security;

-- Allow public read access to published posts
create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- Allow service role full access (for admin operations)
create policy "Service role has full access"
  on posts for all
  using (auth.role() = 'service_role');

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger posts_updated_at
  before update on posts
  for each row execute function update_updated_at();
