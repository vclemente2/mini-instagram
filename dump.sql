drop table if exists post_likes;
drop table if exists post_comments;
drop table if exists post_photos;
drop table if exists posts;
drop table if exists users;

create table users (
	id serial primary key not null,
  username varchar(30) not null unique,
  password text not null,
  name text,
  email text unique,
  phone text,
  photo text,
  gender text,
  site text,
  bio text,
  verified boolean default false
);

create table posts (
	id serial primary key not null,
  user_id integer references users(id) not null,
  description text,
  date timestamptz default now()
);

create table post_photos (
	id serial primary key not null,
  post_id integer references posts(id) not null,
  url text not null
);

create table post_comments (
	id serial primary key not null,
  post_id integer references posts(id) not null,
  user_id integer references users(id) not null,
  description text not null,
  date timestamptz default now()
);

create table post_likes (
  post_id integer references posts(id) not null,
  user_id integer references users(id) not null,
  date timestamptz default now()
);