FROM php:8.1-fpm-alpine

WORKDIR /srv
COPY --from=composer:2.5.8 /usr/bin/composer /usr/local/bin/composer